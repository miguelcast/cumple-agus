import { useEffect, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import "./App.css";

import SectionA from "./SectionA";

export function App() {
  const playAudio = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100 && playAudio.current === 0) {
      let soundtrack = document.createElement("audio");
      soundtrack.volume = 0.5;
      soundtrack.src =
        "https://dominikgorczyca.github.io/Pac-Man/audio/game_start.wav";
      setTimeout(() => soundtrack.play(), 1000);
      playAudio.current = 1;
    }
  });

  return (
    <>
      <div className="pacman-frame">
        <div className="pacman-b">
          <div className="pacman-b"></div>
        </div>
      </div>

      <SectionA />
    </>
  );
}
