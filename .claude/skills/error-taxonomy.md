# Error Taxonomy

Errors must be **explicit, predictable, and classified**.
Every error in the system must belong to a known category.

This taxonomy is shared across **domain**, **backend**, and **frontend** layers.

---

## Error Categories

| Error Type | Typical HTTP Status | Detected At |
|------------|---------------------|-------------|
| `ValidationError` | 400 Bad Request | API Routes, UI boundaries |
| `AuthError` | 401 / 403 | Backend boundaries |
| `NotFoundError` | 404 Not Found | Domain or repository layers |
| `ConflictError` | 409 Conflict | Domain logic |
| `BusinessRuleError` | 422 Unprocessable | Domain services exclusively |
| `InfrastructureError` | 500 Internal Error | Infrastructure boundaries |

---

## Cross-Layer Rules

### Domain Layer
- Must return domain-specific errors
- Must never depend on HTTP or framework concepts

### Backend Layer (API Routes)
- Must translate domain errors to HTTP responses
- Must mask infrastructure errors before reaching clients

### Frontend Layer (UI)
- Must never receive raw or technical errors
- Errors must be mapped to user-friendly messages

---

## Forbidden Practices

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
