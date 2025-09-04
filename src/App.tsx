import { Canvas } from "@react-three/fiber";
import "./App.css";

function App() {
  return (
    <>
      <Canvas>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
