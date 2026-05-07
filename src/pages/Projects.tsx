import { motion, useAnimation } from "motion/react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects.ts";
import { useEffect, useRef, useState } from "react";
import styles from "./Projects.module.css";

const ArrowIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg
    className={className}
    viewBox='0 0 25 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M0.707031 24L23.707 1M23.707 1H0.707031M23.707 1V23.5'
      stroke='#61E531'
      strokeWidth='2'
    />
  </svg>
);

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const navigate = useNavigate();
  const mouseDownX = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseDownX.current = e.clientX;
  };

  const handleClick = (e: React.MouseEvent) => {
    // Alleen navigeren als het geen drag was (minder dan 5px bewogen)
    if (Math.abs(e.clientX - mouseDownX.current) < 5) {
      navigate(`/projects/${index}`);
    }
  };

  return (
    <motion.div
      // layoutId={`project-${index}`}
      layout={false}
      initial={{ opacity: 1 }} // ← add this
      animate={{ opacity: 1 }}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      className='shrink-0 max-w-[90vw] h-[90%] bg-(--color-secondary) rounded-sm overflow-hidden flex flex-col lg:w-[50vw]'
    >
      <div className='flex min-h-36 mr-8 justify-between items-start'>
        <div className='flex flex-col h-full justify-between pb-8 w-[90%]'>
          <h3 className='lightText'>{project.title}</h3>
          <p className='lightText subText'>{project.tags.join(" | ")}</p>
        </div>
        <ArrowIcon className=' w-6 h-6 lg:w-10 lg:h-10' />
      </div>
      <div className='flex-1 min-h-0 overflow-hidden'>
        {project.mediaType === "video" &&
        typeof project.mediaSrc === "string" ? (
          <video
            src={project.mediaSrc}
            autoPlay
            muted
            loop
            playsInline
            className='w-auto h-full object-cover'
          />
        ) : (
          <img
            src={project.mediaSrc}
            alt={project.title}
            className='w-auto h-full object-cover'
          />
        )}
      </div>
      {/* <img
        src={project.mediaSrc}
        className='object-cover flex-1 w-full'
      /> */}
    </motion.div>
  );
}

function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);
  const autoScrollRef = useRef<number | null>(null);
  const isUserInteracting = useRef(false);

  // Auto-scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    isUserInteracting.current = false; // reset bij elke mount (ook terugkomen van detail)

    const speed = 0.6;

    const tick = () => {
      if (!isUserInteracting.current) {
        track.scrollLeft += speed;
        if (track.scrollLeft >= track.scrollWidth - track.clientWidth) {
          track.scrollLeft = 0;
        }
      }
      autoScrollRef.current = requestAnimationFrame(tick);
    };

    // Kleine delay zodat layout klaar is, maar veel korter dan voorheen
    const timeout = setTimeout(() => {
      autoScrollRef.current = requestAnimationFrame(tick);
    }, 50); // was impliciet afhankelijk van ResizeObserver — nu altijd 50ms

    return () => {
      clearTimeout(timeout);
      if (autoScrollRef.current) cancelAnimationFrame(autoScrollRef.current);
    };
  }, []);

  // Desktop drag
  const onMouseDown = (e: React.MouseEvent) => {
    isUserInteracting.current = true;
    setIsDragging(true);
    dragStartX.current = e.clientX;
    scrollStartX.current = trackRef.current?.scrollLeft ?? 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    const delta = dragStartX.current - e.clientX;
    trackRef.current.scrollLeft = scrollStartX.current + delta;
  };

  const onMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => {
      isUserInteracting.current = false;
    }, 500); // was 2000
  };
  const onMouseLeave = () => {
    setIsDragging(false);
    setTimeout(() => {
      isUserInteracting.current = false;
    }, 500);
  };

  const onTouchEnd = () => {
    setTimeout(() => {
      isUserInteracting.current = false;
    }, 500); // was 2000
  };

  const onTouchStart = () => {
    isUserInteracting.current = true;
  };

  return (
    <>
      <motion.div
        className={styles.projects}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ pointerEvents: "none" }}
      >
        <motion.h1
          layoutId='projects-header'
          className='page-header'
          transition={{ duration: 1, ease: "easeOut" }}
        >
          PROJECTS
        </motion.h1>
      </motion.div>

      {/* Carousel staat BUITEN elke motion.div */}
      <div
        ref={trackRef}
        className='w-full fixed bottom-0 h-[70%] gap-4 flex px-4 overflow-x-scroll lg:h-[60%]'
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          userSelect: "none",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {[...projects, ...projects].map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            index={i % projects.length}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
