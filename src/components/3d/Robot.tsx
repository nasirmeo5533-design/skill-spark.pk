"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface RobotProps {
  position?: [number, number, number];
  scale?: number;
  animate?: boolean;
  wave?: boolean;
  lookAt?: [number, number, number];
}

function RobotEye({ position, lookAt }: { position: [number, number, number]; lookAt?: [number, number, number] }) {
  const eyeRef = useRef<THREE.Mesh>(null);
  const pupilRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (pupilRef.current && lookAt) {
      const t = clock.getElapsedTime();
      const blinkCycle = Math.sin(t * 2);
      const isBlinking = blinkCycle > 0.95;

      if (isBlinking) {
        pupilRef.current.scale.y = 0.1;
      } else {
        pupilRef.current.scale.y = 1;
        const lookX = (lookAt[0] - position[0]) * 0.02;
        const lookY = (lookAt[1] - position[1]) * 0.02;
        pupilRef.current.position.x = THREE.MathUtils.lerp(pupilRef.current.position.x, lookX, 0.1);
        pupilRef.current.position.y = THREE.MathUtils.lerp(pupilRef.current.position.y, lookY, 0.1);
      }
    }
  });

  return (
    <group position={position}>
      {/* Eye white */}
      <mesh ref={eyeRef}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
      </mesh>
      {/* Pupil */}
      <mesh ref={pupilRef} position={[0, 0, 0.08]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#134E4A" emissive="#0D9488" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function RobotAntenna() {
  const antennaRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (glowRef.current) {
      const t = clock.getElapsedTime();
      const intensity = 0.5 + Math.sin(t * 3) * 0.5;
      (glowRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = intensity;
    }
    if (antennaRef.current) {
      const t = clock.getElapsedTime();
      antennaRef.current.rotation.z = Math.sin(t * 2) * 0.1;
    }
  });

  return (
    <group ref={antennaRef} position={[0, 0.65, 0]}>
      {/* Antenna rod */}
      <mesh>
        <cylinderGeometry args={[0.02, 0.02, 0.2, 8]} />
        <meshStandardMaterial color="#5EEAD4" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Antenna ball */}
      <mesh ref={glowRef} position={[0, 0.15, 0]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial
          color="#2DD4BF"
          emissive="#0D9488"
          emissiveIntensity={1}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

function RobotArm({ side, wave }: { side: "left" | "right"; wave?: boolean }) {
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
      {/* Shoulder */}
      <mesh position={[0, 0.1, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#0D9488" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Upper arm */}
      <mesh position={[0, -0.1, 0]}>
        <capsuleGeometry args={[0.06, 0.2, 8, 16]} />
        <meshStandardMaterial color="#14B8A6" metalness={0.5} roughness={0.4} />
      </mesh>
      {/* Hand */}
      <mesh position={[0, -0.3, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#2DD4BF" metalness={0.4} roughness={0.5} />
      </mesh>
    </group>
  );
}

function RobotLeg({ side }: { side: "left" | "right" }) {
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
      {/* Upper leg */}
      <mesh position={[0, -0.1, 0]}>
        <capsuleGeometry args={[0.07, 0.2, 8, 16]} />
        <meshStandardMaterial color="#0F766E" metalness={0.5} roughness={0.4} />
      </mesh>
      {/* Foot */}
      <mesh position={[0, -0.3, 0.05]}>
        <boxGeometry args={[0.14, 0.06, 0.2]} />
        <meshStandardMaterial color="#134E4A" metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  );
}

export default function Robot({
  position = [0, 0, 0],
  scale = 1,
  animate = true,
  wave = false,
  lookAt,
}: RobotProps) {
  const groupRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!animate || !groupRef.current) return;
    const t = clock.getElapsedTime();

    // Floating animation
    groupRef.current.position.y = position[1] + Math.sin(t * 1.2) * 0.15;
    groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.1;

    // Body glow pulse
    if (bodyRef.current) {
      const mat = bodyRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.3 + Math.sin(t * 2) * 0.1;
    }
  });

  const chestGlow = useMemo(() => new THREE.Color("#0D9488"), []);

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Head */}
      <group position={[0, 0.45, 0]}>
        {/* Head base */}
        <mesh>
          <boxGeometry args={[0.5, 0.4, 0.4]} />
          <meshStandardMaterial
            color="#14B8A6"
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>
        {/* Face plate */}
        <mesh position={[0, 0, 0.15]}>
          <boxGeometry args={[0.42, 0.32, 0.1]} />
          <meshStandardMaterial
            color="#E8F1F4"
            metalness={0.3}
            roughness={0.6}
          />
        </mesh>
        {/* Eyes */}
        <RobotEye position={[-0.1, 0.02, 0.2]} lookAt={lookAt} />
        <RobotEye position={[0.1, 0.02, 0.2]} lookAt={lookAt} />
        {/* Mouth - smile */}
        <mesh position={[0, -0.08, 0.2]} rotation={[0, 0, 0]}>
          <torusGeometry args={[0.06, 0.015, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#0D9488" emissive="#0D9488" emissiveIntensity={0.3} />
        </mesh>
        {/* Antenna */}
        <RobotAntenna />
      </group>

      {/* Body */}
      <mesh ref={bodyRef} position={[0, 0, 0]}>
        <boxGeometry args={[0.6, 0.7, 0.4]} />
        <meshStandardMaterial
          color="#0D9488"
          metalness={0.6}
          roughness={0.3}
          emissive={chestGlow}
          emissiveIntensity={0.3}
        />
      </mesh>
      {/* Chest panel */}
      <mesh position={[0, 0.05, 0.21]}>
        <boxGeometry args={[0.35, 0.3, 0.05]} />
        <meshStandardMaterial
          color="#E8F1F4"
          metalness={0.4}
          roughness={0.5}
        />
      </mesh>
      {/* Chest light */}
      <mesh position={[0, 0.05, 0.24]}>
        <circleGeometry args={[0.06, 16]} />
        <meshStandardMaterial
          color="#2DD4BF"
          emissive="#0D9488"
          emissiveIntensity={1.5}
          toneMapped={false}
        />
      </mesh>

      {/* Arms */}
      <RobotArm side="left" wave={wave} />
      <RobotArm side="right" wave={wave} />

      {/* Legs */}
      <RobotLeg side="left" />
      <RobotLeg side="right" />

      {/* Glow ring around body */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.5, 0.01, 8, 32]} />
        <meshStandardMaterial
          color="#2DD4BF"
          emissive="#0D9488"
          emissiveIntensity={2}
          transparent
          opacity={0.6}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}
