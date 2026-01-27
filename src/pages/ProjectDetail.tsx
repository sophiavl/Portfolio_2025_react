import { useParams, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

import Tag from "../components/Tag";

const projects = [
  {
    slug: "virtual-reality-dutch",
    title: "VIRTUAL REALITY FOR LEARNING DUTCH",
    description:
      "A virtual reality experience that helps children of refugees learn Dutch in an engaging way. Set in familiar, real-life environments, learners interact with objects to hear and see words, reinforcing both listening and reading skills. The goal was to create an accessible, fun, and immersive learning experience.",
    mediaType: "video",
    mediaSrc: "/images/demo_VR.mp4",
    media: [
      { type: "video", src: "/images/demo_VR.mp4" },
      { type: "image", src: "/images/keuken.png" },
    ],
    skills: ["BLENDER", "UNITY"],
  },
  {
    slug: "graduation-project",
    title: "GRADUATION PROJECT - JUST / LITERUURMUSEUM",
    description:
      "For my graduation project at the Literatuurmuseum, I redesigned the navigation structure of the digital exhibitions. Using user research, interaction design, and iterative prototyping in Figma, I created a clearer and more consistent interface that helps visitors understand the structure and relationships between collections, resulting in a more accessible user experience.",
    mediaType: "image",
    media: [{ type: "image", src: "/images/literatuurmuseum.png" }],
    mediaSrc: "/images/literatuurmuseum.png",
    skills: ["FIGMA", "UI/UX DESIGN", "VUE"],
  },
  {
    slug: "internship-clappform",
    title: "INTERNSHIP - CLAPPFORM",
    description:
      "During my internship at Clappform, I worked on a data visualization tool that provides insight into databases, data relationships, and role-based access control. Using Vue and Nuxt, I helped build interactive visualizations for ERDs, data lineage, and queries, turning complex technical structures into clear, usable interfaces for non-technical users.",
    media: [{ type: "image", src: "/images/Clappform.png" }],
    skills: ["FIGMA", "VUE", "VUEFLOW", "NUXT"],
  },
  {
    slug: "this-website",
    title: "THIS WEBSITE",
    description:
      "I designed and developed this portfolio from scratch, starting with the visual design and interaction concepts in Figma and translating them into a responsive React application. Using GSAP, I created subtle, scroll-based animations that guide the user through my work and enhance the overall experience without distracting from the content. The focus of this project was to display my projects in an engaging way.",
    media: [{ type: "image", src: "/images/portfolio-website.png" }],
    mediaSrc: "/images/portfolio-website.png",
    skills: ["FIGMA", "REACT", "GSAP"],
  },
  {
    slug: "advent-calender",
    title: "ADVENT CALENDER",
    description:
      "I designed and built an online advent calender to practise frontend development in a fun way.  Inspired by the joy of opening a new advent door each day, this project delivers a daily “piece of internet”, counting down to Christmas. Take a look at it here:",
    mediaType: "image",
    mediaSrc: "/images/advent.png",
    media: [{ type: "image", src: "/images/advent.png" }],
    skills: ["FIGMA", "VUE"],
    link: "https://adventkalender-sophiavls-projects.vercel.app/",
  },
];

function ProjectDetail() {
  const navigate = useNavigate();

  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className='px-4 py-20 flex flex-col gap-8 lg:gap-12 lg:py-28 lg:px-16'>
      <button
        onClick={() => navigate(-1)}
        className=' flex gap-2 tag-text items-center w-max text-sm opacity-70 hover:opacity-100 transition'
      >
        <Icon
          icon='material-symbols-light:arrow-back-rounded'
          width='36'
          height='36'
        />
        Back
      </button>

      <div className='flex flex-col gap-2 lg:gap-6'>
        <h1 className='text-(--color-accent)'>{project.title}</h1>
        <p className='project-desc'>{project.description}</p>
      </div>

      <div className='flex gap-2 lg:gap-4'>
        {project.skills.map((skill) => (
          <div className='flex w-max h-6 px-4 py-[0.26rem] bg-(--color-primary) justify-center items-center border border-(--color-secondary)/70 md:py-4'>
            <p className='tag-text text-(--color-secondary)/70'>{skill}</p>
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-6'>
        {project.media.map((item, index) =>
          item.type === "video" ? (
            <video
              key={index}
              src={item.src}
              controls
              className='w-full'
            />
          ) : (
            <img
              key={index}
              src={item.src}
              alt={`${project.title} media ${index + 1}`}
              className='w-full'
            />
          ),
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
