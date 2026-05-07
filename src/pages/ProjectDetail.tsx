import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import Tag from "../components/Tag";
import { projects } from "../data/projects.ts";
import PageWrapper from "../layouts/PageWrapper.tsx";

function TextBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className='flex flex-col gap-4 lg:flex-row lg:justify-between xl:w-[95%]'>
      <h3 className='text-(--color-primary) '>{title}</h3>
      <p className='lightText lg:max-w-[70%]'>{text}</p>
    </div>
  );
}
function MediaDisplay({
  mediaSrc,
  mediaType,
}: {
  mediaSrc: string | string[];
  mediaType: string;
}) {
  const sources = Array.isArray(mediaSrc) ? mediaSrc : [mediaSrc];

  return (
    <div className='flex gap-2 overflow-x-auto'>
      {sources.map((src, i) =>
        mediaType === "video" ? (
          <video
            key={i}
            src={src}
            autoPlay
            muted
            loop
            className='h-[50vh] w-auto object-cover xl:h-[70vh]'
          />
        ) : (
          <img
            key={i}
            src={src}
            className='h-[50vh] w-auto object-contain xl:h-[70vh]'
          />
        ),
      )}
    </div>
  );
}

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[Number(id)];

  if (!project) return null;

  return (
    <PageWrapper bgColor='var(--color-secondary)'>
      <motion.div
        layoutId={`project-${id}`}
        className='flex flex-col pt-18 inset-0 bg-(--color-secondary)'
      >
        <div className='w-full flex flex-col gap-6'>
          <Icon
            icon='mdi-light:arrow-up'
            width='48'
            height='48'
            className='text-(--color-accent)'
            style={{ transform: "rotate(-90deg)" }}
            onClick={() => navigate("/projects")}
          />

          <MediaDisplay
            mediaSrc={project.mediaSrc}
            mediaType={project.mediaType}
          />
        </div>
        <div className='page flex flex-col gap-2'>
          <div className='flex flex-col gap-12'>
            <div className='flex items-start'>
              <h2 className='lightText'>{project.title}</h2>
              <button
                onClick={() => navigate("/projects")}
                className='cursor-pointer z-10'
              ></button>
            </div>
            <div className='flex gap-2 flex-wrap'>
              {project.tags.map((tag) => (
                <Tag
                  key={tag}
                  label={tag}
                />
              ))}
            </div>
            <TextBlock
              title='Overview'
              text={project.overview}
            />
            <TextBlock
              title='Challenge'
              text={project.challenge}
            />
            <TextBlock
              title='Solution'
              text={project.solution}
            />
            {project.link && (
              <a
                href={project.link}
                target='_blank'
                className='text-(--color-accent) underline'
              >
                Bekijk project →
              </a>
            )}
          </div>
        </div>
        <div className='h-[10dvh]'></div>
      </motion.div>
    </PageWrapper>
  );
}

export default ProjectDetail;
