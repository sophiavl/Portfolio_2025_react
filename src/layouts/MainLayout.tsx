import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import GridBackground from "../components/GridBackground";
import MenuOverlay from "../components/MenuOverlay";
import React, { useState } from "react";

export default function MainLayout() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className='relative'>
      <GridBackground />
      <Navbar
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
      />
      <MenuOverlay
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
      />
      <div className='relative z-0'>
        <Outlet />
      </div>
    </div>
  );
}
