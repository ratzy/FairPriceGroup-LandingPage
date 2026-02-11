# Typography Update - Museo Sans

## Overview
The landing page now uses **Museo Sans** as the primary font family for all headings and body copy.

## Font Implementation

### Font Source
Museo Sans is loaded via Adobe Typekit (Adobe Fonts):

```html
<!-- Museo Sans Font -->
<link rel="stylesheet" href="https://use.typekit.net/wnc1kxe.css">
```

### Tailwind Configuration

Updated Tailwind config to use Museo Sans as the default sans-serif font:

```javascript
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Museo Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      // ... other config
    },
  },
};
```

### CSS Variables

Added Museo Sans to CSS root variables:

```css
:root {
  --font-museo: "Museo Sans", system-ui, -apple-system, sans-serif;
}
```

## Typography Hierarchy

### Body Copy
```css
body {
  font-family: var(--font-museo);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

**Applied to:**
- All paragraph text
- UI elements (buttons, inputs, labels)
- Navigation links
- Body copy throughout the page

### Headings
```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-museo);
  font-weight: 700; /* Bold */
}
```

**Applied to:**
- Page title (h1)
- Section headings (h2)
- Card titles (h3)
- All other headings

### Other Elements
```css
p, span, a, button, input, textarea, select {
  font-family: var(--font-museo);
}
```

## Font Weights Available

Museo Sans typically includes these weights:
- **100** - Thin
- **300** - Light
- **500** - Regular/Medium
- **700** - Bold
- **900** - Black

### Usage Examples

```html
<!-- Headings - Bold (700) -->
<h1 class="font-bold">Museo Sans Bold</h1>

<!-- Body - Regular (500) -->
<p class="font-normal">Museo Sans Regular</p>

<!-- Light text (300) -->
<p class="font-light">Museo Sans Light</p>

<!-- Extra Bold (900) -->
<p class="font-black">Museo Sans Black</p>
```

## Font Rendering

Added font smoothing for better display quality:

```css
-webkit-font-smoothing: antialiased;      /* Webkit browsers */
-moz-osx-font-smoothing: grayscale;       /* Firefox on macOS */
```

This ensures smooth, crisp text rendering across all browsers.

## Visual Comparison

### Before (Inter)
```
Font Stack:
Inter, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif

Characteristics:
- Neutral, modern sans-serif
- Designed for screens
- Good readability
```

### After (Museo Sans)
```
Font Stack:
"Museo Sans", system-ui, -apple-system, sans-serif

Characteristics:
- Geometric sans-serif with personality
- Friendly, approachable feel
- Excellent for branding
- Good readability with character
```

## Fallback Fonts

The font stack includes fallbacks in case Museo Sans fails to load:

```
"Museo Sans" → system-ui → -apple-system → sans-serif
```

1. **Museo Sans** - Primary font
2. **system-ui** - System default font
3. **-apple-system** - Apple's San Francisco font
4. **sans-serif** - Generic sans-serif

## Files Modified

| File | Changes |
|------|---------|
| `index.html` | Added Typekit link, updated Tailwind config with fontFamily |
| `src/css/styles.css` | Added --font-museo variable, applied to body and headings |

## Typography Samples

### Headings

```html
<!-- Hero Heading -->
<h1 class="text-3xl font-bold md:text-4xl lg:text-[2.75rem]">
  Everyday gifting, made a little better
</h1>

<!-- Section Headings -->
<h2 class="text-center text-2xl font-bold text-brand-dark">
  Gifting made practical, easy and meaningful
</h2>

<!-- Card Titles -->
<h3 class="mb-3 text-xl font-bold text-brand-dark">
  Practical
</h3>
```

### Body Copy

```html
<!-- Description Text -->
<p class="mt-4 text-sm leading-relaxed text-white/90 md:text-base">
  For anyone who deserves a little cheer, from colleagues to clients or friends.
</p>

<!-- Card Description -->
<p class="text-sm leading-relaxed text-muted">
  Redeemable for groceries, daily essentials, and indulgences at over 200 stores.
</p>
```

### Buttons

```html
<!-- Primary Button -->
<button class="bg-white px-6 py-3 text-sm font-semibold text-brand">
  Send Personal eGift
</button>

<!-- Secondary Button -->
<button class="border-2 border-white px-6 py-3 text-sm font-semibold text-white">
  Corporate Gifting
</button>
```

## Brand Consistency

Museo Sans aligns with FairPrice Group's brand guidelines:
- ✅ Modern and approachable
- ✅ Professional yet friendly
- ✅ Excellent readability
- ✅ Distinctive brand personality
- ✅ Consistent across all elements

## Browser Support

Museo Sans (via Adobe Typekit) is supported in:
- ✅ Chrome/Edge (all versions)
- ✅ Firefox (all versions)
- ✅ Safari (all versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ All modern browsers with web font support

## Performance

### Font Loading
- Loaded via Adobe's CDN (fast, reliable)
- Cached by browser
- Fallback fonts display immediately
- No FOUT (Flash of Unstyled Text) with proper loading

### File Size
Adobe Typekit optimizes font delivery:
- Only loads required weights
- Compressed WOFF2 format
- ~50-100KB per weight

## Accessibility

Museo Sans maintains excellent accessibility:
- ✅ Clear letterforms
- ✅ Good x-height for readability
- ✅ Adequate spacing
- ✅ Works well at all sizes
- ✅ High contrast with backgrounds

## Testing Checklist

- [x] Font loads correctly
- [x] Headings use Museo Sans Bold
- [x] Body copy uses Museo Sans Regular
- [x] Buttons use Museo Sans
- [x] Navigation uses Museo Sans
- [x] Fallback fonts work if Museo Sans fails
- [x] Font renders smoothly on all browsers
- [x] Mobile display looks good
- [x] All text elements updated

## Alternative Font Sources

If Adobe Typekit is not accessible, Museo Sans can also be loaded via:

### Google Fonts Alternative
```html
<!-- Note: Museo Sans is not on Google Fonts -->
<!-- Use a similar font like: -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">
```

### Self-Hosted Option
```css
@font-face {
  font-family: 'Museo Sans';
  src: url('./fonts/MuseoSans-300.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Museo Sans';
  src: url('./fonts/MuseoSans-500.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Museo Sans';
  src: url('./fonts/MuseoSans-700.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

## Summary

✅ **Museo Sans** implemented site-wide  
✅ Applied to **all headings** (h1-h6)  
✅ Applied to **all body copy**  
✅ Loaded via **Adobe Typekit**  
✅ Configured in **Tailwind**  
✅ Added to **CSS variables**  
✅ **Font smoothing** enabled  
✅ **Fallback fonts** configured  
✅ **Bold (700)** for headings  
✅ **Regular (500)** for body  

The landing page now has a cohesive, branded typography system using Museo Sans throughout! 🎨
