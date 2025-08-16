import React from "react";

export default function ControlsUI() {
  return (
    <div style={{ position: "absolute", right: 32, bottom: 32, zIndex: 20 }}>
      <div className="cpu-chip-ui relative flex flex-col items-center justify-center p-6 rounded-2xl shadow-2xl border-2 border-cyan-400 bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900/80 animate-glow">
        {/* CPU Pins */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-cyan-400 rounded-full shadow-md animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-cyan-400 rounded-full shadow-md animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -left-2 flex flex-col gap-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-cyan-400 rounded-full shadow-md animate-pulse"
              style={{ animationDelay: `${i * 0.12}s` }}
            />
          ))}
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-2 flex flex-col gap-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-cyan-400 rounded-full shadow-md animate-pulse"
              style={{ animationDelay: `${i * 0.12}s` }}
            />
          ))}
        </div>
        {/* CPU Core */}
        <div className="flex flex-col items-center">
          <div className="text-cyan-300 font-mono text-lg font-bold tracking-widest mb-2 select-none">
            CPU CONTROLS
          </div>
          <div className="text-xs text-cyan-100 font-mono text-center opacity-90">
            Drag to orbit
            <br />
            Scroll to zoom
            <br />
            Click frameworks for description
          </div>
        </div>
      </div>
    </div>
  );
}
