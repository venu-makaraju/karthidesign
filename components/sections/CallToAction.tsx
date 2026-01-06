"use client";

import { motion } from "motion/react";

export function CallToAction() {
  return (
    <section className="py-32 px-6 lg:py-40 bg-linear-to-br from-card/40 via-background to-accent/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-4xl text-center space-y-10"
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs tracking-[0.3em] text-accent uppercase"
        >
          Begin Your Project
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide text-foreground"
        >
          Let's discuss how we
          <br />
          can bring your vision to life
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto"
        >
          Every project begins with a conversation. Schedule a complimentary
          consultation to explore possibilities for your space.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="pt-4"
        >
          <motion.a
            href="/contact"
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-accent text-accent-foreground rounded-sm shadow-luxury-lg transition-all duration-500 hover:shadow-luxury-xl hover:bg-accent/90"
          >
            <span className="text-sm tracking-[0.2em] uppercase font-medium">
              Book a Consultation
            </span>
            <motion.svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              variants={{
                hover: { x: 4 },
              }}
              transition={{ duration: 0.3 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.a>
        </motion.div>

        {/* Subtle Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-xs text-muted-foreground/60"
        >
          Initial consultations are complimentary and typically last 60 minutes
        </motion.p>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl -z-10 pointer-events-none"
        />
      </motion.div>
    </section>
  );
}
