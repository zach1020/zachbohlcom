'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Rotating sphere component
function RotatingSphere() {
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small delay to ensure page is fully loaded
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none opacity-95 z-10">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color="#8b5cf6" />
        <pointLight position={[10, -10, 5]} intensity={0.8} color="#a855f7" />
        
        <RotatingSphere />
      </Canvas>
    </div>
  );
}
