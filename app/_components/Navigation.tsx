import Link from "next/link";
import "./navigation.css";
import { spaceGrotesk } from "@/_fonts/fonts";

export const pages = [
  {
    id: 1,
    title: "about",
    url: "/about",
  },
  {
    id: 2,
    title: "music",
    url: "/music",
  },
  {
    id: 3,
    title: "writing",
    url: "/writing",
  },
  {
    id: 4,
    title: "tetrix",
    url: "/tetrix",
  },
  {
    id: 5,
    title: "contact",
    url: "/contact",
  },
];

export default function Navigation() {
  return (
    <>
      <div className="navigation-container">
        <nav className="navlinks">
          {pages.map(({ id, title, url }) => (
            <Link
              key={id}
              href={url}
              className={`navlink ${spaceGrotesk.variable}`}
            >
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
