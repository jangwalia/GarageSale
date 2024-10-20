"use client";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Chip from "@mui/material/Chip";

const routes = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "All Events",
    url: "app/events/all",
  },
];
export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between p-4">
      <Logo />
      <section className="flex gap-x-6">
        <nav className="h-full">
          <ul className="flex gap-x-6 h-full">
            {routes.map((route, index) => (
              <li
                className={`relative${
                  route.url === pathname ? "text-white" : "text-white/50"
                }
                  `}
                key={route.url}
              >
                <Link key={index} href={route.url}>
                  {route.name}
                </Link>
                {route.url === pathname ? (
                  <motion.div
                    layoutId="headerActiveLink"
                    className="bg-accent mt-2 h-1 w-full bottom-0"
                  ></motion.div>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/SignIn">
          <Chip label="Sign In" variant="outlined" color="primary" />
        </Link>
      </section>
    </header>
  );
};
