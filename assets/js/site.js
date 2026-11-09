const menu = document.querySelector('.menu-button');
const navigation = document.querySelector('#main-nav');
if (menu && navigation) {
  const closeMenu = () => { navigation.classList.remove('is-open'); menu.setAttribute('aria-expanded', 'false'); menu.textContent = 'Menu'; };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
    if (open) navigation.scrollTop = 0;
    menu.textContent = open ? 'Close' : 'Menu';
  });
  navigation.addEventListener('click', event => { if(event.target.closest('a')) closeMenu(); });
  const header = menu.closest('.masthead');
  document.addEventListener('pointerdown', event => { if (!header.contains(event.target)) closeMenu(); });
  document.addEventListener('focusin', event => { if (!header.contains(event.target)) closeMenu(); });
  document.addEventListener('keydown', event => { if(event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {closeMenu();menu.focus();} });
  window.matchMedia('(min-width:761px)').addEventListener('change', event => { if(event.matches) closeMenu(); });
  header.classList.add('nav-enhanced');
}
const search = document.querySelector('#publication-search');
if (search) {
  const rows = [...document.querySelectorAll('.publication-list .publication-row')];
  const normalize = value => value
    .replace(/(?:https?:\/\/)?(?:dx\.)?doi\.org\//gi, '')
    .replace(/\bdoi\s*:\s*/gi, '')
    .replace(/["\u201c\u201d\u00ad]/g, '')
    .normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[-\u2010-\u2015]/g, '')
    .toLowerCase().replace(/\s+/g, ' ').trim();
  const searchable = new Map(rows.map(row => [row, normalize(row.dataset.search || row.textContent)]));
  // Derive citation aliases from the displayed authors, without inferring identities.
  // Keep initials and surname together so D.-M. Jin never becomes a generic Jin search.
  const aliases = new Map(), surnames = new Set(), authorIndex = new Map(), observedNames = new Map();
  rows.forEach(row => {
    const keys = new Set(), familyNames = new Set(), fullNames = new Set();
    const names = (row.querySelector('.publication-authors')?.textContent || '')
      .replace(/[†*]/g, '').replace(/\.\s*$/, '').split(',');
    names.forEach(name => {
      const words = name.trim().split(/\s+/);
      if (words.length < 2) return;
      const surname = normalize(words.pop());
      const initials = words.join(' ').replace(/(\p{Ll})(\p{Lu})/gu, '$1 $2')
        .split(/[\s\-\u2010-\u2015]+/).map(word => normalize(word).match(/\p{L}/u)?.[0]).filter(Boolean);
      if (!surname || !initials.length) return;
      surnames.add(surname); familyNames.add(surname);
      const fullName = normalize(words.join('')).replace(/[^\p{L}\p{N}]/gu, '') + ' ' + surname;
      fullNames.add(fullName);
      if (!observedNames.has(fullName)) observedNames.set(fullName, new Set());
      [initials, initials.slice(0, 1)].forEach(parts => {
        const key = parts.join('') + ' ' + surname;
        keys.add(key);
        observedNames.get(fullName).add(key);
        [parts.join('.'), parts.join('.') + '.', parts.join(''),
          parts.map(part => part + '.').join(' '), parts.join(' ')].forEach(given => {
          aliases.set(given + ' ' + surname, key);
        });
      });
    });
    const year = row.querySelector('.publication-year')?.textContent.trim();
    authorIndex.set(row, { keys, fullNames, surnames: familyNames, years: new Set(year ? [year] : []) });
  });
  // Share only observed spelling/spacing variants of the same normalized full name.
  // This supports Jian-Jun / JianJun / Jianjun without asserting a unique identity.
  authorIndex.forEach(record => record.fullNames.forEach(name => {
    observedNames.get(name).forEach(key => record.keys.add(key));
  }));
  const escapePattern = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const alternatives = values => [...values].sort((a, b) => b.length - a.length).map(escapePattern).join('|');
  const start = '(^|[\\s([{])', end = '(?=$|[\\s,;:.)\\]}])';
  const etAl = '(?:\\s+et\\s+al\\.?)?';
  const initialCitation = surnames.size ? new RegExp(start + '((?:\\p{L}\\.\\s*){1,6})(' + alternatives(surnames) + ')' + etAl + end, 'gu') : null;
  const knownAlias = aliases.size ? new RegExp(start + '(' + alternatives(aliases.keys()) + ')' + etAl + end, 'gu') : null;
  const surnameCitation = surnames.size ? new RegExp(start + '(' + alternatives(surnames) + ')\\s+et\\s+al\\.?' + end, 'gu') : null;
  function filterPublications() {
    const authorTerms = new Map();
    const bindAuthor = (kind, key) => {
      const token = '\uE000' + authorTerms.size + '\uE001';
      authorTerms.set(token, { kind, key });
      return token;
    };
    let query = normalize(search.value);
    if (initialCitation) query = query.replace(initialCitation, (_, lead, initials, surname) =>
      lead + bindAuthor('keys', initials.replace(/[^\p{L}]/gu, '') + ' ' + surname));
    if (knownAlias) query = query.replace(knownAlias, (_, lead, alias) => lead + bindAuthor('keys', aliases.get(alias)));
    if (surnameCitation) query = query.replace(surnameCitation, (_, lead, surname) => lead + bindAuthor('surnames', surname));
    query = query.replace(/(\uE000\d+\uE001)[,;:]\s*(?=\d{4}\b)/g, '$1 ');
    // A standalone year means the displayed publication year, not a year inside a DOI.
    query = query.replace(/(^|[\s([{])(\d{4})(?=$|[\s,;:)\]}]|\.(?=\s|$))/g,
      (_, lead, year) => lead + bindAuthor('years', year));
    // Accept titles and DOIs pasted with citation wrappers or sentence punctuation.
    const terms = query.split(' ')
      .map(term => term.replace(/^[([{]+|[)\]},;:.]+$/g, '')).filter(Boolean);
    let count = 0;
    rows.forEach(row => {
      const show = terms.every(term => {
        const author = authorTerms.get(term);
        return author ? authorIndex.get(row)[author.kind].has(author.key) : searchable.get(row).includes(term);
      });
      row.hidden = !show;
      if (show) count++;
    });
    document.querySelectorAll('[data-publication-group]').forEach(group => {
      group.hidden = ![...group.querySelectorAll('.publication-row')].some(row => !row.hidden);
    });
    document.querySelector('#results-count').textContent = `${count} publication${count === 1 ? '' : 's'}`;
    document.querySelector('#empty-results').hidden = count !== 0;
  }
  function restoreQueryFromURL() {
    search.value = new URL(window.location.href).searchParams.get('q') || '';
    filterPublications();
    const controls = document.querySelector('.search-controls');
    if (controls) controls.hidden = false;
  }
  function updateQueryURL() {
    try {
      const url = new URL(window.location.href);
      if (search.value) url.searchParams.set('q', search.value);
      else url.searchParams.delete('q');
      if (url.href !== window.location.href) window.history.replaceState(window.history.state, '', url.href);
    } catch {
      // History writes may be restricted or throttled; filtering must still work.
    }
  }
  search.addEventListener('input', () => {
    filterPublications();
    updateQueryURL();
  });
  document.querySelector('#reset-publications').addEventListener('click', () => {
    search.value = '';
    filterPublications();
    updateQueryURL();
    search.focus();
  });
  window.addEventListener('pageshow', restoreQueryFromURL);
  window.addEventListener('popstate', restoreQueryFromURL);
  restoreQueryFromURL();
}
