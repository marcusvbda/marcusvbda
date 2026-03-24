# Database & Repositories

The database layer is responsible for **data persistence only**.
It must remain explicit, auditable, and predictable.

---

## Stack

- MySQL
- Raw SQL with named parameters
- No ORM (performance and control first)

---

## Core Rules

- SQL is allowed **only** inside repositories
- No database access outside repositories
- Repositories must not contain business logic
- Domain and services must be database-agnostic

Architectural violations are treated as bugs.

---

## SQL Standards

- Explicit column selection is mandatory (`SELECT *` is forbidden)
- Named parameters are required
- No dynamic SQL string concatenation
- Queries must be readable, formatted, and auditable

---

## Repository Responsibilities

Repositories **may**:
- Execute SQL queries
- Map rows to data structures
- Support transactional contexts

Repositories **must not**:
- Make business decisions
- Contain validation rules
- Manage transactions autonomously

---

## Transactions

- Transaction boundaries are defined at the service layer
- Repositories must support receiving a transactional context
- Nested transactions are forbidden unless explicitly supported

---

## Migrations

- Migrations are SQL-only files
- Migrations are immutable once applied
- One logical change per migration
- No data + schema changes in the same migration

---

## Non-Negotiables

- No ORM
- No `SELECT *`
- No dynamic SQL
- No business logic in repositories

Predictability over convenience.
The database is a critical system boundary.
