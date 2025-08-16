import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Float, Sparkles, Html } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import ControlsUI from "./ControlsUI";
import toolDescriptions from "./ToolDescriptions";

// Framework/tool icons as SVGs
const icons = [
  {
    name: "React",
    svg: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="18" cy="18" r="6" fill="#61DAFB" />
        <ellipse
          cx="18"
          cy="18"
          rx="16"
          ry="6"
          stroke="#61DAFB"
          strokeWidth="2"
        />
        <ellipse
          cx="18"
          cy="18"
          rx="6"
          ry="16"
          stroke="#61DAFB"
          strokeWidth="2"
          transform="rotate(60 18 18)"
        />
        <ellipse
          cx="18"
          cy="18"
          rx="6"
          ry="16"
          stroke="#61DAFB"
          strokeWidth="2"
          transform="rotate(120 18 18)"
        />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    svg: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="8" fill="#F7DF1E" />
        <text x="8" y="26" fontSize="18" fontWeight="bold" fill="#222">
          JS
        </text>
      </svg>
    ),
  },
  {
    name: "Python",
    svg: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="8" fill="#306998" />
        <text x="6" y="26" fontSize="18" fontWeight="bold" fill="#FFD43B">
          Py
        </text>
      </svg>
    ),
  },
  {
    name: "Flask",
    svg: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="8" fill="#222" />
        <text x="4" y="26" fontSize="18" fontWeight="bold" fill="#fff">
          Flask
        </text>
      </svg>
    ),
  },
  {
    name: "MySQL",
    svg: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="8" fill="#00758F" />
        <text x="2" y="26" fontSize="18" fontWeight="bold" fill="#fff">
          MySQL
        </text>
      </svg>
    ),
  },
  {
    name: "Git",
    svg: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="8" fill="#F05032" />
        <text x="8" y="26" fontSize="18" fontWeight="bold" fill="#fff">
          Git
        </text>
      </svg>
    ),
  },
  {
    name: "Linux",
    svg: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="8" fill="#222" />
        <text x="4" y="26" fontSize="18" fontWeight="bold" fill="#fff">
          Linux
        </text>
      </svg>
    ),
  },
];

function FloatingIcons() {
  return (
    <group>
      {icons.map((icon, i) => {
        const angle = (i / icons.length) * Math.PI * 2;
        const radius = 12;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius * 0.5;
        const z = (Math.random() - 0.5) * 8;
        return (
          <Float key={icon.name} floatIntensity={0.7} rotationIntensity={0.7}>
            <Html position={[x, y, z]} center style={{ pointerEvents: "none" }}>
              <div style={{ filter: "drop-shadow(0 2px 8px #0ff8)" }}>
                {icon.svg}
              </div>
            </Html>
          </Float>
        );
      })}
    </group>
  );
}

// List of icon image files in assets/icons (add more as needed)
const iconImages = [
  { name: "React", src: "/assets/icons/react.jpg" },
  { name: "JavaScript", src: "/assets/icons/js.webp" },
  { name: "Python", src: "/assets/icons/python.webp" },
  { name: "Flask", src: "/assets/icons/php_mysql.webp" },
  { name: "MySQL", src: "/assets/icons/sql.webp" },
  { name: "Git", src: "/assets/icons/github.jpg" },
  { name: "Linux", src: "/assets/icons/linux.webp" },
  { name: "Node.js", src: "/assets/icons/nodejs.jpg" },
  { name: "HTML5", src: "/assets/icons/html5.jpg" },
  { name: "CSS3", src: "/assets/icons/css.jpg" },
  { name: "Bootstrap", src: "/assets/icons/bootstrap.webp" },
  { name: "MongoDB", src: "/assets/icons/mongo.webp" },
  { name: "PostgreSQL", src: "/assets/icons/postgresql.webp" },
  { name: "Vue.js", src: "/assets/icons/vue.webp" },
  { name: "Angular", src: "/assets/icons/angular.webp" },
  { name: "VSCode", src: "/assets/icons/vscode.webp" },
];

function FloatingIconCubes() {
  const [active, setActive] = useState(null);
  const [hovered, setHovered] = useState(null);
  const textures = iconImages.map((icon) => useLoader(TextureLoader, icon.src));
  return (
    <group>
      {iconImages.map((icon, i) => {
        const angle = (i / iconImages.length) * Math.PI * 2;
        const radius = 14;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius * 0.5;
        const z = (Math.random() - 0.5) * 8;
        return (
          <Float
            key={icon.name}
            floatIntensity={hovered === i ? 2 : 0.7}
            rotationIntensity={hovered === i ? 2 : 0.7}
            speed={hovered === i ? 2 : 1}
          >
            <mesh
              position={[x, y, z]}
              scale={
                active === i
                  ? [2.8, 2.8, 2.8]
                  : hovered === i
                  ? [2.5, 2.5, 2.5]
                  : [2.2, 2.2, 2.2]
              }
              onPointerOver={() => setHovered(i)}
              onPointerOut={() => setHovered(null)}
              onClick={() => setActive(active === i ? null : i)}
            >
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial map={textures[i]} />
              {active === i && (
                <Html
                  center
                  position={[0, 1.2, 0]}
                  style={{ pointerEvents: "auto" }}
                >
                  <div
                    style={{
                      background: "rgba(20,30,40,0.95)",
                      color: "#0ff",
                      borderRadius: 8,
                      padding: "10px 18px",
                      fontSize: 16,
                      minWidth: 180,
                      boxShadow: "0 2px 16px #0ff6",
                      border: "1.5px solid #0ff6",
                      textAlign: "center",
                    }}
                  >
                    <strong>{icon.name}</strong>
                    <div style={{ color: "#fff", fontSize: 14, marginTop: 4 }}>
                      {toolDescriptions[icon.name]}
                    </div>
                  </div>
                </Html>
              )}
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}
export default function SceneCanvas() {
  return (
    <div className="canvas-wrap">
      <Canvas camera={{ position: [0, 4, 20], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <Suspense fallback={null}>
          <Stars
            radius={100}
            depth={40}
            count={4000}
            factor={4}
            saturation={0}
            fade
          />
          <Sparkles count={80} size={6} />
          <FloatingIconCubes />
        </Suspense>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
      <ControlsUI />
    </div>
  );
}
