const media = './media/';
const methodDetails = {
  "a0094": {
    "reference": [
      {
        "label": "Input",
        "rows": [
          {
            "label": "Image",
            "value": "Camera-normalized photographic reference"
          },
          {
            "label": "Source raster",
            "value": "1,744 × 1,163 px"
          }
        ]
      },
      {
        "label": "Display",
        "rows": [
          {
            "label": "Selected views",
            "value": "Three photographic views"
          },
          {
            "label": "Presentation",
            "value": "View-specific crops; resized for the comparison panels"
          }
        ]
      }
    ],
    "metashape": [
      {
        "label": "Reconstruction",
        "rows": [
          {
            "label": "Representation",
            "value": "Photogrammetric textured mesh"
          },
          {
            "label": "Camera poses",
            "value": "Source project camera transforms"
          }
        ]
      },
      {
        "label": "Rendering",
        "rows": [
          {
            "label": "Software",
            "value": "Metashape 2.3.0"
          },
          {
            "label": "Render raster",
            "value": "1,744 × 1,163 px"
          },
          {
            "label": "Camera model",
            "value": "Pinhole; corrected intrinsics"
          },
          {
            "label": "Focal length",
            "value": "fx = fy = 6,774.702 px"
          },
          {
            "label": "Principal point",
            "value": "(871.5, 581.0) px"
          },
          {
            "label": "Surface settings",
            "value": "Back-face culling on; smooth normals on"
          },
          {
            "label": "Output",
            "value": "RGBA with alpha; view-specific crops"
          }
        ]
      }
    ],
    "alicevision": [
      {
        "label": "Reconstruction",
        "rows": [
          {
            "label": "Approach",
            "value": "Structure-from-motion and multi-view stereo"
          },
          {
            "label": "Surface",
            "value": "Textured mesh from multiple photographs"
          }
        ]
      }
    ],
    "3dgs": [
      {
        "label": "Input",
        "rows": [
          {
            "label": "Canonical split",
            "value": "178 views: 150 train / 28 reserved"
          },
          {
            "label": "Canonical raster",
            "value": "1,744 × 1,163 px"
          },
          {
            "label": "Camera normalization",
            "value": "Fixed pinhole; dominant sensor only"
          },
          {
            "label": "Loader scaling",
            "value": "2× reduction → 872 × 581 px"
          }
        ]
      },
      {
        "label": "Preprocessing",
        "rows": [
          {
            "label": "RGB targets",
            "value": "One-time soft-matte composite onto RGB (127, 127, 127)"
          },
          {
            "label": "Initialization mask",
            "value": "Hard-mask filtering of sparse points only"
          },
          {
            "label": "Training masks",
            "value": "No mask or matte bindings in the training dataset"
          }
        ]
      },
      {
        "label": "Training",
        "rows": [
          {
            "label": "Method",
            "value": "MCMC 3D Gaussian splatting"
          },
          {
            "label": "Displayed run",
            "value": "1,000 optimization steps"
          },
          {
            "label": "Random seed",
            "value": "20260716"
          },
          {
            "label": "Refinement window",
            "value": "Steps 500–999"
          },
          {
            "label": "Gaussian cap",
            "value": "1,000,000"
          },
          {
            "label": "MCMC noise LR",
            "value": "500,000"
          },
          {
            "label": "Absolute gradients",
            "value": "Off for both strategy and rasterizer"
          }
        ]
      },
      {
        "label": "Output",
        "rows": [
          {
            "label": "Initialization",
            "value": "28,637 Gaussians"
          },
          {
            "label": "Displayed checkpoint",
            "value": "34,806 Gaussians at step 999"
          }
        ]
      },
      {
        "label": "Rendering",
        "rows": [
          {
            "label": "Render raster",
            "value": "872 × 581 px"
          },
          {
            "label": "Background",
            "value": "Training-border median; RGB (127, 127, 127)"
          },
          {
            "label": "Views",
            "value": "Three source-camera views; cropped for display"
          }
        ]
      }
    ],
    "hunyuan": [
      {
        "label": "Input",
        "rows": [
          {
            "label": "Conditioning",
            "value": "One primary image; no auxiliary inference images"
          },
          {
            "label": "Prepared image",
            "value": "2,859 × 3,067 px; RGBA"
          },
          {
            "label": "Foreground",
            "value": "Explicit soft alpha; pre-cropped input"
          },
          {
            "label": "Inference preprocessing",
            "value": "Further crop and background removal disabled"
          }
        ]
      },
      {
        "label": "Shape generation",
        "rows": [
          {
            "label": "Model",
            "value": "Hunyuan3D 2.1 / DiT v2-1"
          },
          {
            "label": "Diffusion steps",
            "value": "50"
          },
          {
            "label": "Guidance scale",
            "value": "5.0"
          },
          {
            "label": "Random seed",
            "value": "202"
          },
          {
            "label": "Octree resolution",
            "value": "384"
          },
          {
            "label": "Surface extraction",
            "value": "Marching cubes"
          },
          {
            "label": "Runtime",
            "value": "PyTorch 2.12.1; MPS / float32"
          }
        ]
      },
      {
        "label": "Shape output",
        "rows": [
          {
            "label": "Component cleanup",
            "value": "Largest connected component retained"
          },
          {
            "label": "Retained mesh",
            "value": "431,035 vertices / 862,922 faces"
          }
        ]
      },
      {
        "label": "Texturing",
        "rows": [
          {
            "label": "Backend",
            "value": "Hunyuan3D 2.1 PBR; one reference image"
          },
          {
            "label": "Texture setting",
            "value": "512 px; up to 6 rendered mesh views"
          },
          {
            "label": "Code revision",
            "value": "82920d643c0d"
          }
        ]
      },
      {
        "label": "Rendering",
        "rows": [
          {
            "label": "Turntable",
            "value": "72 frames at 24 fps"
          },
          {
            "label": "Source view cell",
            "value": "960 × 1,080 px"
          },
          {
            "label": "View selection",
            "value": "Nearest visible turntable orientation; cropped for display"
          }
        ]
      }
    ],
    "2dgs": [
      {
        "label": "Input",
        "rows": [
          {
            "label": "Training raster",
            "value": "872 × 580 px"
          },
          {
            "label": "Camera basis",
            "value": "Corrected pinhole-camera dataset"
          }
        ]
      },
      {
        "label": "Training",
        "rows": [
          {
            "label": "Implementation",
            "value": "Official 2D Gaussian splatting"
          },
          {
            "label": "Initialization",
            "value": "Independent run from scratch"
          },
          {
            "label": "Iterations",
            "value": "1,000"
          },
          {
            "label": "Evaluation mode",
            "value": "Enabled (--eval)"
          },
          {
            "label": "Background flag",
            "value": "White (--white_background)"
          }
        ]
      },
      {
        "label": "Output",
        "rows": [
          {
            "label": "Representation",
            "value": "Oriented 2D Gaussian surfels"
          },
          {
            "label": "Checkpoint",
            "value": "Iteration 1,000"
          }
        ]
      },
      {
        "label": "Rendering",
        "rows": [
          {
            "label": "Render raster",
            "value": "872 × 580 px"
          },
          {
            "label": "Views",
            "value": "Three source-camera views; cropped for display"
          }
        ]
      }
    ]
  },
  "a0050": {
    "reference": [
      {
        "label": "Input",
        "rows": [
          {
            "label": "Image",
            "value": "Camera-normalized photographic reference"
          },
          {
            "label": "Source raster",
            "value": "872 × 581 px"
          }
        ]
      },
      {
        "label": "Display",
        "rows": [
          {
            "label": "Selected views",
            "value": "Three photographic views"
          },
          {
            "label": "Presentation",
            "value": "View-specific crops; resized for the comparison panels"
          }
        ]
      }
    ],
    "metashape": [
      {
        "label": "Reconstruction",
        "rows": [
          {
            "label": "Representation",
            "value": "Photogrammetric textured mesh"
          },
          {
            "label": "Camera poses",
            "value": "Source project camera transforms"
          }
        ]
      },
      {
        "label": "Rendering",
        "rows": [
          {
            "label": "Software",
            "value": "Metashape 2.3.0"
          },
          {
            "label": "Render raster",
            "value": "1,744 × 1,163 px"
          },
          {
            "label": "Camera model",
            "value": "Pinhole; corrected intrinsics"
          },
          {
            "label": "Focal length",
            "value": "fx = fy = 6,048.418 px"
          },
          {
            "label": "Principal point",
            "value": "(871.5, 581.0) px"
          },
          {
            "label": "Surface settings",
            "value": "Back-face culling on; smooth normals on"
          },
          {
            "label": "Output",
            "value": "RGBA with alpha; view-specific crops"
          }
        ]
      }
    ],
    "alicevision": [
      {
        "label": "Reconstruction",
        "rows": [
          {
            "label": "Approach",
            "value": "Structure-from-motion and multi-view stereo"
          },
          {
            "label": "Surface",
            "value": "Textured mesh from multiple photographs"
          }
        ]
      }
    ],
    "3dgs": [
      {
        "label": "Input",
        "rows": [
          {
            "label": "Canonical split",
            "value": "131 views: 110 train / 21 reserved"
          },
          {
            "label": "Canonical raster",
            "value": "1,744 × 1,163 px"
          },
          {
            "label": "Camera normalization",
            "value": "Fixed pinhole; dominant sensor only"
          },
          {
            "label": "Loader scaling",
            "value": "2× reduction → 872 × 581 px"
          }
        ]
      },
      {
        "label": "Preprocessing",
        "rows": [
          {
            "label": "RGB targets",
            "value": "One-time soft-matte composite onto RGB (127, 127, 127)"
          },
          {
            "label": "Initialization mask",
            "value": "Hard-mask filtering of sparse points only"
          },
          {
            "label": "Training masks",
            "value": "No mask or matte bindings in the training dataset"
          }
        ]
      },
      {
        "label": "Training",
        "rows": [
          {
            "label": "Method",
            "value": "MCMC 3D Gaussian splatting"
          },
          {
            "label": "Displayed run",
            "value": "1,000 optimization steps"
          },
          {
            "label": "Random seed",
            "value": "20260716"
          },
          {
            "label": "Refinement window",
            "value": "Steps 500–999"
          },
          {
            "label": "Gaussian cap",
            "value": "1,000,000"
          },
          {
            "label": "MCMC noise LR",
            "value": "500,000"
          },
          {
            "label": "Absolute gradients",
            "value": "Off for both strategy and rasterizer"
          }
        ]
      },
      {
        "label": "Output",
        "rows": [
          {
            "label": "Initialization",
            "value": "43,725 Gaussians"
          },
          {
            "label": "Displayed checkpoint",
            "value": "53,146 Gaussians at step 999"
          }
        ]
      },
      {
        "label": "Rendering",
        "rows": [
          {
            "label": "Render raster",
            "value": "872 × 581 px"
          },
          {
            "label": "Background",
            "value": "Training-border median; RGB (127, 127, 127)"
          },
          {
            "label": "Views",
            "value": "Three source-camera views; cropped for display"
          }
        ]
      }
    ],
    "hunyuan": [
      {
        "label": "Input",
        "rows": [
          {
            "label": "Conditioning",
            "value": "One primary image; auxiliary images are review references only"
          },
          {
            "label": "Source photograph",
            "value": "6,976 × 4,652 px"
          },
          {
            "label": "Foreground crop",
            "value": "Color-based; S threshold 0.14, V threshold 0.20"
          },
          {
            "label": "Crop settings",
            "value": "Max y fraction 0.68; padding 0.35; bottom padding 0"
          },
          {
            "label": "Prepared canvas",
            "value": "6,976 × 6,976 px; background removal applied"
          }
        ]
      },
      {
        "label": "Shape generation",
        "rows": [
          {
            "label": "Model",
            "value": "Hunyuan3D 2.1 / DiT v2-1"
          },
          {
            "label": "Diffusion steps",
            "value": "50"
          },
          {
            "label": "Guidance scale",
            "value": "5.0"
          },
          {
            "label": "Random seed",
            "value": "101"
          },
          {
            "label": "Octree resolution",
            "value": "384"
          },
          {
            "label": "Surface extraction",
            "value": "Marching cubes"
          },
          {
            "label": "Runtime",
            "value": "PyTorch 2.12.1; MPS / float32"
          }
        ]
      },
      {
        "label": "Shape output",
        "rows": [
          {
            "label": "Component cleanup",
            "value": "Largest connected component retained"
          },
          {
            "label": "Retained mesh",
            "value": "226,687 vertices / 453,402 faces"
          }
        ]
      },
      {
        "label": "Texturing",
        "rows": [
          {
            "label": "Backend",
            "value": "Hunyuan3D 2.1 PBR; one reference image"
          },
          {
            "label": "Texture setting",
            "value": "512 px; up to 6 rendered mesh views"
          },
          {
            "label": "Code revision",
            "value": "82920d643c0d"
          }
        ]
      },
      {
        "label": "Rendering",
        "rows": [
          {
            "label": "Source turntable frame",
            "value": "1,920 × 1,080 px"
          },
          {
            "label": "View selection",
            "value": "Nearest visible turntable orientation; cropped for display"
          }
        ]
      }
    ]
  }
};

const comparisons = [
  { id: 'a0094', name: 'Bulbophyllum phalaenopsis', topic: 'Surface detail', missing: [] },
  { id: 'a0050', name: 'Bifrenaria tyrianthina', topic: 'Petal morphology', missing: ['2dgs'] },
];
const methods = [['reference', 'Reference photograph'], ['metashape', 'Metashape'], ['alicevision', 'AliceVision'], ['2dgs', '2D Gaussian splatting'], ['3dgs', '3D Gaussian splatting'], ['hunyuan', 'Hunyuan3D 2.1']];

// Method help stays outside image clipping and expands into a scrollable, non-modal panel when pinned.
const methodTooltip = document.createElement('div');
methodTooltip.id = 'method-info-tooltip'; methodTooltip.className = 'method-tooltip';
methodTooltip.setAttribute('role', 'tooltip'); methodTooltip.hidden = true;
document.body.append(methodTooltip);
let activeMethodButton, pinnedMethodInfo = false, methodHideTimer, methodScrollArea, suppressMethodFocus = false;
function placeMethodInfo() {
  if (!activeMethodButton) return;
  const anchor = activeMethodButton.getBoundingClientRect();
  if (anchor.bottom < 0 || anchor.top > innerHeight) {
    if (document.activeElement === activeMethodButton) methodTooltip.hidden = true;
    else closeMethodInfo();
    return;
  }
  methodTooltip.hidden = false;
  const card = activeMethodButton.closest('.method-cell').getBoundingClientRect();
  const margin = 12, gap = 10;
  let box = methodTooltip.getBoundingClientRect();
  let left, top;
  if (innerWidth >= 720 && card.right + gap + box.width <= innerWidth - margin) {
    methodTooltip.style.setProperty('--method-tip-max-height', `${Math.min(560, innerHeight - margin * 2)}px`);
    box = methodTooltip.getBoundingClientRect();
    left = card.right + gap;
    top = Math.max(margin, Math.min(anchor.top, innerHeight - box.height - margin));
  } else if (innerWidth >= 720 && card.left - gap - box.width >= margin) {
    methodTooltip.style.setProperty('--method-tip-max-height', `${Math.min(560, innerHeight - margin * 2)}px`);
    box = methodTooltip.getBoundingClientRect();
    left = card.left - gap - box.width;
    top = Math.max(margin, Math.min(anchor.top, innerHeight - box.height - margin));
  } else {
    const above = Math.max(0, card.top - gap - margin);
    const below = Math.max(0, innerHeight - card.bottom - gap - margin);
    const useAbove = above >= below;
    const available = Math.max(above, below);
    const maxHeight = Math.max(140, Math.min(480, available, innerHeight - margin * 2));
    methodTooltip.style.setProperty('--method-tip-max-height', `${maxHeight}px`);
    box = methodTooltip.getBoundingClientRect();
    left = Math.max(margin, Math.min(anchor.right - box.width, innerWidth - box.width - margin));
    top = useAbove ? card.top - gap - box.height : card.bottom + gap;
    top = Math.max(margin, Math.min(top, innerHeight - box.height - margin));
  }
  methodTooltip.style.left = `${left}px`; methodTooltip.style.top = `${top}px`;
}
function closeMethodInfo(returnFocus = false) {
  clearTimeout(methodHideTimer);
  const previous = activeMethodButton;
  previous?.setAttribute('aria-expanded', 'false');
  activeMethodButton = undefined; pinnedMethodInfo = false; methodTooltip.hidden = true;
  if (returnFocus && previous?.isConnected) {
    suppressMethodFocus = true; previous.focus({ preventScroll: true }); suppressMethodFocus = false;
  }
}
function showMethodInfo(button, item, method, pin = false) {
  clearTimeout(methodHideTimer);
  if (activeMethodButton !== button) { activeMethodButton?.setAttribute('aria-expanded', 'false'); pinnedMethodInfo = false; }
  activeMethodButton = button; pinnedMethodInfo = pinnedMethodInfo || pin;
  const header = document.createElement('div'); header.className = 'method-tooltip-head';
  const heading = document.createElement('strong'); heading.id = 'method-info-title'; heading.textContent = methods.find(m => m[0] === method)[1];
  const close = document.createElement('button'); close.type = 'button'; close.className = 'method-tooltip-close'; close.textContent = '×';
  close.setAttribute('aria-label', 'Close method details'); close.hidden = !pinnedMethodInfo;
  close.addEventListener('click', () => closeMethodInfo(true)); header.append(heading, close);
  const body = document.createElement('div'); body.className = 'method-tooltip-body'; body.tabIndex = pinnedMethodInfo ? 0 : -1;
  body.setAttribute('aria-label', 'Method parameter details');
  for (const group of methodDetails[item.id][method]) {
    const section = document.createElement('section'); section.className = 'method-info-group';
    const label = document.createElement('h4'); label.textContent = group.label;
    const list = document.createElement('dl');
    for (const row of group.rows) {
      const entry = document.createElement('div'); entry.className = 'method-info-row';
      const term = document.createElement('dt'); term.textContent = row.label;
      const value = document.createElement('dd'); value.textContent = row.value;
      entry.append(term, value); list.append(entry);
    }
    section.append(label, list); body.append(section);
  }
  methodScrollArea = body; methodTooltip.replaceChildren(header, body);
  methodTooltip.setAttribute('role', pinnedMethodInfo ? 'dialog' : 'tooltip');
  methodTooltip.setAttribute('aria-labelledby', heading.id);
  if (pinnedMethodInfo) methodTooltip.setAttribute('aria-modal', 'false'); else methodTooltip.removeAttribute('aria-modal');
  methodTooltip.hidden = false; button.setAttribute('aria-expanded', 'true');
  placeMethodInfo(); requestAnimationFrame(placeMethodInfo);
  if (pin) body.focus({ preventScroll: true });
}
function scheduleMethodInfoClose() {
  clearTimeout(methodHideTimer);
  methodHideTimer = setTimeout(() => {
    if (activeMethodButton && !pinnedMethodInfo && document.activeElement !== activeMethodButton && !methodTooltip.matches(':hover') && !activeMethodButton.matches(':hover')) closeMethodInfo();
  }, 130);
}
function methodInfoButton(item, key, label) {
  const button = document.createElement('button'); button.type = 'button'; button.className = 'method-info-button'; button.textContent = 'i';
  button.setAttribute('aria-label', `${label} method details for ${item.name}`);
  button.setAttribute('aria-describedby', methodTooltip.id); button.setAttribute('aria-controls', methodTooltip.id); button.setAttribute('aria-expanded', 'false');
  button.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse' && !pinnedMethodInfo) showMethodInfo(button, item, key); });
  button.addEventListener('pointerleave', scheduleMethodInfoClose);
  button.addEventListener('focus', () => { if (!suppressMethodFocus) showMethodInfo(button, item, key); });
  button.addEventListener('blur', event => {
    if (activeMethodButton === button && !methodTooltip.contains(event.relatedTarget)) { pinnedMethodInfo = false; scheduleMethodInfoClose(); }
  });
  button.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown') { event.preventDefault(); showMethodInfo(button, item, key, true); }
  });
  button.addEventListener('click', () => { if (activeMethodButton === button && pinnedMethodInfo) closeMethodInfo(); else showMethodInfo(button, item, key, true); });
  return button;
}
methodTooltip.addEventListener('pointerenter', () => clearTimeout(methodHideTimer));
methodTooltip.addEventListener('pointerleave', scheduleMethodInfoClose);
methodTooltip.addEventListener('focusout', event => {
  if (activeMethodButton && event.relatedTarget && !methodTooltip.contains(event.relatedTarget) && event.relatedTarget !== activeMethodButton) closeMethodInfo();
});
document.addEventListener('pointerdown', event => { if (activeMethodButton && !activeMethodButton.contains(event.target) && !methodTooltip.contains(event.target)) closeMethodInfo(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && activeMethodButton) { closeMethodInfo(true); event.preventDefault(); event.stopPropagation(); } });
window.addEventListener('resize', placeMethodInfo);
window.addEventListener('scroll', placeMethodInfo, { passive: true, capture: true });


for (const item of comparisons) {
  const figure = document.createElement('figure');
  figure.className = 'comparison';
  figure.innerHTML = `<div class="figure-heading"><h3><em>${item.name}</em><small>${item.topic}</small></h3><div class="view-controls" role="group" aria-label="Reconstruction view for ${item.name}">${[1,2,3].map(v => `<button type="button" data-view="${v}" aria-pressed="${v === 1}">View ${v}</button>`).join('')}</div></div><div class="comparison-grid"></div>`;
  const grid = figure.querySelector('.comparison-grid');
  for (const [key, label] of methods) {
    if (item.missing.includes(key)) continue;
    const cell = document.createElement('div');
    cell.className = `method-cell ${key === 'reference' ? 'reference' : ''}`;
    cell.innerHTML = `<div class="method-label"><span>${label}</span></div>`;
    {
      const src = `${media}comparisons/${item.id}-${key}-v1.webp`;
      cell.innerHTML += `<a href="${src}" target="_blank" rel="noopener"><img src="${src}" data-method="${key}" alt="${label}, ${item.name}, view 1" loading="lazy" width="520" height="347" /></a>`;
    }
    cell.querySelector('.method-label').append(methodInfoButton(item, key, label));
    grid.append(cell);
  }
  figure.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => {
    closeMethodInfo();
    const view = button.dataset.view;
    figure.querySelectorAll('[data-view]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    figure.querySelectorAll('[data-method]').forEach(img => {
      const src = `${media}comparisons/${item.id}-${img.dataset.method}-v${view}.webp`;
      img.src = src; img.parentElement.href = src;
      img.alt = `${methods.find(m => m[0] === img.dataset.method)[1]}, ${item.name}, view ${view}`;
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

function setSpecimenName(element, item) {
  const botanical = document.createElement('em');
  botanical.textContent = item.botanicalName || item.name;
  element.replaceChildren(botanical);
  if (item.horticulturalName) {
    const qualifier = document.createElement('span');
    qualifier.className = 'horticultural-name';
    qualifier.textContent = ` ‘${item.horticulturalName}’`;
    element.append(qualifier);
  }
}
function specimenLabel(item) {
  return item.horticulturalName ? `${item.botanicalName} ‘${item.horticulturalName}’` : item.name;
}

async function openModel(item) {
  const request = ++viewerRequest;
  setSpecimenName(document.querySelector('#model-title'), item);
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
    button.setAttribute('aria-label', `Enlarge rotating render of ${specimenLabel(item)}`);
    const video = document.createElement('video');
    video.dataset.src = item.video; video.poster = item.image; video.muted = true; video.defaultMuted = true;
    video.autoplay = true; video.loop = true; video.playsInline = true; video.preload = 'none'; video.width = 512; video.height = 512;
    video.setAttribute('aria-label', `${specimenLabel(item)}, rotating textured reconstruction`);
    button.append(video); visibility.observe(video);
    const badge = document.createElement('span'); badge.className = 'video-badge'; badge.textContent = '↗'; badge.setAttribute('aria-hidden','true'); button.append(badge);
    button.addEventListener('click', () => {
      setSpecimenName(document.querySelector('#image-title'), item);
      largeVideo.poster = item.image; largeVideo.src = item.video; imageDialog.showModal(); updatePlayback();
      largeVideo.play().catch(() => {});
    });
    const caption = document.createElement('figcaption');
    const name = document.createElement('p'); name.className = 'specimen-name'; setSpecimenName(name, item);
    const actions = document.createElement('div'); actions.className = 'specimen-actions';
    if (reduceMotion.matches || saveData) {
      const play = document.createElement('button'); play.type='button'; play.className='text-button'; play.textContent='Play rotation';
      play.addEventListener('click',()=> { video.dataset.userPlay='true'; updatePlayback(); play.remove(); }); actions.append(play);
    }
    if (item.model) {
      const explore = document.createElement('button'); explore.type = 'button'; explore.className = 'text-button'; explore.textContent = 'View 3D model';
      explore.setAttribute('aria-label', `View interactive 3D model of ${specimenLabel(item)} (${item.modelMegabytes} MB)`); explore.addEventListener('click', () => openModel(item)); actions.append(explore);
    }
    caption.append(name, actions); card.append(button, caption); gallery.append(card);
  }
}).catch(() => { document.querySelector('#gallery').textContent = 'The collection could not load. Please reload the page.'; });
