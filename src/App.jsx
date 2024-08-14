import { Canvas } from "@react-three/fiber";
import { CameraControls, Environment } from "@react-three/drei";
import { useControls } from "leva";
import Cube from "./components/Cube";
import Sphere from "./components/Sphere";
import Door from "./components/Door";

export default function App() {
  const { width, height } = useControls({
    width: { value: 2, min: 1, max: 4 },
    height: { value: 4, min: 2, max: 8 },
  });

  return (
    <Canvas
      shadows
      gl={{ antialias: true }}
      camera={{ position: [3, 4, 12], fov: 35, near: 1, far: 240 }}
    >
      <color attach="background" args={["#242424"]} />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <Cube position={[-2, -0.8, 0]} scale={1.5} />
      <Sphere position={[2, 0, 0]} scale={1.5} />
      <Door position={[0, 0.5, -3]} width={width} height={height} />

      <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.5, 0]}
      >
        <planeGeometry args={[32, 32]} />
        <meshStandardMaterial color="#555555" />
      </mesh>

      <CameraControls />
      <Environment files={"cobblestone_street_night_2k.hdr"} background />
    </Canvas>
  );
}
