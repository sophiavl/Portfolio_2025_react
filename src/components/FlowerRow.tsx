import { useEffect, useState } from "react";

export default function FlowerRow() {
  const [iteration, setIteration] = useState<number>(5);

  const getIterationFromWidth = (width: number): number => {
    if (width < 640) {
      return 5;
    }
    if (width > 640 && width < 768) {
      return 6;
    }
    if (width > 768 && width < 1024) {
      return 7;
    }
    return 8;
  };

  useEffect(() => {
    const updateIteration = () => {
      setIteration(getIterationFromWidth(window.innerWidth));
    };
    updateIteration();
    window.addEventListener("resize", updateIteration);

    return () => window.removeEventListener("resize", updateIteration);
  }, []);
  return (
    <div className='flowers flex w-full justify-between'>
      {Array.from({ length: iteration }).map((_, i) => (
        <img
          key={i}
          className='flower w-8 h-auto lg:w-10 2xl:w-14'
          src='/images/LOGO.png'
          alt='logo'
        />
      ))}
    </div>
  );
}
