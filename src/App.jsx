import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import portfolio from "./data/portfolio.json";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { CustomCursor } from "./components/layout/CustomCursor";
import { Footer } from "./components/layout/Footer";
import { LoadingScreen } from "./components/layout/LoadingScreen";
import { NavBar } from "./components/layout/NavBar";
import { Spotlight } from "./components/layout/Spotlight";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = portfolio.site.title;
    updateMeta("description", portfolio.site.description);
    updateMeta("theme-color", portfolio.site.themeColor);

    const timer = window.setTimeout(() => setLoading(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isVisible={loading} name={portfolio.personal.name} />
      <Spotlight />
      <CustomCursor />
      <NavBar navigation={portfolio.navigation} personal={portfolio.personal} />
      <motion.main
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.12 }}
      >
        <Hero
          hero={portfolio.hero}
          personal={portfolio.personal}
          socials={portfolio.socials}
        />
        <About about={portfolio.about} stats={portfolio.stats} />
        <Skills skills={portfolio.skills} techStack={portfolio.techStack} />
        <Projects projects={portfolio.projects} />
        <Experience
          experience={portfolio.experience}
          achievements={portfolio.achievements}
        />
        <Contact
          contact={portfolio.contact}
          personal={portfolio.personal}
          socials={portfolio.socials}
        />
      </motion.main>
      <Footer
        footer={portfolio.footer}
        personal={portfolio.personal}
        socials={portfolio.socials}
      />
    </>
  );
}

function updateMeta(name, content) {
  const element = document.querySelector(`meta[name="${name}"]`);
  if (element) {
    element.setAttribute("content", content);
  }
}

export default App;
