---
name: Personal Portfolio
colors:
  surface: '#fafaf5'
  surface-dim: '#dadad6'
  surface-bright: '#fafaf5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f0'
  surface-container: '#eeeeea'
  surface-container-high: '#e8e8e4'
  surface-container-highest: '#e2e3df'
  on-surface: '#1a1c1a'
  on-surface-variant: '#434749'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f1f1ed'
  outline: '#747879'
  outline-variant: '#c3c7c8'
  surface-tint: '#586062'
  primary: '#181f21'
  on-primary: '#ffffff'
  primary-container: '#2d3436'
  on-primary-container: '#959c9f'
  inverse-primary: '#c1c8ca'
  secondary: '#5d5f5a'
  on-secondary: '#ffffff'
  secondary-container: '#e3e3dc'
  on-secondary-container: '#636560'
  tertiary: '#1d1e17'
  on-tertiary: '#ffffff'
  tertiary-container: '#32332c'
  on-tertiary-container: '#9b9b91'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde4e6'
  primary-fixed-dim: '#c1c8ca'
  on-primary-fixed: '#161d1f'
  on-primary-fixed-variant: '#41484a'
  secondary-fixed: '#e3e3dc'
  secondary-fixed-dim: '#c6c7c0'
  on-secondary-fixed: '#1a1c18'
  on-secondary-fixed-variant: '#464742'
  tertiary-fixed: '#e4e3d8'
  tertiary-fixed-dim: '#c7c7bc'
  on-tertiary-fixed: '#1b1c15'
  on-tertiary-fixed-variant: '#46473f'
  background: '#fafaf5'
  on-background: '#1a1c1a'
  surface-variant: '#e2e3df'
typography:
  headline-xl:
    fontFamily: Noto Serif
    fontSize: 4.5rem
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 3rem
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Noto Serif
    fontSize: 2rem
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-numeric:
    fontFamily: Noto Serif
    fontSize: 2.5rem
    fontWeight: '600'
    lineHeight: '1'
  label-caps:
    fontFamily: Manrope
    fontSize: 0.75rem
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  base: 8px
  section-gap: 160px
  container-max: 1280px
  gutter: 32px
  margin-page: 64px
---

## Brand & Style

This design system is rooted in high-end editorial minimalism. It targets a premium audience that values technical precision blended with aesthetic sensibility. The brand personality is poised, professional, and understated, favoring intentional whitespace and structural clarity over decorative clutter.

The visual direction uses a "Modular Editorial" approach, where layouts feel like a modern magazine. It relies on a high-contrast interplay between a warm, parchment-like canvas and deep slate elements to create a sense of tactile luxury and intellectual depth.

## Colors

The palette is restrained and sophisticated. The primary background (#F2F2EB) provides a warm, organic feel that reduces eye strain compared to pure white. The primary accent (#2D3436) is used for all high-emphasis text, primary buttons, and structural dividers, creating a solid anchor for the design.

Tertiary tones are used sparingly for low-emphasis labels and borders, maintaining a soft transition between elements. Success, error, and warning states should remain neutral or use subtle shifts in the primary slate to avoid breaking the minimalist harmony.

## Typography

Typography is the cornerstone of this design system. It utilizes a classic serif for large-scale headlines to convey authority and timelessness. The sans-serif body face provides a modern, technical counterpoint that ensures readability across all devices.

Numeric labels in the services section should be oversized and serifed to serve as graphic elements. Navigation and small UI labels use wide-spaced uppercase sans-serif to provide a clear, functional contrast to the more fluid headline styles.

## Layout & Spacing

The layout follows a 12-column fixed grid with generous margins to create a focused, centered content column. The spacing rhythm is intentionally "airy," with significant vertical gaps between sections to allow each piece of content to be consumed individually without distraction.

Large project thumbnails should occupy half-width or full-width containers, alternating or stacking to create a rhythmic vertical scroll. Elements like the numeric service labels should be aligned to a tight sub-grid within their respective sections.

## Elevation & Depth

This design system avoids traditional shadows in favor of "flat layering" and "tonal depth." Hierarchy is achieved through color blocks and hair-line borders rather than Z-axis elevation.

- **Primary Depth:** Achieved by placing dark slate containers directly onto the warm neutral background.
- **Micro-Depth:** Subtle 1px borders in a slightly darker version of the background color are used to define card boundaries.
- **Interactivity:** Hover states should involve color inversions or slight scale adjustments rather than shadow increases, maintaining the 2D editorial aesthetic.

## Shapes

The design system employs a "Sharp" aesthetic (0px radius) to reinforce the professional and architectural nature of the brand. Rectilinear forms convey precision and stability.

The only exceptions are specific circular elements used for "Call to Action" buttons (like a floating 'Let's Talk' circle) or profile images, which serve as organic focal points within the rigid, geometric grid.

## Components

### Buttons
Primary buttons are solid dark slate rectangles with white or warm-neutral text. Secondary buttons use a hairline border with no fill. For high-impact CTAs, use a circular button format with centered text.

### Numeric Labels
In the services section, use large-scale serif numbers. These should be treated as structural elements, positioned to the left of the service title and description to act as a visual anchor.

### Project Cards
Cards should be split 50/50 between a high-resolution image and a content area. The content area should have a slightly different background tint (or remain the base neutral) to distinguish it from the page background.

### Footer
The footer should be treated as a high-contrast "moment," potentially inverting the color scheme (dark slate background with warm neutral text) to signal the end of the page and a call to contact.

### Quotes
Testimonials use large, stylized opening quotation marks in a muted version of the primary color, with the quote text set in a medium-weight serif font for a literary feel.
