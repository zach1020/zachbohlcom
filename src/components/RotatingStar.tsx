'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Star component
function StarMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5; // Rotate around Y axis
      meshRef.current.rotation.x += delta * 0.3; // Rotate around X axis
      meshRef.current.rotation.z += delta * 0.2; // Rotate around Z axis
    }
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[2, 0]} />
      <meshStandardMaterial 
        color="#8b5cf6" 
        emissive="#8b5cf6" 
        emissiveIntensity={0.3}
        wireframe={true}
      />
    </mesh>
  );
}

interface RotatingStarProps {
  className?: string;
}

export default function RotatingStar({ className = "" }: RotatingStarProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#8b5cf6" />
        
        <StarMesh />
      </Canvas>
    </div>
  );
}
