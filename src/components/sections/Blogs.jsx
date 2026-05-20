import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeading } from "../ui/SectionHeading";
import { formatDate } from "../../lib/utils";
import { staggerContainer } from "../../lib/motion";

export function Blogs({ blogs }) {
  return (
    <Container id="writing" className="py-12">
      <SectionHeading eyebrow={blogs.eyebrow} title={blogs.title} align="center" />
      <motion.div
        className="mt-10 grid gap-4 md:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
      >
        {blogs.items.map((post) => (
          <GlassCard key={post.title} as={motion.a} href={post.href}>
            <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-mist">
              <span>{post.category}</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
            <h3 className="mt-8 font-display text-xl font-semibold leading-tight text-cloud">{post.title}</h3>
            <p className="mt-4 text-sm leading-6 text-mist">{post.description}</p>
            <p className="mt-8 text-sm text-mist">
              {formatDate(post.date)} / {post.readTime}
            </p>
          </GlassCard>
        ))}
      </motion.div>
    </Container>
  );
}
