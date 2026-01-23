import { Icon } from "@iconify/react";

function Navbar({
  navbarOpen,
  setNavbarOpen,
}: {
  navbarOpen: boolean;
  setNavbarOpen: (open: boolean) => void;
}) {
  return (
    <nav className='fixed top-0 left-0 w-full z-10 flex justify-between items-center h-[7dvh] bg-(--color-primary) px-6 border-b border-(--color-stroke)/30 xl:px-8 2xl:px-14'>
      <a
        className='flex items-center gap-2 xl:gap-4'
        href='/'
      >
        <img
          src='/src/assets/images/logo.png'
          alt='Logo'
          className='w-8 h-auto lg:w-10 2xl:w-12'
          width='32'
          height='36'
        ></img>
        <p className='nav-item'>SVL</p>
      </a>

      <button
        className='lg:hidden'
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? (
          <Icon
            style={{ color: "#333333" }}
            icon='material-symbols-light:close'
            width='48'
            height='48'
          />
        ) : (
          <Icon
            icon='material-symbols-light:menu-rounded'
            width='42'
            height='42'
            style={{ color: "#333333" }}
          />
        )}
      </button>
      <div className='hidden lg:flex gap-8 '>
        <a
          className='nav-item'
          href='/about'
        >
          ABOUT ME
        </a>
        <a
          className='nav-item'
          href='/projects'
        >
          PROJECTS
        </a>
        <a
          className='nav-item'
          href='/contact'
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
