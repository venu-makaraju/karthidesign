# Karthi Design Solutions - Quick Start Guide

## 🎨 Using the Design System

### Color Classes

```tsx
// Backgrounds
<div className="bg-primary">       // Warm beige/sandstone
<div className="bg-secondary">     // Charcoal/deep slate
<div className="bg-accent">        // Muted gold
<div className="bg-background">    // Page background
<div className="bg-card">          // Card background

// Text
<h1 className="text-foreground">   // Primary text color
<p className="text-muted-foreground"> // Secondary text
```

### Typography

```tsx
// Headings (Playfair Display - Serif)
<h1>Elegant Heading</h1>  // Automatically serif, responsive
<h2>Sophisticated Title</h2>
<h3>Refined Subtitle</h3>

// Body Text (Inter - Sans-serif)
<p>Clean, readable body text</p>  // Automatically styled
```

### Buttons

```tsx
// Primary Button
<button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow-luxury hover:opacity-90 transition-all duration-300">
  Explore Projects
</button>

// Secondary Button
<button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg shadow-luxury hover:opacity-90 transition-all duration-300">
  Contact Us
</button>

// Accent Button
<button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg shadow-luxury hover:opacity-90 transition-all duration-300">
  Book Consultation
</button>

// Outline Button
<button className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
  Learn More
</button>
```

### Cards

```tsx
// Simple Card
<div className="bg-card p-6 rounded-lg shadow-luxury border-luxury">
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</div>

// Card with Large Shadow
<div className="bg-card p-8 rounded-lg shadow-luxury-lg border-luxury">
  <h3>Featured Card</h3>
  <p>Important content...</p>
</div>
```

### Shadows

```tsx
<div className="shadow-luxury">     // Subtle elevation
<div className="shadow-luxury-lg">  // Medium elevation
<div className="shadow-luxury-xl">  // Strong elevation
```

### Glass Effect

```tsx
<nav className="glass-luxury shadow-luxury-lg">
  {/* Navigation content with frosted glass effect */}
</nav>
```

### Animations with Motion

```tsx
import { motion } from "motion/react"

// Fade In
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>

// Slide Up
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>

// Hover Effect
<motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.3 }}
  className="cursor-pointer"
>
  Hoverable Content
</motion.div>

// Scroll Animation
<motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  Content that animates on scroll
</motion.div>
```

### shadcn/ui Components

Install and use pre-styled components:

```bash
# Add components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add input
```

```tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Components automatically use the luxury theme
<Button>Explore</Button>
<Card>Content</Card>
```

## 🎯 Common Patterns

### Hero Section

```tsx
<section className="min-h-screen flex items-center justify-center bg-background px-8">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="max-w-4xl text-center space-y-6"
  >
    <h1 className="text-foreground">Timeless Interiors</h1>
    <p className="text-xl max-w-2xl mx-auto">
      Creating sophisticated spaces that reflect your unique style.
    </p>
    <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg shadow-luxury hover:opacity-90 transition-all duration-300">
      View Portfolio
    </button>
  </motion.div>
</section>
```

### Feature Card Grid

```tsx
<section className="py-16 px-8">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-center text-foreground mb-12">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-card p-6 rounded-lg shadow-luxury border-luxury"
        >
          <h4 className="text-foreground mb-3">{service.title}</h4>
          <p>{service.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
```

### Navigation Bar

```tsx
<nav className="glass-luxury shadow-luxury-lg fixed top-0 w-full z-50">
  <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
    <h3 className="text-foreground">Karthi Design</h3>
    <div className="flex gap-6">
      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
        Portfolio
      </a>
      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
        Services
      </a>
      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
        Contact
      </a>
    </div>
  </div>
</nav>
```

## 🚀 Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📚 Full Documentation

See `DESIGN_SYSTEM.md` for complete design system documentation.

---

*Karthi Design Solutions - Luxury Interior Design System*

