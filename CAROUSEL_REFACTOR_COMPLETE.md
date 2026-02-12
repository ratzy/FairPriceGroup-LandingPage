# Hero Carousel - Complete Refactor Documentation

## Overview
Complete refactor of the hero carousel component with responsive image switching, optimized styling, and performance improvements.

## Key Features

### ✅ Responsive Image Switching
- **< 1024px**: Mobile-optimized images (mobile-bg-*.png)
- **≥ 1024px**: Desktop images (hero-C*.png)
- Uses HTML `<picture>` element for native browser support
- No JavaScript image switching required

### ✅ Responsive Breakpoints
- **Mobile**: 0-767px
- **Tablet**: 768-1023px  
- **Desktop**: 1024px+
- **Large Desktop**: 1280px+

### ✅ Performance Optimizations
- Native `<picture>` element (browser-optimized)
- No layout shifts (fixed min-heights)
- Efficient z-index layering
- Smooth transitions (opacity-based)
- Optimized gradient rendering

## Responsive Image Implementation

### Data Structure

```javascript
const slides = [
  {
    desktopImage: "./src/assets/images/hero-C1.png",   // Desktop (≥1024px)
    mobileImage: "./src/assets/images/mobile-bg-1.png", // Mobile (<1024px)
    alt: "FairPrice Gift Cards - Everyday gifting made better"
  },
  // ... more slides
];
```

### HTML Output

```html
<div class="hero-slide">
  <picture>
    <!-- Desktop image (1024px+) -->
    <source media="(min-width: 1024px)" srcset="hero-C1.png">
    <!-- Mobile image (default, <1024px) -->
    <img src="mobile-bg-1.png" alt="" class="w-full h-full object-cover">
  </picture>
</div>
```

### Browser Behavior

```
Screen Width < 1024px:
  → Browser displays mobile-bg-1.png

Screen Width ≥ 1024px:
  → Browser displays hero-C1.png

Resize window:
  → Browser automatically switches image
```

## Responsive Styling

### Mobile (< 1024px)

```css
/* Dark Gradient Overlay */
.hero-gradient-overlay {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,    /* Black 85% at bottom */
    rgba(0, 0, 0, 0.5) 40%,    /* Black 50% at middle */
    rgba(0, 0, 0, 0.2) 70%,    /* Black 20% at top-middle */
    transparent 100%            /* Transparent at top */
  );
}

/* Content Styling */
.hero-content-inner {
  background: transparent !important;
  text-align: center;
  padding: 1.5rem 1.5rem 4rem;
  box-shadow: none !important;
}

.hero-content-inner h1 {
  font-size: 1.5rem;          /* 24px */
  line-height: 1.3;
}

.hero-content-inner p {
  font-size: 0.875rem;        /* 14px */
  line-height: 1.6;
}

.hero-content-inner button {
  font-size: 0.875rem;
  padding: 0.75rem 1.5rem;
}
```

### Tablet (768-1023px)

```css
.hero-content-inner h1 {
  font-size: 2rem;            /* 32px */
}

.hero-content-inner p {
  font-size: 1rem;            /* 16px */
}
```

### Desktop (≥ 1024px)

```css
/* Blue Gradient Box */
.hero-content-inner {
  background: linear-gradient(135deg, 
    rgb(0, 87, 163) 0%, 
    rgb(2, 51, 93) 100%) !important;
  border-radius: 1rem;
  margin: 2rem;
  padding: 2.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3) !important;
  text-align: left;
}

.hero-content-inner h1 {
  font-size: 2.5rem;          /* 40px */
  line-height: 1.2;
}

.hero-content-inner p {
  font-size: 1rem;            /* 16px */
  line-height: 1.6;
}

/* Hide dark gradient */
.hero-gradient-overlay {
  display: none;
}
```

## Carousel Heights

### Responsive Min-Heights

```css
/* Mobile: 480px */
.hero-carousel-slides {
  min-height: 480px;
}

/* Tablet: 540px */
@media (min-width: 768px) {
  .hero-carousel-slides {
    min-height: 540px;
  }
}

/* Desktop: 560px */
@media (min-width: 1024px) {
  .hero-carousel-slides {
    min-height: 560px;
  }
}

/* Large Desktop: 600px */
@media (min-width: 1280px) {
  .hero-carousel-slides {
    min-height: 600px;
  }
}
```

## Z-Index Layering

```
Mobile:
├── Z-1: Hero images (background)
├── Z-5: Dark gradient overlay
└── Z-10: White text content

Desktop:
├── Z-1: Hero images (background)
├── Z-10: Blue box with content
└── Z-20: Navigation controls & indicators
```

## Image Specifications

### Desktop Images (hero-C*.png)
- **Dimensions**: 1920x600px (landscape)
- **Aspect Ratio**: ~16:5
- **Format**: PNG or optimized JPG
- **Size**: < 500KB each
- **Content**: Landscape orientation, wide shots
- **Focal Point**: Center or right (overlay on right)

### Mobile Images (mobile-bg-*.png)
- **Dimensions**: 800x800px or 1080x1080px (square/portrait)
- **Aspect Ratio**: 1:1 or 4:5
- **Format**: PNG or optimized JPG
- **Size**: < 400KB each
- **Content**: Portrait/square orientation
- **Focal Point**: Center (text overlay at bottom)

## Typography Scale

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| **Eyebrow** | 0.75rem | 0.75rem | 0.875rem |
| **Heading (h1)** | 1.5rem | 2rem | 2.5rem |
| **Description** | 0.875rem | 1rem | 1rem |
| **Buttons** | 0.875rem | 0.875rem | 0.875rem |

## Spacing Scale

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| **Content Padding** | 1.5rem 1.5rem 4rem | 2rem 1.5rem 4rem | 2.5rem |
| **Heading Margin Top** | 0.75rem | 0.75rem | 0.75rem |
| **Description Margin Top** | 1rem | 1rem | 1rem |
| **Buttons Margin Top** | 1.5rem | 1.5rem | 1.5rem |
| **Button Gap** | 0.75rem | 0.75rem | 0.75rem |

## Navigation Controls

### Visibility
```css
Mobile/Tablet (< 1024px): display: none
Desktop (≥ 1024px): display: flex
```

### Styling
```css
.carousel-prev,
.carousel-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  padding: 0.75rem;
  transition: all 0.3s ease;
}

.carousel-prev:hover,
.carousel-next:hover {
  background: white;
  transform: translateY(-50%) scale(1.1);
}
```

## Indicator Styling

### Colors
- **Active**: #EF0000 (Red)
- **Inactive**: rgba(255, 255, 255, 0.6) (White 60%)
- **Hover**: rgba(255, 255, 255, 0.8) (White 80%)

### Size & Animation
```css
.carousel-indicator {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.carousel-indicator.scale-125 {
  transform: scale(1.25);
  background-color: #EF0000;
}
```

### Position
```css
.carousel-indicators {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  gap: 0.625rem;
}
```

## Performance Best Practices

### 1. **Native Responsive Images**
```html
<!-- Browser handles image selection -->
<picture>
  <source media="(min-width: 1024px)" srcset="desktop.png">
  <img src="mobile.png">
</picture>
```

**Benefits**:
- No JavaScript needed
- Browser-optimized
- Automatic switching
- Better performance

### 2. **Prevent Layout Shifts**
```css
/* Fixed min-heights prevent CLS */
.hero-carousel-slides {
  min-height: 480px; /* Mobile */
}

@media (min-width: 1024px) {
  .hero-carousel-slides {
    min-height: 560px; /* Desktop */
  }
}
```

### 3. **Efficient Transitions**
```css
/* Opacity transitions (GPU-accelerated) */
.hero-slide {
  transition: opacity 700ms ease;
}

/* Avoid transform/width transitions on large elements */
```

### 4. **Z-Index Optimization**
```
Minimal layers:
1 → Background images
5 → Gradient (mobile only)
10 → Content overlay
20 → Controls
```

### 5. **Lazy Loading Ready**
```html
<img 
  src="mobile-bg-1.png" 
  loading="lazy"     <!-- Add if needed -->
  decoding="async"   <!-- Add if needed -->
>
```

## Code Quality

### ✅ Clean Structure
- Separation of concerns (data, render, logic)
- Reusable component class
- Configurable options

### ✅ Maintainability
- Clear naming conventions
- Well-commented code
- Modular functions

### ✅ Accessibility
- ARIA labels on all controls
- Keyboard navigation support
- Focus-visible states
- Semantic HTML

### ✅ Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- `<picture>` element support (95%+ browsers)
- Graceful fallback to `<img>` src

## Usage Example

### Initialize Carousel

```javascript
import { HeroCarousel } from './components/carousel.js';

const slides = [
  {
    desktopImage: "./images/hero-desktop-1.png",
    mobileImage: "./images/hero-mobile-1.png",
    alt: "Description"
  }
];

const carousel = new HeroCarousel(container, {
  slides: slides,
  autoplayDelay: 6000
});
```

### Update Slides

```javascript
// Add new slide
slides.push({
  desktopImage: "./images/hero-desktop-4.png",
  mobileImage: "./images/hero-mobile-4.png",
  alt: "New slide"
});

// Re-initialize
carousel.destroy();
new HeroCarousel(container, { slides, autoplayDelay: 6000 });
```

## Files Modified

| File | Changes |
|------|---------|
| `src/js/app.js` | Updated slides data with desktopImage/mobileImage |
| `src/js/components/carousel.js` | Refactored renderSlide() with `<picture>` element |
| `src/css/styles.css` | Complete responsive styling overhaul |
| `src/assets/images/README.md` | Updated with responsive image requirements |

## Testing Checklist

- [x] Desktop images load on desktop (≥1024px)
- [x] Mobile images load on mobile (<1024px)
- [x] Resize window - images switch automatically
- [x] Dark gradient shows on mobile only
- [x] Blue box shows on desktop only
- [x] Text is centered on mobile
- [x] Text is left-aligned on desktop
- [x] Navigation controls hidden on mobile
- [x] Navigation controls visible on desktop
- [x] Indicators are red when active
- [x] Indicators are white 60% when inactive
- [x] Smooth transitions between slides
- [x] No layout shifts during resize
- [x] Autoplay works correctly
- [x] Pause on hover works
- [x] Keyboard navigation works

## Summary

✅ **Responsive Images**: Separate mobile/desktop images with `<picture>` element  
✅ **Breakpoint**: 1024px for mobile/desktop switch  
✅ **Mobile Design**: Dark gradient, centered text, no blue box  
✅ **Desktop Design**: Blue gradient box on right  
✅ **Indicator Colors**: Red (#EF0000) active, White 60% inactive  
✅ **Navigation**: Hidden mobile, visible desktop  
✅ **Performance**: Native browser handling, no layout shifts  
✅ **Clean Code**: Reusable, maintainable, well-documented  
✅ **Typography**: Responsive scaling (1.5rem mobile → 2.5rem desktop)  
✅ **Spacing**: Optimized for each breakpoint  

The carousel is now production-ready with proper responsive behavior, performance optimization, and clean code structure! 🚀
