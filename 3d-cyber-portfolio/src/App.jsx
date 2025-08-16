import React from "react";

import SceneCanvas from "./components/SceneCanvas";
import ResumePanel from "./components/ResumePanel";
import DigitalRain from "./components/DigitalRain";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col">
      <DigitalRain />
      <SceneCanvas />
      <div className="absolute top-6 left-6 max-w-md p-4 panel rounded-2xl shadow-2xl">
        <ResumePanel />
      </div>
    </div>
  );
}
