export default function Cube(props) {
  return (
    <mesh {...props} castShadow>
      <boxGeometry />
      <meshStandardMaterial color="aqua" />
    </mesh>
  );
}
