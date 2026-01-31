---
name: domain-services
description: Defines the core business layer: business rules, invariants, orchestration patterns, transactions. Use when implementing domain logic, services, or use cases.
---

# Domain Services

Domain Services represent the **core business logic** of the system.
They define business rules, enforce invariants, and coordinate operations.

They are the most critical layer of the architecture.

---

## Core Responsibilities

Domain Services **must** handle:

- Business decisions
- Business rules and invariants
- Cross-repository orchestration
- Transaction boundaries
- Idempotent operations whenever applicable

Domain Services **must not** handle:

- HTTP concerns
- Framework-specific logic
- Database access details
- Infrastructure configuration

---

## Architectural Rules

- Domain Services are stateless
- Domain Services are framework-agnostic
- Domain Services must be deterministic given the same inputs
- Inputs and outputs must be explicit and typed

Domain code must be portable and executable in isolation.

---

## Service vs Use Case

### Use Cases

- Represent application-level workflows
- Orchestrate one or more domain services
- Define transaction boundaries
- Handle idempotency guarantees

### Domain Services

- Encapsulate reusable business rules
- Enforce invariants
- Remain side-effect free when possible

Rules:

- Use Cases may call multiple Domain Services
- Domain Services must not depend on Use Cases

---

## Transactions

- Transaction boundaries are defined at the Use Case level
- Domain Services must be transaction-aware but not transaction-owning
- Repositories receive transactional context from Use Cases

Implicit transactions are forbidden.

---

## Idempotency

- Operations must be idempotent whenever possible
- Idempotency must be explicit and intentional
- Non-idempotent operations must be clearly documented

Idempotency is a business guarantee, not a technical side effect.

---

## Error Handling

- Domain Services must return domain-specific errors
- Domain errors must be explicit and intentional
- Framework or infrastructure errors must not leak into domain code

Rules:

- No generic errors
- No framework-specific exceptions
- Error types must be defined in the domain layer

---

## Purity & Side Effects

- Prefer pure functions where possible
- Side effects must be explicit and controlled
- Hidden side effects are forbidden

Rules:

- No shared mutable state
- No global state
- No time-dependent behavior without explicit input

---

## Testing Expectations

- Domain Services must be testable without Next.js
- Domain Services must be testable without a database
- Dependencies must be injectable or mockable
- Business rules must be covered with unit tests

Tests must validate **behavior**, not implementation details.

---

## Anti-Patterns

The following are forbidden:

- Hidden side effects
- Shared mutable state
- Infrastructure concerns
- Database access
- HTTP logic
- Framework dependencies

---

## Non-Negotiables

- Domain logic lives only in Domain Services
- Business rules must not leak into other layers
- Predictability over flexibility

If business behavior is unclear, the domain is wrong.
