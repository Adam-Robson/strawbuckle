import Game from "./src/components/Game";
import { GameProvider } from "./src/context/GameContext";
import "./page.css";

export default function Page() {
  return (
    <div className="container w-full min-h-screen max-w-screen-sm mx-auto">
      <p className="tetrix">TETRIx</p>
      <GameProvider>
        <div className="game-container">
          <Game />
        </div>
      </GameProvider>
    </div>
  );
}
