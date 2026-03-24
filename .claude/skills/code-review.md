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

Architectural violations are treated as bugs.

---

## Code Quality

### Readability & Clarity
- Readability over cleverness
- Explicit naming over abbreviations
- Code must be understandable without comments
- Functions must be small and focused (one function = one responsibility)

### Naming
- Names must describe **what**, not **how**
- Avoid generic names (`handle`, `process`, `data`)
- Good naming reduces the need for documentation

---

## Security

- No secrets or credentials in code
- All external input must be validated
- Least privilege must be applied everywhere
- Security regressions block approval

---

## Error Handling

- Errors must be explicit and intentional
- Silent failures are forbidden
- Error handling must follow `error-taxonomy` skill
- Never swallow errors or expose internal details

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

If the reviewer needs to ask "Why is this here?" — the change is not ready.
