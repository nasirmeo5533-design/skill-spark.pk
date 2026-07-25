"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, Stars } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import Robot from "./Robot";

function Particles({ count = 50 }: { count?: number }) {
  const particles = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      position: [
        Math.sin(i * 1.7) * 10,
        Math.cos(i * 2.3) * 10,
        Math.sin(i * 0.9) * 10,
      ] as [number, number, number],
      scale: (i % 5) * 0.01 + 0.01,
      speed: (i % 3) * 0.15 + 0.2,
    })), [count]);

  return (
    <>
      {particles.map((p) => (
        <Float key={p.id} speed={p.speed} rotationIntensity={0} floatIntensity={0.5}>
          <mesh position={p.position}>
            <sphereGeometry args={[p.scale, 8, 8]} />
            <meshStandardMaterial
              color="#2DD4BF"
              emissive="#0D9488"
              emissiveIntensity={1}
              transparent
              opacity={0.6}
              toneMapped={false}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function GridFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[50, 50, 50, 50]} />
      <meshStandardMaterial
        color="#0D9488"
        wireframe
        transparent
        opacity={0.1}
      />
    </mesh>
  );
}

interface Scene3DProps {
  robotPosition?: [number, number, number];
  robotScale?: number;
  robotWave?: boolean;
  robotLookAt?: [number, number, number];
  showStars?: boolean;
  showParticles?: boolean;
  showGrid?: boolean;
  className?: string;
}

export default function Scene3D({
  robotPosition = [0, 0, 0],
  robotScale = 1.5,
  robotWave = false,
  robotLookAt,
  showStars = true,
  showParticles = true,
  showGrid = true,
  className = "",
}: Scene3DProps) {
  return (
    <div className={`canvas-container ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          <pointLight position={[-5, 5, 5]} intensity={0.5} color="#2DD4BF" />
          <pointLight position={[5, -5, 5]} intensity={0.3} color="#D97706" />

          <Robot
            position={robotPosition}
            scale={robotScale}
            wave={robotWave}
            lookAt={robotLookAt}
          />

          {showStars && <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />}
          {showParticles && <Particles count={30} />}
          {showGrid && <GridFloor />}

          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
