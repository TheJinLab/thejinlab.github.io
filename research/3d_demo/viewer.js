import { MeshoptDecoder } from './vendor/meshopt_decoder.mjs';
import * as THREE from './vendor/three/three.module.min.js';
import { OrbitControls } from './vendor/three/OrbitControls.js';
import { GLTFLoader } from './vendor/three/GLTFLoader.js';

export function createViewer(container) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#f4f4f1');
  const camera = new THREE.PerspectiveCamera(35, 1, 0.001, 100);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  container.append(renderer.domElement);
  renderer.domElement.setAttribute('aria-label', 'Interactive 3D floral reconstruction. Drag to rotate; scroll or pinch to zoom.');
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  scene.add(new THREE.HemisphereLight(0xffffff, 0xaaa89b, 2.4));
  scene.add(new THREE.AmbientLight(0xffffff, 1.4));
  const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(3, 4, 5); scene.add(key);
  const fill = new THREE.DirectionalLight(0xffffff, 1.1); fill.position.set(-3, 1, -2); scene.add(fill);
  let object, disposed = false, radius = 1;
  function reset() {
    const aspect = camera.aspect;
    const distance = radius / Math.sin(THREE.MathUtils.degToRad(camera.fov / 2)) * Math.max(1, 1 / aspect) * 1.08;
    camera.position.set(0, distance * Math.sin(Math.PI / 10), distance * Math.cos(Math.PI / 10));
    camera.near = radius / 100; camera.far = distance * 20; camera.updateProjectionMatrix();
    controls.target.set(0, 0, 0); controls.minDistance = radius * .3; controls.maxDistance = distance * 4;
    controls.update();
  }
  function resize() { const width = container.clientWidth, height = container.clientHeight; if (!width || !height) return; renderer.setSize(width, height); camera.aspect = width / height; camera.updateProjectionMatrix(); }
  const observer = new ResizeObserver(resize); observer.observe(container); resize();
  function disposeObject(root) { root.traverse(child => { child.geometry?.dispose(); const materials = child.material ? (Array.isArray(child.material) ? child.material : [child.material]) : []; for (const mat of materials) { for (const value of Object.values(mat)) if (value?.isTexture) value.dispose(); mat.dispose(); } }); }
  renderer.setAnimationLoop(() => { if (!disposed) { controls.update(); renderer.render(scene, camera); } });
  return {
    async load(url, orientation) {
      const gltf = await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).loadAsync(url);
      if (disposed) { disposeObject(gltf.scene); return; }
      object = gltf.scene;
      if (orientation) { const group = new THREE.Group(); group.add(object); group.quaternion.fromArray(orientation); object = group; }
      object.updateMatrixWorld(true);
      const bounds = new THREE.Box3().setFromObject(object, true);
      const center = bounds.getCenter(new THREE.Vector3());
      object.position.sub(center); scene.add(object);
      radius = bounds.getBoundingSphere(new THREE.Sphere()).radius;
      if (!Number.isFinite(radius) || radius <= 0) throw new Error('Invalid model bounds');
      reset();
    }, reset,
    dispose() { if (disposed) return; disposed = true; observer.disconnect(); controls.dispose(); renderer.setAnimationLoop(null); if (object) disposeObject(object); renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove(); },
  };
}
