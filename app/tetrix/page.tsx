import { GameProvider } from "@/tetrix/src/context/GameContext";
import Tetrix from "@/tetrix/src/components/Tetrix";
import "./tetrix-page.css";

export default function TetrixPage() {
  return (
    <div className="page-container">
      <GameProvider>
        <Tetrix />
      </GameProvider>
    </div>
  );
}
