import Link from "next/link";
import { PiArrowFatLinesLeftBold } from "react-icons/pi";
import "./projects-page.css";

export default function ProjectsPage() {
  return (
    <div className="projects-page-container">
      <div className="page-header">
        <div className="icon">
          <Link href="/">
            <PiArrowFatLinesLeftBold size={40} />
          </Link>
          <label className="icon-label">Back</label>
        </div>
        <h1 className="title">Projects</h1>
      </div>

      <div className="links-container">
        <Link href="/projects/tetrix">tetrix</Link>
        <Link href="/projects/tictactoe">tictactoe</Link>
        <Link
          className="projects-page-link-item"
          href="https://github.com/Collabo-Team/collabo"
        >
          collabo
        </Link>
        <Link
          className="projects-page-link-item"
          href="https://tally-ho-road-trips.netlify.app/"
        >
          tally-ho
        </Link>
      </div>
    </div>
  );
}
