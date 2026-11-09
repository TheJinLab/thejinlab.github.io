// Opaque atlas playback with independent desktop and mobile layouts.
const layouts = {
  desktop: {
    poster: '/assets/images/floral-atlas-support-refined-54-desktop-poster.webp',
    video: '/assets/videos/floral-atlas-support-refined-54-crf20-desktop.mp4'
  },
  mobile: {
    poster: '/assets/images/floral-atlas-support-refined-54-mobile-poster.webp',
    video: '/assets/videos/floral-atlas-support-refined-54-crf20-mobile.mp4'
  }
};

function loadFrame(video, url, signal) {
  return new Promise((resolve, reject) => {
    let timer;
    const clean = () => {
      clearTimeout(timer);
      video.removeEventListener('loadeddata', ready);
      video.removeEventListener('error', failed);
      signal.removeEventListener('abort', failed);
    };
    const ready = () => { clean(); resolve(); };
    const failed = () => { clean(); reject(new Error('Frame unavailable')); };
    if (signal.aborted) return failed();
    video.addEventListener('loadeddata', ready, { once: true });
    video.addEventListener('error', failed, { once: true });
    signal.addEventListener('abort', failed, { once: true });
    timer = setTimeout(failed, 8000);
    video.src = url;
    video.load();
  });
}


document.querySelectorAll('[data-atlas-player]').forEach(frame => {
  const video = frame.querySelector('video');
  const poster = frame.querySelector('picture');
  const small = window.matchMedia('(max-width: 600px)');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let controller;
  let generation = 0;
  let inView = !('IntersectionObserver' in window);
  let ready = false;

  const updatePlayback = () => {
    if (ready && !motion.matches && inView && !document.hidden) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  async function select() {
    const token = ++generation;
    if (controller) controller.abort();
    controller = new AbortController();
    const signal = controller.signal;
    const layout = small.matches ? 'mobile' : 'desktop';
    const assets = layouts[layout];
    ready = false;
    frame.dataset.ready = 'false';
    frame.dataset.layout = layout;
    frame.dataset.format = 'paper';
    poster.hidden = false;
    video.pause();
    video.poster = assets.poster;
    video.muted = true;
    video.controls = false;
    if (motion.matches) {
      frame.dataset.format = 'poster';
      video.removeAttribute('src');
      video.load();
      return;
    }
    try {
      await loadFrame(video, assets.video, signal);
      if (token !== generation) return;
      ready = true;
      frame.dataset.ready = 'true';
      poster.hidden = true;
      updatePlayback();
    } catch {
      if (signal.aborted || token !== generation) return;
      frame.dataset.format = 'poster';
    }
  }

  video.addEventListener('error', () => {
    if (!ready) return;
    ready = false;
    frame.dataset.ready = 'false';
    frame.dataset.format = 'poster';
    poster.hidden = false;
    video.pause();
  });
  small.addEventListener('change', select);
  motion.addEventListener('change', select);
  document.addEventListener('visibilitychange', updatePlayback);
  window.addEventListener('pageshow', updatePlayback);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      updatePlayback();
    }, { threshold: 0.1 }).observe(video);
  }
  select();
});
