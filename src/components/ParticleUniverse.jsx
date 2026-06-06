import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleUniverse() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const w = window.innerWidth;
    const h = window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.04);

    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
    camera.position.set(0, 0, 28);

    const renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 2));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const starCount = isMobile ? 1200 : 2600;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const r = 60 + Math.random() * 80;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPos[i * 3 + 2] = r * Math.cos(phi);
      const ember = Math.random() > 0.55;
      if (ember) {
        starColors[i * 3] = 1.0;
        starColors[i * 3 + 1] = 0.35 + Math.random() * 0.3;
        starColors[i * 3 + 2] = 0.12;
      } else {
        const v = 0.6 + Math.random() * 0.4;
        starColors[i * 3] = v; starColors[i * 3 + 1] = v * 0.9; starColors[i * 3 + 2] = v * 0.85;
      }
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    const starMat = new THREE.PointsMaterial({ size: 0.18, vertexColors: true, transparent: true, opacity: 0.85, depthWrite: false });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    const emberCount = isMobile ? 200 : 420;
    const emberGeo = new THREE.BufferGeometry();
    const emberPos = new Float32Array(emberCount * 3);
    const emberVel = [];
    for (let i = 0; i < emberCount; i++) {
      emberPos[i * 3] = (Math.random() - 0.5) * 50;
      emberPos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      emberPos[i * 3 + 2] = (Math.random() - 0.5) * 30;
      emberVel.push({ x: (Math.random() - 0.5) * 0.005, y: 0.005 + Math.random() * 0.015, z: (Math.random() - 0.5) * 0.005 });
    }
    emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPos, 3));
    const emberMat = new THREE.PointsMaterial({
      size: 0.32, color: 0xff5a1f, transparent: true, opacity: 0.95,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const embers = new THREE.Points(emberGeo, emberMat);
    scene.add(embers);

    const shapes = [];
    const shapeCount = isMobile ? 7 : 14;
    const geometries = [
      new THREE.OctahedronGeometry(1.2, 0),
      new THREE.IcosahedronGeometry(1.1, 0),
      new THREE.TetrahedronGeometry(1.3, 0),
      new THREE.OctahedronGeometry(0.9, 0),
    ];
    for (let i = 0; i < shapeCount; i++) {
      const geo = geometries[i % geometries.length];
      const mat = new THREE.MeshBasicMaterial({
        color: i % 3 === 0 ? 0xff7a3a : 0xff5a1f,
        wireframe: true, transparent: true,
        opacity: 0.45 + Math.random() * 0.25,
      });
      const mesh = new THREE.Mesh(geo, mat);
      const radius = 12 + Math.random() * 22;
      const angle = Math.random() * Math.PI * 2;
      mesh.position.set(Math.cos(angle) * radius, (Math.random() - 0.5) * 18, Math.sin(angle) * radius - 8);
      const s = 0.5 + Math.random() * 1.3;
      mesh.scale.setScalar(s);
      mesh.userData = {
        rotSpeed: { x: (Math.random() - 0.5) * 0.004, y: (Math.random() - 0.5) * 0.004, z: (Math.random() - 0.5) * 0.002 },
        floatAmp: 0.5 + Math.random() * 1.2,
        floatPhase: Math.random() * Math.PI * 2,
        basePos: mesh.position.clone(),
      };
      shapes.push(mesh);
      scene.add(mesh);
    }

    scene.add(new THREE.AmbientLight(0xff5a1f, 0.2));

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove);

    const onResize = () => {
      const W = window.innerWidth, H = window.innerHeight;
      renderer.setSize(W, H);
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    let raf;
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;

      stars.rotation.y = t * 0.008 + mouse.x * 0.06;
      stars.rotation.x = mouse.y * 0.03;

      const pos = embers.geometry.attributes.position.array;
      for (let i = 0; i < emberCount; i++) {
        pos[i * 3] += emberVel[i].x;
        pos[i * 3 + 1] += emberVel[i].y;
        pos[i * 3 + 2] += emberVel[i].z;
        if (pos[i * 3 + 1] > 22) {
          pos[i * 3] = (Math.random() - 0.5) * 50;
          pos[i * 3 + 1] = -22;
          pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
        }
      }
      embers.geometry.attributes.position.needsUpdate = true;
      embers.rotation.y = mouse.x * 0.12;

      shapes.forEach((m) => {
        m.rotation.x += m.userData.rotSpeed.x;
        m.rotation.y += m.userData.rotSpeed.y;
        m.rotation.z += m.userData.rotSpeed.z;
        m.position.y = m.userData.basePos.y + Math.sin(t * 0.5 + m.userData.floatPhase) * m.userData.floatAmp;
      });

      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.03;
      camera.position.y += (-mouse.y * 1.2 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      starGeo.dispose(); starMat.dispose();
      emberGeo.dispose(); emberMat.dispose();
      shapes.forEach((m) => { m.geometry.dispose(); m.material.dispose(); });
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10 pointer-events-none" aria-hidden />;
}
