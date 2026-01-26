import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Navbar({
  navbarOpen,
  setNavbarOpen,
}: {
  navbarOpen: boolean;
  setNavbarOpen: (open: boolean) => void;
}) {
  return (
    <nav className='fixed top-0 left-0 w-full z-10 flex justify-between items-center h-[7dvh] bg-(--color-primary) px-4 md:px-6 border-b border-(--color-stroke)/30 xl:px-8 2xl:px-14'>
      <Link
        className='flex items-center gap-2 xl:gap-4'
        to={"/"}
      >
        <img
          src='/images/LOGO.png'
          alt='Logo'
          className='w-6 h-auto lg:w-10 2xl:w-12'
          width='32'
          height='36'
        ></img>
        <p className='nav-item'>SVL</p>
      </Link>

      <button
        className='lg:hidden'
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? (
          <Icon
            style={{ color: "#333333" }}
            icon='material-symbols-light:close'
            width='36'
            height='36'
          />
        ) : (
          <Icon
            icon='material-symbols-light:menu-rounded'
            width='36'
            height='36'
            style={{ color: "#333333" }}
          />
        )}
      </button>
      <div className='nav-item hidden lg:flex gap-8 '>
        <Link to={"/about"}>ABOUT ME</Link>
        <Link
          className='nav-item'
          to={"/projects"}
        >
          PROJECTS
        </Link>
        <Link
          to={"/contact"}
          className='nav-item'
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
