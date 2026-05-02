interface Project {
   title: string;
  overview: string;
  mediaType: "video" | "image";
  mediaSrc: string | string[];
  tags: string[];
  challenge: string;
  solution: string;
  link?: string;
}

export const projects: Project[] = [
  {
    title: "VIRTUAL REALITY FOR LEARNING DUTCH",
    overview:
      "A virtual reality experience that helps children of refugees learn Dutch in an engaging way. Set in familiar, real-life environments, learners interact with objects to hear and see words, reinforcing both listening and reading skills. The goal was to create an accessible, fun, and immersive learning experience.",
    mediaType: "video",
    mediaSrc: "/images/demo_VR.mp4",
    tags: ["BLENDER", "UNITY"],
    challenge: "",
    solution: "",
  },
  {
    title: "Navigation structure online museum",
    overview:
      "For my graduation project at JUST, in collaboration with the Literatuurmuseum, I worked on improving the navigation experience of LiteratuurLab: an online platform containing digital exhibitions, articles, and literary content. The project focused on redesigning the platform’s navigation structure to create a more intuitive and consistent user experience.",
        challenge: "LiteratuurLab had grown organically over time, causing each exhibition to have its own navigation style or table of contents. This led to inconsistent user experiences, confusion, and poor discoverability of content. Users—primarily aged 50+—struggled with orientation, lacked a clear way to return to the overview, and often missed additional content after entering exhibitions through newsletters or social media.",
    solution: "Using UX research methods including literature studies, usability testing, A/B testing, and iterative prototyping, I designed a universal navigation system applicable across all exhibitions and articles. The final solution introduced a clear navigation bar with a consistent content structure, improved accessibility and readability, and a direct way to navigate back to the main LiteratuurLab overview. A proof of concept was developed in Vue.js and Nuxt.js to validate technical feasibility within JUST’s development environment.",

    mediaType: "image",
    mediaSrc: ["/images/LM_3.png", "/images/LM_1.png", "/images/LM_2.png"],
    tags: ["FIGMA", "UI/UX DESIGN", "VUE"],
  },
  {
    title: "Database visualizer / RBAC control system",
    overview:
      "During my internship at Clappform, I designed and developed two internal platform tools aimed at improving data accessibility and permission management. The project focused on creating a Database Visualizer to provide insight into database structures and relationships, alongside a redesigned role management interface for handling permissions more efficiently within the platform.",
    challenge: "Clappform’s existing platform lacked a clear visual overview of database relationships, making it difficult for users to understand how collections, attributes, and queries were connected. In addition, the existing RBAC permission system was highly nested and inefficient, requiring users to click through multiple layers to manage roles and permissions. As a result, role management was often handled through the API instead of the interface itself.",
        solution: "I designed and implemented an interactive Database Visualizer and a new permission management interface using Vue.js, Nuxt.js, and VueFlow. Both tools were developed through an iterative design thinking process, starting with user research, wireframes, and prototypes in Figma, followed by implementation and testing with Vitest and Cypress. The final result was a more intuitive and visual workflow for exploring databases and managing permissions within the platform.",  
    mediaType: "image",
    mediaSrc: "/images/Clappform.png",
    tags: ["FIGMA", "VUE", "VUEFLOW", "NUXT"],
  },
  {
    title: "Portfolio website",
    overview:
      "I designed and developed this portfolio from scratch, starting with the visual design and interaction concepts in Figma and translating them into a responsive React application. Using GSAP, I created subtle, scroll-based animations that guide the user through my work and enhance the overall experience without distracting from the content. The focus of this project was to display my projects in an engaging way.",
    mediaType: "image",

    mediaSrc: "/images/portfolio-website.png",
    tags: ["FIGMA", "REACT", "GSAP"],
    challenge: "",
    solution: "",
  },
  {
    title: "ADVENT CALENDER",
    overview:
      "I designed and built an online advent calender to practise frontend development in a fun way.  Inspired by the joy of opening a new advent door each day, this project delivers a daily “piece of internet”, counting down to Christmas. Take a look at it here:",
    mediaType: "image",
    mediaSrc: "/images/advent.png",
    tags: ["FIGMA", "VUE"],
    challenge: "",
    solution: "",
    link: "https://adventkalender-sophiavls-projects.vercel.app/",
  },
];