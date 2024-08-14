import { useRef, useEffect } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Door({ width, height, ...props }) {
  const doorRef = useRef();
  const texture = useTexture("/oak_veneer_01_diff_1k.jpg");

  useEffect(() => {
    // Adjust the texture scaling based on the door dimensions
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(width / 5, height / 4); // Adjust the divisor to control texture scaling
    texture.needsUpdate = true; // Ensure the texture updates
  }, [width, height, texture]);

  return (
    <mesh ref={doorRef} {...props} castShadow>
      <boxGeometry args={[width, height, 0.1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
