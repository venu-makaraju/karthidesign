# Karthi Design Solutions

A luxury interior design brand system built with Next.js 16, featuring elegant typography, warm natural tones, and sophisticated interactions.

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)
![Motion](https://img.shields.io/badge/Motion-12.24-ff6b6b)

## ✨ Features

### 🎨 Luxury Design System
- **Color Palette**: Warm beige/sandstone, charcoal/slate, and muted gold
- **Typography**: Playfair Display (serif) for headings, Inter for body text
- **Shadows**: Soft, subtle elevation with three luxury shadow levels
- **Borders**: Delicate, barely-there borders for elegant definition
- **Transitions**: Smooth 300ms transitions on all interactive elements

### 🛠️ Tech Stack
- **Next.js 16** - App Router with React Server Components
- **TypeScript** - Full type safety
- **Tailwind CSS v4** - With custom CSS variables
- **shadcn/ui** - Pre-styled, accessible components
- **Motion** (motion.dev) - Production-ready animations
- **OKLCH Color Space** - Perceptually uniform colors

### 📐 Design Philosophy
**Elegance. Sophistication. Timelessness.**

The design system embodies luxury interior design principles:
- Restrained color palette
- Generous whitespace
- Elegant serif typography
- Soft, natural shadows
- Refined interactions

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation & Development

```bash
# Install dependencies (if needed)
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the design system demo.

### Build for Production

```bash
npm run build
npm start
```

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with fonts
│   ├── page.tsx                # Homepage
│   └── globals.css             # Design system CSS variables
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── layout/                 # Layout components (Header, Footer)
│   ├── sections/               # Page sections
│   │   └── DesignSystemDemo.tsx
├── lib/
│   └── utils.ts                # Utility functions
├── styles/                     # Additional stylesheets
├── DESIGN_SYSTEM.md            # Complete design documentation
├── QUICKSTART.md               # Quick reference guide
└── components.json             # shadcn/ui configuration
```

## 🎨 Design System

### Color Palette

#### Light Mode
- **Primary**: Warm Beige/Sandstone `oklch(0.72 0.042 70)`
- **Secondary**: Charcoal/Deep Slate `oklch(0.32 0.015 260)`
- **Accent**: Muted Gold `oklch(0.68 0.08 75)`
- **Background**: Warm Creamy White `oklch(0.98 0.008 85)`

#### Dark Mode
Sophisticated dark palette with warm undertones, maintaining the luxury aesthetic.

### Typography

```tsx
// Headings - Playfair Display (Serif)
<h1>Timeless Elegance</h1>

// Body - Inter (Sans-serif)
<p>Modern, readable body text</p>
```

### Buttons

```tsx
// Primary
<button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow-luxury">
  Explore
</button>

// Secondary
<button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg shadow-luxury">
  Contact
</button>

// Accent
<button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg shadow-luxury">
  Book Now
</button>
```

### Cards & Shadows

```tsx
<div className="bg-card p-6 rounded-lg shadow-luxury border-luxury">
  <h3>Card Title</h3>
  <p>Card content with luxury styling</p>
</div>
```

### Glass Effect

```tsx
<nav className="glass-luxury shadow-luxury-lg">
  Frosted glass navigation
</nav>
```

## 🎬 Animations

Using Motion for smooth, refined animations:

```tsx
import { motion } from "motion/react"

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Animated content
</motion.div>
```

## 🧩 Adding shadcn/ui Components

Components automatically inherit the luxury theme:

```bash
# Add components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add input
npx shadcn@latest add form
```

```tsx
import { Button } from "@/components/ui/button"

<Button>Styled Button</Button>
```

## 📚 Documentation

- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Complete design system documentation
- **[QUICKSTART.md](./QUICKSTART.md)** - Quick reference guide with code examples

## 🎯 Usage Examples

### Hero Section

```tsx
<section className="min-h-screen flex items-center justify-center bg-background">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center space-y-6"
  >
    <h1 className="text-foreground">Luxury Interiors</h1>
    <p className="text-xl">Sophisticated design solutions</p>
    <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg shadow-luxury">
      View Portfolio
    </button>
  </motion.div>
</section>
```

### Feature Cards

```tsx
<div className="grid grid-cols-3 gap-6">
  {features.map((feature) => (
    <motion.div
      key={feature.id}
      whileHover={{ scale: 1.02 }}
      className="bg-card p-6 rounded-lg shadow-luxury border-luxury"
    >
      <h4>{feature.title}</h4>
      <p>{feature.description}</p>
    </motion.div>
  ))}
</div>
```

## 🎨 Custom Utilities

### Luxury Shadows
- `.shadow-luxury` - Subtle elevation
- `.shadow-luxury-lg` - Medium elevation
- `.shadow-luxury-xl` - Strong elevation

### Special Effects
- `.glass-luxury` - Frosted glass backdrop
- `.border-luxury` - Subtle borders

## 🌗 Dark Mode Support

Automatic dark mode detection with `prefers-color-scheme`.

Manual toggle (add to your components):
```tsx
<html className="dark">
```

## ♿ Accessibility

- ✅ WCAG AA contrast ratios
- ✅ Clear focus states (gold ring)
- ✅ Semantic HTML
- ✅ Keyboard navigation
- ✅ Screen reader friendly

## 🎨 Design Principles

### Do's ✅
- Use serif headings for elegance
- Apply soft shadows for depth
- Maintain generous whitespace
- Keep color palette restrained
- Use subtle transitions (300ms)

### Don'ts ❌
- Avoid bright, saturated colors
- Don't use heavy shadows
- Avoid tight spacing
- Don't mix too many font weights
- Avoid quick, jarring animations

## 📦 Dependencies

```json
{
  "dependencies": {
    "next": "16.1.1",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "motion": "^12.24.7",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.4.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "tailwindcss": "^4",
    "@tailwindcss/postcss": "^4"
  }
}
```

## 🤝 Contributing

This is a design system template. Feel free to customize:

1. Update colors in `app/globals.css`
2. Change fonts in `app/layout.tsx`
3. Adjust shadows and borders in base layer
4. Add custom components in `components/`

## 📝 License

See LICENSE file for details.

---

## 🎓 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Motion Documentation](https://motion.dev)
- [OKLCH Color Space](https://oklch.com)

---

**Karthi Design Solutions** - Where elegance meets functionality.

*Version 1.0 - January 2026*
