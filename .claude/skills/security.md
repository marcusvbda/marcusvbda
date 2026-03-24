# Security Standards

Security is a **baseline requirement**, not an optional feature.
All layers must be designed with a hostile environment in mind.

---

## Core Principles

- Assume breach
- Minimize blast radius
- Default to deny
- Least privilege everywhere

Security failures are production failures.

---

## Secrets Management

- Secrets must never be hardcoded
- Secrets must always be read from environment variables
- Secrets must never be logged or exposed
- No secrets in source code, client bundles, or error messages

---

## Client Environment Variables

- Client environment variables must be exposed **only** when strictly necessary
- Every exposed variable must use the `NEXT_PUBLIC_` prefix
- Never expose secrets to the client

---

## Trust Boundaries

- All client input is untrusted
- Validation must occur at **every boundary** (API routes, webhooks, async jobs, external integrations)
- Never trust frontend behavior

---

## Error Exposure

- Never expose internal error details
- Stack traces must never reach clients
- Use generic, user-safe error messages

---

## Non-Negotiables

- No secrets in code
- No trust in client input
- No internal detail leakage
- No security shortcuts

Security is continuous.
Every change is a potential attack surface.
