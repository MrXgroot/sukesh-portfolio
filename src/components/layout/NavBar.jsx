import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { MagneticButton } from "../ui/MagneticButton";
import { cn } from "../../lib/utils";

export function NavBar({ navigation, personal }) {
  const { scrollYProgress, scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => setIsScrolled(latest > 24));

  return (
    <>
      <motion.div className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-coral via-mint to-iris" style={{ scaleX: scrollYProgress }} />
      <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
        <nav
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition duration-300",
            isScrolled ? "border-line bg-ink/72 shadow-soft backdrop-blur-2xl" : "border-transparent bg-transparent"
          )}
          aria-label="Primary navigation"
        >
          <a href="#top" className="flex items-center gap-3 text-cloud">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white/[0.06] text-sm font-bold">
              {personal.initials}
            </span>
            <span className="hidden text-sm font-semibold sm:block">{personal.name}</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-mist transition hover:bg-white/[0.06] hover:text-cloud"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <MagneticButton href={`mailto:${personal.email}`} variant="secondary" icon="Send" className="min-h-10 px-4">
              Let&apos;s talk
            </MagneticButton>
          </div>

          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white/[0.06] text-cloud lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-x-4 top-24 z-40 rounded-2xl border border-line bg-ink/92 p-4 shadow-soft backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
          >
            <div className="grid gap-2">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-mist transition hover:bg-white/[0.06] hover:text-cloud"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
