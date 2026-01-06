# Layout Components

Global layout components for Karthi Design Solutions.

## Components

### Header

Elegant sticky navigation with scroll-based transparency transition.

**Features:**
- 🎯 **Transparent-to-Solid Transition**: Becomes opaque with backdrop blur after 20px scroll
- 🎭 **Motion Animations**: Entrance animations and hover effects
- 📱 **Responsive**: Desktop horizontal nav, mobile slide-out menu
- ✨ **Luxury Styling**: Glass effect, soft shadows, subtle interactions

**Usage:**
```tsx
import { Header } from "@/components/layout/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
```

**Navigation Links:**
- Home (/)
- Projects (/projects)
- Services (/services)
- About (/about)
- Contact (/contact)

**Key Features:**

1. **Scroll Detection**
   - Monitors `window.scrollY > 20`
   - Smooth transition using Tailwind transitions
   - Backdrop blur for glass effect

2. **Brand Name**
   - Playfair Display serif font
   - Hover scale animation
   - Links to homepage

3. **Desktop Navigation**
   - Horizontal layout (hidden on mobile)
   - Staggered entrance animations (0.1s delay each)
   - Subtle hover lift effect (y: -2px)
   - Text color transitions

4. **Mobile Menu**
   - Hamburger button with animated lines
   - Slide-in panel from right
   - Backdrop overlay
   - Staggered link animations

**Styling:**

```tsx
// Default (transparent)
className="bg-transparent"

// Scrolled (solid)
className="bg-background/95 backdrop-blur-md shadow-luxury border-b border-border/50"
```

---

### Footer

Sophisticated footer with company information and links.

**Features:**
- 📋 **Multi-column Layout**: Brand, Company, Connect sections
- 🎭 **Scroll Animations**: Fade-in on viewport entry
- 🔗 **Organized Links**: Logical grouping of navigation
- 📅 **Dynamic Year**: Auto-updates copyright year

**Usage:**
```tsx
import { Footer } from "@/components/layout/Footer";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

**Sections:**

1. **Brand Section** (2 columns on large screens)
   - Company name (serif)
   - Brand description
   - Mission statement

2. **Company Links**
   - About
   - Services
   - Projects

3. **Connect Section**
   - Get in Touch
   - Careers
   - Social media links

4. **Bottom Bar**
   - Copyright notice
   - Privacy Policy link
   - Terms of Service link

**Animations:**

All sections use `whileInView` with staggered delays:
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: 0.1 }}
```

---

## Implementation in Root Layout

```tsx
// app/layout.tsx
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

---

## Customization

### Changing Navigation Links

Edit the `navLinks` array in `Header.tsx`:

```tsx
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" }, // Changed
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
```

### Adjusting Scroll Threshold

Change the scroll detection value in `Header.tsx`:

```tsx
const handleScroll = () => {
  setIsScrolled(window.scrollY > 50); // Changed from 20
};
```

### Modifying Footer Content

Update the `footerLinks` object in `Footer.tsx`:

```tsx
const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    // Add more links...
  ],
  // ...
};
```

---

## Animations

### Header Entrance
```tsx
initial={{ y: -100, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.6, ease: "easeOut" }}
```

### Link Hover
```tsx
whileHover={{ y: -2 }}
transition={{ duration: 0.2 }}
```

### Mobile Menu
```tsx
// Panel slide-in
initial={{ x: "100%", opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
exit={{ x: "100%", opacity: 0 }}
transition={{ duration: 0.3, ease: "easeOut" }}
```

---

## Design Principles

### Elegance
- Minimal, distraction-free design
- Generous whitespace
- Subtle animations

### Functionality
- Fixed header for easy navigation
- Clear visual hierarchy
- Responsive on all devices

### Luxury Feel
- Serif brand name (Playfair Display)
- Soft shadows
- Glass/blur effects
- Smooth transitions (300ms)

---

## Responsive Breakpoints

- **Mobile**: < 768px (md)
  - Hamburger menu
  - Stacked layout
  - Slide-in panel

- **Desktop**: ≥ 768px
  - Horizontal navigation
  - Multi-column footer
  - Full feature set

---

## Performance

- **Client Components**: Uses `"use client"` for interactivity
- **Scroll Listener**: Properly cleaned up in useEffect
- **Lazy Animations**: Footer animations trigger on viewport entry
- **Optimized Fonts**: `display: "swap"` prevents FOIT

---

## Accessibility

- ✅ Semantic HTML (`<header>`, `<nav>`, `<footer>`)
- ✅ ARIA labels on buttons (`aria-label="Toggle menu"`)
- ✅ Keyboard navigation support
- ✅ Focus states with ring indicator
- ✅ Sufficient color contrast

---

## Tips

1. **Test Scroll Behavior**: Ensure your page has enough content to scroll
2. **Customize Colors**: All colors use CSS variables from the design system
3. **Add Active States**: Consider highlighting the current page in navigation
4. **Social Icons**: Replace text links with icon components if needed
5. **Loading States**: Add skeleton loaders if navigation depends on data

---

*Part of Karthi Design Solutions Design System*

