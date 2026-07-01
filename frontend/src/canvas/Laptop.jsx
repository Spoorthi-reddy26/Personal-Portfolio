import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, useGLTF } from "@react-three/drei";

function LaptopModel() {
  const { scene } = useGLTF("/models/Laptop.glb");

  return (
    <primitive
      object={scene}
      scale={18}
      position={[1, -2, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export default function Laptop() {
  return (
    <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }}>
      <ambientLight intensity={2.5} />
      <directionalLight position={[5, 5, 5]} intensity={4} />
      <pointLight position={[-3, 2, 3]} intensity={2} color="#8b5cf6" />

      <Float speed={2} rotationIntensity={0.4} floatIntensity={1}>
        <LaptopModel />
      </Float>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
    </Canvas>
  );
}