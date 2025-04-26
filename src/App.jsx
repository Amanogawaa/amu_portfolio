import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <section className="h-screen w-screen bg-gray-900 flex items-center justify-center">
      <Canvas>
        <mesh>
          <octahedronGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} color={"red"} intensity={1} />
      </Canvas>
    </section>
  );
}

export default App;
