import Link from "next/link";
import "./navigation.css";
import { spaceGrotesk } from "@/_fonts/fonts";
import { navigation } from "@/_constants/navigation";

export default function Navigation() {
  return (
    <>
      <div className="navigation-container">
        <nav className="navlinks">
          {navigation.map(({ id, title, url }) => (
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
