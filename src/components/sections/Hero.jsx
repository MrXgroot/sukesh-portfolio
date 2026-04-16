// components/sections/Hero.jsx

import Section from "../layout/Section";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "../../assets/hero2.png";
const Hero = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Section id="home" className="pt-28 lg:pt-36">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          <span
            className={`
              text-sm uppercase tracking-wide text-gray-500
              transition-all duration-700
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            Full Stack Developer
          </span>

          <h1
            className={`
              text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight
              transition-all duration-700 delay-100
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            Building clean & scalable
            <span className="block">digital experiences</span>
          </h1>

          <p
            className={`
              text-gray-600 text-lg max-w-xl
              transition-all duration-700 delay-200
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            I design and build modern web applications focused on performance,
            scalability, and user experience.
          </p>

          <div
            className={`
              flex gap-4 mt-4
              transition-all duration-700 delay-300
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition"
            >
              View Projects <ArrowRight size={16} />
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className={`
            relative flex justify-center lg:justify-end
            transition-all duration-1000 delay-200
            ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
        >
          <div className="absolute w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-60"></div>

          <div className="relative w-80  lg:w-96 lg:h-96 rounded-full overflow-hidden border animate-float border-gray-200 shadow-sm">
            {/* Replace this */}
            <div className=" bg-gray-200 flex  text-gray-400">
              <img
                className="object-contain  w-full h-full "
                src={heroImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
