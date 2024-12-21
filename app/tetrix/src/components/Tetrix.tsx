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
      <h1 className="title">Tetrix</h1>
      <PreviewPiece shape={nextPiece.shape} color={nextPiece.color} />
      <Stats clearedLines={clearedLines} level={level} />

      <Game />
      <Controls
        running={running}
        resetGame={resetGame}
        handleStartGame={handleStartGame}
        togglePause={togglePause}
      />
      <Instructions />
    </div>
  );
}
