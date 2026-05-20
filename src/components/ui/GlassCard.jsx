import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { fadeUp } from "../../lib/motion";

export function GlassCard({ children, className, as = motion.div, whileHover = true }) {
  const Component = as;
  return (
    <Component
      variants={fadeUp}
      whileHover={whileHover ? { y: -6, transition: { duration: 0.25 } } : undefined}
      className={cn(
        "rounded-2xl border border-line bg-white/[0.055] p-5 shadow-soft backdrop-blur-xl",
        "before:pointer-events-none before:absolute before:inset-px before:rounded-[15px] before:border before:border-white/5",
        "relative overflow-hidden",
        className
      )}
    >
      {children}
    </Component>
  );
}
