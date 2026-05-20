import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { GlassCard } from "../ui/GlassCard";
import { Marquee } from "../ui/Marquee";
import { SectionHeading } from "../ui/SectionHeading";
import { Icon } from "../../lib/icons";
import { fadeUp, staggerContainer } from "../../lib/motion";

export function Skills({ skills, techStack }) {
  return (
    <Container id="skills" className="overflow-hidden">
      <SectionHeading eyebrow={skills.eyebrow} title={skills.title} align="center" />
      <motion.div
        className="mt-12 grid gap-5 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
      >
        {skills.categories.map((category) => (
          <GlassCard key={category.name} className="min-h-full">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-iris/12 text-iris">
                  <Icon name={category.icon} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-cloud">{category.name}</h3>
                <p className="mt-3 text-sm leading-6 text-mist">{category.description}</p>
              </div>
            </div>
            <div className="mt-8 space-y-5">
              {category.items.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-cloud">
                      <Icon name={skill.icon} className="h-4 w-4 text-mint" />
                      {skill.name}
                    </span>
                    <span className="text-xs text-mist">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/[0.07]">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-mint via-iris to-coral"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12">
        <Marquee items={techStack} />
      </motion.div>
    </Container>
  );
}
