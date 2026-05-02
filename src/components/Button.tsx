import { useRef } from "react";
import { motion } from "motion/react";

import { Link } from "react-router-dom";

type ButtonProps = {
  label: string;
  to: string;
  className: string;
  newTab?: boolean;
  borderColor: string;
  textColor: string;
};

export default function Button({
  label,
  to,
  borderColor,
  className,
  newTab = false,
  textColor,
}: ButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={buttonRef}
      whileHover={{
        backgroundColor: "var(--color-accent)",
        color: "var(--color-secondary)",
      }}
      className={`button px-8 py-1 cursor-pointer border ${borderColor} ${textColor} flex justify-center items-center ${className} lg:py-4 lg:border-2`}
    >
      <Link
        to={to}
        className='w-full h-full flex justify-center items-center'
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        <span className='button-text'>{label}</span>
      </Link>
    </motion.div>
  );
}
