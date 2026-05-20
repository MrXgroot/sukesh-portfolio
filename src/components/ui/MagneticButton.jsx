import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../lib/utils";
import { Icon } from "../../lib/icons";

const spring = { stiffness: 220, damping: 18, mass: 0.7 };

export function MagneticButton({
  children,
  href,
  icon,
  variant = "primary",
  className,
  type = "button",
  onClick,
  ariaLabel
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);
  const rotateX = useTransform(springY, [-18, 18], [5, -5]);
  const rotateY = useTransform(springX, [-18, 18], [-5, 5]);

  const handlePointerMove = (event) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    x.set((event.clientX - bounds.left - bounds.width / 2) * 0.24);
    y.set((event.clientY - bounds.top - bounds.height / 2) * 0.24);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(
    "group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint",
    variant === "primary"
      ? "bg-cloud text-ink shadow-glow hover:bg-white"
      : "border border-line bg-white/[0.04] text-cloud hover:border-white/25 hover:bg-white/[0.08]",
    className
  );

  const content = (
    <>
      <span className="absolute inset-0 translate-y-full bg-mint/25 transition duration-300 group-hover:translate-y-0" />
      <span className="relative z-10">{children}</span>
      {icon ? <Icon name={icon} className="relative z-10 h-4 w-4 transition group-hover:translate-x-0.5" /> : null}
    </>
  );

  const shared = {
    ref,
    className: classes,
    style: { x: springX, y: springY, rotateX, rotateY },
    onPointerMove: handlePointerMove,
    onPointerLeave: reset,
    onPointerDown: reset,
    whileTap: { scale: 0.98 },
    "aria-label": ariaLabel
  };

  if (href) {
    return (
      <motion.a {...shared} href={href}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button {...shared} type={type} onClick={onClick}>
      {content}
    </motion.button>
  );
}
