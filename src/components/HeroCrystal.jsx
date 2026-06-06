import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCrystal() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const W = mount.clientWidth;
    const H = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffb088, 0.35));
    const key = new THREE.PointLight(0xff5a1f, 8, 30); key.position.set(4, 3, 4); scene.add(key);
    const fill = new THREE.PointLight(0xff8a4a, 4, 20); fill.position.set(-4, -2, 3); scene.add(fill);
    const rim = new THREE.PointLight(0xffffff, 1.4, 20); rim.position.set(0, 4, -4); scene.add(rim);

    const group = new THREE.Group();
    scene.add(group);

    const crystalGeo = new THREE.OctahedronGeometry(1.6, 0);
    const posAttr = crystalGeo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      posAttr.setY(i, posAttr.getY(i) * 1.55);
    }
    crystalGeo.computeVertexNormals();

    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: 0xff5a1f,
      metalness: 0.4, roughness: 0.15,
      transmission: 0.6, thickness: 1.2, ior: 1.7,
      clearcoat: 1.0, clearcoatRoughness: 0.1,
      emissive: 0xff3008, emissiveIntensity: 0.45,
      transparent: true, opacity: 0.92,
    });
    const crystal = new THREE.Mesh(crystalGeo, crystalMat);
    group.add(crystal);

    const edges = new THREE.EdgesGeometry(crystalGeo);
    const edgeMat = new THREE.LineBasicMaterial({ color: 0xffae6a, transparent: true, opacity: 0.95 });
    const wire = new THREE.LineSegments(edges, edgeMat);
    group.add(wire);

    const coreGeo = new THREE.SphereGeometry(0.4, 24, 24);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xff7a3a, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    const satellites = [];
    const satCount = isMobile ? 2 : 4;
    for (let i = 0; i < satCount; i++) {
      const g = i % 2 === 0 ? new THREE.OctahedronGeometry(0.32, 0) : new THREE.TetrahedronGeometry(0.36, 0);
      const m = new THREE.MeshBasicMaterial({ color: i % 2 ? 0xff7a3a : 0xff5a1f, wireframe: true, transparent: true, opacity: 0.85 });
      const mesh = new THREE.Mesh(g, m);
      mesh.userData = {
        radius: 2.4 + i * 0.4,
        speed: 0.4 + Math.random() * 0.3,
        offset: (i / satCount) * Math.PI * 2 + Math.random(),
        tilt: (Math.random() - 0.5) * 0.8,
        ySpeed: 0.6 + Math.random() * 0.5,
      };
      satellites.push(mesh);
      scene.add(mesh);
    }

    const ringGeo = new THREE.RingGeometry(2.7, 2.72, 96);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xff5a1f, side: THREE.DoubleSide, transparent: true, opacity: 0.25 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.4;
    scene.add(ring);

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e) => {
      const rect = mount.getBoundingClientRect();
      mouse.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove);

    const onResize = () => {
      const W2 = mount.clientWidth, H2 = mount.clientHeight;
      renderer.setSize(W2, H2);
      camera.aspect = W2 / H2;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    let raf;
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;

      group.rotation.y = t * 0.35 + mouse.x * 0.8;
      group.rotation.x = Math.sin(t * 0.4) * 0.18 + mouse.y * 0.4;
      group.position.y = Math.sin(t * 0.8) * 0.18;

      core.scale.setScalar(0.9 + Math.sin(t * 2.4) * 0.12);
      crystalMat.emissiveIntensity = 0.4 + Math.sin(t * 1.8) * 0.12;

      ring.rotation.z = t * 0.15;

      satellites.forEach((s) => {
        const a = t * s.userData.speed + s.userData.offset;
        s.position.x = Math.cos(a) * s.userData.radius;
        s.position.z = Math.sin(a) * s.userData.radius;
        s.position.y = Math.sin(a * s.userData.ySpeed) * s.userData.tilt;
        s.rotation.x += 0.02;
        s.rotation.y += 0.018;
      });

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      crystalGeo.dispose(); crystalMat.dispose();
      edges.dispose(); edgeMat.dispose();
      coreGeo.dispose(); coreMat.dispose();
      ringGeo.dispose(); ringMat.dispose();
      satellites.forEach((s) => { s.geometry.dispose(); s.material.dispose(); });
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden />;
}
