import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";

export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <motion.div
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-mint">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance font-display text-3xl font-semibold leading-tight text-cloud sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-lg leading-8 text-mist">{description}</p> : null}
    </motion.div>
  );
}
