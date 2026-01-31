---
name: backend
description: Defines how API Routes behave as backend HTTP layer: input validation, auth, error handling, HTTP contracts. Use when writing API routes, app/api handlers, or backend HTTP logic.
---

# Backend API Routes (Next.js)

API Routes act as the system's backend HTTP layer.
They are responsible for **HTTP concerns only** and must remain thin, explicit, and predictable.

---

## Core Responsibilities

API Routes **must** handle:

- Input validation (params, query, body, headers)
- Authentication and authorization checks
- Mapping HTTP inputs to domain inputs
- Invoking domain/services
- Mapping domain outputs to HTTP responses

API Routes **must not** handle:

- Business logic
- Domain rules or decisions
- Database access
- Data persistence concerns

---

## Architectural Rules

- Routes are orchestration layers, not logic holders
- Every route must delegate work to domain/services
- Domain layer must be framework-agnostic
- Backend layer must never leak internal implementation details

Architectural violations are treated as bugs.

---

## Input Validation

- All inputs are treated as untrusted
- Params, query, body, and headers **must** be validated
- Validation happens before any side effects
- Invalid input must fail fast

Rules:

- No implicit coercion
- No partial validation
- Validation schemas must be explicit and centralized

---

## Authentication & Authorization

- Authentication must be validated on **every request**
- Authorization must be explicit and role-based or permission-based
- Auth checks must happen **before** domain execution
- Never assume prior authentication

Rules:

- No implicit trust based on route location
- No shared mutable auth state
- Auth helpers must be centralized

---

## HTTP Contracts

### Status Codes

- Every response must use an explicit HTTP status code
- Status codes must correctly reflect the outcome
- No default or implicit status codes

### Response Shape

All responses must follow a predictable shape:

- Success responses return `data`
- Error responses return `error`
- Optional `meta` is allowed for pagination or context

Ad-hoc response formats are forbidden.

---

## Error Handling

### General Rules

- Fail fast on invalid input
- Never leak stack traces or internal messages
- Domain errors must be translated to HTTP errors
- Infrastructure errors must be masked

### Error Translation

- Domain errors are mapped using `error-taxonomy` skill
- Each domain error maps to a single HTTP status
- Error messages must be user-safe

Throwing generic errors is forbidden.

---

## Security Rules

- Treat all client input as hostile
- Validate authentication/session on every request
- Rate-limit sensitive or high-impact endpoints
- Do not expose internal IDs, secrets, or infrastructure details

Rules:

- No reliance on obscurity
- No trust based on frontend behavior
- Secrets must never reach the client

---

## Maintainability Guidelines

- Routes must remain thin and readable
- Shared logic must live in centralized helpers
- Explicit code is preferred over clever abstractions
- Contracts must be clear and discoverable

---

## Testing Expectations

- Input validation must be testable in isolation
- Auth failures must be covered
- Error mappings must be deterministic
- Happy and unhappy paths must be explicit

---

## Non-Negotiables

- No business logic in API Routes
- No database access in API Routes
- No silent failures
- No architectural shortcuts

Predictability over flexibility.  
Backend routes exist to **protect the system**, not to implement it.
