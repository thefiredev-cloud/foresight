'use client'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function BranchingTree() {
  const groupRef = useRef<THREE.Group>(null)
  const t = useRef(0)

  const branches = useMemo(() => {
    const lines: { points: THREE.Vector3[]; depth: number }[] = []

    function addBranch(start: THREE.Vector3, direction: THREE.Vector3, depth: number, length: number) {
      if (depth > 4) return
      const end = start.clone().add(direction.clone().multiplyScalar(length))
      lines.push({ points: [start.clone(), end.clone()], depth })
      if (depth < 4) {
        const numChildren = depth < 2 ? 3 : 2
        for (let i = 0; i < numChildren; i++) {
          const angle = ((i / numChildren) - 0.5) * Math.PI * 0.8
          const newDir = direction.clone()
          newDir.applyEuler(new THREE.Euler(0, angle, (Math.random() - 0.5) * 0.3))
          newDir.normalize()
          addBranch(end.clone(), newDir, depth + 1, length * 0.65)
        }
      }
    }

    addBranch(new THREE.Vector3(0, -2, 0), new THREE.Vector3(0, 1, 0), 0, 1.2)
    return lines
  }, [])

  useFrame((_, delta) => {
    t.current += delta * 0.4
    if (groupRef.current) {
      groupRef.current.rotation.y = t.current * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {branches.map((branch, i) => {
        const points = branch.points
        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        const opacity = Math.max(0.1, 1 - branch.depth * 0.2)
        return (
          <primitive key={i} object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: '#a855f7', transparent: true, opacity }))} />
        )
      })}
      {/* Endpoint spheres */}
      {branches
        .filter(b => b.depth === 4)
        .map((branch, i) => (
          <mesh key={`sphere-${i}`} position={branch.points[1]}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial color="#a855f7" />
          </mesh>
        ))}
      {/* Root sphere */}
      <mesh position={[0, -2, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#a855f7" />
      </mesh>
    </group>
  )
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} style={{ background: 'transparent' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} color="#a855f7" intensity={2} />
      <BranchingTree />
      <OrbitControls autoRotate autoRotateSpeed={0.8} enableZoom={false} enablePan={false} />
    </Canvas>
  )
}
