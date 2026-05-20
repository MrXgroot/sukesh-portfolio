import { motion, useSpring } from "framer-motion";
import { useMousePosition } from "../../hooks/useMousePosition";

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const springX = useSpring(x, { stiffness: 420, damping: 36 });
  const springY = useSpring(y, { stiffness: 420, damping: 36 });

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-8 w-8 rounded-full border border-mint/60 mix-blend-screen lg:block"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
    />
  );
}
