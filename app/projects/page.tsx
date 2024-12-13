import Link from "next/link";
import { PiArrowFatLinesLeftBold } from "react-icons/pi";
import "./projects-page.css";

export default function ProjectsPage() {
  return (
    <div className="project-page-container">
      <div className="page-header">
        <div className="icon">
          <Link href="/">
            <PiArrowFatLinesLeftBold size={40} />
          </Link>
        </div>
        <h1 className="title">Projects</h1>
      </div>

      <div className="flex flex-col justify-center items-center w-full max-w-lg mx-auto">
        <Link href="./tetrix">tetrix</Link>
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
