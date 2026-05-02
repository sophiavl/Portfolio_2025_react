import { Link } from "react-router-dom";
import styles from "./MenuOverlay.module.css";
import { motion } from "motion/react";

export default function MenuOverlay({
  navbarOpen,
  setNavbarOpen,
}: {
  navbarOpen: boolean;
  setNavbarOpen: (open: boolean) => void;
}) {
  return (
    <nav
      className={`fixed bottom-0 left-0 w-full p-10 z-10 h-[94dvh] pt-36 
      bg-(--color-secondary) flex justify-center 
      transition-all duration-300
      ${navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}`}
    >
      <ul className='flex flex-col gap-10 items-center'>
        {[
          { to: "/about", label: "ABOUT ME" },
          { to: "/projects", label: "PROJECTS" },
          { to: "/contact", label: "CONTACT" },
        ].map(({ to, label }) => (
          <li key={to}>
            <motion.div
              className={`${styles.menuItem} text-(--color-primary)`}
              whileHover={{ color: "var(--color-accent)", scale: 1.1 }}
            >
              <Link
                to={to}
                onClick={() => setNavbarOpen(false)}
              >
                {label}
              </Link>
            </motion.div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
