# Design System: The Midnight Sommelier

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Speakeasy."** 

We are moving away from the "utility-first" look of standard e-commerce. This system is designed to feel like a private, invitation-only lounge at 2:00 AM—quiet, expensive, and atmospheric. To achieve this, we reject the rigid, boxed-in layouts of traditional web design. Instead, we embrace **Intentional Asymmetry** and **Tonal Depth**.

The goal is to guide the user’s eye not through lines and borders, but through light and shadow. We use high-contrast typography scales (the "Editorial Flare") where massive serif displays sit beside whispered sans-serif labels, creating a sense of curated luxury.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the depth of the night, using rich charcoals and navy to create a canvas where gold and electric blue can glow like neon and silk.

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders are prohibited for sectioning. We do not "box" content. Boundaries must be defined solely through background color shifts or tonal transitions. Use `surface-container-low` against a `surface` background to create a section. 

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of smoked glass. 
- **Base Layer:** `surface` (#11131d)
- **Secondary Sectioning:** `surface-container-low` (#191b26)
- **Interactive Cards:** `surface-container` (#1d1f2a)
- **High-Priority Modals:** `surface-container-highest` (#32343f)

### The "Glass & Gradient" Rule
To elevate the experience, use **Glassmorphism** for floating elements (Navigation bars, Cart drawers). Use `surface` colors at 60-80% opacity with a `backdrop-blur` of 12px-20px. 

For primary CTAs, do not use flat colors. Apply a subtle **"Liquid Gold" Gradient**: linear-gradient(135deg, `primary` #e9c176 0%, `on-primary-container` #977633 100%).

---

## 3. Typography
We pair the authority of a classic serif with the precision of a modern grotesque.

*   **Display (Noto Serif / Playfair):** Used for "Brand Moments"—hero headers, product categories, and price points. The scale is aggressive (`display-lg` at 3.5rem) to evoke an editorial magazine feel.
*   **Body (Inter):** Used for descriptions and specs. We prioritize readability with generous line heights (1.6) and letter spacing (0.01em).
*   **Labels (Inter):** All-caps with increased letter spacing (0.05em) for category tags to signify "Expert Curation."

**Identity Logic:** The serif conveys the "Spirit" (heritage, taste, story), while the sans-serif conveys the "Service" (utility, logistics, speed).

---

## 4. Elevation & Depth
In this system, elevation is an atmospheric effect, not a structural one.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a "recessed" look, as if the product is nestled in a velvet-lined box.
*   **Ambient Shadows:** For floating elements, use extra-diffused shadows: `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4)`. The shadow must never be grey; it should feel like an absence of light.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` token at **15% opacity**. A solid 100% opaque border is a failure of the design language.
*   **Glow Effects:** Small components (active radio buttons, notifications) should use a subtle outer glow of `secondary` (#b6c4ff) to mimic the "Electric Blue" neon of a late-night city.

---

## 5. Components

### Buttons
*   **Primary:** "Liquid Gold" gradient, no border, `md` (0.75rem) rounded corners. Text is `on-primary` (#412d00).
*   **Secondary:** Ghost style. Transparent background, `outline` (#919096) ghost border at 20% opacity. On hover, background shifts to `surface-bright`.
*   **Tertiary:** Text-only in `secondary` (#b6c4ff) with a bottom-aligned accent line that expands on hover.

### Cards & Product Grids
*   **Rule:** Forbid divider lines. Use `xl` (1.5rem) spacing between elements.
*   **Image Treatment:** Use a subtle vignette on product photography so images bleed seamlessly into the `surface-container` background.
*   **Interaction:** On hover, the card should scale slightly (1.02x) and the backdrop-blur should increase, making the card feel like it's lifting toward the user.

### Input Fields
*   **State:** Default state uses `surface-container-highest` with a `none` border. 
*   **Focus State:** The field background stays dark, but a 1px "Ghost Border" of `primary` (#e9c176) at 40% opacity fades in.

### Additional Signature Components
*   **The "Mood Toggle":** A custom selection chip for filtering by "Occasion" (e.g., 'Quiet Night', 'Celebration', 'Gift'). These use `secondary-container` with high-blur glows.
*   **Age Verification Modal:** A full-screen `surface` blur with `display-md` serif typography. It shouldn't feel like a barrier, but like a "Check-in" at a high-end club.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts (e.g., product image offset to the left, text floating high-right) to create a premium feel.
*   **Do** use `surface-container-lowest` for deep "wells" where content is nested.
*   **Do** ensure high-quality imagery has "Golden Hour" or "Moody Night" lighting.

### Don't
*   **Don't** use pure black (#000000). Always use the `surface` tokens to maintain tonal warmth.
*   **Don't** use standard "Drop Shadows." Use tonal layering.
*   **Don't** use sharp 90-degree corners. Everything must feel "Softened" to the touch, using the `DEFAULT` (0.5rem) or `lg` (1rem) tokens.
*   **Don't** crowd the screen. If you think there is enough white space (or "Dark Space"), double it.