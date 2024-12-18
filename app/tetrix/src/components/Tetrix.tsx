"use client";
import Game from "./Game";
import { useGameContext } from "../context/GameContext";
import Instructions from "./Instructions";
import PreviewPiece from "./Preview";
import Controls from "./Controls";
import Stats from "./Stats";

import "./tetrix.css";

export default function Tetrix() {
  const {
    level,
    clearedLines,
    running,
    nextPiece,
    resetGame,
    handleStartGame,
    togglePause,
  } = useGameContext();

  return (
    <div className="tetrix-container">
      <Instructions />
      <PreviewPiece shape={nextPiece.shape} color={nextPiece.color} />

      <Game />

      <Controls
        running={running}
        resetGame={resetGame}
        handleStartGame={handleStartGame}
        togglePause={togglePause}
      />

      <Stats clearedLines={clearedLines} level={level} />
    </div>
  );
}
