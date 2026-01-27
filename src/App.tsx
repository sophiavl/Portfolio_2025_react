import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path='/'
          element={<Hero />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
        <Route
          path='/projects'
          element={<Projects />}
        />
        <Route
          path='/projects/:slug'
          element={<ProjectDetail />}
        />
      </Route>
    </Routes>
  );
}

export default App;
