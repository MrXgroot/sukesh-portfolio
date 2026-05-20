import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeading } from "../ui/SectionHeading";
import { Icon } from "../../lib/icons";
import { fadeUp, staggerContainer } from "../../lib/motion";

export function Experience({ experience, achievements }) {
  return (
    <Container id="experience">
      <SectionHeading eyebrow={experience.eyebrow} title={experience.title} />
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          className="relative space-y-6 before:absolute before:left-4 before:top-2 before:h-full before:w-px before:bg-line md:before:left-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          {experience.items.map((item) => (
            <motion.article key={`${item.company}-${item.period}`} variants={fadeUp} className="relative pl-12 md:pl-16">
              <span className="absolute left-[0.56rem] top-6 h-4 w-4 rounded-full border border-mint bg-ink shadow-[0_0_0_6px_rgba(140,242,198,0.08)] md:left-[1.06rem]" />
              <GlassCard whileHover={false}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-mint">{item.period}</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-cloud">{item.role}</h3>
                    <p className="mt-1 text-sm text-mist">
                      {item.company} / {item.type} / {item.location}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-mist">{item.description}</p>
                <ul className="mt-5 space-y-3">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 text-sm leading-6 text-mist">
                      <Icon name="CheckCircle2" className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-mist">
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          {achievements.map((achievement) => (
            <GlassCard key={achievement.title}>
              <div className="mb-5 flex items-start justify-between gap-5">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-amber/12 text-amber">
                  <Icon name={achievement.icon} />
                </div>
                <span className="rounded-full border border-line px-3 py-1 text-xs text-mist">{achievement.year}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-cloud">{achievement.title}</h3>
              <p className="mt-3 text-sm leading-6 text-mist">{achievement.description}</p>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </Container>
  );
}
