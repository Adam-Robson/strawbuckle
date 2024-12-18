"use client";
import { useGameContext } from "../context/GameContext";
import "./game.css";

export default function Game() {
  const { board, paused, gameOver, currentPiece, firstPieceHidden } =
    useGameContext();

  return (
    <div className={`gameboard ${paused || gameOver ? "paused" : ""}`}>
      {paused && <div className="paused-overlay">PAUSED</div>}
      {gameOver && <div className="gameover-overlay">GAME OVER</div>}
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
  );
}
