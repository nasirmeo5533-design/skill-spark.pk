"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Stars } from "@react-three/drei";
import * as THREE from "three";
import {
  MessageCircle,
  BookOpen,
  Users,
  TrendingUp,
  Target,
  Headphones,
  ChevronRight,
  BrainCircuit,
  Bot,
  Sparkles,
  Megaphone,
  ShoppingCart,
  BarChart3,
  ArrowRight,
  Shield,
} from "lucide-react";
import { courses } from "@/data/courses";
import { siteConfig } from "@/lib/config";
import CourseCard from "@/components/CourseCard";

const categoryIcons: Record<string, React.ReactNode> = {
  "Generative AI": <BrainCircuit className="h-5 w-5" />,
  "AI Automation": <Bot className="h-5 w-5" />,
  "Prompt Engineering": <Sparkles className="h-5 w-5" />,
  "Meta Ads": <Megaphone className="h-5 w-5" />,
  Shopify: <ShoppingCart className="h-5 w-5" />,
  "Digital Marketing": <BarChart3 className="h-5 w-5" />,
};

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "E-commerce Owner",
    content:
      "SkillSpark's Meta Ads course helped me generate 30 sales on just PKR 1,000 ad budget. The practical approach is what sets it apart.",
  },
  {
    name: "Fatima Ali",
    role: "Freelancer",
    content:
      "I landed my first AI automation client within a month of completing the course. The skills I learned are directly applicable to real projects.",
  },
  {
    name: "Hassan Malik",
    role: "Digital Marketer",
    content:
      "Unlike other courses that teach theory, SkillSpark shows you exactly how to execute. The case studies are gold.",
  },
  {
    name: "Sara Ahmed",
    role: "Shopify Store Owner",
    content:
      "My store conversions increased by 40% after applying the strategies from the Shopify course. Highly recommended!",
  },
];

// 3D Robot Component
function RobotModel({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const pupilLeftRef = useRef<THREE.Mesh>(null);
  const pupilRightRef = useRef<THREE.Mesh>(null);
  const antennaRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const bodyRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(t * 1.2) * 0.15;
      groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.1;
    }

    // Blink
    if (pupilLeftRef.current && pupilRightRef.current) {
      const blink = Math.sin(t * 2) > 0.95;
      pupilLeftRef.current.scale.y = blink ? 0.1 : 1;
      pupilRightRef.current.scale.y = blink ? 0.1 : 1;
    }

    if (antennaRef.current) {
      antennaRef.current.rotation.z = Math.sin(t * 2) * 0.1;
    }

    if (glowRef.current) {
      const mat = glowRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.5 + Math.sin(t * 3) * 0.5;
    }

    if (bodyRef.current) {
      const mat = bodyRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.3 + Math.sin(t * 2) * 0.1;
    }

    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = Math.sin(t * 4) * 0.3 - 0.5;
      rightArmRef.current.rotation.x = Math.sin(t * 3) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Head */}
      <group position={[0, 0.45, 0]}>
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

      {/* Body */}
      <mesh ref={bodyRef} position={[0, 0, 0]}>
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

      {/* Arms */}
      <group position={[-0.55, 0.1, 0]}>
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
      <group ref={rightArmRef} position={[0.55, 0.1, 0]}>
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

      {/* Legs */}
      <group position={[-0.2, -0.55, 0]}>
        <mesh position={[0, -0.1, 0]}>
          <capsuleGeometry args={[0.07, 0.2, 8, 16]} />
          <meshStandardMaterial color="#0F766E" metalness={0.5} roughness={0.4} />
        </mesh>
        <mesh position={[0, -0.3, 0.05]}>
          <boxGeometry args={[0.14, 0.06, 0.2]} />
          <meshStandardMaterial color="#134E4A" metalness={0.6} roughness={0.3} />
        </mesh>
      </group>
      <group position={[0.2, -0.55, 0]}>
        <mesh position={[0, -0.1, 0]}>
          <capsuleGeometry args={[0.07, 0.2, 8, 16]} />
          <meshStandardMaterial color="#0F766E" metalness={0.5} roughness={0.4} />
        </mesh>
        <mesh position={[0, -0.3, 0.05]}>
          <boxGeometry args={[0.14, 0.06, 0.2]} />
          <meshStandardMaterial color="#134E4A" metalness={0.6} roughness={0.3} />
        </mesh>
      </group>

      {/* Glow ring */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.5, 0.01, 8, 32]} />
        <meshStandardMaterial color="#2DD4BF" emissive="#0D9488" emissiveIntensity={2} transparent opacity={0.6} toneMapped={false} />
      </mesh>
    </group>
  );
}

// Floating particles
function FloatingParticles({ count = 30 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useRef(new THREE.Object3D()).current;
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

// Hero 3D Scene
function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ antialias: true, alpha: true }} style={{ background: "transparent" }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 5, 5]} intensity={0.5} color="#2DD4BF" />
      <pointLight position={[5, -5, 5]} intensity={0.3} color="#D97706" />
      <RobotModel position={[1.5, 0, 0]} scale={1.2} />
      <FloatingParticles count={20} />
      <Stars radius={30} depth={30} count={500} factor={3} saturation={0} fade speed={0.5} />
      <Environment preset="city" />
    </Canvas>
  );
}

// Animated section wrapper
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const categories = [...new Set(courses.map((c) => c.category))];

  return (
    <>
      {/* ── Hero: 3D Animated ──────────────────────────── */}
      <section className="relative min-h-screen bg-gradient-to-br from-charcoal via-[#0a3d3a] to-charcoal overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <HeroScene />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/50 to-transparent z-[1]" />

        <div className="relative z-[2] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
            {/* Left — Copy */}
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-primary text-sm font-semibold">AI-Powered Learning</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.05] mb-6 font-[family-name:var(--font-display)]">
                Ignite Your
                <br />
                <span className="gradient-text">Skills.</span>
                <br />
                Earn Online.
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
                Learn AI, Digital Marketing, Meta Ads & Shopify from a specialist
                who&apos;s done it for real e-commerce clients — not just theory.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/courses"
                  className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-primary-light transition-all shadow-lg shadow-primary/30 font-[family-name:var(--font-display)] flex items-center justify-center gap-2 group"
                >
                  Browse Courses
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold text-base hover:border-primary hover:bg-primary/10 transition-all flex items-center justify-center gap-2 font-[family-name:var(--font-display)]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Stats row */}
              <div className="mt-12 flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-[family-name:var(--font-display)]">3+</div>
                  <div className="text-xs text-gray-400">Years Experience</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-[family-name:var(--font-display)]">10+</div>
                  <div className="text-xs text-gray-400">Courses</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-[family-name:var(--font-display)]">100%</div>
                  <div className="text-xs text-gray-400">Real Results</div>
                </div>
              </div>
            </div>

            {/* Right — Proof Card */}
            <div className="animate-card-slide-in hidden lg:block">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-4 rounded-3xl border-2 border-primary/10 -rotate-2 animate-glow" />
                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-primary to-accent" />
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-[family-name:var(--font-display)]">
                        Campaign Result
                      </span>
                      <span className="bg-success/20 text-success text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Shield className="h-3 w-3" /> Verified
                      </span>
                    </div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-5xl font-bold text-white font-[family-name:var(--font-display)] tracking-tight">30</span>
                      <span className="text-xl font-semibold text-primary font-[family-name:var(--font-display)]">sales</span>
                    </div>
                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-gray-400">on</span>
                      <span className="text-2xl font-bold text-white font-[family-name:var(--font-display)]">PKR 1,000</span>
                      <span className="text-gray-400">ad spend</span>
                    </div>
                    <div className="border-t border-white/10 my-6" />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-400 mb-1">Platform</div>
                        <div className="font-semibold text-white">Meta Ads</div>
                      </div>
                      <div>
                        <div className="text-gray-400 mb-1">Niche</div>
                        <div className="font-semibold text-white">D2C Beauty</div>
                      </div>
                      <div>
                        <div className="text-gray-400 mb-1">ROAS</div>
                        <div className="font-semibold text-white">15x</div>
                      </div>
                      <div>
                        <div className="text-gray-400 mb-1">Course</div>
                        <div className="font-semibold text-white">Meta Ads Mastery</div>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                      <span className="text-xs text-gray-400">Real result from a live client campaign</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ── Trust Bar ───────────────────────────── */}
      <AnimatedSection>
        <section className="bg-charcoal py-12 border-t border-primary/10">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-4 font-[family-name:var(--font-display)]">
              By the numbers
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              {siteConfig.stats.map((stat, index) => (
                <div key={index} className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-primary font-[family-name:var(--font-display)] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-gray-300 text-sm md:text-base">{stat.label}</span>
                  {index < siteConfig.stats.length - 1 && (
                    <span className="hidden md:inline text-gray-600 ml-8">/</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Course Categories ──────────────────── */}
      <AnimatedSection delay={100}>
        <section className="py-10 bg-cream border-b border-warm-gray/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
              <span className="text-xs text-gray-400 uppercase tracking-widest font-[family-name:var(--font-display)] whitespace-nowrap mr-2">
                Categories
              </span>
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/courses?category=${encodeURIComponent(category)}`}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-charcoal hover:border-primary border border-warm-gray/50 transition-all whitespace-nowrap group hover:shadow-md"
                >
                  <span className="text-gray-400 group-hover:text-primary transition-colors">
                    {categoryIcons[category] || <BookOpen className="h-4 w-4" />}
                  </span>
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Featured Courses ──────────────────── */}
      <AnimatedSection delay={200}>
        <section className="py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-[family-name:var(--font-display)] mb-3">
                  Our Courses
                </h2>
                <p className="text-gray-500 max-w-lg">
                  Practical, results-driven courses taught by a specialist who
                  actively works with real clients.
                </p>
              </div>
              <Link
                href="/courses"
                className="hidden md:flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all font-[family-name:var(--font-display)]"
              >
                View all <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {courses.slice(0, 6).map((course, index) => (
                <AnimatedSection key={course.slug} delay={index * 100}>
                  <CourseCard course={course} />
                </AnimatedSection>
              ))}
            </div>
            <div className="mt-10 text-center md:hidden">
              <Link
                href="/courses"
                className="inline-flex items-center gap-1 text-primary font-semibold text-sm font-[family-name:var(--font-display)]"
              >
                View all courses <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── How It Works ────────────────────────────── */}
      <AnimatedSection>
        <section className="py-20 bg-charcoal relative overflow-hidden">
          {/* 3D Background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-primary/30 rounded-full animate-spin-slow" />
            <div className="absolute bottom-10 right-10 w-48 h-48 border border-secondary/20 rounded-full animate-spin-slow" style={{ animationDirection: "reverse" }} />
          </div>

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-display)] mb-3">
                How It Works
              </h2>
              <p className="text-gray-400">Three steps to start earning</p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-[2.25rem] left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                {[
                  {
                    num: "01",
                    title: "Enroll",
                    description: "Message us on WhatsApp, receive payment details, and get instant access.",
                    icon: <MessageCircle className="h-5 w-5" />,
                  },
                  {
                    num: "02",
                    title: "Learn",
                    description: "Attend live sessions, watch recorded videos, and learn at your own pace with lifetime access.",
                    icon: <BookOpen className="h-5 w-5" />,
                  },
                  {
                    num: "03",
                    title: "Apply & Earn",
                    description: "Apply what you learn with real client work templates and start earning online.",
                    icon: <TrendingUp className="h-5 w-5" />,
                  },
                ].map((item) => (
                  <div key={item.num} className="text-center relative group">
                    <div className="w-18 h-18 rounded-full border-2 border-primary/40 flex items-center justify-center mx-auto mb-5 relative z-10 bg-charcoal group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                        {item.icon}
                      </div>
                    </div>
                    <div className="text-5xl font-bold text-white/8 font-[family-name:var(--font-display)] tracking-tight mb-2 select-none">
                      {item.num}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-display)]">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Why SkillSpark ─────────────────────────── */}
      <AnimatedSection>
        <section className="py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-[family-name:var(--font-display)] mb-3">
                Why SkillSpark?
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Unlike bigger platforms where courses are taught by people who
                stopped doing client work years ago, SkillSpark&apos;s courses come
                directly from live client campaigns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:row-span-2 bg-charcoal rounded-2xl p-8 md:p-10 flex flex-col justify-between text-white relative overflow-hidden group hover:shadow-2xl transition-shadow">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-[family-name:var(--font-display)]">
                    Practicing Specialist
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Taught by someone actively doing the work — not a presenter who
                    read the slides once. Every lesson comes from a live campaign
                    running right now.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary font-[family-name:var(--font-display)]">3+</span>
                  <span className="text-gray-400 text-sm">years of hands-on client work</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 relative overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-full translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2 font-[family-name:var(--font-display)]">
                  Live + Recorded Sessions
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Attend live or watch recordings anytime — lifetime access, no expirations.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 relative overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-primary mb-4">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2 font-[family-name:var(--font-display)]">
                  Real Case Studies
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Perfume &amp; Beauty D2C brand results — learn from campaigns that actually ran and converted.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 relative overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Headphones className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2 font-[family-name:var(--font-display)]">
                  Direct WhatsApp Support
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Get help directly from the instructor — no ticket systems, no waiting queues.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── About Founder ──────────────────────────── */}
      <AnimatedSection>
        <section className="py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative">
                <div className="aspect-square bg-charcoal rounded-2xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-8 left-8 w-32 h-32 border-2 border-primary/20 rounded-full group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-12 right-12 w-48 h-48 border-2 border-secondary/15 rounded-full group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/10 rounded-full group-hover:scale-125 transition-transform duration-500" />
                  </div>
                  <span className="text-7xl font-bold text-white/10 font-[family-name:var(--font-display)] tracking-tighter select-none relative z-10">
                    AN
                  </span>
                </div>
              </div>

              <div>
                <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 font-[family-name:var(--font-display)]">
                  About the founder
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-5 font-[family-name:var(--font-display)] leading-tight">
                  {siteConfig.founder.name}
                </h2>
                <p className="text-gray-500 mb-5 leading-relaxed">
                  {siteConfig.founder.bio}
                </p>
                <p className="text-gray-500 mb-8 text-sm">
                  <span className="font-semibold text-charcoal">Skills:</span>{" "}
                  Generative AI, AI Automation, AI Agents, Prompt Engineering, Meta Ads, Shopify, Digital Marketing.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all font-[family-name:var(--font-display)] text-sm group"
                >
                  Read Full Story <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Testimonials ──────────────────────────── */}
      <AnimatedSection>
        <section className="py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-[family-name:var(--font-display)] mb-3">
                What Our Students Say
              </h2>
              <p className="text-gray-500">Real results from real students</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="relative bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow group">
                    <span className="absolute -top-3 -left-1 text-6xl text-primary/15 font-[family-name:var(--font-display)] select-none leading-none">
                      &ldquo;
                    </span>
                    <div className="relative pl-6 pt-4">
                      <p className="text-charcoal text-lg md:text-xl leading-relaxed mb-5 font-[family-name:var(--font-display)]">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-px bg-primary/40" />
                        <div>
                          <div className="font-semibold text-charcoal text-sm">{testimonial.name}</div>
                          <div className="text-xs text-gray-400">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Final CTA ───────────────────────────── */}
      <AnimatedSection>
        <section className="bg-charcoal py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/20 rounded-full animate-spin-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-secondary/20 rounded-full animate-spin-slow" style={{ animationDirection: "reverse" }} />
          </div>

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-display)]">
              Ready to Start Earning Online?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Join hundreds of students already building skills that pay.
            </p>
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-light transition-all shadow-lg shadow-primary/30 font-[family-name:var(--font-display)] group"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
