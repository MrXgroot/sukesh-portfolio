import Section from "../layout/Section";
import { ArrowUpRight } from "lucide-react";

import chess from "../../assets/projects/chess.webp";
import excoks from "../../assets/projects/excoka-1.webp";
import meowMatch from "../../assets/projects/meow-match.webp";
import campusDairies from "../../assets/projects/campus-dairies.webp";

const Projects = () => {
  const featured = {
    name: "Excoka",
    image: excoks,
    description:
      "A scalable MERN-based admin-agent management system with CSV upload, intelligent task distribution, and real-time data handling. Designed with clean architecture and performance-focused workflows.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    live: "#",
    github: "#",
  };

  const projects = [
    {
      name: "Campus Dairies",
      image: campusDairies,
      description:
        "A campus storytelling platform where students can share experiences, moments, and memories in a structured and engaging way.",
      tech: "React",
      link: "https://campus-dairies.vercel.app/",
    },
    {
      name: "Chess",
      image: chess,
      description:
        "A real-time chess application with smooth gameplay, modern UI, and interactive board experience inspired by competitive platforms.",
      tech: "React",
      link: "http://chess-mania-mrxgroot.vercel.app/",
    },
    {
      name: "Meow Match",
      image: meowMatch,
      description:
        "A fun and responsive matching game with smooth animations, optimized performance, and engaging gameplay mechanics.",
      tech: "React",
      link: "https://meow-match-mrxgroot.vercel.app/",
    },
  ];

  return (
    <Section id="projects" className="bg-gray-50">
      {/* HEADER */}
      <div className="flex flex-col gap-4 mb-16">
        <span className="text-sm uppercase tracking-wide text-gray-500">
          Projects
        </span>

        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          Selected Work
        </h2>

        <p className="text-gray-600 max-w-2xl">
          A collection of projects focused on performance, scalability, and
          building clean, user-focused experiences.
        </p>
      </div>

      {/* 🔥 FEATURED */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        {/* TEXT */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-semibold text-gray-900">
            {featured.name}
          </h3>

          <p className="text-gray-600 leading-relaxed">
            {featured.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {featured.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 border border-gray-300 rounded-full text-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6 mt-2">
            <a
              href={featured.live}
              className="flex items-center gap-2 text-sm font-medium text-black"
            >
              Live Demo <ArrowUpRight size={16} />
            </a>

            <a href={featured.github} className="text-sm text-gray-600">
              GitHub
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="group relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <div className="aspect-video overflow-hidden">
            <img
              src={featured.image}
              alt={featured.name}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
        </div>
      </div>

      {/* 🧩 GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition"
          >
            {/* IMAGE */}
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col gap-3">
              <h4 className="text-lg font-medium text-gray-900">
                {project.name}
              </h4>

              <p className="text-sm text-gray-600 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-500">{project.tech}</span>

                <ArrowUpRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition"
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
