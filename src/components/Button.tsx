import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

type ButtonProps = {
  label: string;
  to: string;
  className: string;
  newTab?: boolean;
};

export default function Button({
  label,
  to,
  className,
  newTab = false,
}: ButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  useGSAP(
    () => {
      if (!buttonRef.current) return;

      const tl = gsap.timeline({ paused: true });

      tl.to(buttonRef.current, {
        backgroundColor: "#990A3C",
        color: "#FFF6F2",
        border: "none",
        duration: 1,
      });

      buttonRef.current.onmouseenter = () => tl.play();
      buttonRef.current.onmouseleave = () => tl.reverse();
    },
    { scope: buttonRef },
  );
  return (
    <Link
      ref={buttonRef}
      to={to}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={`button cursor-pointer h-18 px-6 py-4 bg-(--color-primary) flex justify-center border border-(--color-secondary) items-center ${className}`}
    >
      <span className='button-text'>{label}</span>
    </Link>
  );
}
