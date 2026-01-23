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
        "A virtual reality experience designed for children of refugees to learn Dutch in an engaging and interactive way. Each scene is modeled on real-life environments, allowing learners to encounter vocabulary that reflects their daily lives. In every scene, children pick up objects, hear the word pronounced, and see it spelled out, reinforcing both listening and reading skills. The goal was to create an accessible, fun, and immersive way to learn Dutch.",
      image: "/images/VR-foto.jpg",
      skills: ["BLENDER", "UNITY"],
    },
    {
      title: "GRADUATION PROJECT - JUST / LITERUURMUSEUM",
      description:
        "For my graduation project at the Literatuurmuseum, I redesigned the navigation structure of the museum’s digital exhibitions. I focused on improving usability and consistency across different collections by translating complex content into a clear, intuitive interface. Through user research, interaction design, and iterative prototyping in Figma, I created a navigation system that helps visitors understand where they are, what they can explore, and how exhibitions relate to each other. The result is a more accessible and user-friendly experience for a diverse audience.",
      image: "/images/literatuurmuseum.png",
      skills: ["FIGMA", "UI/UX DESIGN", "VUE"],
    },
    {
      title: "INTERNSHIP - CLAPPFORM",
      description:
        "During my internship at Clappform, I worked on a data visualization tool that gives users insight into databases, data relationships, and role-based access control. Using Vue and Nuxt, I helped build interactive visualizations for ERDs, data lineage, and queries, translating complex technical structures into understandable UI components. My work focused on creating scalable, maintainable front-end solutions that make complex data and permissions clear and usable for non-technical users.",
      image: "/images/Clappform.png",
      skills: ["FIGMA", "VUE", "VUEFLOW", "NUXT"],
    },
    {
      title: "THIS WEBSITE",
      description:
        "I designed and developed this portfolio from scratch, starting with the visual design and interaction concepts in Figma and translating them into a responsive React application. Using GSAP, I created subtle, scroll-based animations that guide the user through my work and enhance the overall experience without distracting from the content. The focus of this project was to display my projects in an engaging way.",
      image: "/images/portfolio-website.png",
      skills: ["FIGMA", "REACT", "GSAP"],
    },
    {
      title: "ADVENT CALENDER",
      description:
        "I designed and built an online advent calender to practise frontend development in a fun way.  Inspired by the joy of opening a new advent door each day, this project delivers a daily “piece of internet”, counting down to Christmas. Take a look at it here:",
      image: "/images/advent.png",
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
      className='pin-container h-dvh flex flex-col justify-between pt-16 px-6 md:px-8 2xl:px-14 2xl:gap-6'
    >
      <div className='flex flex-col gap-4 justify-between'>
        <h1 className='text-(--color-accent)'>PROJECTS</h1>
        <div className='flex h-[4dvh] w-full justify-between md:w-1/2'>
          {projects.map((_, i) => (
            <img
              key={i}
              className={`transition-opacity duration-300 w-8 h-auto lg:w-10 ${
                i === activeIndex ? "opacity-100" : "opacity-50"
              }`}
              src='/images/LOGO.png'
              alt='logo'
            />
          ))}
        </div>
      </div>

      <div className='h-[80dvh] overflow-hidden xl:h-[80dvh]'>
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
              <div className='flex flex-col pb-4 w-[90%] h-[90%]'>
                <div className='flex flex-col mb-2 gap-2'>
                  <h3>{project.title}</h3>
                  <div className='h-px w-full bg-(--color-secondary)'></div>
                </div>
                <div className='flex flex-col justify-between w-full gap-6 h-full'>
                  <div className='flex flex-col xl:flex-row gap-4'>
                    <div
                      className='w-full bg-cover h-[30vh] md:h-[40vh] md:w-full order-1 lg:w-[30vw] lg:h-[30vw] lg:order-2 xl:w-[40vw] xl:h-[60vh]'
                      style={{ backgroundImage: `url(${project.image})` }}
                    ></div>

                    <div className='flex flex-col order-2 lg:order-1 lg:w-1/2 lg:gap-2'>
                      <p className='card-desc'>{project.description}</p>
                      {project.link && (
                        <a
                          href={project.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-accent underline mt-2 card-desc'
                        >
                          {project.link}
                        </a>
                      )}
                    </div>
                  </div>

                  <div className='flex flex-wrap gap-2 lg:w-[40%]'>
                    {project.skills.map((skill) => (
                      <Tag
                        key={skill}
                        label={skill}
                      />
                    ))}
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
