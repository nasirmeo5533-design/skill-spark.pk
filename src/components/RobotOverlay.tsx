"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Stars } from "@react-three/drei";
import * as THREE from "three";

/* ═══ Robot 3D Model — walks across screen on scroll ═══ */
function RobotModel({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const pupilLeftRef = useRef<THREE.Mesh>(null);
  const pupilRightRef = useRef<THREE.Mesh>(null);
  const antennaRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const bodyRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Group>(null);
  const rightLegRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    const walkX = THREE.MathUtils.lerp(-3.5, 3.5, scrollProgress);
    const walkY = Math.sin(scrollProgress * Math.PI * 6) * 0.08;
    const walkRotY = Math.sin(scrollProgress * Math.PI * 2) * 0.25;

    if (groupRef.current) {
      groupRef.current.position.x = walkX;
      groupRef.current.position.y = -0.8 + walkY + Math.sin(t * 1.5) * 0.04;
      groupRef.current.position.z = 0;
      groupRef.current.rotation.y = walkRotY;
    }

    if (pupilLeftRef.current && pupilRightRef.current) {
      const blink = Math.sin(t * 2) > 0.95;
      pupilLeftRef.current.scale.y = blink ? 0.1 : 1;
      pupilRightRef.current.scale.y = blink ? 0.1 : 1;
    }

    if (antennaRef.current) {
      antennaRef.current.rotation.z = Math.sin(t * 2.5) * 0.15;
    }

    if (glowRef.current) {
      const mat = glowRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.5 + Math.sin(t * 3) * 0.5;
    }

    if (bodyRef.current) {
      const mat = bodyRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.3 + Math.sin(t * 2) * 0.15;
    }

    const walkCycle = Math.sin(t * 6) * 0.4;
    if (leftArmRef.current) leftArmRef.current.rotation.x = walkCycle;
    if (rightArmRef.current) rightArmRef.current.rotation.x = -walkCycle;
    if (leftLegRef.current) leftLegRef.current.rotation.x = -walkCycle * 0.5;
    if (rightLegRef.current) rightLegRef.current.rotation.x = walkCycle * 0.5;
  });

  return (
    <group ref={groupRef} scale={0.7}>
      {/* Head */}
      <group position={[0, 0.45, 0]}>
        <mesh>
          <boxGeometry args={[0.5, 0.4, 0.4]} />
          <meshStandardMaterial color="#FF9A4D" metalness={0.7} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0.15]}>
          <boxGeometry args={[0.42, 0.32, 0.1]} />
          <meshStandardMaterial color="#FAF8F5" metalness={0.3} roughness={0.6} />
        </mesh>
        {/* Eyes */}
        <mesh position={[-0.1, 0.02, 0.2]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
        </mesh>
        <mesh ref={pupilLeftRef} position={[-0.1, 0.02, 0.28]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#1C1C1E" emissive="#FF7A1A" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[0.1, 0.02, 0.2]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
        </mesh>
        <mesh ref={pupilRightRef} position={[0.1, 0.02, 0.28]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#1C1C1E" emissive="#FF7A1A" emissiveIntensity={0.6} />
        </mesh>
        {/* Mouth */}
        <mesh position={[0, -0.08, 0.2]}>
          <torusGeometry args={[0.06, 0.015, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#FF7A1A" emissive="#FF7A1A" emissiveIntensity={0.4} />
        </mesh>
        {/* Antenna */}
        <group ref={antennaRef} position={[0, 0.65, 0]}>
          <mesh>
            <cylinderGeometry args={[0.02, 0.02, 0.2, 8]} />
            <meshStandardMaterial color="#FFC93C" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh ref={glowRef} position={[0, 0.15, 0]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial color="#FFC93C" emissive="#FF7A1A" emissiveIntensity={1} toneMapped={false} />
          </mesh>
        </group>
      </group>

      {/* Body */}
      <mesh ref={bodyRef} position={[0, 0, 0]}>
        <boxGeometry args={[0.6, 0.7, 0.4]} />
        <meshStandardMaterial color="#FF7A1A" metalness={0.6} roughness={0.3} emissive="#FF7A1A" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0, 0.05, 0.21]}>
        <boxGeometry args={[0.35, 0.3, 0.05]} />
        <meshStandardMaterial color="#FAF8F5" metalness={0.4} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.05, 0.24]}>
        <circleGeometry args={[0.06, 16]} />
        <meshStandardMaterial color="#FFC93C" emissive="#FF7A1A" emissiveIntensity={1.5} toneMapped={false} />
      </mesh>

      {/* Left Arm */}
      <group ref={leftArmRef} position={[-0.55, 0.1, 0]}>
        <mesh position={[0, 0.1, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#FF7A1A" metalness={0.6} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.1, 0]}>
          <capsuleGeometry args={[0.06, 0.2, 8, 16]} />
          <meshStandardMaterial color="#FF9A4D" metalness={0.5} roughness={0.4} />
        </mesh>
        <mesh position={[0, -0.3, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#FFC93C" metalness={0.4} roughness={0.5} />
        </mesh>
      </group>

      {/* Right Arm */}
      <group ref={rightArmRef} position={[0.55, 0.1, 0]}>
        <mesh position={[0, 0.1, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#FF7A1A" metalness={0.6} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.1, 0]}>
          <capsuleGeometry args={[0.06, 0.2, 8, 16]} />
          <meshStandardMaterial color="#FF9A4D" metalness={0.5} roughness={0.4} />
        </mesh>
        <mesh position={[0, -0.3, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#FFC93C" metalness={0.4} roughness={0.5} />
        </mesh>
      </group>

      {/* Left Leg */}
      <group ref={leftLegRef} position={[-0.2, -0.55, 0]}>
        <mesh position={[0, -0.1, 0]}>
          <capsuleGeometry args={[0.07, 0.2, 8, 16]} />
          <meshStandardMaterial color="#E56A0F" metalness={0.5} roughness={0.4} />
        </mesh>
        <mesh position={[0, -0.3, 0.05]}>
          <boxGeometry args={[0.14, 0.06, 0.2]} />
          <meshStandardMaterial color="#1C1C1E" metalness={0.6} roughness={0.3} />
        </mesh>
      </group>

      {/* Right Leg */}
      <group ref={rightLegRef} position={[0.2, -0.55, 0]}>
        <mesh position={[0, -0.1, 0]}>
          <capsuleGeometry args={[0.07, 0.2, 8, 16]} />
          <meshStandardMaterial color="#E56A0F" metalness={0.5} roughness={0.4} />
        </mesh>
        <mesh position={[0, -0.3, 0.05]}>
          <boxGeometry args={[0.14, 0.06, 0.2]} />
          <meshStandardMaterial color="#1C1C1E" metalness={0.6} roughness={0.3} />
        </mesh>
      </group>

      {/* Glow ring */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.5, 0.01, 8, 32]} />
        <meshStandardMaterial color="#FFC93C" emissive="#FF7A1A" emissiveIntensity={2} transparent opacity={0.6} toneMapped={false} />
      </mesh>
    </group>
  );
}

/* ═══ Floating Particles ═══ */
function FloatingParticles({ count = 15 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useRef(new THREE.Object3D()).current;
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        x: Math.sin(i * 1.7) * 6,
        y: Math.cos(i * 2.3) * 4,
        z: Math.sin(i * 0.9) * 4 - 2,
        scale: (i % 4) * 0.006 + 0.008,
        speed: (i % 3) * 0.08 + 0.08,
      })),
    [count]
  );

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    particles.forEach((p, i) => {
      dummy.position.set(p.x, p.y + Math.sin(t * p.speed + i) * 0.3, p.z);
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshStandardMaterial color="#FFC93C" emissive="#FF7A1A" emissiveIntensity={0.8} transparent opacity={0.4} toneMapped={false} />
    </instancedMesh>
  );
}

/* ═══ Walking Scene ═══ */
function WalkingScene({ scrollProgress }: { scrollProgress: number }) {
  return (
    <Canvas camera={{ position: [0, 0.5, 5], fov: 45 }} gl={{ antialias: true, alpha: true }} style={{ background: "transparent" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 5]} intensity={0.8} />
      <pointLight position={[-3, 3, 3]} intensity={0.4} color="#FFC93C" />
      <pointLight position={[3, -2, 3]} intensity={0.2} color="#FF7A1A" />
      <RobotModel scrollProgress={scrollProgress} />
      <FloatingParticles count={12} />
      <Stars radius={20} depth={20} count={200} factor={2} saturation={0} fade speed={0.3} />
      <Environment preset="city" />
    </Canvas>
  );
}

/* ═══ Main Overlay Component ═══ */
export default function RobotOverlay() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        setScrollProgress(Math.min(window.scrollY / maxScroll, 1));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 z-40 pointer-events-none"
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.5s" }}
    >
      <WalkingScene scrollProgress={scrollProgress} />
    </div>
  );
}
