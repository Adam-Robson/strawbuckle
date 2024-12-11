import AudioPlayer from "./_components/audio-player/AudioPlayer";
import Background from "./_components/Background";
import Navigation from "./_components/Navigation";
import { AudioProvider } from "./_contexts/AudioProvider";
import "./page.css";

export default function Home() {
  return (
    <div className="homepage-container">
      <header>
        <Navigation />
      </header>
      <main>
        <Background src="/fishhed.webp" alt="le fog" height={900} width={900} />
      </main>
      <footer className="footer">
        <AudioProvider>
          <AudioPlayer />
        </AudioProvider>
      </footer>
    </div>
  );
}
