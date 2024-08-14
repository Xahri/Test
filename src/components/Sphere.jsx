export default function Sphere(props) {
  return (
    <mesh {...props} castShadow>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
