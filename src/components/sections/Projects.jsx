import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Container } from "../ui/Container";
import { GlassCard } from "../ui/GlassCard";
import { MagneticButton } from "../ui/MagneticButton";
import { SectionHeading } from "../ui/SectionHeading";
import { Icon } from "../../lib/icons";
import { getFeaturedProject } from "../../lib/utils";
import { staggerContainer } from "../../lib/motion";

export function Projects({ projects }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const featured = getFeaturedProject(projects);
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects.items;
    return projects.items.filter(
      (project) => project.category === activeFilter,
    );
  }, [activeFilter, projects.items]);

  return (
    <Container id="projects">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading eyebrow={projects.eyebrow} title={projects.title} />
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {projects.filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "border-mint/50 bg-mint/12 text-cloud"
                  : "border-line bg-white/[0.04] text-mist hover:text-cloud"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="mt-12 overflow-hidden rounded-[2rem] border border-line bg-white/[0.045] shadow-soft backdrop-blur-xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative min-h-[28rem] overflow-hidden">
            <img
              src={featured.image}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/82 via-ink/28 to-transparent" />
            <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/[0.35] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cloud backdrop-blur-xl">
              Featured
            </div>
          </div>
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-semibold text-mint">
              {featured.category} / {featured.year}
            </p>
            <h3 className="mt-4 font-display text-3xl font-semibold text-cloud sm:text-4xl">
              {featured.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-mist">
              {featured.summary}
            </p>
            <p className="mt-5 rounded-2xl border border-line bg-black/20 p-4 text-sm leading-6 text-cloud">
              {featured.impact}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featured.stack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-mist"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {featured.links.map((link) => (
                <MagneticButton
                  key={link.label}
                  href={link.href}
                  variant="secondary"
                  icon={link.icon}
                  className="min-h-11"
                >
                  {link.label}
                </MagneticButton>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Container>
  );
}

function ProjectCard({ project }) {
  return (
    <GlassCard as={motion.article} layout className="group p-0">
      <div className="relative aspect-[1.35] overflow-hidden">
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/24 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-semibold text-cloud backdrop-blur-xl">
          {project.category}
        </div>
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-cloud">
            {project.title}
          </h3>
          <span className="text-sm text-mist">{project.year}</span>
        </div>
        <p className="text-sm leading-6 text-mist">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-mist"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-2 text-xs font-semibold text-cloud transition hover:border-mint/40"
            >
              <Icon name={link.icon} className="h-3.5 w-3.5" />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
