import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { useMousePosition } from "../../hooks/useMousePosition";

export function Spotlight() {
  const { x, y } = useMousePosition();
  const springX = useSpring(x, { stiffness: 90, damping: 28 });
  const springY = useSpring(y, { stiffness: 90, damping: 28 });
  const background = useMotionTemplate`radial-gradient(520px circle at ${springX}px ${springY}px, rgba(140, 242, 198, 0.11), transparent 42%)`;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 hidden opacity-70 lg:block"
      style={{ background }}
    />
  );
}
