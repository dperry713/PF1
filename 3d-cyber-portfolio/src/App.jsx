import React from "react";

import SceneCanvas from "./components/SceneCanvas";
import ResumePanel from "./components/ResumePanel";
import DigitalRain from "./components/DigitalRain";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col relative">
      <DigitalRain />
      <SceneCanvas />
      <div className="absolute top-6 left-6 max-w-md p-4 panel rounded-2xl shadow-2xl
        sm:top-6 sm:left-6
        top-2 left-1 right-1 sm:right-auto
        w-[98vw] sm:w-auto
        ">
        <ResumePanel />
      </div>
    </div>
  );
}
