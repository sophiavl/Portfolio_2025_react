import FlowerRow from "../components/FlowerRow";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function About() {
  useGSAP(() => {
    const scrollLength = window.innerHeight * 12;

    gsap.registerPlugin(ScrollTrigger);

    gsap.set([".about-me-header"], {
      top: "30%",
      left: "50%",
      xPercent: 50,
      yPercent: 50,
      scale: 3,
    });
    gsap.set([".about-me-1", ".about-me-2", ".about-me-3", ".about-me-4"], {
      opacity: 0,
      y: 20,
    });

    gsap.set([".picture-1", ".picture-2", ".picture-3", ".picture-4"], {
      opacity: 0,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".about-scroll",
          start: "top 7%",
          end: () => "+=" + scrollLength,
          pin: true,
          scrub: 1,
          markers: true,
          anticipatePin: 1,
        },
      })
      .to(
        ".about-me-header",
        {
          position: "relative",
          top: 0,
          left: 0,
          xPercent: 0,
          yPercent: 0,
          x: 0,
          y: 0,
          scale: 1,
          ease: "power3.out",
        },
        0,
      )
      .to(
        ".arrow",
        {
          opacity: 0,
        },
        1,
      )
      .to(
        ".about-me-1",
        {
          opacity: 1,
          y: 0,
        },
        1,
      )
      .to(
        ".picture-1",
        {
          opacity: 1,
        },
        1.5,
      )

      .to(
        ".about-me-1",
        {
          opacity: 0,
          y: -20,
        },
        3,
      )
      .to(
        ".about-me-2",
        {
          opacity: 1,
          y: 0,
        },
        4,
      )
      .to(
        ".about-me-2",
        {
          opacity: 0,
          y: -20,
        },
        5,
      )
      .to(
        ".about-me-3",
        {
          opacity: 1,
          y: 0,
        },
        6,
      )
      .to(
        ".picture-2",
        {
          opacity: 1,
        },
        6,
      )
      .to(
        ".picture-3",
        {
          opacity: 1,
        },
        8,
      )

      .to(
        ".about-me-3",
        {
          opacity: 0,
          y: -20,
        },
        9,
      )

      .to(
        ".about-me-4",
        {
          opacity: 1,
          y: 0,
        },
        10,
      )
      .to(
        ".picture-4",
        {
          opacity: 1,
        },
        10,
      )
      .to(
        ".about-me-4",
        {
          opacity: 0,
          y: -20,
        },
        12,
      );
  });

  return (
    <div className='flex flex-col about-scroll h-dvh py-14 gap-4 px-8 2xl:px-28'>
      {/* <FlowerRow></FlowerRow> */}
      <h1 className='about-me-header text-(--color-accent) z-10'>ABOUT ME</h1>
      <img
        src='/images/arrow.png'
        alt='arrow down'
        className='arrow absolute top-[27%] right-[40%] h-46 w-24'
      />
      <div className='flex flex-col lg:flex-row'>
        <div className='about-text-stage relative h-[30dvh] w-full lg:w-1/2'>
          <p className='about-me-1 absolute top-0 left-0'>
            Hi! I’m Sophia, a front-end developer and UI/UX designer from the
            Netherlands. I design and build user-friendly intuitive interfaces
            that actually make sense to the people using them.
          </p>
          <p className='about-me-2 absolute top-0 left-0 '>
            I work from lofi to hifi in iterations. I believe in simplicity over
            complexity, mobile-first, usability-focused, and usability testing.
          </p>
          <p className='about-me-3 absolute top-0 left-0 '>
            When I’m not designing or coding, I’m either working out, finding
            inspiration on Pinterest for yet another crochet project, or
            thinking about when I can escape to the mountains again.
          </p>
          <p className='about-me-4 absolute top-0 left-0 '>
            Currently looking for a place to grow as a front-end developer,
            contributing to the development of meaningful products with people
            who value both solid engineering and thoughtful design. (and good
            coffee).
          </p>
        </div>

        <div className='relative h-[45dvh] flex justify-center items-center lg:w-1/2 lg:h-[65dvh]'>
          <img
            className='picture-1 absolute rotate-3 top-0 h-full'
            src='/images/portfoliofoto_BW.jpg'
            alt='picture of me'
          />
          <img
            className='picture-2 absolute rotate-6 top-0 h-full'
            src='/images/paragliden.jpeg'
            alt='picture of me'
          />
          <img
            className='picture-3 absolute rotate-12 top-0 h-full'
            src='/images/klettersteig.jpeg'
            alt='picture of me'
          />
          <img
            className='picture-4 absolute top-0 h-full'
            src='/images/IMG_2225_BW.jpeg'
            alt='picture of me'
          />
        </div>
      </div>
    </div>
  );
}

export default About;
