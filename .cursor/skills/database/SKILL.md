---
name: database
description: Defines database and persistence rules: raw SQL usage, repository boundaries, transactions, migrations. Use when writing repositories, SQL queries, or migrations.
---

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

Rules:

- No implicit joins
- Joins must be explicit and justified
- Subqueries must remain readable

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

Rules:

- No implicit transactions
- No auto-commit logic in repositories
- Transaction intent must be explicit in services

---

## Migrations

- Migrations are SQL-only files
- Migrations are immutable once applied
- One logical change per migration

Rules:

- No data + schema changes in the same migration
- Migrations must be reversible when possible
- Migration names must describe intent clearly

---

## Performance Guidelines

- Queries must be index-aware
- Avoid N+1 query patterns
- Measure before optimizing

Rules:

- No speculative indexes
- Index changes require justification
- Large queries must be reviewed with EXPLAIN when relevant

---

## Data Integrity

- Enforce constraints at the database level where possible
- Prefer NOT NULL, UNIQUE, and FOREIGN KEY constraints
- Do not rely solely on application-level validation

---

## Security Rules

- Always use parameterized queries
- Never interpolate user input into SQL
- Database credentials must remain server-side

---

## Testing Expectations

- Repositories must be testable in isolation
- Critical queries must be covered
- Edge cases (empty results, constraints) must be explicit

---

## Non-Negotiables

- No ORM
- No `SELECT *`
- No dynamic SQL
- No business logic in repositories

Predictability over convenience.  
The database is a critical system boundary.
