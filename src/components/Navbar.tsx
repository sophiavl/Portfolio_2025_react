import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar({
  navbarOpen,
  setNavbarOpen,
}: {
  navbarOpen: boolean;
  setNavbarOpen: (open: boolean) => void;
}) {
  const location = useLocation();
  const activePage = location.pathname;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 flex justify-between items-center h-[6dvh] border-b border-(--color-stroke)/30 px-4 md:px-12 2xl:px-14 ${navbarOpen ? "bg-(--color-secondary)" : ""} ${activePage === "/" ? "bg-(--color-primary)" : "bg-(--color-secondary)"}`}
    >
      <Link
        to={"/contact"}
        className={navbarOpen ? "invisible" : ""}
      >
        <motion.p
          whileHover={{
            color: "#61E531",
            scale: 1.1,
            fontFamily: "Oswald",
            backgroundColor: activePage === "/" ? "var(--color-secondary)" : "",
          }}
          className={`${styles.navItem} hover:uppercase flex items-center justify-center h-[90%] px-4 ${
            activePage === "/" && !navbarOpen
              ? "text-(--color-secondary) bg-(--color-primary)"
              : "text-(--color-primary)" // 2. "bg-(--color-secondary)" eraf → geen gekleurde achtergrond
          }`}
        >
          CONTACT
        </motion.p>
      </Link>

      <Link
        to={"/"}
        className='absolute left-1/2 -translate-x-1/2'
      >
        <motion.p className={styles.name}>SVL</motion.p>
      </Link>

      <motion.button
        className='cursor-pointer'
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? (
          <div className='w-full h-full flex justify-center items-center'>
            <Icon
              icon='mdi:close'
              className='text-(--color-primary) w-12 h-12'
            ></Icon>
          </div>
        ) : (
          <motion.p
            className={`${styles.navItem} hover:uppercase flex items-center justify-center h-[90%] px-4 ${
              activePage === "/"
                ? "text-(--color-secondary) bg-(--color-primary)"
                : "text-(--color-primary)"
            }`}
            whileHover={
              navbarOpen
                ? undefined
                : {
                    color: "#61E531",
                    scale: 1.1,
                    fontFamily: "Oswald",
                    backgroundColor:
                      activePage === "/" ? "var(--color-secondary)" : "",
                  }
            }
          >
            MENU
          </motion.p>
        )}
      </motion.button>
    </nav>
  );
}

export default Navbar;
