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

---

## HTTP Contracts

### Status Codes
- Every response must use an explicit HTTP status code
- Status codes must correctly reflect the outcome

### Response Shape
All responses must follow a predictable shape:
- Success responses return `data`
- Error responses return `error`
- Optional `meta` is allowed for pagination or context

---

## Non-Negotiables

- No business logic in API Routes
- No database access in API Routes
- No silent failures
- No architectural shortcuts

Predictability over flexibility.
Backend routes exist to **protect the system**, not to implement it.
