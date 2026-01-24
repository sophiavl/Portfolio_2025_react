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
      className={`fixed bottom-0 left-0 w-full p-10 z-10 h-[93vh] pt-52 
      bg-(--color-primary) flex justify-center 
      transition-all duration-300
      ${navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}`}
    >
      <ul className='flex flex-col gap-10 items-center'>
        <li>
          <Link
            to='/about'
            className='menu-item'
            onClick={() => setNavbarOpen(false)}
          >
            ABOUT ME
          </Link>
        </li>
        <li>
          <Link
            to='/projects'
            className='menu-item'
            onClick={() => setNavbarOpen(false)}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            to='/contact'
            className='menu-item'
            onClick={() => setNavbarOpen(false)}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
