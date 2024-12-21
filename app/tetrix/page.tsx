import { GameProvider } from "@/tetrix/src/context/GameContext";
import Tetrix from "@/tetrix/src/components/Tetrix";
import "./tetrix.css";

export default function Page() {
  return (
    <div className="page-container">
      <GameProvider>
        <Tetrix />
      </GameProvider>
    </div>
  );
}
