"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

export function FeaturedProjects() {
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
            Selected Works
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide text-foreground max-w-3xl">
            Recent Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-16 lg:gap-y-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Explore More Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <motion.a
            href="/projects"
            className="group inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-muted-foreground transition-colors hover:text-foreground"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
          >
            <span>View All Projects</span>
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
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card className="group border-none bg-transparent shadow-none overflow-hidden">
        <CardContent className="p-0 space-y-6">
          {/* Image Container */}
          <motion.div
            className="relative aspect-[4/3] overflow-hidden rounded-sm bg-linear-to-br from-muted via-card to-muted/50"
            whileHover="hover"
            initial="initial"
          >
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />

            {/* Center Icon */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              variants={{
                initial: { scale: 1, opacity: 0.08 },
                hover: { scale: 1.1, opacity: 0.12 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="text-8xl">{project.icon}</span>
            </motion.div>

            {/* Overlay on Hover */}
            <motion.div
              className="absolute inset-0 bg-linear-to-t from-secondary/80 via-secondary/40 to-transparent flex items-end justify-start p-8"
              variants={{
                initial: { opacity: 0 },
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/80">
                View Project
              </span>
            </motion.div>

            {/* Subtle Border */}
            <div className="absolute inset-0 border border-border/30 rounded-sm pointer-events-none" />
          </motion.div>

          {/* Project Info */}
          <div className="space-y-4">
            {/* Title */}
            <div>
              <h3 className="font-serif text-2xl lg:text-3xl text-foreground tracking-wide mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground/60">
                {project.location} · {project.year}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-muted-foreground max-w-md">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full bg-accent/5 text-accent border border-accent/10 tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface Project {
  icon: string;
  title: string;
  location: string;
  year: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    icon: "🏛️",
    title: "Tribeca Residence",
    location: "New York",
    year: "2024",
    description:
      "A light-filled loft where industrial heritage meets contemporary comfort. Exposed brick and steel beams frame curated spaces designed for a collector of modern art.",
    tags: ["Residential", "Restoration"],
  },
  {
    icon: "🌿",
    title: "Pacific Heights Home",
    location: "San Francisco",
    year: "2023",
    description:
      "Perched above the bay, this residence balances formality with ease. Neutral palettes, natural materials, and carefully considered sightlines create a serene family retreat.",
    tags: ["Residential", "New Build"],
  },
  {
    icon: "✨",
    title: "Madison Avenue Penthouse",
    location: "New York",
    year: "2024",
    description:
      "An urban sanctuary defined by restraint. Floor-to-ceiling windows frame the skyline while interiors emphasize texture, proportion, and the play of natural light.",
    tags: ["Residential", "Luxury"],
  },
  {
    icon: "🏢",
    title: "Greenwich Street Office",
    location: "New York",
    year: "2023",
    description:
      "A workspace for a creative firm where collaboration and focus coexist. Flexible zones, tactile materials, and generous daylight support both individual work and collective thinking.",
    tags: ["Commercial", "Workplace"],
  },
];
