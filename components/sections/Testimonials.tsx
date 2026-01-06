"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-32 px-6 lg:py-40">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-20 text-center"
        >
          <p className="text-xs tracking-[0.3em] text-accent uppercase mb-6">
            Client Reflections
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide text-foreground">
            In Their Words
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          {/* Quote Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="border-border/30 bg-card/50 backdrop-blur-sm shadow-luxury-lg">
                <CardContent className="p-10 lg:p-16">
                  {/* Opening Quote Mark */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8"
                  >
                    <svg
                      className="w-12 h-12 text-accent/30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                  </motion.div>

                  {/* Quote Text */}
                  <motion.blockquote
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-8"
                  >
                    <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground">
                      {testimonials[activeIndex].quote}
                    </p>
                  </motion.blockquote>

                  {/* Attribution */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="space-y-2"
                  >
                    <div className="h-px w-16 bg-linear-to-r from-accent to-transparent mb-4" />
                    <p className="text-sm font-medium text-foreground">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      {testimonials[activeIndex].project}
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10">
            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <motion.button
                onClick={handlePrevious}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-12 h-12 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm text-muted-foreground transition-all duration-300 hover:border-accent/50 hover:text-accent hover:bg-card"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </motion.button>

              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-12 h-12 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm text-muted-foreground transition-all duration-300 hover:border-accent/50 hover:text-accent hover:bg-card"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </div>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === activeIndex
                      ? "w-8 bg-accent"
                      : "w-1.5 bg-border hover:bg-accent/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 lg:mt-24"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center">
            <div>
              <div className="text-3xl font-serif text-accent mb-1">15+</div>
              <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="hidden md:block h-12 w-px bg-border" />
            <div>
              <div className="text-3xl font-serif text-accent mb-1">98%</div>
              <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Client Retention
              </div>
            </div>
            <div className="hidden md:block h-12 w-px bg-border" />
            <div>
              <div className="text-3xl font-serif text-accent mb-1">85%</div>
              <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Referral Based
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface Testimonial {
  quote: string;
  name: string;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "They didn't impose a style—they listened. The result feels like it's always been ours, only better. Every detail was considered, every choice explained. We're living in a space that genuinely reflects how we want to live.",
    name: "Elizabeth Chen",
    project: "Pacific Heights Residence, San Francisco",
  },
  {
    quote:
      "What impressed me most was their restraint. Rather than filling every corner, they knew when to stop. The space breathes. It functions beautifully for how we actually use it, not how they thought we should.",
    name: "Michael Torres",
    project: "Tribeca Loft Renovation, New York",
  },
  {
    quote:
      "They made our renovation feel manageable—breaking down decisions, explaining trade-offs, never pressuring. The project stayed on schedule, on budget, and the craftsmanship is evident in every built-in and finish.",
    name: "Sarah Hoffman",
    project: "Brownstone Restoration, Brooklyn",
  },
  {
    quote:
      "We needed an office that could adapt as we grow. They designed flexible zones that serve multiple purposes without feeling generic. The materials they selected have only improved with daily use.",
    name: "David Park",
    project: "Creative Studio, Los Angeles",
  },
];
