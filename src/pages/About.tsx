import styles from "./About.module.css";
import React, { useRef } from "react";
import PageWrapper from "../layouts/PageWrapper.tsx";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

function About() {
  const sequenceRef = useRef(null);
  const imgLeftRef = useRef(null);
  const imgRightRef = useRef(null);
  const textRef = useRef(null);

  const { scrollYProgress: seqProgress } = useScroll({
    target: sequenceRef,
    offset: ["start end", "end end"],
  });
  const { scrollYProgress: textProgress } = useScroll({
    target: textRef,
    offset: ["start 0.85", "end 0.3"],
  });

  const text = [
    "Hi! My name is Sophia van Lieshout",
    "\n",
    "I'm a developer from the Netherlands, focused on frontend and UI/UX. I build interfaces that feel obvious, because the best design is the kind people don't notice.",
    "\n\n",
    "Besides that, I'm an allround hobbyist. If I have not tried a specific hobby, I'm probably planning to soon. So in my free time, you will probably find me crocheting yet another clothing top, making stuff out of clay or trying out a new sport.",
  ];
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const headerFilter = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["blur(0px)", "blur(40px)"],
  );
  const imgFilter = useTransform(
    scrollYProgress,
    [0.8, 1],
    ["blur(0px)", "blur(40px)"],
  );

  function ScrubText({
    text,
    progress,
    className,
  }: {
    text: string[];
    progress: MotionValue<number>;
    className?: string;
  }) {
    // Splits alleen de tekst-segmenten in woorden, sla \n op als marker
    const parts: { word: string; isBreak: boolean }[] = [];
    text.forEach((seg) => {
      if (seg === "\n" || seg === "\n\n") {
        parts.push({ word: seg, isBreak: true });
      } else {
        seg.split(" ").forEach((w) => parts.push({ word: w, isBreak: false }));
      }
    });

    const wordCount = parts.filter((p) => !p.isBreak).length;
    let wordIndex = 0;

    return (
      <span className={className}>
        {parts.map((part, i) => {
          if (part.isBreak) {
            return part.word === "\n\n" ? (
              <React.Fragment key={i}>
                <br />
                <br />
              </React.Fragment>
            ) : (
              <br key={i} />
            );
          }

          const start = wordIndex / wordCount;
          const end = (wordIndex + 1) / wordCount;
          wordIndex++;

          const opacity = useTransform(progress, [start, end], [0.15, 1]);

          return (
            <motion.span
              key={i}
              style={{ opacity }}
              className='inline-block mr-[0.25em]'
            >
              {part.word}
            </motion.span>
          );
        })}
      </span>
    );
  }

  //images fromt sides to middle
  // Plaatjes schuiven eerst van zijkanten naar midden (0.0 → 0.15)
  const leftX = useTransform(seqProgress, [0.0, 0.15], [-100, 0]);
  const leftOpacity = useTransform(seqProgress, [0.0, 0.15], [0, 1]);
  const rightX = useTransform(seqProgress, [0.0, 0.15], [100, 0]);
  const rightOpacity = useTransform(seqProgress, [0.0, 0.15], [0, 1]);

  // Daarna schuiven ze omhoog naar de bovenkant (0.15 → 0.35)
  const imagesY = useTransform(seqProgress, [0.15, 0.25], ["0vh", "-30vh"]);

  // Overlay pas zichtbaar als plaatjes boven staan (0.35 → 0.5)
  const overlayOpacity = useTransform(
    seqProgress,
    [0.45, 0.5, 0.9, 1],
    [0, 1, 1, 0],
  );

  // Tekst scrub na overlay fade-in
  const overlayTextProgress = useTransform(seqProgress, [0.5, 0.9], [0, 1]);

  // Nieuwe plaatjes
  const newImgOpacity = useTransform(seqProgress, [0.85, 1], [0, 1]);

  return (
    <PageWrapper bgColor='var(--color-secondary)'>
      <motion.div
        ref={scrollRef}
        layoutId='about'
        transition={{ duration: 1, ease: "easeIn" }}
        className={styles.about}
      >
        <motion.h1
          style={{ filter: headerFilter }}
          layoutId='about-header'
          className='page-header'
          transition={{ duration: 1, ease: "easeOut" }}
        >
          ABOUT ME
        </motion.h1>
        <motion.img
          style={{ filter: imgFilter }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          src='/images/IMG_1310.JPG'
          alt='picture of sophia'
          className='object-cover pt-24 w-[90%] lg:w-1/2 '
        ></motion.img>

        <motion.div className='h-[10dvh] w-full'></motion.div>
        <motion.p
          ref={textRef}
          className='lightText w-[90%] text-center pt-12 lg:w-1/2'
        >
          <ScrubText
            text={text}
            progress={textProgress}
          />
        </motion.p>

        <div
          ref={sequenceRef}
          style={{ height: "400vh", width: "100%", marginTop: "20vh" }}
        >
          <div
            style={{
              position: "sticky",
              top: 0,
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Image pair + overlay stacked with relative/absolute */}
            <div className='relative w-[90%] lg:w-[50%]'>
              {/* Original sliding images */}
              <motion.div
                className='flex justify-between w-full mt-100'
                style={{ y: imagesY }}
              >
                <motion.img
                  ref={imgLeftRef}
                  style={{ x: leftX, opacity: leftOpacity }}
                  src='/images/IMG_1182.JPG'
                  className='object-cover w-[48%]'
                />
                <motion.img
                  ref={imgRightRef}
                  style={{ x: rightX, opacity: rightOpacity }}
                  src='/images/IMG_1200.JPG'
                  className='object-cover w-[48%]'
                />
              </motion.div>

              {/* Overlay rectangle + scrub text */}
              <motion.div
                className='h-[40%] w-full lg:w-[70%]  m-auto'
                style={{
                  opacity: overlayOpacity,
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "var(--color-secondary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2rem",
                }}
              >
                <motion.p className='lightText text-center'>
                  <ScrubText
                    text={[
                      "I finished my bachelors in computer science in Leiden, the Netherlands",
                      "\n\n",
                      "Right now I'm based in The Hague, the Netherlands and actively looking for my next jump!",
                    ]}
                    progress={overlayTextProgress}
                  />
                </motion.p>
              </motion.div>

              <motion.div
                style={{
                  opacity: newImgOpacity,
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src='/images/paragliden.png'
                  className='object-cover w-full mt-50 h-[65%]'
                />
                {/* <img
                  src='/images/klettersteig.jpeg'
                  className='object-cover w-[48%]'
                /> */}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </PageWrapper>
  );
}

export default About;
