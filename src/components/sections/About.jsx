// components/sections/About.jsx

import Section from "../layout/Section";

const About = () => {
  return (
    <Section id="about" className="bg-white">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6">
          <span className="text-sm uppercase tracking-wide text-gray-500">
            About Me
          </span>

          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight">
            I build systems, not just websites.
          </h2>

          <p className="text-gray-600 leading-relaxed">
            I'm a full-stack developer focused on creating scalable,
            maintainable, and performant applications. I enjoy breaking down
            complex problems and turning them into clean, structured solutions.
          </p>

          <p className="text-gray-600 leading-relaxed">
            My approach combines strong fundamentals, system design thinking,
            and attention to detail — ensuring that every project is not only
            functional but also reliable and easy to scale.
          </p>
        </div>

        {/* RIGHT CONTENT (HIGHLIGHTS) */}
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 border border-gray-200 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-900">2+</h3>
            <p className="text-sm text-gray-500 mt-2">
              Years of Learning & Building
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-900">10+</h3>
            <p className="text-sm text-gray-500 mt-2">Projects Completed</p>
          </div>

          <div className="p-6 border border-gray-200 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-900">MERN</h3>
            <p className="text-sm text-gray-500 mt-2">Tech Stack Focus</p>
          </div>

          <div className="p-6 border border-gray-200 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-900">System</h3>
            <p className="text-sm text-gray-500 mt-2">Design Mindset</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
