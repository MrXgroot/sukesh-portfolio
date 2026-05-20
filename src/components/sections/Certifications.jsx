import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeading } from "../ui/SectionHeading";
import { Icon } from "../../lib/icons";
import { staggerContainer } from "../../lib/motion";

export function Certifications({ certifications }) {
  return (
    <Container id="certifications" className="py-12">
      <SectionHeading eyebrow={certifications.eyebrow} title={certifications.title} align="center" />
      <motion.div
        className="mt-10 grid gap-4 md:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
      >
        {certifications.items.map((certification) => (
          <GlassCard key={certification.name} as={motion.a} href={certification.credentialUrl}>
            <div className="mb-8 flex items-center justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-mint/12 text-mint">
                <Icon name={certification.icon} />
              </div>
              <span className="text-sm text-mist">{certification.date}</span>
            </div>
            <h3 className="font-display text-xl font-semibold text-cloud">{certification.name}</h3>
            <p className="mt-3 text-sm text-mist">{certification.issuer}</p>
          </GlassCard>
        ))}
      </motion.div>
    </Container>
  );
}
