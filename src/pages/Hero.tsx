import Button from "../components/Button";
// import ProjectCard from "../components/ProjectCard";
import SkillBlock from "../components/SkillBlock";
import FlowerRow from "../components/FlowerRow";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const heroNameRef = useRef<HTMLHeadingElement | null>(null);
  const frontendRef = useRef<HTMLHeadingElement | null>(null);
  const uiUxRef = useRef<HTMLHeadingElement | null>(null);
  const skills = [
    { skillname: "REACT", level: 4 },
    { skillname: "TAILWINDCSS", level: 4 },
    { skillname: "FIGMA", level: 5 },
    { skillname: "GSAP", level: 3 },
    { skillname: "BLENDER", level: 2 },
    { skillname: "LARAVEL", level: 2 },
    { skillname: "HTML / CSS / JAVASCRIPT", level: 4 },
    { skillname: "VUE", level: 4 },
    { skillname: "TYPESCRIPT", level: 3 },
  ];

  // const skillBlocks = gsap.utils.toArray<HTMLElement>(".skill-block");
  const aboutText =
    "Hi! I’m Sophia, a front-end developer and UI/UX designer from the Netherlands. I love designing and developing clean, intuitive interfaces that actually make sense to the people using them. I'm collecting skills to be able to do this...";
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const nameSplit = new SplitText(heroNameRef.current, {
        type: "chars",
      });

      const frontendSplit = new SplitText(frontendRef.current, {
        type: "chars",
      });
      const uiUxSplit = new SplitText(uiUxRef.current, {
        type: "chars",
      });

      gsap.set(".skill-block", { opacity: 0, scale: 0.9 });
      gsap.set(".about-text", { opacity: 0, y: -20 });

      gsap.from(nameSplit.chars, {
        xPercent: 100,
        opacity: 0,
        x: -10,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(frontendSplit.chars, {
        xPercent: 100,
        opacity: 0,
        x: -10,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      });
      gsap.from(uiUxSplit.chars, {
        xPercent: 100,
        opacity: 0,
        x: -10,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out",
        delay: 1.3,
      });

      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".pin-container",
            start: "top 12%",
            end: "+=1800",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        (tl.to(
          ".flower",
          {
            rotation: 360,
            ease: "none",
            stagger: 0.09,
          },
          0,
        ),
          tl.to(
            ".about-text",
            {
              opacity: 1,
              y: 20,
              ease: "power2.out",
            },
            0,
          ),
          tl.to(
            ".about-text",
            {
              opacity: 0,
              y: 20,
              ease: "power2.out",
            },
            1,
          ));
        return () => tl.kill();
      });

      mm.add("(max-width: 1023px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".pin-container",
            start: "top 10%",
            end: "+=700",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        (tl.to(
          ".flower",
          {
            rotation: 360,
            ease: "none",
            duration: 4,
            stagger: 0.09,
          },
          0,
        ),
          tl.to(
            ".about-text",
            {
              opacity: 1,
              y: 20,
              ease: "power2.out",
            },
            0,
          ),
          tl.to(
            ".about-text",
            {
              opacity: 0,
              y: 20,
              ease: "power2.out",
            },
            1,
          ));
      });

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          ScrollTrigger.batch(".skill-block", {
            start: "top 70%",
            onEnter: (batch) =>
              gsap.to(batch, {
                opacity: 1,
                scale: 1,
                stagger: 0.15,
                duration: 0.6,
                ease: "power3.out",
              }),
            onLeaveBack: (batch) =>
              gsap.to(batch, {
                opacity: 0,
                scale: 0.9,
                duration: 0.3,
              }),
          });
        },
        "(max-width: 1023px)": () => {
          ScrollTrigger.batch(".skill-block", {
            start: "top 80%",
            onEnter: (batch) =>
              gsap.to(batch, {
                opacity: 1,
                scale: 1,
                stagger: 0.15,
                duration: 0.6,
                ease: "power3.out",
              }),
            onLeaveBack: (batch) =>
              gsap.to(batch, {
                opacity: 0,
                scale: 0.9,
                duration: 0.3,
              }),
          });
        },
      });

      const tlWork = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-together-section",
          start: "top 10%",
          end: "+=1000",
          pin: true,
          scrub: true,
          // markers: true,
        },
      });

      tlWork.from(".contact-button", { opacity: 0, y: 30, duration: 0.5 });
      tlWork.from(".not-convinced", { opacity: 0, y: 30, duration: 0.5 });
      tlWork.from(".about-project-buttons", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.5,
      });
    },
    { scope: containerRef },
  );
  return (
    <div
      ref={containerRef}
      className='flex flex-col gap-8 px-8 2xl:px-28'
    >
      <div className='h-dvh flex flex-col justify-between pt-24 items-start bg-primary'>
        <div className='flex flex-col items-start h-[90%] justify-between gap-12 w-full'>
          <div className='flex flex-col gap-8'>
            <div className='bg-(--color-primary) px-4 border border-(--color-secondary)'>
              <h1
                ref={heroNameRef}
                className='hero-name text-(--color-accent)'
              >
                SOPHIA VAN LIESHOUT
              </h1>
            </div>
            <div className='flex flex-col gap-2'>
              <h2 ref={frontendRef}>FRONTEND DEVELOPMENT</h2>
              <h2 ref={uiUxRef}>UI/UX DESIGN</h2>
            </div>
          </div>
          <img
            className='absolute top-80 left-0 -z-10 md:top-50 xl:top-20'
            src='/images/bloesem.svg'
            alt='flower tree'
          />
          {/* <FlowerRow></FlowerRow> */}
          <Button
            className='w-full lg:w-1/3 lg:h-[15%] xl:w-1/4'
            label='GET IN TOUCH'
            to='/contact'
          ></Button>
        </div>
      </div>
      <div className='intro-section flex flex-col gap-6'>
        <div className='pin-container relative flex flex-col gap-6 min-h-[80dvh] lg:h-[170dvh] lg:gap-24'>
          <FlowerRow></FlowerRow>
          <p className='about-text'>{aboutText}</p>
        </div>
        <div className='skill-starter pt-64 h-2'></div>
        <div className='skill-items flex flex-col gap-2 xl:inline-grid gap-y-3.75 gap-x-3.75 self-stretch grid-rows-[repeat(3,fit-content(100%))] grid-cols-3'>
          {[...Array(skills.length)].map((_, i) => (
            <SkillBlock
              level={skills[i].level}
              className='skill'
              skill={skills[i].skillname}
            />
          ))}
        </div>
        <div className='h-10'></div>

        <div className='work-together-section flex flex-col min-h-[240dvh] py-6 gap-18 lg:min-h-[205dvh]'>
          <div className='pin-work flex flex-col gap-6'>
            <h3 className='want-work text-(--color-accent)'>
              Want to work together?
            </h3>
            <Button
              className='contact-button w-auto h-12 lg:h-30 xl:w-160'
              label='GET IN TOUCH'
              to='/contact'
            ></Button>
          </div>
          <div className='flex flex-col gap-6'>
            <h3 className='not-convinced text-(--color-accent) text-start'>
              Not convinced yet?
            </h3>

            <div className='about-project-buttons flex flex-col w-full gap-4 lg:flex-row'>
              <Button
                className='w-auto h-12 lg:h-30 lg:w-1/2'
                label='SEE PROJECTS'
                to='/projects'
              ></Button>
              <Button
                className='w-auto h-12 lg:h-30 lg:w-1/2'
                label='ABOUT ME'
                to='/about'
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
