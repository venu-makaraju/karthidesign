"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

export function BrandPhilosophy() {
  return (
    <section className="bg-background py-24 px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xs tracking-[0.3em] text-accent uppercase mb-6">
                Our Approach
              </p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-wide text-foreground">
                Every space tells
                <br />
                a story worth telling
              </h2>
            </motion.div>

            {/* Body Copy - Editorial Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 text-muted-foreground leading-relaxed"
            >
              <p className="text-base md:text-lg">
                We work with clients who understand that interiors are not simply
                decorated—they evolve. Each project begins with conversation,
                observation, and a genuine curiosity about how you live.
              </p>

              <p className="text-base md:text-lg">
                Our process favors restraint over excess, quality over quantity.
                We source materials that age gracefully, design spaces that
                accommodate change, and create environments that feel both
                intentional and effortless.
              </p>

              <p className="text-base md:text-lg">
                The result is not a signature style imposed, but a thoughtful
                translation of your life into physical form—rooms that feel like
                they've always been there, waiting.
              </p>
            </motion.div>

            {/* Principle Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
            >
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:shadow-luxury">
                    <CardContent className="p-5">
                      <div className="text-2xl mb-2 text-accent">
                        {principle.icon}
                      </div>
                      <div className="text-sm font-medium text-foreground mb-1">
                        {principle.label}
                      </div>
                      <div className="text-xs text-muted-foreground leading-relaxed">
                        {principle.description}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative"
          >
            <Card className="border-border/50 bg-card overflow-hidden shadow-luxury-lg">
              <CardContent className="p-0">
                {/* Image Placeholder */}
                <div className="aspect-[4/5] bg-linear-to-br from-muted via-card to-muted/50 relative">
                  {/* Subtle Grid Pattern */}
                  <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
                  
                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="text-6xl opacity-10">🏛️</div>
                      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground/40">
                        Image
                      </p>
                    </div>
                  </div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent" />
                </div>

                {/* Image Caption */}
                <div className="p-6 bg-card/80 backdrop-blur-sm border-t border-border/50">
                  <p className="text-xs tracking-wider text-muted-foreground">
                    Material selection studio, where textures and finishes are
                    curated with the same care as the spaces they inhabit.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-accent/5 backdrop-blur-sm border border-accent/10 -z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const principles = [
  {
    icon: "⏱️",
    label: "Time",
    description: "Designs that transcend trends and feel relevant for decades.",
  },
  {
    icon: "✋",
    label: "Touch",
    description: "Materials chosen for how they feel as much as how they look.",
  },
  {
    icon: "🔍",
    label: "Detail",
    description: "Precision in proportion, finish, and the spaces between.",
  },
];
