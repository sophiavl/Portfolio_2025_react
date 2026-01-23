export default function MenuOverlay({
  navbarOpen,
  setNavbarOpen,
}: {
  navbarOpen: boolean;
  setNavbarOpen: (open: boolean) => void;
}) {
  return (
    <nav
      className={`fixed flex bottom-0 left-0 w-full p-10 z-10 h-[93vh] pt-52 bg-[var(--color-primary)] justify-center bg-opacity-100 transform delay-100 transition-all duration-300 ${navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}`}
    >
      <ul className='flex flex-col gap-10'>
        <li>
          <a
            href='/about'
            onClick={() => setNavbarOpen(false)}
          >
            <h1 className='menu-item'>ABOUT ME</h1>
          </a>
        </li>
        <li>
          <a
            href='/projects'
            onClick={() => setNavbarOpen(false)}
          >
            <h1 className='menu-item'>PROJECTS</h1>
          </a>
        </li>
        <li>
          <a
            href='/contact'
            onClick={() => setNavbarOpen(false)}
          >
            <h1 className='menu-item'>CONTACT</h1>
          </a>
        </li>
      </ul>
    </nav>
  );
}
