import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Check,
  ChevronLeft,
  ChevronRight,
  Cpu,
  FileDown,
  Github,
  Linkedin,
  Mail,
  Menu,
  MonitorUp,
  Send,
  Server,
  Terminal,
  X
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import portfolio from "./data/portfolio.json";

const iconMap = {
  Github,
  Linkedin,
  Mail,
  FileDown,
  Send,
  ArrowDownRight,
  ArrowUpRight
};

const sections = ["about", "skills", "projects", "experience", "contact"];

function App() {
  const [activeSection, setActiveSection] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(
    portfolio.projects.featuredId || portfolio.projects.items[0]?.id
  );
  const capability = useDeviceCapability();
  const currentProject =
    portfolio.projects.items.find((project) => project.id === activeProject) ||
    portfolio.projects.items[0];
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    document.title = portfolio.site.title;
    setMeta("description", portfolio.site.description);
    setMeta("theme-color", "#f7f4ed");
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-24% 0px -58% 0px", threshold: [0.18, 0.32, 0.5] }
    );

    ["top", ...sections].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      if (!document.activeElement?.closest("[data-project-browser]")) return;

      const projects = portfolio.projects.items;
      const index = projects.findIndex((project) => project.id === activeProject);
      const nextIndex =
        event.key === "ArrowRight"
          ? (index + 1) % projects.length
          : (index - 1 + projects.length) % projects.length;

      setActiveProject(projects[nextIndex].id);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject]);

  return (
    <>
      <motion.div className="scroll-meter" style={{ scaleX: scrollYProgress }} />
      <Atmosphere enabled={capability === "high"} />
      <Nav
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects
          activeProject={currentProject}
          setActiveProject={setActiveProject}
        />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

function Nav({ activeSection, menuOpen, setMenuOpen }) {
  const items = portfolio.navigation.filter((item) =>
    ["#about", "#skills", "#projects", "#experience", "#contact"].includes(
      item.href
    )
  );

  return (
    <header className="nav-shell">
      <a className="mark" href="#top" aria-label="Sukesh Acharya home">
        <span>{portfolio.personal.initials}</span>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {items.map((item) => {
          const id = item.href.slice(1);
          return (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeSection === id ? "page" : undefined}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      <a className="nav-action" href={`mailto:${portfolio.personal.email}`}>
        <Mail size={16} />
        Contact
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {menuOpen ? (
        <div className="mobile-menu">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href={`mailto:${portfolio.personal.email}`}>Contact</a>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  const hero = portfolio.hero;
  const featured = portfolio.projects.items.find(
    (project) => project.id === portfolio.projects.featuredId
  );
  const y = useTransform(useScroll().scrollYProgress, [0, 0.38], [0, -82]);

  return (
    <section id="top" className="hero-section section-pad">
      <motion.div className="hero-grid" style={{ y }}>
        <div className="hero-copy">
          <p className="kicker">{hero.eyebrow}</p>
          <h1>{portfolio.personal.name}</h1>
          <p className="hero-line">{hero.headline}</p>
          <p className="hero-summary">{hero.summary}</p>

          <div className="hero-actions">
            <a className="button primary" href="#projects">
              See the work <ArrowDownRight size={17} />
            </a>
            <a className="button ghost" href={`mailto:${portfolio.personal.email}`}>
              Start a conversation <Mail size={17} />
            </a>
          </div>
        </div>

        <aside className="proof-panel" aria-label="Portfolio proof points">
          <div className="proof-image">
            <img
              src={portfolio.personal.avatar}
              alt={portfolio.personal.name}
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="proof-content">
            <span>Available from {portfolio.personal.location}</span>
            <strong>{portfolio.personal.availability}</strong>
          </div>
          <dl>
            {hero.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.value}</dt>
                <dd>{metric.label}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </motion.div>

      {featured ? (
        <a className="hero-feature" href="#projects">
          <span>Featured build</span>
          <strong>{featured.title}</strong>
          <em>{featured.impact}</em>
        </a>
      ) : null}
    </section>
  );
}

function About() {
  const about = portfolio.about;

  return (
    <section id="about" className="section-pad split-section">
      <SectionIntro eyebrow="Signal" title="A full-stack developer with systems taste and product instincts." />

      <div className="narrative">
        {about.story.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <div className="fact-strip">
          {about.facts.map((fact) => (
            <div key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const categories = portfolio.skills.categories;
  const icons = [MonitorUp, Server, Cpu];

  return (
    <section id="skills" className="section-pad skills-section">
      <SectionIntro
        eyebrow="Capability map"
        title="The stack is broad, but the through-line is speed, real-time behavior, and clean product surfaces."
      />

      <div className="capability-grid">
        {categories.map((category, index) => {
          const Icon = icons[index] || Braces;
          return (
            <article className="capability" key={category.name}>
              <Icon size={22} />
              <div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
              <ul>
                {category.items.map((skill) => (
                  <li key={skill.name}>
                    <span>{skill.name}</span>
                    <meter min="0" max="100" value={skill.level}>
                      {skill.level}%
                    </meter>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div className="tech-line" aria-label="Technology stack">
        {portfolio.techStack.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>
    </section>
  );
}

function Projects({ activeProject, setActiveProject }) {
  const projects = portfolio.projects.items;
  const activeIndex = projects.findIndex((project) => project.id === activeProject.id);

  const move = (direction) => {
    const nextIndex =
      direction === "next"
        ? (activeIndex + 1) % projects.length
        : (activeIndex - 1 + projects.length) % projects.length;
    setActiveProject(projects[nextIndex].id);
  };

  return (
    <section id="projects" className="section-pad projects-section">
      <div className="project-header">
        <SectionIntro
          eyebrow="Selected work"
          title="Four builds, four different engineering muscles."
        />
        <div className="project-controls">
          <button type="button" onClick={() => move("prev")} aria-label="Previous project">
            <ChevronLeft size={18} />
          </button>
          <span>
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
          <button type="button" onClick={() => move("next")} aria-label="Next project">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="project-browser" data-project-browser tabIndex="0">
        <div className="project-list" role="tablist" aria-label="Projects">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              role="tab"
              aria-selected={project.id === activeProject.id}
              onClick={() => setActiveProject(project.id)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{project.title}</strong>
              <em>{project.category}</em>
            </button>
          ))}
        </div>

        <motion.article
          className="case-study"
          key={activeProject.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProjectVisual project={activeProject} />
          <div className="case-copy">
            <p>
              {activeProject.category} / {activeProject.year}
            </p>
            <h3>{activeProject.title}</h3>
            <div className="case-grid">
              <ProjectStory label="Problem" text={activeProject.summary} />
              <ProjectStory label="Solution" text={activeProject.impact} />
            </div>
            <div className="case-grid">
              <ProjectStory
                label="Challenges"
                text={activeProject.highlights.join(". ")}
              />
              <ProjectStory label="Impact" text={activeProject.impact} />
            </div>
            <div className="stack-row">
              {activeProject.stack.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="case-actions">
              {activeProject.links.map((link) => {
                const Icon = iconMap[link.icon] || ArrowUpRight;
                return (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    <Icon size={16} /> {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

function ProjectStory({ label, text }) {
  return (
    <div className="story-block">
      <span>{label}</span>
      <p>{text}</p>
    </div>
  );
}

function ProjectVisual({ project }) {
  const hasLocalImage = project.image && !project.image.startsWith("http");

  if (hasLocalImage) {
    return (
      <div className="project-visual image-visual">
        <img src={project.image} alt={`${project.title} preview`} loading="lazy" decoding="async" />
      </div>
    );
  }

  return (
    <div className="project-visual generated-visual" style={{ "--accent": project.accent }}>
      <Terminal size={26} />
      <span>{project.title}</span>
      <code>
        watch src --restart process
        <br />
        event: file-change
        <br />
        status: stable
      </code>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-pad experience-section">
      <SectionIntro
        eyebrow="Trajectory"
        title={portfolio.experience.title}
      />

      <div className="timeline">
        {portfolio.experience.items.map((item) => (
          <article key={`${item.company}-${item.period}`}>
            <span>{item.period}</span>
            <h3>{item.role}</h3>
            <p>
              {item.company} / {item.type} / {item.location}
            </p>
            <p>{item.description}</p>
            <ul>
              {item.achievements.map((achievement) => (
                <li key={achievement}>
                  <Check size={15} />
                  {achievement}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="achievement-row">
        {portfolio.achievements.map((achievement) => (
          <article key={achievement.title}>
            <span>{achievement.year}</span>
            <strong>{achievement.title}</strong>
            <p>{achievement.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-pad contact-section">
      <div>
        <p className="kicker">Next step</p>
        <h2>{portfolio.contact.title}</h2>
        <p>{portfolio.contact.description}</p>
      </div>

      <div className="contact-actions">
        <a className="button primary" href={`mailto:${portfolio.contact.email}`}>
          <Mail size={17} /> Email Sukesh
        </a>
        {portfolio.socials.map((social) => {
          const Icon = iconMap[social.icon] || ArrowUpRight;
          return (
            <a key={social.label} className="button ghost" href={social.href}>
              <Icon size={17} /> {social.label}
            </a>
          );
        })}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>{portfolio.footer.signature}</span>
      <a href="#top">{portfolio.footer.backToTopLabel}</a>
    </footer>
  );
}

function SectionIntro({ eyebrow, title }) {
  return (
    <div className="section-intro">
      <p className="kicker">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function Atmosphere({ enabled }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled) return undefined;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d", { alpha: true });
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let pointerX = 0.5;
    let pointerY = 0.3;

    const resize = () => {
      const scale = Math.min(window.devicePixelRatio || 1, 1.6);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * scale);
      canvas.height = Math.floor(height * scale);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(scale, 0, 0, scale, 0, 0);
    };

    const handlePointer = (event) => {
      pointerX = event.clientX / width;
      pointerY = event.clientY / height;
    };

    const draw = (time) => {
      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "lighter";

      for (let index = 0; index < 34; index += 1) {
        const phase = time * 0.00018 + index * 0.48;
        const x = width * (0.12 + ((Math.sin(phase) + 1) / 2) * 0.78);
        const y = height * (0.1 + ((Math.cos(phase * 0.78) + 1) / 2) * 0.72);
        const distance = Math.hypot(pointerX * width - x, pointerY * height - y);
        const radius = Math.max(42, 140 - distance * 0.05);
        const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, "rgba(20, 116, 104, 0.11)");
        gradient.addColorStop(0.42, "rgba(38, 72, 126, 0.045)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
      }

      context.globalCompositeOperation = "source-over";
      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointer, { passive: true });
    animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointer);
    };
  }, [enabled]);

  if (!enabled) return null;
  return <canvas ref={canvasRef} className="atmosphere" aria-hidden="true" />;
}

function useDeviceCapability() {
  const [capability, setCapability] = useState("low");

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cores = navigator.hardwareConcurrency || 2;
    const memory = navigator.deviceMemory || 4;

    setCapability(!reduceMotion && hasHover && cores >= 4 && memory >= 4 ? "high" : "low");
  }, []);

  return capability;
}

function setMeta(name, content) {
  const element = document.querySelector(`meta[name="${name}"]`);
  if (element) element.setAttribute("content", content);
}

export default App;
