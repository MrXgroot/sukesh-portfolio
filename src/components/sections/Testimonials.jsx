import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeading } from "../ui/SectionHeading";
import { staggerContainer } from "../../lib/motion";

export function Testimonials({ testimonials }) {
  return (
    <Container id="testimonials">
      <SectionHeading eyebrow={testimonials.eyebrow} title={testimonials.title} />
      <motion.div
        className="mt-12 grid gap-5 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
      >
        {testimonials.items.map((testimonial) => (
          <GlassCard key={testimonial.name}>
            <p className="text-lg leading-8 text-cloud">&quot;{testimonial.quote}&quot;</p>
            <div className="mt-8 flex items-center gap-4">
              <img src={testimonial.avatar} alt={testimonial.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-cloud">{testimonial.name}</p>
                <p className="text-sm text-mist">{testimonial.role}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </motion.div>
    </Container>
  );
}
