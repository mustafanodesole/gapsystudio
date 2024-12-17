import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Text3D } from "@react-three/drei";
import * as THREE from "three";

const TextThreeD = () => {
  return (
    <Canvas>
    {/* Ambient light for better visibility */}
    <ambientLight intensity={0.5} />
    {/* Directional light */}
    <directionalLight position={[10, 10, 5]} intensity={1} />

    {/* 3D Text */}
    <Text3D font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json" size={1} height={0.5} curveSegments={12}>
      Hello, Three.js!
      <meshStandardMaterial color="orange" />
    </Text3D>
  </Canvas>
  );
};

export default TextThreeD;
