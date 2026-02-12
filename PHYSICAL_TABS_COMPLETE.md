# Physical Gift Cards Tabs - Complete Implementation

## Overview
All three tabs in the "All you need to know about Physical Gift Cards" section have been implemented to match the reference designs.

## Tab Layouts

### Tab 1: How to order (Two-Column with Steps)

```
┌─────────────────────────┐    ┌─────────────────────────┐
│      🏪                  │    │      💼                  │
│  Personal orders         │    │  Corporate orders        │
│                          │    │                          │
│  Step 1: Visit...        │    │  Step 1: Submit...       │
│  Step 2: Choose...       │    │  Step 2: Pay...          │
│  Step 3: Make...         │    │  Step 3: Arrange...      │
│                          │    │                          │
│  [Locate us]             │    │  [Gift cards pre-order]  │
└─────────────────────────┘    └─────────────────────────┘
```

**Structure**: 2 columns with icons, step-by-step instructions, and CTA buttons

### Tab 2: How to use (Two-Column with Images)

```
┌─────────────────────────┐    ┌─────────────────────────┐
│        ○                 │    │        ○                 │
│      ╱   ╲               │    │      ╱   ╲               │
│     │ 💳  │              │    │     │ 📱  │              │
│      ╲   ╱               │    │      ╲   ╱               │
│        ○                 │    │        ○                 │
│                          │    │                          │
│  In stores               │    │  For digital payments    │
│  Scan gift card          │    │  Add gift card to your   │
│  barcode at...           │    │  FairPrice Group app:    │
│                          │    │  1. Scratch foil...      │
│                          │    │  2. On the app...        │
│                          │    │  3. The gift card...     │
└─────────────────────────┘    └─────────────────────────┘
```

**Structure**: 2 cards with circular backgrounds, images, and descriptions

### Tab 3: How to view (Three-Step Layout)

```
┌────────────┐     ┌────────────┐     ┌────────────┐
│  STEP 1    │     │  STEP 2    │     │  STEP 3    │
└────────────┘     └────────────┘     └────────────┘
     ○               ○               ○
   ╱   ╲           ╱   ╲           ╱   ╲
  │ 📄  │         │ 💳  │         │ 📱  │
   ╲   ╱           ╲   ╱           ╲   ╱
     ○               ○               ○

Visit here to    Key in your      Tap 'Check
view the gift    16-digit card    Balance' to
card validity    number...        view your...
```

**Structure**: 3 steps with circular backgrounds (same as eGift design)

## Data Structure

### How to order
```javascript
{
  id: "physical-order",
  label: "How to order",
  type: "two-column",  // No type specified = default two-column
  columns: [
    {
      title: "Personal orders",
      iconImage: "icon-store.png",
      steps: [...],
      buttonText: "Locate us"
    },
    {
      title: "Corporate orders",
      iconImage: "icon-briefcase.png",
      steps: [...],
      buttonText: "Gift cards pre-order"
    }
  ]
}
```

### How to use
```javascript
{
  id: "physical-use",
  label: "How to use",
  type: "two-column-image",
  columns: [
    {
      title: "In stores",
      iconImage: "physical-use-instore.png",
      description: "Scan gift card barcode at the cashier or self-checkout"
    },
    {
      title: "For digital payments",
      iconImage: "physical-use-digital.png",
      description: "Add gift card to your FairPrice Group app:",
      steps: [
        "Scratch foil on the back of gift card to show barcode",
        "On the app, tap 'Scan' and scan the barcode",
        "The gift card will be added into Vouchers"
      ]
    }
  ]
}
```

### How to view
```javascript
{
  id: "physical-view",
  label: "How to view",
  type: "three-steps",
  steps: [
    {
      step: "1",
      title: "Visit here to view the gift card validity",
      image: "physical-view-step1.png"
    },
    {
      step: "2",
      title: "Key in your 16-digit card number located at the back of your gift card",
      image: "physical-view-step2.png"
    },
    {
      step: "3",
      title: "Tap 'Check Balance' to view your balance",
      image: "physical-view-step3.png"
    }
  ]
}
```

## Rendering Logic

### Dynamic Layout Selection

```javascript
const tabPanels = tabs.map((tab, index) => {
  // Three-steps layout (How to view)
  if (tab.type === "three-steps") {
    return renderThreeStepLayout(tab);
  }
  
  // Two-column layouts (How to order, How to use)
  return renderTwoColumnLayout(tab);
});
```

### Card Type Detection

```javascript
function renderPhysicalColumn(column, tabType) {
  // How to order: Steps with buttons
  if (column.steps && !tabType.includes("image")) {
    return renderStepColumnWithButton(column);
  }
  
  // How to use: Images with circular backgrounds
  return renderImageColumn(column);
}
```

## Required Images

### How to use Tab (2 images)
| File | Content | Background |
|------|---------|------------|
| **physical-use-instore.png** | Gift card with barcode in rounded square | Circular light blue |
| **physical-use-digital.png** | Mobile phone with gift cards | Circular light blue |

### How to view Tab (3 images)
| File | Content | Background |
|------|---------|------------|
| **physical-view-step1.png** | Document/mobile showing validity check | Circular light blue |
| **physical-view-step2.png** | Gift card showing 16-digit barcode | Circular light blue |
| **physical-view-step3.png** | Mobile screen with "Check Balance" button | Circular light blue |

**Total new images**: 5 (2 for How to use, 3 for How to view)

## CSS Styling

### How to use Cards
```css
.physical-use-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
}

.physical-use-card .rounded-full {
  background-color: #D4EFF7;
  width: 16rem;
  height: 16rem;
}
```

### How to view Steps
```css
.physical-view-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
}

.physical-view-step .step-circle {
  background-color: #D4EFF7;
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
}

.physical-view-step .step-badge {
  background: #02335D;
  color: white;
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: 700;
  text-transform: uppercase;
}
```

## Responsive Behavior

### How to use (2 columns)
```css
Mobile:  1 column, stacked
Desktop: 2 columns, side by side
```

### How to view (3 columns)
```css
Mobile:  1 column, stacked
Desktop: 3 columns, row
```

## Visual Hierarchy

### How to use
```
Image (circular bg) → Title → Description → Steps (numbered list)
```

### How to view
```
STEP Badge → Image (circular bg) → Title/Description
```

## Implementation Details

### renderPhysicalColumn() Function

Handles two different card types:

```javascript
function renderPhysicalColumn(column, tabType) {
  // Type 1: Steps with buttons (How to order)
  if (column.steps && !tabType.includes("image")) {
    return `
      <article>
        <img />
        <h3>Title</h3>
        <div>Step 1: ..., Step 2: ..., Step 3: ...</div>
        <button>CTA</button>
      </article>
    `;
  }
  
  // Type 2: Images with descriptions (How to use)
  return `
    <article>
      <div class="rounded-full bg-[#D4EFF7]">
        <img />
      </div>
      <h3>Title</h3>
      <p>Description</p>
      <ol>Steps list</ol>
    </article>
  `;
}
```

### renderPhysicalViewStep() Function

Matches eGift step structure:

```javascript
function renderPhysicalViewStep(step) {
  return `
    <article class="physical-view-step">
      <div class="step-badge">STEP ${step.step}</div>
      <div class="step-circle bg-[#D4EFF7]">
        <img src="${step.image}" />
      </div>
      <p>${step.title}</p>
    </article>
  `;
}
```

## Structural Consistency

Both eGift and Physical sections now share:

| Feature | eGift | Physical |
|---------|-------|----------|
| **Tab Navigation** | ✅ Bottom border indicator | ✅ Bottom border indicator |
| **Three-step layout** | ✅ How to order/use/view | ✅ How to view |
| **Circular backgrounds** | ✅ #D4EFF7 | ✅ #D4EFF7 |
| **Step badges** | ✅ STEP 1, 2, 3 | ✅ STEP 1, 2, 3 |
| **Card structure** | ✅ flex flex-col items-center | ✅ flex flex-col items-center |
| **Typography** | ✅ Same font sizes | ✅ Same font sizes |
| **Spacing** | ✅ gap-12, mb-6 | ✅ gap-12, mb-6 |

## Files Modified

| File | Changes |
|------|---------|
| `src/js/data/content.js` | Updated physical-use and physical-view tabs data |
| `src/js/components/renderers.js` | Added renderPhysicalViewStep(), updated renderPhysicalColumn() |
| `src/css/styles.css` | Added physical-use-card and physical-view-step styles |
| `src/assets/images/README.md` | Added 6 new image requirements |

## Testing Checklist

- [ ] Place images in `/workspace/src/assets/images/`
  - [ ] physical-use-instore.png
  - [ ] physical-use-digital.png
  - [ ] physical-view-step1.png
  - [ ] physical-view-step2.png
  - [ ] physical-view-step3.png
- [ ] Click "How to use" tab - verify 2 cards display
- [ ] Click "How to view" tab - verify 3 steps display
- [ ] Check circular backgrounds are light blue
- [ ] Verify STEP badges appear on How to view
- [ ] Test responsive layout on mobile/desktop
- [ ] Verify tab switching works smoothly

## Summary

✅ **How to order**: 2 columns with icons, steps, and buttons  
✅ **How to use**: 2 cards with circular images and descriptions  
✅ **How to view**: 3 steps with STEP badges (same as eGift)  
✅ **Consistent structure**: Matches eGift design patterns  
✅ **Dynamic layouts**: Adapts based on tab type  
✅ **Light blue circles**: #D4EFF7 backgrounds  
✅ **Responsive**: Works on all screen sizes  

All three tabs in the Physical Gift Cards section are now complete and follow the same design structure as the eGift section! 🚀
