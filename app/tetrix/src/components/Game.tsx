"use client";
import { useGameContext } from "../context/GameContext";
import Controls from "./Controls";
import "./game.css";
import Instructions from "./Instructions";
import PreviewPiece from "./Preview";
import Stats from "./Stats";

export default function Game() {
  const {
    board,
    level,
    clearedLines,
    paused,
    running,
    currentPiece,
    nextPiece,
    resetGame,
    handleStartGame,
    togglePause,
    firstPieceHidden,
  } = useGameContext();

  return (
    <div className="gameboard-container">
      <Instructions />
      <PreviewPiece shape={nextPiece.shape} color={nextPiece.color} />
      <div className="gameboard-wrapper">
        <div className={`gameboard ${paused ? "paused" : ""}`}>
          {paused && <div className="paused-overlay">PAUSED</div>}
          {board.map((row, i: number) =>
            row.map((col, j) => {
              const isCurrentPieceCell = currentPiece.shape.some(
                (r: number[], p: number) =>
                  r.some(
                    (value, c) =>
                      value !== 0 &&
                      currentPiece.position.y + p === i &&
                      currentPiece.position.x + c === j
                  )
              );
              return (
                <div
                  key={`${i}-${j}`}
                  className="cell"
                  style={{
                    backgroundColor:
                      firstPieceHidden && isCurrentPieceCell
                        ? "transparent"
                        : isCurrentPieceCell
                        ? currentPiece.color
                        : col ?? "transparent",
                  }}
                />
              );
            })
          )}
        </div>
      </div>
      <Controls
        togglePause={togglePause}
        running={running}
        clearedLines={clearedLines}
        level={level}
        resetGame={resetGame}
        handleStartGame={handleStartGame}
      />
      <Stats clearedLines={clearedLines} level={level} />
    </div>
  );
}
