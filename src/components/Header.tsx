import { url } from "inspector";
import Logo from "./Logo";
import Link from "next/link";

const routes = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "All Events",
    url: "/events/all",
  },
];
export const Header = () => {
  return (
    <header className="flex justify-between p-4">
      <Logo />
      <nav>
        <ul className="flex gap-6">
          {routes.map((route) => (
            <Link href={route.url}>
              <li key={route.url}>{route.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};
