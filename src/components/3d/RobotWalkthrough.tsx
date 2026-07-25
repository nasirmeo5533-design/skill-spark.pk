"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Stars } from "@react-three/drei";
import * as THREE from "three";

interface RobotPartProps {
  position: [number, number, number];
  scale?: number;
}

function RobotHead({ position, scale = 1 }: RobotPartProps) {
  const groupRef = useRef<THREE.Group>(null);
  const pupilLeftRef = useRef<THREE.Mesh>(null);
  const pupilRightRef = useRef<THREE.Mesh>(null);
  const antennaRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Blink
    const blink = Math.sin(t * 2) > 0.95;
    if (pupilLeftRef.current && pupilRightRef.current) {
      pupilLeftRef.current.scale.y = blink ? 0.1 : 1;
      pupilRightRef.current.scale.y = blink ? 0.1 : 1;
    }

    // Antenna wobble
    if (antennaRef.current) {
      antennaRef.current.rotation.z = Math.sin(t * 2) * 0.1;
    }

    // Glow pulse
    if (glowRef.current) {
      const mat = glowRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.5 + Math.sin(t * 3) * 0.5;
    }

    // Head slight rotation
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.8) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <mesh>
        <boxGeometry args={[0.5, 0.4, 0.4]} />
        <meshStandardMaterial color="#14B8A6" metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0, 0.15]}>
        <boxGeometry args={[0.42, 0.32, 0.1]} />
        <meshStandardMaterial color="#E8F1F4" metalness={0.3} roughness={0.6} />
      </mesh>
      {/* Eyes */}
      <mesh position={[-0.1, 0.02, 0.2]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
      </mesh>
      <mesh ref={pupilLeftRef} position={[-0.1, 0.02, 0.28]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#134E4A" emissive="#0D9488" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.1, 0.02, 0.2]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
      </mesh>
      <mesh ref={pupilRightRef} position={[0.1, 0.02, 0.28]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#134E4A" emissive="#0D9488" emissiveIntensity={0.5} />
      </mesh>
      {/* Mouth */}
      <mesh position={[0, -0.08, 0.2]}>
        <torusGeometry args={[0.06, 0.015, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#0D9488" emissive="#0D9488" emissiveIntensity={0.3} />
      </mesh>
      {/* Antenna */}
      <group ref={antennaRef} position={[0, 0.65, 0]}>
        <mesh>
          <cylinderGeometry args={[0.02, 0.02, 0.2, 8]} />
          <meshStandardMaterial color="#5EEAD4" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh ref={glowRef} position={[0, 0.15, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#2DD4BF" emissive="#0D9488" emissiveIntensity={1} toneMapped={false} />
        </mesh>
      </group>
    </group>
  );
}

function RobotBody({ position, scale = 1 }: RobotPartProps) {
  const bodyRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (bodyRef.current) {
      const t = clock.getElapsedTime();
      const mat = bodyRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.3 + Math.sin(t * 2) * 0.1;
    }
  });

  return (
    <group position={position} scale={scale}>
      <mesh ref={bodyRef}>
        <boxGeometry args={[0.6, 0.7, 0.4]} />
        <meshStandardMaterial color="#0D9488" metalness={0.6} roughness={0.3} emissive="#0D9488" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0, 0.05, 0.21]}>
        <boxGeometry args={[0.35, 0.3, 0.05]} />
        <meshStandardMaterial color="#E8F1F4" metalness={0.4} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.05, 0.24]}>
        <circleGeometry args={[0.06, 16]} />
        <meshStandardMaterial color="#2DD4BF" emissive="#0D9488" emissiveIntensity={1.5} toneMapped={false} />
      </mesh>
    </group>
  );
}

function RobotArmComponent({ side, wave }: { side: "left" | "right"; wave: boolean }) {
  const armRef = useRef<THREE.Group>(null);
  const x = side === "left" ? -0.55 : 0.55;

  useFrame(({ clock }) => {
    if (armRef.current) {
      const t = clock.getElapsedTime();
      if (wave && side === "right") {
        armRef.current.rotation.z = Math.sin(t * 4) * 0.3 - 0.5;
        armRef.current.rotation.x = Math.sin(t * 3) * 0.2;
      } else {
        armRef.current.rotation.x = Math.sin(t * 1.5 + (side === "left" ? 0 : Math.PI)) * 0.15;
      }
    }
  });

  return (
    <group ref={armRef} position={[x, 0.1, 0]}>
      <mesh position={[0, 0.1, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#0D9488" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0, -0.1, 0]}>
        <capsuleGeometry args={[0.06, 0.2, 8, 16]} />
        <meshStandardMaterial color="#14B8A6" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[0, -0.3, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#2DD4BF" metalness={0.4} roughness={0.5} />
      </mesh>
    </group>
  );
}

function RobotLegComponent({ side }: { side: "left" | "right" }) {
  const legRef = useRef<THREE.Group>(null);
  const x = side === "left" ? -0.2 : 0.2;

  useFrame(({ clock }) => {
    if (legRef.current) {
      const t = clock.getElapsedTime();
      legRef.current.rotation.x = Math.sin(t * 1.5 + (side === "left" ? 0 : Math.PI)) * 0.1;
    }
  });

  return (
    <group ref={legRef} position={[x, -0.55, 0]}>
      <mesh position={[0, -0.1, 0]}>
        <capsuleGeometry args={[0.07, 0.2, 8, 16]} />
        <meshStandardMaterial color="#0F766E" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[0, -0.3, 0.05]}>
        <boxGeometry args={[0.14, 0.06, 0.2]} />
        <meshStandardMaterial color="#134E4A" metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  );
}

function WalkingRobot({ position, wave }: { position: [number, number, number]; wave: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime();
      groupRef.current.position.y = position[1] + Math.sin(t * 1.2) * 0.15;
      groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <RobotHead position={[0, 0.45, 0]} />
      <RobotBody position={[0, 0, 0]} />
      <RobotArmComponent side="left" wave={wave} />
      <RobotArmComponent side="right" wave={wave} />
      <RobotLegComponent side="left" />
      <RobotLegComponent side="right" />
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.5, 0.01, 8, 32]} />
        <meshStandardMaterial color="#2DD4BF" emissive="#0D9488" emissiveIntensity={2} transparent opacity={0.6} toneMapped={false} />
      </mesh>
    </group>
  );
}

function FloatingParticles({ count = 20 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      x: Math.sin(i * 1.7) * 7.5,
      y: Math.cos(i * 2.3) * 7.5,
      z: Math.sin(i * 0.9) * 7.5,
      scale: (i % 5) * 0.008 + 0.01,
      speed: (i % 3) * 0.1 + 0.1,
    })), [count]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    particles.forEach((p, i) => {
      dummy.position.set(p.x, p.y + Math.sin(t * p.speed + i) * 0.5, p.z);
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial color="#2DD4BF" emissive="#0D9488" emissiveIntensity={1} transparent opacity={0.5} toneMapped={false} />
    </instancedMesh>
  );
}



interface RobotWalkthroughProps {
  className?: string;
}

export default function RobotWalkthrough({ className = "" }: RobotWalkthroughProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [wave, setWave] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(Math.min(progress, 1));

      // Wave at certain scroll positions
      const sections = [0, 0.15, 0.35, 0.55, 0.75, 0.9];
      const isNearSection = sections.some((s) => Math.abs(progress - s) < 0.05);
      setWave(isNearSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Robot position changes based on scroll
  const robotX = Math.sin(scrollProgress * Math.PI * 2) * 2;
  const robotY = -1 + scrollProgress * 2;
  const robotZ = 3 - scrollProgress * 2;

  return (
    <div className={`fixed inset-0 pointer-events-none z-10 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#2DD4BF" />
        <pointLight position={[5, -5, 5]} intensity={0.3} color="#D97706" />

        <WalkingRobot position={[robotX, robotY, robotZ]} wave={wave} />

        <FloatingParticles count={15} />
        <Stars radius={30} depth={30} count={500} factor={3} saturation={0} fade speed={0.5} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
