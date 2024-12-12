import Link from "next/link";
import AudioPlayer from "./_components/audio-player/AudioPlayer";
import Background from "./_components/Background";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import { AudioProvider } from "./_contexts/AudioProvider";
import { specialElite } from "./_fonts/fonts";
import "./page.css";

export default function Home() {
  return (
    <div className="homepage-container">
      <header className="header-container">
        <Link href="/">
          <Logo src="/bow.webp" alt="le fog logo" height={160} width={160} />
        </Link>
        <Navigation />
      </header>
      <main className="homepage-content">
        <Background src="/fishhed.webp" alt="le fog" height={800} width={800} />
        <h1
          className={`page-title ${specialElite.className} underline underline-offset-8 decoration-2 max-w-sm`}
        >
          welcome. this is the website for le fog.
        </h1>
      </main>
      <footer className="homepage-footer">
        <AudioProvider>
          <AudioPlayer />
        </AudioProvider>
      </footer>
    </div>
  );
}
