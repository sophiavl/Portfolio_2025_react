import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../components/Button";
import ScrollTrigger from "gsap/ScrollTrigger";
import FlowerRow from "../components/FlowerRow";
import Tag from "../components/Tag";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const projects = [
    {
      slug: "virtual-reality-dutch",
      title: "VIRTUAL REALITY FOR LEARNING DUTCH",
      description:
        "A virtual reality experience that helps children of refugees learn Dutch in an engaging way. Set in familiar, real-life environments, learners interact with objects to hear and see words, reinforcing both listening and reading skills. The goal was to create an accessible, fun, and immersive learning experience.",
      mediaType: "video",
      mediaSrc: "/images/demo_VR.mp4",
      skills: ["BLENDER", "UNITY"],
    },
    {
      slug: "graduation-project",
      title: "GRADUATION PROJECT - JUST / LITERATUURMUSEUM",
      description:
        "For my graduation project at the Literatuurmuseum, I redesigned the navigation structure of the digital exhibitions. Using user research, interaction design, and iterative prototyping in Figma, I created a clearer and more consistent interface that helps visitors understand the structure and relationships between collections, resulting in a more accessible user experience.",
      mediaType: "image",

      mediaSrc: "/images/literatuurmuseum.png",
      skills: ["FIGMA", "UI/UX DESIGN", "VUE"],
    },
    {
      slug: "internship-clappform",
      title: "INTERNSHIP - CLAPPFORM",
      description:
        "During my internship at Clappform, I worked on a data visualization tool that provides insight into databases, data relationships, and role-based access control. Using Vue and Nuxt, I helped build interactive visualizations for ERDs, data lineage, and queries, turning complex technical structures into clear, usable interfaces for non-technical users.",
      mediaType: "image",
      mediaSrc: "/images/Clappform.png",
      skills: ["FIGMA", "VUE", "VUEFLOW", "NUXT"],
    },
    {
      slug: "this-website",
      title: "THIS WEBSITE",
      description:
        "I designed and developed this portfolio from scratch, starting with the visual design and interaction concepts in Figma and translating them into a responsive React application. Using GSAP, I created subtle, scroll-based animations that guide the user through my work and enhance the overall experience without distracting from the content. The focus of this project was to display my projects in an engaging way.",
      mediaType: "image",

      mediaSrc: "/images/portfolio-website.png",
      skills: ["FIGMA", "REACT", "GSAP"],
    },
    {
      slug: "advent-calender",
      title: "ADVENT CALENDER",
      description:
        "I designed and built an online advent calender to practise frontend development in a fun way.  Inspired by the joy of opening a new advent door each day, this project delivers a daily “piece of internet”, counting down to Christmas. Take a look at it here:",
      mediaType: "image",
      mediaSrc: "{/images/advent.png",
      skills: ["FIGMA", "VUE"],
      link: "https://adventkalender-sophiavls-projects.vercel.app/",
    },
  ];

  return (
    <div className='py-14 px-4 md:px-8 lg:py-24 2xl:px-14'>
      <h1 className='text-(--color-accent)'>PROJECTS</h1>
      <div className='flex flex-col gap-4'>
        {projects.map((project, i) => (
          <div
            key={i}
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            className='relative group overflow-hidden w-full border-12 border-(--color-accent)'
          >
            {project.mediaType === "video" ? (
              <video
                src={project.mediaSrc}
                autoPlay
                muted
                loop
                playsInline
                className='w-full h-80 object-cover md:h-96 lg:h-180'
              />
            ) : (
              <img
                src={project.mediaSrc}
                alt={project.title}
                className='w-full h-80 object-cover md:h-96 lg:h-180'
              />
            )}

            <div
              className={`
  absolute inset-0
  bg-(--color-accent)
  flex flex-col items-center justify-between gap-4 py-12 px-8
  transition-opacity duration-300 lg:py-24 lg:px-36 
  ${
    activeIndex === i
      ? "opacity-100 pointer-events-auto"
      : "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
  }
`}
            >
              <h3 className='text-(--color-primary) text-center'>
                {project.title}
              </h3>
              <div className='flex gap-2 '>
                {project.skills.map((skill, i) => (
                  <Tag
                    key={i}
                    label={skill}
                  ></Tag>
                ))}
              </div>
              <Link
                to={`/projects/${project.slug}`}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className='button cursor-pointer w-full h-10 px-6 py-4 bg-(--color-primary) flex justify-center items-center lg:h-24 lg:w-1/3'
              >
                <span className='button-text'>VIEW PROJECT</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
