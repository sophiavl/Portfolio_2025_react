import { Link } from "react-router-dom";

export default function MenuOverlay({
  navbarOpen,
  setNavbarOpen,
}: {
  navbarOpen: boolean;
  setNavbarOpen: (open: boolean) => void;
}) {
  return (
    <nav
      className={`fixed flex bottom-0 left-0 w-full p-10 z-10 h-[93vh] pt-52 bg-(--color-primary) justify-center bg-opacity-100 transform delay-100 transition-all duration-300 ${navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}`}
    >
      <ul className='flex flex-col gap-10'>
        <Link
          className='menu-item'
          to={"/about"}
        >
          ABOUT ME
        </Link>
        <Link
          className='menu-item'
          to={"/projects"}
        >
          PROJECTS
        </Link>
        <Link
          className='menu-item'
          to={"/contact"}
        >
          CONTACT
        </Link>
      </ul>
    </nav>
  );
}
