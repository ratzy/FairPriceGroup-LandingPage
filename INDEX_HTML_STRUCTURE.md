# Index.html Structure Documentation

## Overview
The `index.html` file has been completely rewritten with the new header and hero carousel implementation, featuring clean structure, comprehensive comments, and improved accessibility.

## Document Structure

```
index.html
├── Head Section
│   ├── Meta tags (charset, viewport, description)
│   ├── Page title (SEO optimized)
│   ├── Tailwind CSS CDN
│   ├── Tailwind Config (brand colors)
│   └── Custom CSS link
│
├── Body
│   ├── Header (Sticky, with backdrop blur)
│   │   ├── Logo (FPriceG-logo.png)
│   │   ├── CTA Buttons (no border-radius)
│   │   └── Navigation Menu (desktop only)
│   │
│   ├── Main Content
│   │   ├── Hero Carousel Section (#hero-carousel)
│   │   ├── Benefits Section
│   │   ├── Occasions Section
│   │   ├── Delivery Options Section
│   │   ├── eGift Knowledge Section
│   │   ├── Physical Gift Card Section
│   │   ├── Brand Partners Section
│   │   └── FAQ Section
│   │
│   └── Footer
│       ├── Copyright notice
│       └── Terms & Conditions
│
└── Scripts
    └── app.js (JavaScript module)
```

## Key Features Implemented

### 1. **New Header Structure**

```html
<header class="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
  <!-- Logo Section -->
  <img src="./src/assets/images/FPriceG-logo.png" alt="FairPrice Group Logo" />
  
  <!-- CTA Buttons (NO border-radius) -->
  <button class="border border-brand px-5 py-2.5 ...">Send Personal eGift</button>
  <button class="bg-brand px-5 py-2.5 ...">Corporate Gifting</button>
  
  <!-- Navigation Menu -->
  <nav>
    <a href="#personal-cards">Personal Use Gift Cards</a>
    <a href="#corporate-cards">Corporate Gift Cards</a>
    <a href="#egift">eGift Cards</a>
    <a href="#physical">Physical Gift Cards</a>
    <a href="#faq">FAQs</a>
  </nav>
</header>
```

**Header Features:**
- ✅ Sticky positioning (`sticky top-0`)
- ✅ Backdrop blur effect for modern look
- ✅ Logo image integration (FPriceG-logo.png)
- ✅ **No border-radius on buttons** (as specified)
- ✅ Responsive navigation (hidden on mobile)
- ✅ Proper z-index layering

### 2. **Hero Carousel Section**

```html
<section class="px-4 pb-2 pt-6" aria-label="Hero carousel">
  <div class="mx-auto max-w-6xl">
    <div 
      id="hero-carousel" 
      class="hero-carousel-container overflow-hidden rounded-3xl bg-white shadow-soft min-h-[400px] lg:min-h-[500px]"
      role="region"
      aria-label="Featured gift card promotions"
    ></div>
  </div>
</section>
```

**Carousel Features:**
- ✅ Container ID: `#hero-carousel`
- ✅ Dynamically populated by JavaScript (carousel.js)
- ✅ **3 slides with autoplay** (6 seconds each)
- ✅ **Indicators at bottom** of carousel
- ✅ Navigation controls (prev/next)
- ✅ Pause on hover/focus
- ✅ Keyboard navigation
- ✅ ARIA labels for accessibility

### 3. **Improved Semantic HTML**

All sections now include:
- Proper section tags with `aria-labelledby`
- Unique IDs for heading references
- Navigation anchor links (#egift, #physical, #faq)
- Role and region attributes
- Descriptive ARIA labels

**Example:**
```html
<section class="section-shell bg-white" id="egift" aria-labelledby="egift-heading">
  <h2 id="egift-heading" class="...">All you need to know about eGift Cards</h2>
  <div id="egift-knowledge-tabs" class="mt-6"></div>
</section>
```

### 4. **Accessibility Enhancements**

- ✅ All buttons have `aria-label` attributes
- ✅ Navigation has `aria-label="Main navigation"`
- ✅ Sections have `aria-labelledby` linking to headings
- ✅ Carousel has `role="region"` with descriptive label
- ✅ Focus-visible states on all interactive elements
- ✅ Semantic HTML structure throughout

### 5. **SEO Improvements**

```html
<title>FairPrice Gift Cards - Everyday gifting, made a little better</title>
<meta
  name="description"
  content="Gift practical moments with FairPrice eGift and physical gift cards. Perfect for colleagues, clients, friends, and family."
/>
```

- ✅ Descriptive page title
- ✅ Expanded meta description
- ✅ Semantic heading hierarchy (h1 in carousel, h2 for sections)

### 6. **Code Organization**

**Clear section comments:**
```html
<!-- ===== HEADER ===== -->
<!-- ===== MAIN CONTENT ===== -->
<!-- ===== FOOTER ===== -->
```

**Inline comments for clarity:**
```html
<!-- Logo -->
<!-- CTA Buttons -->
<!-- Navigation Menu -->
<!-- Dynamically populated by JavaScript -->
```

## Dynamic Content (JavaScript Controlled)

The following elements are populated by JavaScript from `app.js`:

| Element ID | Populated By | Description |
|------------|--------------|-------------|
| `#hero-carousel` | HeroCarousel class | 3-slide carousel with autoplay |
| `#benefits-grid` | renderBenefits() | Benefits card grid |
| `#occasion-tabs` | renderOccasionTabs() | Occasion-based gift cards |
| `#delivery-cards` | renderDeliveryCards() | eGift vs Physical cards |
| `#egift-knowledge-tabs` | renderStepTabs() | eGift card information |
| `#physical-knowledge-tabs` | renderPhysicalTabs() | Physical card info |
| `#brand-strip` | renderBrands() | Partner brand logos |
| `#faq-accordion` | renderFaq() | FAQ accordion |
| `#year` | setCurrentYear() | Current year for copyright |

## Styling Classes

**Custom CSS Variables (styles.css):**
```css
--color-brand: 0 87 163         /* Primary blue */
--color-brand-dark: 2 51 93     /* Dark blue */
--color-brand-soft: 233 244 252 /* Light blue */
--color-ink: 15 23 42           /* Text color */
--color-muted: 100 116 139      /* Muted text */
--color-page: 243 245 248       /* Page background */
```

**Utility Classes:**
- `.section-shell` - Standard section padding
- `.hero-carousel-container` - Carousel wrapper styles
- `.shadow-soft` - Soft shadow for cards
- `bg-page` - Page background color
- `text-ink` - Primary text color

## Responsive Breakpoints

```
Mobile:    < 768px  (Stack layout, no nav arrows)
Tablet:    768px+   (Show navigation menu)
Desktop:   1024px+  (Full layout, carousel controls visible)
Max Width: 1280px   (Content max-width)
```

## File Dependencies

```
index.html
├── Depends on:
│   ├── ./src/css/styles.css
│   ├── ./src/js/app.js (module)
│   ├── ./src/assets/images/FPriceG-logo.png
│   └── https://cdn.tailwindcss.com
│
└── app.js loads:
    ├── ./components/carousel.js (HeroCarousel)
    ├── ./components/renderers.js
    ├── ./components/tabs.js
    ├── ./components/accordion.js
    └── ./data/content.js
```

## Browser Compatibility

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ ES6 modules support required
- ✅ CSS Grid and Flexbox support required

## Key Differences from Previous Version

| Aspect | Before | After |
|--------|--------|-------|
| Header Logo | Brand mark (FP circle) | FPriceG-logo.png image |
| Button Style | `rounded-full` | No border-radius (square) |
| Hero Section | Static image | Dynamic 3-slide carousel |
| Comments | Minimal | Comprehensive |
| Accessibility | Basic | Enhanced with ARIA |
| SEO | Basic title | Optimized title + description |
| Structure | Flat | Organized with clear sections |
| Navigation | No anchors | Anchor links to sections |

## Testing Checklist

- [x] Header displays logo correctly
- [x] Header buttons have no border-radius
- [x] Navigation links work with anchor IDs
- [x] Carousel loads and autoplays
- [x] All sections render dynamically
- [x] Footer shows current year
- [x] Responsive design works on all devices
- [x] Accessibility features are functional
- [x] All JavaScript modules load properly

## Summary

✅ **Complete rewrite** with clean, organized structure  
✅ **New header** with FPriceG-logo.png and square buttons  
✅ **Hero carousel** (#hero-carousel) with autoplay and indicators  
✅ **Improved accessibility** with ARIA labels and semantic HTML  
✅ **Better SEO** with optimized title and meta description  
✅ **Clear comments** throughout for maintainability  
✅ **Navigation anchors** for smooth scrolling  
✅ **Fully responsive** design at all breakpoints
