'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Different shape components
function StarMesh({ shouldRotate }: { shouldRotate: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current && shouldRotate) {
      // Reduced rotation speed for smoother performance
      meshRef.current.rotation.y += delta * 3.0;
      meshRef.current.rotation.x += delta * 2.0;
      meshRef.current.rotation.z += delta * 1.5;
      
      // Reduced pulsing frequency for smoother performance
      const scale = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.2;
      meshRef.current.scale.setScalar(scale);
    } else if (meshRef.current) {
      // Reset scale when not rotating
      meshRef.current.scale.setScalar(1);
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

function CubeMesh({ shouldRotate }: { shouldRotate: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current && shouldRotate) {
      // Reduced rotation speed for smoother performance
      meshRef.current.rotation.y += delta * 3.0;
      meshRef.current.rotation.x += delta * 2.0;
      
      // Reduced pulsing frequency for smoother performance
      const scale = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.2;
      meshRef.current.scale.setScalar(scale);
    } else if (meshRef.current) {
      // Reset scale when not rotating
      meshRef.current.scale.setScalar(1);
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial 
        color="#06b6d4" 
        emissive="#06b6d4" 
        emissiveIntensity={0.3}
        wireframe={true}
      />
    </mesh>
  );
}

function SphereMesh({ shouldRotate }: { shouldRotate: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current && shouldRotate) {
      // Reduced rotation speed for smoother performance
      meshRef.current.rotation.y += delta * 3.0;
      meshRef.current.rotation.x += delta * 2.0;
      
      // Reduced pulsing frequency for smoother performance
      const scale = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.2;
      meshRef.current.scale.setScalar(scale);
    } else if (meshRef.current) {
      // Reset scale when not rotating
      meshRef.current.scale.setScalar(1);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 16, 16]} />
      <meshStandardMaterial 
        color="#10b981" 
        emissive="#10b981" 
        emissiveIntensity={0.3}
        wireframe={true}
      />
    </mesh>
  );
}

function PyramidMesh({ shouldRotate }: { shouldRotate: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current && shouldRotate) {
      // Reduced rotation speed for smoother performance
      meshRef.current.rotation.y += delta * 3.0;
      meshRef.current.rotation.x += delta * 2.0;
      
      // Reduced pulsing frequency for smoother performance
      const scale = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.2;
      meshRef.current.scale.setScalar(scale);
    } else if (meshRef.current) {
      // Reset scale when not rotating
      meshRef.current.scale.setScalar(1);
    }
  });

  return (
    <mesh ref={meshRef}>
      <coneGeometry args={[2, 3, 4]} />
      <meshStandardMaterial 
        color="#f59e0b" 
        emissive="#f59e0b" 
        emissiveIntensity={0.3}
        wireframe={true}
      />
    </mesh>
  );
}

function TorusMesh({ shouldRotate }: { shouldRotate: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current && shouldRotate) {
      // Reduced rotation speed for smoother performance
      meshRef.current.rotation.y += delta * 3.0;
      meshRef.current.rotation.x += delta * 2.0;
      
      // Reduced pulsing frequency for smoother performance
      const scale = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.2;
      meshRef.current.scale.setScalar(scale);
    } else if (meshRef.current) {
      // Reset scale when not rotating
      meshRef.current.scale.setScalar(1);
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1.5, 0.5, 8, 16]} />
      <meshStandardMaterial 
        color="#ef4444" 
        emissive="#ef4444" 
        emissiveIntensity={0.3}
        wireframe={true}
      />
    </mesh>
  );
}

interface RotatingShapeProps {
  shape: 'star' | 'cube' | 'sphere' | 'pyramid' | 'torus';
  className?: string;
  shouldRotate?: boolean;
}

export default function RotatingShape({ shape, className = "", shouldRotate = false }: RotatingShapeProps) {
  const renderShape = () => {
    switch (shape) {
      case 'star':
        return <StarMesh shouldRotate={shouldRotate} />;
      case 'cube':
        return <CubeMesh shouldRotate={shouldRotate} />;
      case 'sphere':
        return <SphereMesh shouldRotate={shouldRotate} />;
      case 'pyramid':
        return <PyramidMesh shouldRotate={shouldRotate} />;
      case 'torus':
        return <TorusMesh shouldRotate={shouldRotate} />;
      default:
        return <StarMesh shouldRotate={shouldRotate} />;
    }
  };

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ 
          antialias: false, 
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: false
        }}
        dpr={1}
        performance={{ min: 0.2 }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#8b5cf6" />
        
        {renderShape()}
      </Canvas>
    </div>
  );
}
