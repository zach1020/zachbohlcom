'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Component to load and animate the atom model
function AtomMesh() {
  const { scene } = useGLTF('/atom.glb');
  const meshRef = useRef<THREE.Group>(null);

  // Rotate the atom model continuously
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2; // Slower rotation around Y axis
      meshRef.current.rotation.x += delta * 0.1; // Slower rotation around X axis
    }
  });

  // Clone the scene to avoid issues with multiple instances
  const clonedScene = scene.clone();

  return (
    <group ref={meshRef}>
      <primitive object={clonedScene} scale={[3, 3, 3]} />
    </group>
  );
}

// Loading fallback component - make it more visible
function LoadingFallback() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2; // Slower rotation
      meshRef.current.rotation.x += delta * 0.1; // Slower rotation
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[4, 32, 32]} />
      <meshStandardMaterial color="#8b5cf6" wireframe emissive="#8b5cf6" emissiveIntensity={0.3} />
    </mesh>
  );
}

export default function AtomModel() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-95">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color="#8b5cf6" />
        <pointLight position={[10, -10, 5]} intensity={0.8} color="#a855f7" />
        
        {/* Show the loading fallback first to test if 3D is working */}
        <LoadingFallback />
        
        <Suspense fallback={null}>
          <AtomMesh />
        </Suspense>
      </Canvas>
    </div>
  );
}
