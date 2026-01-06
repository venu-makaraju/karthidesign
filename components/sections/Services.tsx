"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

export function Services() {
  return (
    <section className="py-32 px-6 lg:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 lg:mb-24 max-w-3xl"
        >
          <p className="text-xs tracking-[0.3em] text-accent uppercase mb-6">
            Capabilities
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide text-foreground mb-6">
            Services
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
            From concept to completion, we provide comprehensive design services
            tailored to each project's unique context and requirements.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        whileHover="hover"
        initial="initial"
        className="h-full"
      >
        <Card className="group h-full border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-accent/40 hover:bg-card hover:shadow-luxury">
          <CardContent className="p-8 lg:p-10 space-y-6">
            {/* Icon */}
            <motion.div
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border/50 bg-accent/5 text-accent transition-all duration-500 group-hover:border-accent/50 group-hover:bg-accent/10"
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.05 },
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-xl">{service.icon}</span>
            </motion.div>

            {/* Title */}
            <motion.div
              variants={{
                initial: { y: 0 },
                hover: { y: -2 },
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-serif text-2xl text-foreground tracking-wide mb-3 transition-colors duration-300 group-hover:text-accent">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div
              className="h-px bg-linear-to-r from-border/50 via-border to-transparent"
              variants={{
                initial: { scaleX: 0.5, opacity: 0.5 },
                hover: { scaleX: 1, opacity: 1 },
              }}
              transition={{ duration: 0.5 }}
              style={{ originX: 0 }}
            />

            {/* Scope List */}
            <ul className="space-y-3">
              {service.scope.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                  variants={{
                    initial: { opacity: 0.7, x: 0 },
                    hover: { opacity: 1, x: 2 },
                  }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <span className="text-accent text-xs mt-0.5">—</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

interface Service {
  icon: string;
  title: string;
  description: string;
  scope: string[];
}

const services: Service[] = [
  {
    icon: "◐",
    title: "Residential Interiors",
    description:
      "Comprehensive interior design for homes that reflect how you live, work, and gather.",
    scope: [
      "Space planning and layout",
      "Material and finish selection",
      "Custom furniture design",
      "Lighting design",
    ],
  },
  {
    icon: "⊞",
    title: "Commercial Design",
    description:
      "Thoughtful workplace and retail environments that support brand identity and user experience.",
    scope: [
      "Office and workplace design",
      "Retail and hospitality",
      "Brand integration",
      "Flexible space solutions",
    ],
  },
  {
    icon: "⎔",
    title: "Architectural Detailing",
    description:
      "Custom millwork, built-ins, and architectural elements that define spaces with precision.",
    scope: [
      "Custom cabinetry design",
      "Millwork and joinery details",
      "Staircase and railing design",
      "Architectural hardware",
    ],
  },
  {
    icon: "◯",
    title: "Material Curation",
    description:
      "Expert selection and specification of materials, finishes, and furnishings for cohesive interiors.",
    scope: [
      "Material research and sourcing",
      "Finish specification",
      "Furniture and lighting selection",
      "Art and accessories",
    ],
  },
  {
    icon: "△",
    title: "Renovation Planning",
    description:
      "Strategic renovation guidance from initial feasibility through construction documentation.",
    scope: [
      "Feasibility studies",
      "Budget development",
      "Construction documents",
      "Contractor coordination",
    ],
  },
  {
    icon: "⌘",
    title: "Design Consultation",
    description:
      "Focused advisory services for specific design challenges or project phases.",
    scope: [
      "Design reviews and feedback",
      "Color and material guidance",
      "Space planning advice",
      "Vendor recommendations",
    ],
  },
];
