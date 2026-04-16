// components/sections/Skills.jsx

import Section from "../layout/Section";

const skills = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    title: "Tools",
    items: ["Git", "Postman", "VS Code"],
  },
  {
    title: "Concepts",
    items: ["System Design", "State Management", "Web Performance"],
  },
];

const Skills = () => {
  return (
    <Section id="skills">
      {/* HEADER */}
      <div className="flex flex-col gap-4 mb-16">
        <span className="text-sm uppercase tracking-wide text-gray-500">
          Skills & Tech
        </span>

        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          Technologies I Work With
        </h2>

        <p className="text-gray-600 max-w-2xl">
          A focused set of tools and technologies I use to build scalable,
          efficient, and maintainable applications.
        </p>
      </div>

      {/* SKILLS GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((group) => (
          <div
            key={group.title}
            className="p-6 border border-gray-200 rounded-2xl"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
