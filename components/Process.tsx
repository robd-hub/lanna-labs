"use client";
import { motion, useReducedMotion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Discover",
    body: "A free 30-minute call to understand your business, your goals, and what you need your website to do.",
  },
  {
    num: "02",
    title: "Design",
    body: "A custom design built around your brand. You see exactly how your site will look before a line of code is written.",
  },
  {
    num: "03",
    title: "Build",
    body: "We build fast, modern, and fully yours — optimised for speed, mobile, and search from day one.",
  },
  {
    num: "04",
    title: "Handoff",
    body: "You get full ownership of your site. We walk you through everything and stay on hand if you need us.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function Process() {
  const reduced = useReducedMotion();

  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <motion.div
        className="mb-12"
        initial={reduced ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          How it works
        </p>
        <h2
          className="font-semibold text-foreground"
          style={{ fontSize: "clamp(1.875rem, 3vw, 2.25rem)" }}
        >
          From brief to live in four steps.
        </h2>
      </motion.div>

      <motion.div
        className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden"
        variants={reduced ? undefined : containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {STEPS.map((step) => (
          <motion.div
            key={step.num}
            variants={reduced ? undefined : cardVariants}
            className="bg-card p-8"
          >
            <p className="mb-4 text-sm font-semibold text-accent">{step.num}</p>
            <h3 className="mb-3 text-xl font-semibold text-foreground">{step.title}</h3>
            <p className="text-base text-muted leading-relaxed">{step.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
