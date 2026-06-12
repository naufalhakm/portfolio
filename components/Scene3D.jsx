'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Neural Network Sphere — represents AI/backend architecture.
 * Nodes form a sphere shape, connections pulse between them.
 * Mouse parallax + gentle rotation + pulsing glow.
 */

function NeuralSphere({ mouseRef }) {
  const groupRef = useRef(null);
  const nodesRef = useRef(null);
  const linesRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Generate node positions on a sphere surface
  const { positions, connections, linePositions } = useMemo(() => {
    const nodeCount = 60;
    const pos = [];
    const radius = 2;

    // Fibonacci sphere for even distribution
    for (let i = 0; i < nodeCount; i++) {
      const y = 1 - (i / (nodeCount - 1)) * 2; // -1 to 1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = ((1 + Math.sqrt(5)) / 2) * i * Math.PI * 2;

      pos.push(new THREE.Vector3(
        Math.cos(theta) * radiusAtY * radius,
        y * radius,
        Math.sin(theta) * radiusAtY * radius
      ));
    }

    // Create connections between nearby nodes
    const conns = [];
    const maxDist = 1.4;
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = pos[i].distanceTo(pos[j]);
        if (dist < maxDist && conns.length < 120) {
          conns.push([i, j]);
        }
      }
    }

    // Flatten line positions
    const linePos = new Float32Array(conns.length * 6);
    conns.forEach(([a, b], idx) => {
      linePos[idx * 6 + 0] = pos[a].x;
      linePos[idx * 6 + 1] = pos[a].y;
      linePos[idx * 6 + 2] = pos[a].z;
      linePos[idx * 6 + 3] = pos[b].x;
      linePos[idx * 6 + 4] = pos[b].y;
      linePos[idx * 6 + 5] = pos[b].z;
    });

    return { positions: pos, connections: conns, linePositions: linePos };
  }, []);

  // Node instance matrices
  const nodeMatrices = useMemo(() => {
    const dummy = new THREE.Object3D();
    const matrices = new Float32Array(positions.length * 16);
    positions.forEach((pos, i) => {
      dummy.position.copy(pos);
      dummy.scale.setScalar(0.04);
      dummy.updateMatrix();
      dummy.matrix.toArray(matrices, i * 16);
    });
    return matrices;
  }, [positions]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    // Slow rotation
    groupRef.current.rotation.y = t * 0.08;
    groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.1;

    // Mouse parallax
    if (mouseRef?.current) {
      groupRef.current.rotation.y += mouseRef.current.x * 0.12;
      groupRef.current.rotation.x += mouseRef.current.y * 0.06;
    }

    // Scale in
    const target = mounted ? 1 : 0;
    const current = groupRef.current.scale.x;
    if (Math.abs(current - target) > 0.001) {
      groupRef.current.scale.setScalar(THREE.MathUtils.lerp(current, target, 0.02));
    }

    // Animate node sizes (breathing effect)
    if (nodesRef.current) {
      const dummy = new THREE.Object3D();
      positions.forEach((pos, i) => {
        const pulse = Math.sin(t * 2 + i * 0.5) * 0.015 + 0.04;
        dummy.position.copy(pos);
        dummy.scale.setScalar(pulse);
        dummy.updateMatrix();
        nodesRef.current.setMatrixAt(i, dummy.matrix);
      });
      nodesRef.current.instanceMatrix.needsUpdate = true;
    }

    // Animate line opacity
    if (linesRef.current) {
      linesRef.current.material.opacity = 0.15 + Math.sin(t * 0.8) * 0.05;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.4}>
      <group ref={groupRef} scale={0}>
        {/* Nodes — instanced spheres */}
        <instancedMesh ref={nodesRef} args={[null, null, positions.length]}>
          <sphereGeometry args={[1, 12, 12]} />
          <meshBasicMaterial color="#d4522a" />
        </instancedMesh>

        {/* Connections — line segments */}
        <lineSegments ref={linesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={linePositions.length / 3}
              array={linePositions}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#d4522a" transparent opacity={0.15} />
        </lineSegments>

        {/* Outer glow sphere */}
        <mesh>
          <sphereGeometry args={[2.3, 32, 32]} />
          <meshBasicMaterial color="#d4522a" transparent opacity={0.02} side={THREE.BackSide} />
        </mesh>
      </group>
    </Float>
  );
}

function Scene({ mouseRef }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={20} color="#d4522a" distance={15} />
      <pointLight position={[-5, -3, -5]} intensity={15} color="#e8b84b" distance={12} />
      <NeuralSphere mouseRef={mouseRef} />
    </>
  );
}

export default function Scene3D({ mouseRef }) {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <Scene mouseRef={mouseRef} />
      </Canvas>
    </div>
  );
}
