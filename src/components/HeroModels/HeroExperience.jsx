import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from 'react';
import { useMediaQuery } from "react-responsive";
import * as THREE from 'three'; // Mouse Constants এর জন্য THREE ইমপোর্ট করা হয়েছে

import { Room } from "./room"; // আপনার ফাইলের নাম অনুযায়ী পাথ ঠিক রাখবেন
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    // 'shadows' প্রপটি যোগ করা হয়েছে যাতে HeroLights এর শ্যাডো ঠিকঠাক কাজ করে
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }} shadows>
      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#1a1a40" />
      
      {/* Configure OrbitControls to disable panning and control zoom based on device type */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={!isTablet} // Disables zoom on tablets
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
        
        // এখানে মাউস রিম্যাপ করা হয়েছে: Left Click = Rotate, Right/Middle Click = Zoom
        mouseButtons={{
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.DOLLY
        }}
      />

      <HeroLights />
      <Particles count={1000}></Particles>
      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroExperience;