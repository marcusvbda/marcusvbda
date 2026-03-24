# Domain Services

Domain Services represent the **core business logic** of the system.
They define business rules, enforce invariants, and coordinate operations.

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

---

## Transactions

- Transaction boundaries are defined at the Use Case level
- Domain Services must be transaction-aware but not transaction-owning
- Repositories receive transactional context from Use Cases
- Implicit transactions are forbidden

---

## Idempotency

- Operations must be idempotent whenever possible
- Idempotency must be explicit and intentional
- Non-idempotent operations must be clearly documented

---

## Non-Negotiables

- Domain logic lives only in Domain Services
- Business rules must not leak into other layers
- Predictability over flexibility

If business behavior is unclear, the domain is wrong.
