// Local, lazy-loaded display reconstruction. The research source remains unchanged.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
for (const host of document.querySelectorAll('[data-flower-model]')) {
  const status = host.querySelector('[data-model-status]');
  const toggle = host.querySelector('[data-rotation-toggle]');
  let loaded = false;
  const loader = new IntersectionObserver(async entries => {
    if (!entries.some(entry => entry.isIntersecting) || loaded) return;
    loaded = true; loader.disconnect();
    let renderer, controls;
    try {
      const startedAt=performance.now();
      const [THREE, { GLTFLoader }, { OrbitControls }, { MeshoptDecoder }] = await Promise.all([
        import('../vendor/three/three.module.min.js'),
        import('../vendor/three/GLTFLoader.js'),
        import('../vendor/three/OrbitControls.js'),
        import('../vendor/meshopt_decoder.mjs')
      ]);
      const frame = host.querySelector('[data-model-frame]');
      const scene = new THREE.Scene(); scene.background = new THREE.Color('#edf0e7');
      const camera = new THREE.PerspectiveCamera(35, 1, .001, 100);
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      frame.append(renderer.domElement);
      renderer.domElement.tabIndex = 0;
      renderer.domElement.setAttribute('role', 'img');
      renderer.domElement.setAttribute('aria-label', 'Three-dimensional Bulbophyllum phalaenopsis flower. Arrow keys turn the model; Home resets the view.');
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enablePan = false; controls.enableZoom = false;
      controls.enableDamping = false; controls.autoRotate = false;
      renderer.domElement.style.touchAction = 'pan-y';
      scene.add(new THREE.HemisphereLight(0xffffff, 0xaaa89b, 2.4));
      scene.add(new THREE.AmbientLight(0xffffff, 1.4));
      const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(3, 4, 5); scene.add(key);
      const fill = new THREE.DirectionalLight(0xffffff, 1.1); fill.position.set(-3, 1, -2); scene.add(fill);
      const gltf = await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).loadAsync(host.dataset.flowerModel);
      // Limit GPU display size, including full-resolution source models used
      // for local QA. The production display texture is already 4096 square;
      // original research textures remain unchanged in the source archive.
      const maps=new Set();gltf.scene.traverse(node=>{for(const material of (Array.isArray(node.material)?node.material:[node.material]))if(material?.map)maps.add(material.map);});
      const textureSizes=[];
      const textureLimit=Math.min(4096,renderer.capabilities.maxTextureSize);
      host.dataset.displayTextureLimit=String(textureLimit);
      for(const map of maps){
        const image=map.image;if(!image)continue;
        const size=[image.width,image.height];
        if(Math.max(...size)>textureLimit&&typeof createImageBitmap==='function'){
          const factor=textureLimit/Math.max(...size);
          const bitmap=await createImageBitmap(image,{resizeWidth:Math.round(size[0]*factor),resizeHeight:Math.round(size[1]*factor),resizeQuality:'high'});
          map.image=bitmap;map.needsUpdate=true;image.close?.();
        }
        textureSizes.push({source:size,display:[map.image.width,map.image.height]});
      }
      host.dataset.textureSizes=JSON.stringify(textureSizes);
      const object = gltf.scene; scene.add(object);
      if (host.hasAttribute('data-review-pick')) renderer.domElement.addEventListener('click', event => {
        const box=renderer.domElement.getBoundingClientRect();
        const ray=new THREE.Raycaster();
        ray.setFromCamera(new THREE.Vector2((event.clientX-box.left)/box.width*2-1,1-(event.clientY-box.top)/box.height*2),camera);
        const hit=ray.intersectObject(object,true)[0];
        host.dataset.pick=hit?JSON.stringify({worldPoint:hit.point.toArray(),objectLocal:object.worldToLocal(hit.point.clone()).toArray(),meshLocal:hit.object.worldToLocal(hit.point.clone()).toArray(),face:hit.faceIndex,uv:hit.uv?.toArray(),objectMatrix:object.matrixWorld.toArray(),meshMatrix:hit.object.matrixWorld.toArray(),sourceSha:host.dataset.sourceSha||null}):'none';
      });
      const bounds = new THREE.Box3().setFromObject(object, true);
      const radius = bounds.getBoundingSphere(new THREE.Sphere()).radius;
      // Fit the true vertex envelope through a full turn around the vertical
      // axis. A bounding sphere left too much empty space around narrow flowers.
      const profile=[];object.updateMatrixWorld(true);const sample=new THREE.Vector3();
      object.traverse(node=>{if(!node.isMesh)return;const positions=node.geometry.attributes.position;for(let i=0;i<positions.count;i++){sample.fromBufferAttribute(positions,i).applyMatrix4(node.matrixWorld);profile.push(Math.hypot(sample.x,sample.z),sample.y);}});
      let paused = reducedMotion.matches, visible = true, last = 0, frames = 0;
      let fitting = false, fittedWidth = 0, fittedHeight = 0;
      const intervals=[];
      const draw = () => renderer.render(scene, camera);
      function fit(resetView=false) {
        if (fitting) return;
        const width = frame.clientWidth, height = frame.clientHeight;
        if (!width || !height) return;
        fitting = true;
        try {
          if (width !== fittedWidth || height !== fittedHeight) {
            renderer.setSize(width, height, false);
            fittedWidth = width; fittedHeight = height;
          }
          camera.aspect = width / height;
          const tangent=Math.tan(THREE.MathUtils.degToRad(camera.fov/2));
          const direction=resetView||camera.position.lengthSq()<1e-10?new THREE.Vector3(0,.2,Math.sqrt(.96)):camera.position.clone().normalize();
          const sine=direction.y,cosine=Math.sqrt(Math.max(0,1-sine*sine)),horizontalTangent=tangent*camera.aspect;
          let distance=0;
          for(let i=0;i<profile.length;i+=2){const radial=profile[i],y=profile[i+1];distance=Math.max(distance,y*(sine+cosine/tangent)+radial*Math.abs(cosine-sine/tangent),y*(sine-cosine/tangent)+radial*Math.abs(cosine+sine/tangent),y*sine+radial*Math.sqrt(cosine*cosine+1/(horizontalTangent*horizontalTangent)));}
          distance*=1.08;
          if(Math.abs(object.rotation.x)>.01)distance=Math.max(distance,radius/Math.sin(THREE.MathUtils.degToRad(camera.fov/2))*Math.max(1,1/camera.aspect)*1.08);
          if(host.dataset.reviewDistance)distance=Number(host.dataset.reviewDistance);
          host.dataset.cameraDistance=distance.toFixed(6);
          camera.position.copy(direction.multiplyScalar(distance));
          camera.near = radius / 100; camera.far = distance * 20;
          // update dispatches change; the guard prevents re-entry. Damping and
          // OrbitControls autoRotate stay disabled for this synchronous refit.
          camera.updateProjectionMatrix(); controls.target.set(0, 0, 0); controls.update(); draw();
        } finally {
          fitting = false;
        }
      }
      function animate(time) {
        const interval=last?time-last:0;
        const dt = last ? Math.min(interval / 1000, .1) : 0; last = time;
        if(interval>0){intervals.push(interval);if(intervals.length>240)intervals.shift();}
        object.rotation.y += dt * .32;
        frames++; host.dataset.frames = String(frames);
        if (frames % 20 === 0) host.dataset.angle = object.rotation.y.toFixed(4);
        draw();
        if(frames%120===0&&intervals.length){const sorted=[...intervals].sort((a,b)=>a-b);host.dataset.frameStats=JSON.stringify({samples:sorted.length,medianMs:+sorted[Math.floor(sorted.length*.5)].toFixed(2),p95Ms:+sorted[Math.floor(sorted.length*.95)].toFixed(2),triangles:renderer.info.render.triangles,geometries:renderer.info.memory.geometries,textures:renderer.info.memory.textures});}
      }
      function sync() {
        toggle.disabled = false; toggle.textContent = paused ? 'Resume rotation' : 'Pause rotation';
        host.dataset.rotationState = paused ? 'paused' : 'rotating';
        last = 0;
        renderer.setAnimationLoop(!paused && visible && !document.hidden ? animate : null);
        draw();
      }
      toggle.addEventListener('click', () => { paused = !paused; sync(); });
      controls.addEventListener('start', () => { paused = true; sync(); });
      controls.addEventListener('change', () => fit());
      renderer.domElement.addEventListener('keydown', event => {
        if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home'].includes(event.key)) return;
        event.preventDefault(); paused = true;
        if (event.key === 'Home') { object.rotation.set(0, 0, 0); fit(true); }
        else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') object.rotation.y += event.key === 'ArrowLeft' ? -.15 : .15;
        else {object.rotation.x += event.key === 'ArrowUp' ? -.15 : .15;fit();}
        host.dataset.angle = object.rotation.y.toFixed(4); sync();
      });
      reducedMotion.addEventListener('change', event => { if (event.matches) { paused = true; sync(); } });
      document.addEventListener('visibilitychange', sync);
      new ResizeObserver(()=>fit()).observe(frame);
      new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }).observe(frame);
      status.hidden = true; host.dataset.loaded = 'true';host.dataset.loadMs=(performance.now()-startedAt).toFixed(1); fit(true); sync();
    } catch (error) {
      controls?.dispose();
      renderer?.setAnimationLoop(null);
      renderer?.dispose();
      renderer?.domElement.remove();
      status.textContent = 'The 3D view could not load.';
      status.hidden = false;
      host.dataset.loaded = 'error'; toggle.hidden = true;
      console.error('Floral display:', error);
    }
  }, { rootMargin: '180px' });
  loader.observe(host);
}
