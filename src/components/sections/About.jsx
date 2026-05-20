import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeading } from "../ui/SectionHeading";
import { Icon } from "../../lib/icons";
import { fadeUp, staggerContainer } from "../../lib/motion";

export function About({ about, stats }) {
  return (
    <Container id="about">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} />
        <motion.div
          className="space-y-6 text-lg leading-8 text-mist"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          {about.story.map((paragraph) => (
            <motion.p key={paragraph} variants={fadeUp}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="mt-12 grid gap-4 md:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
      >
        {about.personality.map((item) => (
          <GlassCard key={item.title}>
            <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-mint/12 text-mint">
              <Icon name={item.icon} />
            </div>
            <h3 className="font-display text-xl font-semibold text-cloud">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-mist">{item.description}</p>
          </GlassCard>
        ))}
      </motion.div>

      <motion.div
        className="mt-4 grid gap-4 lg:grid-cols-[0.7fr_1.3fr]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
      >
        <GlassCard whileHover={false}>
          <div className="space-y-5">
            {about.facts.map((fact) => (
              <div key={fact.label} className="border-b border-line pb-4 last:border-0 last:pb-0">
                <p className="text-xs uppercase tracking-[0.22em] text-mist">{fact.label}</p>
                <p className="mt-2 font-semibold text-cloud">{fact.value}</p>
              </div>
            ))}
          </div>
        </GlassCard>
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="rounded-2xl border border-line bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-5">
              <p className="font-display text-4xl font-semibold text-cloud">
                {stat.value}
                <span className="text-mint">{stat.suffix}</span>
              </p>
              <p className="mt-3 text-sm leading-6 text-mist">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  );
}
