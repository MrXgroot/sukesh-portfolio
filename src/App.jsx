import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Navbar />
      <div className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <footer className="py-10 text-center text-sm text-gray-500">
          © 2026 Sukesh. Built with React & Tailwind.
        </footer>
      </div>
    </>
  );
}

export default App;
