const media = './media/';
const comparisons = [
  { id: 'a0094', name: 'Bulbophyllum phalaenopsis', topic: 'Fine surface structures', caption: 'Metashape resolves the hair-like surface structures more sharply in these views. 3DGS retains much of their appearance, with differences in fine detail. The other outputs illustrate smoothing, fragmentation or changes in shape.', missing: [] },
  { id: 'a0050', name: 'Bifrenaria tyrianthina', topic: 'Petal-edge continuity', caption: 'In this example, part of a petal edge is absent from the Metashape reconstruction, while 3DGS gives a more continuous appearance. A 2DGS result is unavailable for this specimen.', missing: ['2dgs'] },
];
const methods = [['reference', 'Reference photograph'], ['metashape', 'Metashape'], ['alicevision', 'AliceVision'], ['2dgs', '2D Gaussian splatting'], ['3dgs', '3D Gaussian splatting'], ['hunyuan', 'Hunyuan3D 2.1']];

for (const item of comparisons) {
  const figure = document.createElement('figure');
  figure.className = 'comparison';
  figure.innerHTML = `<div class="figure-heading"><h3><em>${item.name}</em><small>${item.id} · ${item.topic}</small></h3><div class="view-controls" role="group" aria-label="Camera view for ${item.name}">${[1,2,3].map(v => `<button type="button" data-view="${v}" aria-pressed="${v === 1}">View ${v}</button>`).join('')}</div></div><div class="comparison-grid"></div><figcaption>${item.caption}<br><a class="figure-link" href="${media}comparisons/${item.id}-comparison.png" target="_blank" rel="noopener">Open the two-view comparison image ↗</a></figcaption>`;
  const grid = figure.querySelector('.comparison-grid');
  for (const [key, label] of methods) {
    if (item.missing.includes(key)) continue;
    const cell = document.createElement('div');
    cell.className = `method-cell ${key === 'reference' ? 'reference' : ''}`;
    cell.innerHTML = `<span class="method-label">${label}</span>`;
    {
      const src = `${media}comparisons/${item.id}-${key}-v1.webp`;
      cell.innerHTML += `<a href="${src}" target="_blank" rel="noopener"><img src="${src}" data-method="${key}" alt="${label}, ${item.name}, matched camera view 1" loading="lazy" width="520" height="347" /></a>`;
    }
    grid.append(cell);
  }
  figure.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => {
    const view = button.dataset.view;
    figure.querySelectorAll('[data-view]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    figure.querySelectorAll('[data-method]').forEach(img => {
      const src = `${media}comparisons/${item.id}-${img.dataset.method}-v${view}.webp`;
      img.src = src; img.parentElement.href = src;
      img.alt = `${methods.find(m => m[0] === img.dataset.method)[1]}, ${item.name}, matched camera view ${view}`;
    });
  }));
  document.querySelector('#comparison-figures').append(figure);
}

const imageDialog = document.querySelector('#image-dialog');
const modelDialog = document.querySelector('#model-dialog');
const largeVideo = document.querySelector('#large-video');
let viewer;
let viewerRequest = 0;
document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => document.getElementById(button.dataset.close).close()));
for (const dialog of [imageDialog, modelDialog]) dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
imageDialog.addEventListener('close', () => { largeVideo.pause(); largeVideo.removeAttribute('src'); largeVideo.load(); updatePlayback(); });
modelDialog.addEventListener('close', () => { viewerRequest++; viewer?.dispose(); viewer = undefined; document.querySelector('#model-canvas').replaceChildren(); updatePlayback(); });
document.querySelector('#reset-view').addEventListener('click', () => viewer?.reset());

async function openModel(item) {
  const request = ++viewerRequest;
  document.querySelector('#model-title').textContent = `${item.name} · ${item.id}`;
  document.querySelector('#model-status').textContent = 'Loading 3D preview…';
  modelDialog.showModal(); updatePlayback();
  try {
    const { createViewer } = await import('./viewer.js');
    if (request !== viewerRequest) return;
    viewer = createViewer(document.querySelector('#model-canvas'));
    const activeViewer = viewer;
    await activeViewer.load(item.model, item.orientation);
    if (request === viewerRequest) document.querySelector('#model-status').textContent = '3D preview ready';
  } catch (error) {
    if (request === viewerRequest) { viewer?.dispose(); viewer = undefined; document.querySelector('#model-status').textContent = 'The 3D preview could not load. Close this window to view the rotating render instead.'; }
  }
}

const visibleVideos = new Set();
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const saveData = navigator.connection?.saveData;
function updatePlayback() {
  for (const video of document.querySelectorAll('.gallery video')) {
    const play = visibleVideos.has(video) && !document.hidden && !imageDialog.open && !modelDialog.open && (!reduceMotion.matches && !saveData || video.dataset.userPlay === 'true');
    if (play) {
      if (!video.getAttribute('src')) { video.src = video.dataset.src; video.load(); }
      video.play().catch(() => { video.parentElement.dataset.playBlocked = 'true'; });
    } else video.pause();
  }
}
const visibility = new IntersectionObserver(entries => {
  for (const {target, isIntersecting, intersectionRatio} of entries) {
    if (isIntersecting && intersectionRatio >= .2) visibleVideos.add(target);
    else visibleVideos.delete(target);
  }
  updatePlayback();
}, {threshold:[0,.2]});
document.addEventListener('visibilitychange', updatePlayback);
reduceMotion.addEventListener('change', updatePlayback);
fetch('./collection.json').then(response => { if (!response.ok) throw new Error('Collection unavailable'); return response.json(); }).then(items => {
  const gallery = document.querySelector('#gallery');
  for (const item of items) {
    const card = document.createElement('figure'); card.className = 'specimen';
    const button = document.createElement('button'); button.type = 'button'; button.className = 'image-button';
    button.setAttribute('aria-label', `Enlarge rotating render of ${item.name}`);
    const video = document.createElement('video');
    video.dataset.src = item.video; video.poster = item.image; video.muted = true; video.defaultMuted = true;
    video.autoplay = true; video.loop = true; video.playsInline = true; video.preload = 'none'; video.width = 512; video.height = 512;
    video.setAttribute('aria-label', `${item.name}, rotating textured reconstruction`);
    button.append(video); visibility.observe(video);
    const badge = document.createElement('span'); badge.className = 'video-badge'; badge.textContent = '↗'; badge.setAttribute('aria-hidden','true'); button.append(badge);
    button.addEventListener('click', () => {
      document.querySelector('#image-title').textContent = `${item.name} · ${item.id}`;
      largeVideo.poster = item.image; largeVideo.src = item.video; imageDialog.showModal(); updatePlayback();
      largeVideo.play().catch(() => {});
    });
    const caption = document.createElement('figcaption');
    const name = document.createElement('p'); name.className = 'specimen-name'; name.textContent = item.name;
    const actions = document.createElement('div'); actions.className = 'specimen-actions';
    const id = document.createElement('span'); id.className = 'specimen-id'; id.textContent = item.id; actions.append(id);
    if (reduceMotion.matches || saveData) {
      const play = document.createElement('button'); play.type='button'; play.className='text-button'; play.textContent='Play rotation';
      play.addEventListener('click',()=> { video.dataset.userPlay='true'; updatePlayback(); play.remove(); }); actions.append(play);
    }
    if (item.model) {
      const explore = document.createElement('button'); explore.type = 'button'; explore.className = 'text-button'; explore.textContent = 'Explore in 3D';
      explore.setAttribute('aria-label', `Explore ${item.name} in 3D (${item.modelMegabytes} MB)`); explore.addEventListener('click', () => openModel(item)); actions.append(explore);
    }
    caption.append(name, actions); card.append(button, caption); gallery.append(card);
  }
}).catch(() => { document.querySelector('#gallery').textContent = 'The collection could not load. Please reload the page.'; });
