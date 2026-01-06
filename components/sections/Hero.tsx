"use client";

import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Image Placeholder - Replace with real image later */}
        <div className="absolute inset-0 bg-linear-to-br from-muted via-card to-muted/60">
          {/* Subtle pattern overlay for depth */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0.4)_1px,_transparent_1px)] bg-[size:24px_24px]" />
        </div>
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/60 to-background/90" />
        
        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center">
        <div className="space-y-12">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <h1 className="font-serif text-[3.5rem] leading-[1.1] tracking-wide text-foreground md:text-[5rem] lg:text-[6.5rem]">
              Curating Spaces
              <br />
              <span className="italic text-primary">Beyond Expectation</span>
            </h1>
          </motion.div>

          {/* Decorative Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="mx-auto h-px w-24 bg-linear-to-r from-transparent via-accent to-transparent"
          />

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1 }}
            className="mx-auto max-w-2xl"
          >
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl lg:text-2xl">
              Bespoke interior solutions where refined aesthetics harmonize with
              thoughtful functionality, crafted exclusively for discerning clients.
            </p>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-none border border-primary/30 bg-primary/10 px-10 py-5 backdrop-blur-sm transition-all duration-500 hover:border-primary hover:bg-primary hover:shadow-luxury-lg"
            >
              <span className="relative z-10 font-sans text-sm tracking-[0.2em] uppercase text-primary transition-colors duration-500 group-hover:text-primary-foreground">
                View Our Work
              </span>
              
              {/* Arrow Icon */}
              <motion.svg
                className="relative z-10 h-4 w-4 text-primary transition-colors duration-500 group-hover:text-primary-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>

              {/* Hover Background Effect */}
              <motion.div
                className="absolute inset-0 bg-primary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                style={{ originX: 0 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - More Refined */}
      <motion.div
        className="absolute bottom-16 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-3"
        >
          {/* Mouse Icon */}
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-muted-foreground/30 p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50"
            />
          </div>
          
          <span className="text-[0.65rem] tracking-[0.3em] text-muted-foreground/60 uppercase">
            Explore
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
