import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

type SkillBlockProps = {
  skill: string;
  className?: string;
  level: number;
};

export default function SkillBlock({
  skill,
  className,
  level,
}: SkillBlockProps) {
  const skillRef = useRef<HTMLDivElement>(null);
  const capitalizedSkill = skill.toUpperCase();

  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true });
      const flowers = gsap.utils.toArray<HTMLImageElement>(
        skillRef.current!.querySelectorAll(".skill-flower"),
      );

      gsap.set(flowers, { opacity: 0, y: 10 });
      const isXL = window.matchMedia("(min-width: 1280px)").matches;
      const labelTranslateY = isXL ? -40 : -23;

      tl.to(skillRef.current, {
        backgroundColor: "#990A3C",
        color: "#FFF6F2",
        duration: 0.3,
      });
      tl.to(
        ".label-text",
        {
          translateY: labelTranslateY,
          duration: 0.3,
        },
        "<",
      );

      tl.to(
        ".skill-flower",
        {
          y: 20,
          opacity: (i) => (i < level ? 1 : 0.3),
          stagger: 0.05,
          duration: 0.3,
        },
        "<",
      );

      skillRef.current!.onmouseenter = () => tl.play();
      skillRef.current!.onmouseleave = () => tl.reverse();
    },
    { scope: skillRef },
  );

  return (
    <div
      ref={skillRef}
      className={`skill-block h-28 w-full bg-(--color-primary) gap-8 flex flex-col justify-center items-center py-4 border border-(--color-secondary) ${className} xl:w-auto xl:h-52`}
    >
      <p className='label-text'>{capitalizedSkill}</p>
      <div className='absolute skill-flowers flex xl:gap-4'>
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            className='skill-flower xl:w-12'
            src='/images/LOGO.png'
            alt='Flower'
            width={30}
          />
        ))}
      </div>
    </div>
  );
}
