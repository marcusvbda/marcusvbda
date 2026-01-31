---
name: code-review
description: Defines mandatory code review standards: architecture enforcement, quality expectations, security checks. Use when reviewing pull requests or when the user asks for a code review.
---

# Code Review Standards

All code — human-written or AI-generated — **must** comply with these standards.
Code reviews exist to protect architecture, predictability, and long-term maintainability.

---

## Architectural Integrity

Reviewers **must reject** code that introduces:

- Layer violations
- Hidden or implicit dependencies
- Responsibility leakage across layers
- Tight coupling between unrelated concerns

Rules:

- Dependencies must flow in the approved direction only
- Every module must have a single, clear responsibility
- Convenience is never a valid reason to bypass architecture

Architectural violations are treated as bugs.

---

## Code Quality

### Readability & Clarity

- Readability over cleverness
- Explicit naming over abbreviations
- Code must be understandable without comments

Rules:

- Functions must be small and focused
- One function = one responsibility
- Control flow must be obvious at a glance

If intent is unclear, the code is wrong.

---

### Naming

- Names must describe **what**, not **how**
- Avoid generic names (`handle`, `process`, `data`)
- Avoid misleading or overloaded terminology

Good naming reduces the need for documentation.

---

## Performance

- No unnecessary work
- No wasted renders, queries, or allocations
- No performance pessimism by default

Rules:

- No premature optimization
- No defensive memoization
- Measure before changing behavior

Performance changes must be intentional and justified.

---

## Security

- No secrets or credentials in code
- All external input must be validated
- Least privilege must be applied everywhere

Rules:

- Never trust client input
- Avoid expanding access scopes "just in case"
- Security regressions block approval

---

## Error Handling

- Errors must be explicit and intentional
- Silent failures are forbidden
- Error handling must follow `error-taxonomy` skill

Rules:

- Never swallow errors
- Never expose internal details
- Error paths must be as clear as success paths

---

## Testing Expectations

Reviewers must verify that:

- Critical logic is covered
- Edge cases are explicit
- Error scenarios are tested
- Tests reflect real usage, not implementation details

Untested critical paths are considered incomplete.

---

## AI-Generated Code

AI-generated code is held to **the same or higher standards**:

- No blind acceptance
- No boilerplate without understanding
- Must fully comply with architecture and security rules

"I didn't write it" is not an excuse.

---

## Rule of Thumb

If the code surprises a senior engineer, it is wrong.

If the reviewer needs to ask:

> "Why is this here?"

The change is not ready.
