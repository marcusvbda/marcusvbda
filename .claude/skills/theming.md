# Theming & Design System

The design system defines the **visual contract** of the application.
Themes must be predictable, accessible, and easy to evolve.

---

## Core Rules

- Dark and Light mode support is mandatory
- Design tokens are the **only** source of visual values
- Hardcoded colors are forbidden

Visual consistency is a system guarantee, not a best effort.

---

## Design Tokens

- All colors, spacing, typography, and radii must come from tokens
- Tokens must be centrally defined and versioned
- Components must consume tokens, never raw values
- No inline color values, no ad-hoc CSS variables, no theme-specific overrides inside components

---

## Theme Modes

- Light and Dark themes must be functionally equivalent
- No feature or behavior may depend on the active theme
- Theme switching must not cause layout shifts
- Theme logic must be centralized

---

## Accessibility

- Proper contrast ratios must be respected
- Text and interactive elements must remain legible in all themes
- Focus states must be visible in both modes

Accessibility is non-negotiable.

---

## Anti-Patterns

The following are forbidden:
- Hardcoded colors or styles
- Theme-specific business or UI logic
- Forked components per theme
- CSS hacks to "fix" one theme

---

## Non-Negotiables

- No hardcoded colors
- No theme leakage into logic
- No inconsistent visuals

Themes are a presentation concern.
Behavior must remain identical.
