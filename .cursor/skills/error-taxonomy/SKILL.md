---
name: error-taxonomy
description: Defines shared error model and classification across domain, backend, and frontend. Use when handling errors, throwing domain errors, or mapping errors to HTTP/UX.
---

# Error Taxonomy

Errors must be **explicit, predictable, and classified**.
Every error in the system must belong to a known category.

This taxonomy is shared across **domain**, **backend**, and **frontend** layers.

---

## Core Principles

- Errors are part of the contract
- Errors must be intentional, not incidental
- Unknown errors are considered bugs

Every error must be classifiable and mappable.

---

## Error Categories

### ValidationError

- Invalid input data
- Missing or malformed parameters
- Schema validation failures

Responsibility:

- Detected at system boundaries (API Routes, UI)

---

### AuthError

- Authentication failure
- Authorization failure
- Permission or role violations

Responsibility:

- Detected at backend boundaries

---

### NotFoundError

- Missing or non-existent resources
- Invalid identifiers referencing absent entities

Responsibility:

- Detected in domain or repository layers

---

### ConflictError

- State conflicts
- Version mismatches
- Duplicate operations or idempotency violations

Responsibility:

- Detected in domain logic

---

### BusinessRuleError

- Domain invariant violations
- Invalid state transitions
- Business constraints not met

Responsibility:

- Detected exclusively in domain services

---

### InfrastructureError

- Database failures
- External service outages
- Network or IO errors

Responsibility:

- Detected at infrastructure boundaries

---

## Cross-Layer Rules

### Domain Layer

- Domain Services must return **domain-specific errors**
- Domain errors must never depend on HTTP or framework concepts
- Domain Services must not throw framework exceptions

---

### Backend Layer (API Routes)

- API Routes must translate domain errors to HTTP responses
- Each error category maps to a single HTTP status
- Infrastructure errors must be masked before reaching clients

---

### Frontend Layer (UI)

- UI must never receive raw or technical errors
- Errors must be mapped to user-friendly messages
- Error handling must be consistent and predictable

---

## Error Mapping (Guideline)

| Error Type          | Typical HTTP Status |
| ------------------- | ------------------- |
| ValidationError     | 400 Bad Request     |
| AuthError           | 401 / 403           |
| NotFoundError       | 404 Not Found       |
| ConflictError       | 409 Conflict        |
| BusinessRuleError   | 422 Unprocessable   |
| InfrastructureError | 500 Internal Error  |

Mappings must be centralized and consistent.

---

## Forbidden Practices

The following are strictly forbidden:

- Throwing raw errors across layers
- Leaking stack traces to clients
- Catching and ignoring errors
- Returning ambiguous or unclassified errors

---

## Non-Negotiables

- Every error must have a known type
- Error behavior must be deterministic
- Error handling is part of system design

If an error cannot be classified, it is a bug.
