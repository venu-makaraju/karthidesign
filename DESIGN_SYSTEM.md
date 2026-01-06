# Karthi Design Solutions - Design System

A luxury interior design brand identity system built with Next.js 16, TypeScript, and Tailwind CSS.

## Brand Philosophy

Elegance. Sophistication. Timelessness.

Our design system reflects the refined aesthetic of high-end interior design, combining warm natural tones with sophisticated typography and subtle interactions.

---

## Color Palette

### Light Mode

#### Primary Colors
- **Primary (Warm Beige/Sandstone)**: `oklch(0.72 0.042 70)`
  - Use for: Primary buttons, key highlights, brand elements
  - Foreground: Light cream text
  
- **Secondary (Charcoal/Deep Slate)**: `oklch(0.32 0.015 260)`
  - Use for: Secondary buttons, emphasis elements
  - Foreground: Light text

#### Accent
- **Accent (Muted Gold)**: `oklch(0.68 0.08 75)`
  - Use for: Hover states, special highlights, luxury accents
  - Creates warmth and premium feel

#### Background Colors
- **Background**: Warm creamy white `oklch(0.98 0.008 85)`
- **Card**: Warm beige tint `oklch(0.96 0.015 75)`
- **Muted**: Light beige `oklch(0.93 0.012 75)`

#### Text Colors
- **Foreground**: Deep charcoal `oklch(0.25 0.012 265)`
- **Muted Foreground**: Medium gray `oklch(0.48 0.015 265)`

#### Borders & Inputs
- **Border/Input**: Soft beige `oklch(0.88 0.008 75)`
- **Ring (Focus)**: Muted gold `oklch(0.68 0.08 75)`

### Dark Mode

Maintains the luxury aesthetic with:
- Deep charcoal backgrounds `oklch(0.18 0.015 265)`
- Warm light text for readability
- Brighter sandstone and gold accents for contrast
- Subtle borders that don't overpower

---

## Typography

### Fonts

#### Headings: Playfair Display (Serif)
- **Weight**: 400-700
- **Style**: Classic luxury serif
- **Usage**: All headings (h1-h6), titles, featured text
- **Character**: Elegant, sophisticated, timeless

#### Body: Inter (Sans-serif)
- **Weight**: 400-700
- **Style**: Modern, clean, highly readable
- **Usage**: Paragraphs, UI text, labels
- **Character**: Professional, neutral, functional

### Scale

```css
h1: text-5xl / 6xl / 7xl  (48px / 60px / 72px)
h2: text-4xl / 5xl / 6xl  (36px / 48px / 60px)
h3: text-3xl / 4xl / 5xl  (30px / 36px / 48px)
h4: text-2xl / 3xl / 4xl  (24px / 30px / 36px)
h5: text-xl / 2xl / 3xl   (20px / 24px / 30px)
h6: text-lg / xl / 2xl    (18px / 20px / 24px)
```

### Typography Principles

1. **Letter Spacing**: Slightly increased for luxury feel
   - Headings: `0.02em`
   - Body: `0.01em`

2. **Line Height**: Generous for readability
   - Headings: 1.15 - 1.4
   - Body: `leading-relaxed` (1.625)

3. **Font Weight**: Lighter for elegance
   - Headings: `font-normal` (400) instead of bold
   - Emphasis through size and spacing

---

## Shadows (Luxury Soft Shadows)

### Shadow Utilities

```css
.shadow-luxury
/* Subtle elevation for cards and containers */
box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.08), 
            0 2px 8px -2px rgba(0, 0, 0, 0.04)

.shadow-luxury-lg
/* Medium elevation for modals and popovers */
box-shadow: 0 8px 30px -4px rgba(0, 0, 0, 0.12), 
            0 4px 12px -4px rgba(0, 0, 0, 0.06)

.shadow-luxury-xl
/* Strong elevation for overlays */
box-shadow: 0 12px 40px -8px rgba(0, 0, 0, 0.15), 
            0 6px 16px -6px rgba(0, 0, 0, 0.08)
```

### Usage Guidelines
- Use sparingly - luxury is about restraint
- Prefer subtle shadows over dramatic ones
- Combine with border-luxury for definition

---

## Borders

### Border Radius
```css
--radius: 0.5rem (8px default)
--radius-sm: 4px
--radius-md: 6px
--radius-lg: 8px
--radius-xl: 12px
--radius-2xl: 16px
```

### Subtle Borders
```css
.border-luxury
/* Soft, barely-there borders */
border: 1px solid oklch(0.88 0.008 75 / 0.5)
```

**Philosophy**: Borders should guide, not divide. Keep them subtle.

---

## Transitions

### Default Transitions
All elements include smooth transitions:
```css
transition-colors duration-300
transition-all duration-300
```

### Interaction States
- **Hover**: Slight color shift, no dramatic changes
- **Focus**: Gold ring (`--ring`) with soft glow
- **Active**: Subtle scale or brightness change

**Philosophy**: Interactions should feel refined and intentional, never jarring.

---

## Glass Effects

### Glass Luxury
```css
.glass-luxury
/* Frosted glass effect for premium overlays */
backdrop-filter: blur(12px)
background: semi-transparent with warm tint
```

**Usage**: Navigation bars, overlays, featured sections

---

## Component Theming

### shadcn/ui Integration

All shadcn/ui components automatically inherit:
- ✅ Color palette (primary, secondary, accent)
- ✅ Border radius scales
- ✅ Typography system
- ✅ Transition timings
- ✅ Shadow utilities

### Adding Components

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

Components will automatically use the luxury design system.

---

## Usage Examples

### Buttons

```tsx
// Primary - Warm sandstone
<Button>Explore Projects</Button>

// Secondary - Deep charcoal
<Button variant="secondary">Contact Us</Button>

// Accent - Muted gold (for special CTAs)
<Button variant="outline" className="border-accent text-accent">
  Book Consultation
</Button>
```

### Cards

```tsx
<Card className="shadow-luxury border-luxury">
  <CardHeader>
    <h3>Luxury Living Spaces</h3>
  </CardHeader>
  <CardContent>
    <p>Elegant interior design solutions...</p>
  </CardContent>
</Card>
```

### Typography

```tsx
<div>
  {/* Serif heading - automatically styled */}
  <h1>Timeless Interiors</h1>
  
  {/* Sans-serif body - clean and readable */}
  <p>We create sophisticated spaces that reflect your unique style...</p>
</div>
```

### Glass Navigation

```tsx
<nav className="glass-luxury shadow-luxury-lg">
  {/* Navigation content */}
</nav>
```

---

## Motion/Animation Guidelines

When using Motion (motion.dev), follow these principles:

### Timing
- **Duration**: 300-600ms for most interactions
- **Easing**: Smooth, natural curves (`ease-out`, `ease-in-out`)

### Movements
- **Fade In**: Subtle opacity transitions
- **Slide In**: Gentle 20-40px movements
- **Scale**: Minimal (0.95-1.05 range)

### Example

```tsx
import { motion } from "motion/react"

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  className="shadow-luxury"
>
  <h2>Featured Project</h2>
</motion.div>
```

**Philosophy**: Movement should enhance, not distract. Keep it subtle and purposeful.

---

## Best Practices

### Do's ✅
- Use serif headings for elegance
- Apply soft shadows for depth
- Maintain generous whitespace
- Keep color palette restrained
- Emphasize through typography and spacing
- Use subtle transitions (300ms)

### Don'ts ❌
- Avoid bright, saturated colors
- Don't use heavy shadows
- Avoid tight spacing or cramped layouts
- Don't mix too many font weights
- Avoid quick, jarring animations
- Don't overuse accent colors

---

## Accessibility

- **Contrast Ratios**: All text meets WCAA standards
- **Focus States**: Clear gold ring indicators
- **Font Sizes**: Responsive and readable at all viewports
- **Color Independence**: Never rely on color alone
- **Motion**: Respect `prefers-reduced-motion`

---

## Brand Voice

**Visual**: Elegant, sophisticated, warm
**Tone**: Professional, refined, approachable
**Feel**: Timeless luxury, not trendy

---

*Design system by Karthi Design Solutions*
*Version 1.0 - January 2026*

