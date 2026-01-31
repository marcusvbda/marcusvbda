---
name: security
description: Defines security standards: secret handling, environment variables, trust boundaries, threat mitigation. Use when handling secrets, validating input, or implementing auth.
---

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

Rules:

- No secrets in source code
- No secrets in client bundles
- No secrets in error messages

---

## Client Environment Variables

- Client environment variables must be exposed **only** when strictly necessary
- Every exposed variable must:
  - Exist in the server environment
  - Use the `NEXT_PUBLIC_` prefix

Rules:

- Never expose secrets to the client
- Never infer sensitive values client-side
- Environment variables are configuration, not logic

---

## Trust Boundaries

- All client input is untrusted
- Validation must occur at **every boundary**
- Never trust frontend behavior

Boundaries include:

- API routes
- Webhooks
- Async jobs
- External integrations

---

## Principle of Least Privilege

- Grant the minimum permissions required
- Avoid broad roles or wildcard access
- Separate credentials per service where possible

Rules:

- No shared admin credentials
- No privilege escalation without review
- Access scope must be explicit

---

## Error Exposure

- Never expose internal error details
- Stack traces must never reach clients
- Use generic, user-safe error messages

Rules:

- Detailed errors belong only in server logs
- Error responses must follow `error-taxonomy` skill

---

## Logging & Monitoring

- Logs must not contain sensitive data
- Security-relevant events must be logged
- Logs must be auditable

Examples:

- Authentication failures
- Permission denials
- Webhook verification failures

---

## Secure Defaults

- Deny by default
- Explicit allowlists over blocklists
- No implicit trust

Rules:

- New endpoints start closed
- New permissions start denied
- New integrations start sandboxed

---

## Incident Mindset

- Assume compromise is possible
- Design for containment and recovery
- Make failures observable

Security is about **reducing impact**, not achieving perfection.

---

## Non-Negotiables

- No secrets in code
- No trust in client input
- No internal detail leakage
- No security shortcuts

Security is continuous.  
Every change is a potential attack surface.
