import Game from "./src/components/Game";
import Grid from "./src/components/Grid";

export default function Page() {
  return (
    <>
      <Grid />
      <div className="container">
        <section className="game-container">
          <Game />
        </section>
      </div>
    </>
  );
}
