# 🎨 Layout Preview - Karthi Design Solutions

## Visual Structure

```
┌────────────────────────────────────────────────────┐
│  HEADER (Fixed, Transparent → Solid on scroll)    │
│  ┌──────────────┐           ┌──────────────────┐  │
│  │ Karthi Design│           │ Home Projects    │  │
│  │ Solutions    │           │ Services About   │  │
│  └──────────────┘           │ Contact          │  │
│                             └──────────────────┘  │
└────────────────────────────────────────────────────┘
                      ↓
┌────────────────────────────────────────────────────┐
│                                                    │
│                  HERO SECTION                      │
│                                                    │
│         Timeless Interiors,                        │
│         Crafted with Care                          │
│                                                    │
│    We transform spaces into sophisticated...       │
│                                                    │
│   [View Projects]  [Schedule Consultation]         │
│                                                    │
│                    Scroll ↓                        │
│                                                    │
└────────────────────────────────────────────────────┘
                      ↓
┌────────────────────────────────────────────────────┐
│              FEATURES SECTION                      │
│                                                    │
│            Our Expertise                           │
│    Comprehensive design solutions...               │
│                                                    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │ 🏛️      │  │ 🏢      │  │ ✨      │        │
│  │Residential│  │Commercial│  │ Luxury  │        │
│  │  Design   │  │  Spaces  │  │Furnishing│        │
│  └──────────┘  └──────────┘  └──────────┘        │
│                                                    │
└────────────────────────────────────────────────────┘
                      ↓
┌────────────────────────────────────────────────────┐
│               CTA SECTION                          │
│                                                    │
│      Ready to Transform Your Space?                │
│                                                    │
│   Let's collaborate to create an interior...       │
│                                                    │
│           [Start Your Project]                     │
│                                                    │
└────────────────────────────────────────────────────┘
                      ↓
┌────────────────────────────────────────────────────┐
│                   FOOTER                           │
│                                                    │
│  Karthi Design Solutions        Company            │
│  Creating timeless             - About             │
│  interiors that blend...       - Services          │
│                                - Projects           │
│                                                    │
│                                Connect             │
│                                - Get in Touch      │
│                                - Instagram         │
│                                                    │
│  ──────────────────────────────────────────────   │
│  © 2026 Karthi Design...  Privacy | Terms         │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

## Header States

### 🔲 Transparent (Default)
```
┌────────────────────────────────────────────────────┐
│                                                    │ <- No background
│  Karthi Design Solutions    Home Projects Services │
│                                                    │
└────────────────────────────────────────────────────┘
   ↑ Transparent background
   ↑ No shadow
   ↑ No border
```

### 🔳 Solid (After Scroll)
```
┌────────────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │ <- Backdrop blur
│  Karthi Design Solutions    Home Projects Services │
│ ────────────────────────────────────────────────── │ <- Border
└────────────────────────────────────────────────────┘
   ↑ Semi-transparent background (95%)
   ↑ Backdrop blur effect
   ↑ Soft shadow
   ↑ Bottom border
```

---

## Animations Timeline

### Page Load (0-1.5s)
```
0.0s → Header slides down from top
       initial: y: -100, opacity: 0
       animate: y: 0, opacity: 1

0.3s → Hero title fades in
0.5s → Hero description fades in
0.7s → Hero buttons fade in

0.2s → Nav link "Home" appears
0.3s → Nav link "Projects" appears
0.4s → Nav link "Services" appears
0.5s → Nav link "About" appears
0.6s → Nav link "Contact" appears

1.0s → Scroll indicator starts pulsing
```

### Scroll Interactions
```
User scrolls down 20px
└→ Header transitions (500ms)
   ├─ Background: transparent → semi-opaque
   ├─ Backdrop blur: none → 12px
   ├─ Shadow: none → luxury
   └─ Border: none → visible

Features section enters viewport
└→ Title fades in (600ms)
└→ Card 1 fades in (500ms, delay: 0s)
└→ Card 2 fades in (500ms, delay: 0.1s)
└→ Card 3 fades in (500ms, delay: 0.2s)
```

### Hover Effects
```
Hover on brand name
└→ Scale: 1 → 1.02 (200ms)

Hover on nav link
└→ Y position: 0 → -2px (200ms)
└→ Color: muted-foreground → foreground (300ms)

Hover on feature card
└→ Y position: 0 → -8px (smooth)
└→ Cursor: default → pointer

Hover on button
└→ Scale: 1 → 1.05 (smooth)
└→ Opacity: 100% → 90%
```

---

## Mobile Menu Animation

### Closed State
```
┌────────────────────────┐
│ Karthi...       [☰]   │
└────────────────────────┘
```

### Opening (300ms)
```
┌────────────────────────┐
│ Karthi...       [✕]   │ <- Icon animates
└────────────────────────┘
           ┌─────────────┤
           │             │ <- Panel slides in from right
           │  Home       │    Backdrop fades in
           │  Projects   │
           │  Services   │
           │  About      │
           │  Contact    │
           │             │
           └─────────────┘
```

---

## Responsive Breakpoints

### Desktop (≥ 768px)
```
┌─────────────────────────────────────────────────┐
│ Karthi Design Solutions    [Home][Projects]... │
└─────────────────────────────────────────────────┘
```

### Mobile (< 768px)
```
┌──────────────────────────┐
│ Karthi Design...    [☰] │
└──────────────────────────┘
```

---

## Color Transitions

### Light Mode
```
Transparent Header
└─ bg-transparent
   text-foreground (charcoal)

Scrolled Header
└─ bg-background/95 (warm cream, 95%)
   backdrop-blur-md (12px blur)
   shadow-luxury (soft shadow)
   border-border/50 (subtle)
```

### Dark Mode
```
Transparent Header
└─ bg-transparent
   text-foreground (warm light)

Scrolled Header
└─ bg-background/95 (deep charcoal, 95%)
   backdrop-blur-md (12px blur)
   shadow-luxury (soft shadow)
   border-border/50 (subtle)
```

---

## Interactive Elements

### Brand Name
```
Normal:  Karthi Design Solutions
Hover:   Karthi Design Solutions  ← slightly larger (scale: 1.02)
         text-primary (beige)
```

### Navigation Links
```
Normal:  Home     ← text-muted-foreground
Hover:   Home     ← lifted 2px, text-foreground
         ──       ← underline appears
```

### Buttons
```
Primary:    [Explore Projects]  ← bg-primary, shadow-luxury
Hover:      [Explore Projects]  ← scale: 1.05, opacity: 90%
Tap:        [Explore Projects]  ← scale: 0.95

Secondary:  [Learn More]  ← border-primary, transparent
Hover:      [Learn More]  ← bg-primary, text inverted
```

---

## Shadow Levels

```
No Scroll:
┌────────────┐
│   Card     │  <- No shadow
└────────────┘

With Scroll:
     ┌────────────┐
    ╱│   Header   │╲  <- shadow-luxury
   ╱ └────────────┘ ╲

Feature Cards:
       ┌──────────┐
      ╱│  Card    │╲  <- shadow-luxury
     ╱ └──────────┘ ╲

Hover State:
         ┌──────────┐
        ╱│  Card    │╲  <- Lifted + shadow
       ╱ └──────────┘ ╲
```

---

## Typography Hierarchy

```
Brand Name:     Karthi Design Solutions
                └─ Playfair Display, 2xl, serif

Hero H1:        Timeless Interiors
                └─ Playfair Display, 5xl/6xl/7xl, serif

Hero P:         Description text...
                └─ Inter, xl, sans-serif

Section H2:     Our Expertise
                └─ Playfair Display, 4xl/5xl/6xl, serif

Card H4:        Residential Design
                └─ Playfair Display, 2xl/3xl/4xl, serif

Body Text:      Lorem ipsum...
                └─ Inter, sm, sans-serif
```

---

## Performance Metrics

- **Header Height**: 80px (h-20)
- **Scroll Threshold**: 20px
- **Transition Duration**: 500ms
- **Animation Ease**: easeOut
- **Backdrop Blur**: 12px (md)
- **Background Opacity**: 95%
- **Mobile Breakpoint**: 768px

---

## File Sizes (Approximate)

- Header.tsx: ~7 KB
- Footer.tsx: ~4 KB
- page.tsx: ~5 KB
- Total Layout: ~16 KB

---

*Visual guide for Karthi Design Solutions layout*

