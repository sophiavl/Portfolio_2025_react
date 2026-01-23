import { useEffect, useState } from "react";

function GridBackground() {
  const [iteration, setIteration] = useState<number>(5);

  const getIterationFromWidth = (width: number): number => {
    if (width < 640) {
      return 5;
    }
    if (width > 640 && width < 768) {
      return 8;
    }
    if (width > 768 && width < 1024) {
      return 10;
    }
    return 12;
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
    <div className='fixed inset-0 w-full h-full flex justify-between pointer-events-none -z-10'>
      {...Array.from({ length: iteration }).map((_, i) => (
        <div
          key={i}
          className='w-px h-dvh bg-[#2B1204]/12 origin-top'
        ></div>
      ))}
    </div>
  );
}

export default GridBackground;
