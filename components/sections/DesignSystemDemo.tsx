"use client";

import { motion } from "motion/react";

export function DesignSystemDemo() {
  return (
    <div className="min-h-screen bg-background p-8 md:p-16">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-foreground">Karthi Design Solutions</h1>
          <p className="text-xl max-w-2xl">
            A luxury interior design system featuring elegant typography, warm
            natural tones, and sophisticated interactions.
          </p>
        </motion.div>

        {/* Color Palette */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <h2 className="text-foreground">Color Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Primary */}
            <div className="space-y-3">
              <div className="h-24 bg-primary rounded-lg shadow-luxury" />
              <div>
                <h6 className="text-foreground">Primary</h6>
                <p className="text-sm">Warm Beige / Sandstone</p>
              </div>
            </div>

            {/* Secondary */}
            <div className="space-y-3">
              <div className="h-24 bg-secondary rounded-lg shadow-luxury" />
              <div>
                <h6 className="text-foreground">Secondary</h6>
                <p className="text-sm">Charcoal / Deep Slate</p>
              </div>
            </div>

            {/* Accent */}
            <div className="space-y-3">
              <div className="h-24 bg-accent rounded-lg shadow-luxury" />
              <div>
                <h6 className="text-foreground">Accent</h6>
                <p className="text-sm">Muted Gold</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Typography */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-foreground">Typography</h2>
          <div className="space-y-8 bg-card p-8 rounded-lg shadow-luxury border-luxury">
            <div>
              <h1 className="text-foreground">Heading 1 - Playfair Display</h1>
              <p className="text-sm text-muted-foreground mt-2">
                Luxury serif font for elegant headings
              </p>
            </div>
            <div>
              <h2 className="text-foreground">Heading 2 - Elegant & Refined</h2>
            </div>
            <div>
              <h3 className="text-foreground">Heading 3 - Sophisticated</h3>
            </div>
            <div>
              <p className="text-lg">
                Body text uses Inter, a modern sans-serif font designed for
                excellent readability. The combination of serif headings and
                sans-serif body text creates a perfect balance between elegance
                and functionality.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Buttons */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-foreground">Buttons & Interactions</h2>
          <div className="flex flex-wrap gap-4">
            {/* Primary Button */}
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow-luxury hover:opacity-90 transition-all duration-300">
              Primary Button
            </button>

            {/* Secondary Button */}
            <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg shadow-luxury hover:opacity-90 transition-all duration-300">
              Secondary Button
            </button>

            {/* Accent Button */}
            <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg shadow-luxury hover:opacity-90 transition-all duration-300">
              Accent Button
            </button>

            {/* Outline Button */}
            <button className="px-6 py-3 bg-transparent border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Outline Button
            </button>
          </div>
        </motion.section>

        {/* Cards with Shadows */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-foreground">Cards & Shadows</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Luxury Shadow */}
            <div className="bg-card p-6 rounded-lg shadow-luxury border-luxury">
              <h5 className="text-foreground mb-3">Luxury Shadow</h5>
              <p className="text-sm">
                Subtle elevation perfect for cards and containers.
              </p>
            </div>

            {/* Luxury Shadow Large */}
            <div className="bg-card p-6 rounded-lg shadow-luxury-lg border-luxury">
              <h5 className="text-foreground mb-3">Luxury Shadow Large</h5>
              <p className="text-sm">
                Medium elevation for modals and important elements.
              </p>
            </div>

            {/* Luxury Shadow XL */}
            <div className="bg-card p-6 rounded-lg shadow-luxury-xl border-luxury">
              <h5 className="text-foreground mb-3">Luxury Shadow XL</h5>
              <p className="text-sm">
                Strong elevation for overlays and focal points.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Glass Effect */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-foreground">Glass Effect</h2>
          <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-luxury p-8 rounded-lg shadow-luxury-lg max-w-md">
                <h4 className="text-foreground mb-3">Frosted Glass</h4>
                <p className="text-sm">
                  Premium overlay effect with backdrop blur. Perfect for
                  navigation bars and featured sections.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Motion Example */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-foreground">Animations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-card p-6 rounded-lg shadow-luxury border-luxury cursor-pointer"
            >
              <h5 className="text-foreground mb-3">Hover Scale</h5>
              <p className="text-sm">
                Subtle scale effect on hover. Movement enhances without
                distracting.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-6 rounded-lg shadow-luxury border-luxury"
            >
              <h5 className="text-foreground mb-3">Scroll Animation</h5>
              <p className="text-sm">
                Elements fade and slide in as they enter the viewport.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center space-y-4 pt-8 border-t border-border"
        >
          <p className="text-sm text-muted-foreground">
            Design System by Karthi Design Solutions
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js 16, TypeScript, Tailwind CSS, shadcn/ui, and
            Motion
          </p>
        </motion.div>
      </div>
    </div>
  );
}

