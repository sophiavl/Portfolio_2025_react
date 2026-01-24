import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

type ButtonProps = {
  label: string;
  to: string;
  className: string;
};

export default function Button({ label, to, className }: ButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  // const baseClasses = "h-18 px-6 py-[1rem] flex justify-center items-center";

  // const variantClasses =
  //   variant === "primary"
  //     ? "bg-[var(--color-primary)] border border-[var(--color-secondary)]"
  //     : "bg-[var(--color-accent)]";

  // const textColorClass =
  //   variant === "primary"
  //     ? "text-[var(--color-secondary)]"
  //     : "text-[var(--color-primary)]";

  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true });

      tl.to(buttonRef.current, {
        backgroundColor: "#990A3C",
        color: "#FFF6F2",
        border: "none",
        duration: 1,
      });

      buttonRef.current!.onmouseenter = () => tl.play();
      buttonRef.current!.onmouseleave = () => tl.reverse();
    },
    { scope: buttonRef },
  );
  return (
    <Link
      ref={buttonRef}
      to={to}
      className={`button cursor-pointer h-18 px-6 py-4 bg-(--color-primary) flex justify-center border-2 border-(--color-secondary) items-center ${className}`}
    >
      <span className='button-text'>{label}</span>
    </Link>
  );
}
