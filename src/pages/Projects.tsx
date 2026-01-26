import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import FlowerRow from "../components/FlowerRow";
import Tag from "../components/Tag";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const projects = [
    {
      title: "VIRTUAL REALITY FOR LEARNING DUTCH",
      description:
        "A virtual reality experience that helps children of refugees learn Dutch in an engaging way. Set in familiar, real-life environments, learners interact with objects to hear and see words, reinforcing both listening and reading skills. The goal was to create an accessible, fun, and immersive learning experience.",
      mediaType: "video",
      mediaSrc: "/images/demo_spinoza_groep1.mp4",
      skills: ["BLENDER", "UNITY"],
    },
    {
      title: "GRADUATION PROJECT - JUST / LITERUURMUSEUM",
      description:
        "For my graduation project at the Literatuurmuseum, I redesigned the navigation structure of the digital exhibitions. Using user research, interaction design, and iterative prototyping in Figma, I created a clearer and more consistent interface that helps visitors understand the structure and relationships between collections, resulting in a more accessible user experience.",
      mediaType: "image",

      mediaSrc: "/images/literatuurmuseum.png",
      skills: ["FIGMA", "UI/UX DESIGN", "VUE"],
    },
    {
      title: "INTERNSHIP - CLAPPFORM",
      description:
        "During my internship at Clappform, I worked on a data visualization tool that provides insight into databases, data relationships, and role-based access control. Using Vue and Nuxt, I helped build interactive visualizations for ERDs, data lineage, and queries, turning complex technical structures into clear, usable interfaces for non-technical users.",
      mediaType: "image",
      mediaSrc: "/images/Clappform.png",
      skills: ["FIGMA", "VUE", "VUEFLOW", "NUXT"],
    },
    {
      title: "THIS WEBSITE",
      description:
        "I designed and developed this portfolio from scratch, starting with the visual design and interaction concepts in Figma and translating them into a responsive React application. Using GSAP, I created subtle, scroll-based animations that guide the user through my work and enhance the overall experience without distracting from the content. The focus of this project was to display my projects in an engaging way.",
      mediaType: "image",

      mediaSrc: "/images/portfolio-website.png",
      skills: ["FIGMA", "REACT", "GSAP"],
    },
    {
      title: "ADVENT CALENDER",
      description:
        "I designed and built an online advent calender to practise frontend development in a fun way.  Inspired by the joy of opening a new advent door each day, this project delivers a daily “piece of internet”, counting down to Christmas. Take a look at it here:",
      mediaType: "image",
      mediaSrc: "/images/advent.png",
      skills: ["FIGMA", "VUE"],
      link: "https://adventkalender-sophiavls-projects.vercel.app/",
    },
  ];

  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".project-slide");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: ".pin-container",
        scrub: 1,
        end: () => `+=${sections.length * window.innerWidth}`,
        onUpdate: (self) => {
          const index = Math.round(self.progress * (sections.length - 1));
          setActiveIndex(index);
        },
      },
    });
  }, []);
  return (
    <div
      ref={containerRef}
      className='pin-container h-dvh flex flex-col justify-between pt-12 px-4 md:px-8 md:pt-16 2xl:px-14 2xl:gap-6'
    >
      <div className='flex flex-col justify-between pb-3 gap-2'>
        <h1 className='text-(--color-accent)'>PROJECTS</h1>
        <div className='flex h-[5dvh] w-3/4 justify-between md:w-1/2'>
          {projects.map((_, i) => (
            <img
              key={i}
              className={`transition-opacity duration-300 w-auto h-full lg:w-10 ${
                i === activeIndex ? "opacity-100" : "opacity-50"
              }`}
              src='/images/LOGO.png'
              alt='logo'
            />
          ))}
        </div>
      </div>

      <div className='h-full overflow-hidden xl:h-[80dvh]'>
        <div
          ref={trackRef}
          className='flex w-fit h-full'
        >
          {projects.map((project, i) => (
            <section
              key={i}
              className='project-slide w-screen h-full flex items-start gap-12'
            >
              {/* Hier begint de projectcard */}
              <div className='flex flex-col border border-(--color-secondary) bg-(--color-primary) w-[90%] h-[98%]'>
                <div className='flex flex-col justify-center'>
                  <h3 className='pl-2'>{project.title}</h3>
                  <div className='h-px w-full bg-(--color-secondary)'></div>
                </div>
                <div className='flex flex-col justify-between w-full gap-6 h-full'>
                  <div className='flex flex-col gap-2 lg:gap-6 lg:flex-row '>
                    <div className='w-full h-42 md:h-[30%] order-1 overflow-hidden lg:order-2 lg:w-1/2 lg:h-full'>
                      {project.mediaType === "video" ? (
                        <video
                          src={project.mediaSrc}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className='w-full h-full object-cover'
                        />
                      ) : (
                        <img
                          src={project.mediaSrc}
                          alt={project.title}
                          className='w-full h-full object-cover'
                        />
                      )}
                    </div>

                    <div className='flex flex-col order-2 lg:order-1 lg:w-1/2 lg:gap-2'>
                      <p className='card-desc pl-2'>{project.description}</p>
                      {project.link && (
                        <a
                          href={project.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-accent pl-2 underline mt-2 card-desc'
                        >
                          {project.link}
                        </a>
                      )}
                      <div className='flex flex-wrap pl-2 gap-2 pt-4 lg:w-[40%]'>
                        {project.skills.map((skill) => (
                          <Tag
                            key={skill}
                            label={skill}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
