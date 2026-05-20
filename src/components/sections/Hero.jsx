import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "../ui/Container";
import { MagneticButton } from "../ui/MagneticButton";
import { Icon } from "../../lib/icons";
import { fadeUp, staggerContainer } from "../../lib/motion";

export function Hero({ hero, personal, socials }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % hero.roles.length);
    }, 2100);

    return () => window.clearInterval(interval);
  }, [hero.roles.length]);

  return (
    <Container id="top" className="min-h-screen overflow-hidden pb-10 pt-32 sm:pt-36 lg:pt-40">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-90" />
      <motion.div
        className="absolute left-1/2 top-28 -z-10 h-[28rem] w-[42rem] -translate-x-1/2 rounded-[42%] bg-gradient-to-r from-iris/15 via-mint/10 to-coral/15 blur-3xl"
        animate={{ rotate: [0, 7, -5, 0], scale: [1, 1.05, 0.98, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.p variants={fadeUp} className="mb-6 inline-flex rounded-full border border-line bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-mint backdrop-blur-xl">
            {hero.eyebrow}
          </motion.p>
          <motion.h1 variants={fadeUp} className="max-w-5xl text-balance font-display text-5xl font-semibold leading-[0.96] text-cloud sm:text-7xl lg:text-8xl">
            {hero.headline}
          </motion.h1>
          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-3 text-lg text-mist sm:text-xl">
            <span>I work as a</span>
            <span className="relative h-8 min-w-[14rem] overflow-hidden text-cloud sm:min-w-[22rem]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={hero.roles[roleIndex]}
                  className="absolute left-0 top-0 font-semibold"
                  initial={{ y: 26, opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -26, opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                >
                  {hero.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-mist">
            {hero.summary}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <MagneticButton href={hero.primaryCta.href} icon={hero.primaryCta.icon}>
              {hero.primaryCta.label}
            </MagneticButton>
            <MagneticButton href={hero.secondaryCta.href} icon={hero.secondaryCta.icon} variant="secondary">
              {hero.secondaryCta.label}
            </MagneticButton>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-3 py-2 text-sm text-mist transition hover:border-mint/40 hover:text-cloud"
              >
                <Icon name={social.icon} className="h-4 w-4" />
                {social.label}
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="relative">
          <div className="absolute -inset-4 rounded-[2rem] border border-line bg-white/[0.03] blur-xl" />
          <motion.div
            className="relative overflow-hidden rounded-[2rem] border border-line bg-night shadow-soft"
            whileHover={{ rotate: -1, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
          >
            <img src={hero.visual.image} alt="" className="h-[34rem] w-full object-cover opacity-[0.82]" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/12 to-transparent" />
            <div className="absolute left-5 right-5 top-5 flex items-center justify-between rounded-full border border-white/15 bg-black/30 px-4 py-3 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <img src={personal.avatar} alt={personal.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-cloud">{personal.name}</p>
                  <p className="text-xs text-mist">{personal.location}</p>
                </div>
              </div>
              <span className="h-3 w-3 rounded-full bg-mint shadow-[0_0_20px_rgba(140,242,198,0.8)]" />
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-black/[0.34] p-5 backdrop-blur-xl">
              <p className="text-sm leading-6 text-cloud">{hero.visual.caption}</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-16 grid gap-3 sm:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {hero.metrics.map((metric) => (
          <motion.div key={metric.label} variants={fadeUp} className="rounded-2xl border border-line bg-white/[0.045] p-5 backdrop-blur-xl">
            <p className="font-display text-4xl font-semibold text-cloud">{metric.value}</p>
            <p className="mt-2 text-sm text-mist">{metric.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}
