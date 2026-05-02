import { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.css";

function Hero() {
  const [activePage, setActivePage] = useState<null | "about" | "projects">(
    null,
  );

  const [hover, setHover] = useState<Boolean>(false);

  const navigate = useNavigate();

  const handleClick = (page: "about" | "projects") => {
    navigate(`/${page}`);
  };

  return (
    <div className='pt-18 flex flex-col justify-between h-dvh'>
      <picture>
        <source
          media='(max-width: 640px)'
          srcSet='/images/name-mobile.png'
        ></source>
        <img
          src='/images/name.png'
          alt='Sophia van Lieshout'
          width='100%'
          height='500'
          className='mx-auto px-4 md:px-12 2xl:px-14'
        />
      </picture>
      <p className='px-4 text-center w-full md:px-12 xl:text-left 2xl:px-14'>
        I combine UX and frontend development by translating user needs into
        clear and intuitive interfaces
      </p>
      <div className='flex px-0'>
        <motion.div
          onClick={() => handleClick("about")}
          layoutId='about'
          className={`${styles.heroButton} border border-r-(--color-secondary)`}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.h1
            className={styles.buttonText}
            layoutId='about-header'
          >
            ABOUT ME
          </motion.h1>
        </motion.div>
        <motion.div
          onClick={() => handleClick("projects")}
          transition={{ duration: 1, ease: "easeInOut" }}
          layoutId='projects'
          className={`${styles.heroButton}`}
        >
          <motion.h1
            layoutId='projects-header'
            className={styles.buttonText}
          >
            PROJECTS
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
