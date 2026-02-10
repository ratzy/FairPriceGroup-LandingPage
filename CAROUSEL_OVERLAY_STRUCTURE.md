# Carousel Overlay Structure Documentation

## Important: Image vs Code Separation

### ⚠️ Critical Understanding

The carousel consists of **TWO SEPARATE LAYERS**:

1. **Background Layer (Images)** - Pure background images only
2. **Overlay Layer (HTML/CSS Code)** - All text and buttons

## Visual Layer Breakdown

```
┌─────────────────────────────────────────────────────────┐
│                    CAROUSEL CONTAINER                   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐  │
│  │  LAYER 1: Background Images (z-index: 1)        │  │
│  │  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │  │
│  │  • hero-C1.png (Shopping scene only)            │  │
│  │  • hero-C2.png (Background only)                │  │
│  │  • hero-C3.png (Background only)                │  │
│  │  • NO TEXT, NO BUTTONS IN IMAGES                │  │
│  └─────────────────────────────────────────────────┘  │
│                                                         │
│  ┌─────────────────────────────────────────────────┐  │
│  │  LAYER 2: Coded Overlay (z-index: 10)          │  │
│  │  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │  │
│  │                      ┌─────────────────────┐    │  │
│  │                      │ Blue Box (HTML/CSS) │    │  │
│  │                      │ ─────────────────── │    │  │
│  │                      │ • Heading (HTML)    │    │  │
│  │                      │ • Text (HTML)       │    │  │
│  │                      │ • Buttons (HTML)    │    │  │
│  │                      └─────────────────────┘    │  │
│  └─────────────────────────────────────────────────┘  │
│                                                         │
│                      ⚫ ⚪ ⚪  (Indicators)              │
└─────────────────────────────────────────────────────────┘
```

## Code Structure

### Layer 1: Background Images (HTML)

```html
<!-- Background Image Slides (Images Only) -->
<div class="hero-carousel-slides">
  <div class="hero-slide">
    <!-- Background Image Only (No overlay text in image) -->
    <img src="./src/assets/images/hero-C1.png" alt="" />
  </div>
</div>
```

**Key Points:**
- ✅ Images are pure backgrounds (shopping scenes, store photos, etc.)
- ✅ NO text overlays in the image files
- ✅ NO buttons in the image files
- ✅ z-index: 1 (bottom layer)

### Layer 2: Coded Overlay (HTML/CSS)

```html
<!-- Coded Overlay Content (NOT an image) -->
<div class="hero-overlay">
  <div class="hero-content-box">
    <div class="hero-content-inner bg-brand">
      <!-- Eyebrow Text (HTML) -->
      <p class="text-xs font-bold uppercase">FairPrice Gift Cards</p>
      
      <!-- Main Heading (HTML) -->
      <h1 class="text-3xl font-bold">
        Everyday gifting,<br />made a little better
      </h1>
      
      <!-- Description (HTML) -->
      <p class="text-sm">
        For anyone who deserves a little cheer, from colleagues to clients or friends. 
        Pick a design, choose a value, and make someone's day today.
      </p>
      
      <!-- CTA Buttons (HTML) -->
      <div class="flex gap-3">
        <button class="bg-white px-6 py-3">Send Personal eGift</button>
        <button class="border-2 border-white px-6 py-3">Corporate Gifting</button>
      </div>
    </div>
  </div>
</div>
```

**Key Points:**
- ✅ Everything is coded (HTML + CSS)
- ✅ Blue background from CSS (not image)
- ✅ Text is editable HTML
- ✅ Buttons are interactive HTML elements
- ✅ z-index: 10 (top layer)

## CSS Styling for Overlay

```css
/* Blue overlay box - coded, not an image */
.hero-content-inner {
  background: linear-gradient(135deg, 
    rgb(0, 87, 163) 0%, 
    rgb(2, 51, 93) 100%);
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}
```

## Benefits of This Structure

### 1. **Easy Content Updates**
```javascript
// Change text without editing images
<h1>Everyday gifting, made a little better</h1>
// ↓ Easy to change
<h1>Your new heading here</h1>
```

### 2. **Responsive Design**
- Overlay adapts to screen size
- Text reflows naturally
- Buttons stack on mobile

### 3. **Accessibility**
- Screen readers can read the text
- Buttons are keyboard navigable
- Proper semantic HTML

### 4. **SEO Benefits**
- Search engines can index text content
- Heading hierarchy is preserved
- Proper alt text for images

### 5. **Maintainability**
- No need to edit images for text changes
- CSS controls styling
- JavaScript handles interactions

## Image Requirements

### ✅ Correct Image Content

Your hero carousel images should contain:
- Store backgrounds
- Shopping scenes
- Product displays
- People with gift cards
- **NO TEXT OVERLAYS**
- **NO BUTTONS**

### ❌ Incorrect Image Content

Do NOT include in images:
- ❌ "Everyday gifting, made a little better" text
- ❌ Button graphics
- ❌ Description text
- ❌ Blue overlay box

### Example Image Composition

```
hero-C1.png:
┌─────────────────────────────────────┐
│                                     │
│   [Shoppers with shopping cart]    │
│   [Store shelves in background]    │
│   [Products visible]                │
│                                     │
│   NO TEXT - Pure background only   │
│                                     │
└─────────────────────────────────────┘
```

## File Structure

```
src/
├── js/
│   └── components/
│       └── carousel.js          ← Overlay code here
├── css/
│   └── styles.css               ← Overlay styling here
└── assets/
    └── images/
        ├── hero-C1.png          ← Background image only
        ├── hero-C2.png          ← Background image only
        └── hero-C3.png          ← Background image only
```

## Complete HTML Output

When rendered, the carousel generates:

```html
<div id="hero-carousel" class="hero-carousel-container">
  <div class="hero-carousel-wrapper">
    
    <!-- LAYER 1: Images (Backgrounds Only) -->
    <div class="hero-carousel-slides" style="z-index: 1">
      <div class="hero-slide">
        <img src="hero-C1.png" />  <!-- Just the shopping scene -->
      </div>
    </div>
    
    <!-- LAYER 2: Coded Overlay -->
    <div class="hero-overlay" style="z-index: 10">
      <div class="hero-content-box">
        <div class="hero-content-inner" style="background: linear-gradient(...)">
          <p>FairPrice Gift Cards</p>
          <h1>Everyday gifting, made a little better</h1>
          <p>For anyone who deserves a little cheer...</p>
          <button>Send Personal eGift</button>
          <button>Corporate Gifting</button>
        </div>
      </div>
    </div>
    
    <!-- Carousel Controls -->
    <button class="carousel-prev">◄</button>
    <button class="carousel-next">►</button>
    
    <!-- Indicators -->
    <div class="carousel-indicators">
      <button>●</button>
      <button>○</button>
      <button>○</button>
    </div>
    
  </div>
</div>
```

## Testing the Separation

### How to Verify Images are Separate from Overlay:

1. **Inspect Element**: Right-click on the blue overlay → Inspect
   - You should see HTML elements, not an `<img>` tag

2. **Select Text**: Try to select the heading text
   - ✅ Should be selectable (it's HTML)
   - ❌ If not selectable, it's embedded in image

3. **Check CSS**: Inspect the blue background
   - ✅ Should show `background: linear-gradient(...)`
   - ❌ If it shows `background-image: url(...)`, it's an image

4. **Console Test**:
   ```javascript
   document.querySelector('.hero-content-inner h1').textContent = 'New Text';
   // ✅ If text changes, it's coded correctly
   // ❌ If nothing happens, it's in an image
   ```

## Editing the Overlay Content

### Change Heading
Edit in `carousel.js`:
```javascript
<h1 class="mt-3 text-3xl font-bold">
  Your New Heading Here
</h1>
```

### Change Description
Edit in `carousel.js`:
```javascript
<p class="mt-4 text-sm leading-relaxed">
  Your new description text here.
</p>
```

### Change Button Text
Edit in `carousel.js`:
```javascript
<button>Your Button Text</button>
```

### Change Colors
Edit in `styles.css`:
```css
.hero-content-inner {
  background: linear-gradient(135deg, #yourcolor1, #yourcolor2);
}
```

## Summary

| Component | Type | Location | Editable |
|-----------|------|----------|----------|
| Background Images | Image Files | hero-C1.png, hero-C2.png, hero-C3.png | Photoshop/Image Editor |
| Blue Overlay Box | CSS | styles.css | Code Editor |
| Heading Text | HTML | carousel.js | Code Editor |
| Description Text | HTML | carousel.js | Code Editor |
| Buttons | HTML | carousel.js | Code Editor |
| Button Styling | CSS | styles.css | Code Editor |

✅ **Correct Structure**: Images = Background only, Overlay = Pure code  
❌ **Incorrect Structure**: Images = Background + overlay baked in  

The current implementation follows the **correct structure** where images are pure backgrounds and all overlay content is coded separately.
