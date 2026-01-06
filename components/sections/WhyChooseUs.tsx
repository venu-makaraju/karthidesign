"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

export function WhyChooseUs() {
  return (
    <section className="py-32 px-6 lg:py-40 bg-card/20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 lg:mb-24"
        >
          <p className="text-xs tracking-[0.3em] text-accent uppercase mb-6">
            Our Commitment
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide text-foreground max-w-3xl mb-6">
            Why Work With Us
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Four pillars define our approach to every project, ensuring outcomes
            that stand the test of time.
          </p>
        </motion.div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 lg:mt-24"
        >
          <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 lg:p-12">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                  Let's discuss your project
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every project begins with a conversation about your space, your
                  needs, and your vision. We offer complimentary consultations to
                  explore how we might work together.
                </p>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-accent transition-colors hover:text-foreground"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Schedule a Consultation</span>
                  <motion.svg
                    className="h-4 w-4"
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
                </motion.a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function PillarCard({ pillar, index }: { pillar: Pillar; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card className="group h-full border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-accent/30 hover:bg-card hover:shadow-luxury">
        <CardContent className="p-8 lg:p-10 space-y-6">
          {/* Number Badge */}
          <motion.div
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border/50 bg-background text-accent text-sm font-serif transition-all duration-500 group-hover:border-accent/50 group-hover:bg-accent/5"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.div>

          {/* Title */}
          <div>
            <h3 className="font-serif text-3xl text-foreground tracking-wide mb-3 transition-colors duration-300 group-hover:text-accent">
              {pillar.title}
            </h3>
            <p className="text-sm text-muted-foreground/80 uppercase tracking-[0.2em]">
              {pillar.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-base leading-relaxed text-muted-foreground">
            {pillar.description}
          </p>

          {/* Key Points */}
          <div className="pt-4 space-y-3">
            {pillar.points.map((point, i) => (
              <motion.div
                key={point}
                className="flex items-start gap-3 text-sm text-muted-foreground"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <span className="text-accent mt-1">·</span>
                <span>{point}</span>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface Pillar {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}

const pillars: Pillar[] = [
  {
    title: "Enduring Quality",
    subtitle: "Built to Last",
    description:
      "We prioritize craftsmanship and longevity over fleeting trends. Every detail is considered, every joint precise, every finish selected for how it ages—not just how it appears on day one.",
    points: [
      "Rigorous material testing and evaluation",
      "Relationships with master craftspeople",
      "Multi-generational design thinking",
    ],
  },
  {
    title: "Material Integrity",
    subtitle: "Honest Materials",
    description:
      "Materials should be what they appear to be. We source wood that looks like wood, stone that feels like stone, textiles that age gracefully. No imitations, no shortcuts—just authentic materials that improve with time.",
    points: [
      "Direct relationships with suppliers",
      "Emphasis on natural, sustainable materials",
      "Understanding of material behavior over time",
    ],
  },
  {
    title: "Measured Experience",
    subtitle: "Years, Not Projects",
    description:
      "Experience isn't counted in portfolio quantity but in the depth of understanding gained from each project. We've learned what works through observation, iteration, and honest feedback over time.",
    points: [
      "Fifteen years of residential and commercial work",
      "Projects across diverse typologies and scales",
      "Long-term client relationships and referrals",
    ],
  },
  {
    title: "Thoughtful Customization",
    subtitle: "Made for You",
    description:
      "Customization isn't about imposing a signature style—it's about listening carefully and translating your life into spatial form. Each solution is specific to its context, its users, and its purpose.",
    points: [
      "In-depth discovery and research phase",
      "Iterative design process with regular dialogue",
      "Solutions that accommodate future change",
    ],
  },
];
