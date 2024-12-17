import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = ({ url }) => {
  const { scene } = useGLTF(url); // Load the .glb file
  return <primitive object={scene} />;
};

const ModelViewer = () => {
  return (
    <Canvas
      style={{ width: "100%", height: "100vh" }}
      camera={{ position: [0, 1, 5], fov: 50 }}
    >
      {/* Lights for the scene */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />

      {/* Model */}
      <Model url="/images/3d/Library.glb" />

      {/* Controls */}
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;
