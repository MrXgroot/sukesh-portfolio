import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);
  const underlineRef = useRef(null);
  const linkRefs = useRef({});

  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            const activeLink = navLinks.find((link) => link.href === `#${id}`);
            if (activeLink) {
              setActive(activeLink.name);
            }
          }
        });
      },
      {
        threshold: 0.6, // how much visible to trigger
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const el = linkRefs.current[active];
    if (el && underlineRef.current) {
      const { offsetLeft, offsetWidth } = el;
      underlineRef.current.style.transform = `translateX(${offsetLeft}px)`;
      underlineRef.current.style.width = `${offsetWidth}px`;
    }
  }, [active]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-transform duration-300`}
    >
      <div className="backdrop-blur-md bg-white/70 border-b border-gray-200">
        <Container>
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <h1 className="text-lg font-semibold tracking-tight">Sukesh</h1>

            {/* Desktop Nav */}
            <nav className="hidden md:flex relative items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  ref={(el) => (linkRefs.current[link.name] = el)}
                  onClick={() => setActive(link.name)}
                  onMouseEnter={() => setActive(link.name)}
                  className={`
                    text-sm transition-colors duration-200
                    ${active === link.name ? "text-black" : "text-gray-500"}
                  `}
                >
                  {link.name}
                </a>
              ))}

              <span
                ref={underlineRef}
                className="absolute -bottom-1 h-0.5 bg-black transition-all duration-300 ease-in"
              />
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="px-5 py-2.5 text-sm font-medium bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setOpen(!open)} className="md:hidden">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-96" : "max-h-0"}
        `}
      >
        <div className="bg-white border-b border-gray-200">
          <Container>
            <div className="flex flex-col py-6 gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActive(link.name);
                    setOpen(false);
                  }}
                  className="text-gray-700 text-base"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                className="mt-2 w-full py-3 bg-black text-white rounded-full text-sm font-medium"
              >
                Hire Me
              </a>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
