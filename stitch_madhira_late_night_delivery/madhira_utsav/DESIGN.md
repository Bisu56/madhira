# Design System Strategy: The Festive Pulse

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Modern Mela."** 

Unlike standard delivery apps that rely on sterile, utility-driven grids, this system captures the kinetic energy of a Nepali festival (Jatra) at night—vibrant, communal, and soul-warming. We reject the "default" look by embracing **Kinetic Layering**. This means moving away from flat, boxed-in layouts in favor of intentional asymmetry, overlapping elements, and a vertical rhythm that mimics the stepped architecture of a stupa. 

We are building a premium "High-End Editorial" experience for late-night cravings. The goal is to make the user feel like they are invited to an exclusive, high-energy celebration, using sophisticated tonal shifts and rhythmic patterns rather than rigid lines.

---

## 2. Colors & Atmospheric Depth
Our palette is a celebration of Nepali heritage, translated into a modern digital interface. We use a **Light Mode** base that feels energetic and fresh, even at 2 AM.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders for sectioning or containment. 
Boundaries must be defined solely through:
- **Background Color Shifts:** A `surface-container-low` section sitting on a `surface` background.
- **Tonal Transitions:** Using `surface-bright` to highlight active areas.
- **Negative Space:** Allowing the `plusJakartaSans` typography to breathe.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine handmade Lokta paper.
- **Base Level:** `surface` (#fff4f2) – The canvas.
- **Lower Level:** `surface-container-low` (#ffede9) – For secondary groupings or background sections.
- **Active Level:** `surface-container` (#ffe2db) – For main content cards.
- **Top Level:** `surface-container-highest` (#ffd3c9) – For elevated interactions or prominent modals.

### The "Glass & Gradient" Rule
To elevate the "Premium Festive" vibe, use **Glassmorphism** for floating elements (like a "Cart Summary" bar). Use a 20% opacity on `surface-container-lowest` with a `24px` backdrop blur. 
- **Signature Gradients:** For primary CTAs, apply a linear gradient from `primary` (#b5161e) to `primary-container` (#ff766d). This adds a "glow" that mimics the warmth of a marigold-lit evening.

---

## 3. Typography: The Editorial Voice
We use typography to balance "Cultural Character" with "Digital Precision."

*   **The Display Voice (Epilogue):** This is our characterful, handcrafted anchor. Use `display-lg` and `headline-md` to inject personality. It should feel rhythmic and bold, often overlapping with visual elements or containers to break the "web" feel.
*   **The Utility Voice (Plus Jakarta Sans):** This is our "Friendly Sans." It provides high legibility for menus and descriptions. Use `title-md` for item names and `body-md` for descriptions.

**Hierarchy Strategy:** 
- Use extreme scale contrast. A `display-lg` title next to a `body-sm` label creates an editorial, high-fashion look that feels more "curated" than a standard list.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are often a "lazy" way to show depth. In this system, we use **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by "stacking" surface tiers. Place a `surface-container-lowest` card on a `surface-container-low` background to create a soft, natural lift.
*   **Ambient Shadows:** If a floating effect is required (e.g., a "Quick Add" button), use a diffused shadow: `box-shadow: 0 12px 32px rgba(65, 41, 35, 0.08);`. The shadow is tinted with `on-surface` (#412923) to feel like natural ambient light.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline-variant` (#caa59c) at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components & Interface Elements

### Buttons
- **Primary:** `primary` (#b5161e) background with `on-primary` (#ffefed) text. Radius: `full`. Use a subtle inner glow on hover.
- **Secondary:** `secondary-container` (#ffc96f) background with `on-secondary-container` (#614100) text. Radius: `md` (1.5rem).

### Cards & Lists (The "No-Divider" Rule)
Forbid the use of divider lines between items. 
- **The Pattern:** Use `surface-container-low` as a wrapper for lists, and separate items using `16px` of vertical white space or by placing each item in a `surface-container-lowest` card with `xl` (3rem) corner radii.

### Visual Accents: The Dhaka Motif
Incorporate subtle **Dhaka fabric geometry** or **Mandala-inspired patterns** using `outline-variant` at 10% opacity as a background watermark in the `surface-container-highest` headers. This adds cultural texture without cluttering the UI.

### Icons
- **Style:** Friendly, rounded, and "chunky." 
- **Color:** Use `tertiary` (#00675c) for success states and `secondary` (#7b5400) for "Festive/Special" offers.

### Late-Night Specifics: The "Energy" Toggle
- **Festive Chips:** Use `secondary-fixed` for tags like "Spicy," "Hot," or "Late Night Special." 
- **Floating Action Button (FAB):** A large, `xl` rounded button in `primary` with a subtle pulse animation to signify "Active Delivery."

---

## 6. Do’s and Don'ts

### Do:
- **Do** use intentional asymmetry. A heading might be left-aligned while the supporting text is indented or slightly shifted.
- **Do** use "Soft Edges." Everything should feel touchable and friendly (minimum `DEFAULT` 1rem radius).
- **Do** use `tertiary` (#00675c) to provide a cooling contrast to the warm crimsons and oranges.

### Don’t:
- **Don’t** use black (#000000). Use `on-surface` (#412923) for all text to maintain the "warm" evening glow.
- **Don’t** use standard 1px dividers. If you feel you need one, use a `4px` gap of `surface-container-low` instead.
- **Don’t** settle for flat colors. Use the provided "Container" tokens to create a "nested" environment that feels like a physical space.

---

## 7. Roundedness Scale
This system relies on "Soft Generosity."
- **Small (sm):** 0.5rem (Inner elements like checkmarks)
- **Medium (md):** 1.5rem (Input fields, small chips)
- **Default:** 1rem (Standard cards)
- **Large (lg):** 2rem (Main content containers)
- **Extra Large (xl):** 3rem (Hero sections, large modal headers)
- **Full:** 9999px (Buttons, Pill-shaped tags)