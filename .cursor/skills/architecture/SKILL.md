---
name: architecture
description: Defines system boundaries, layering, dependency direction, and allowed imports for this project. Use when designing new features, adding layers, or when architecture or dependency rules are unclear.
---

# Architecture Overview

This project follows a strict layered architecture designed for clarity,
testability, performance, and long-term evolution.

## Layered flow:

UI -> API Routes -> Domain Services -> Repositories -> Database

Each layer has a single responsibility and strict dependency rules.
Violating these boundaries is considered a bug.

## Layer responsibilities:

## UI:

- Presentation and interaction only
- No business rules
- Consumes data exclusively via API Routes

## API Routes:

- HTTP boundary of the system
- Input validation and auth
- Delegation to domain services only

## Domain Services:

- Core business rules and invariants
- Stateless and framework-agnostic
- Orchestrate repositories

## Repositories:

- Raw SQL data access only
- Hide persistence details from domain

## Dependency rules:

- Dependencies flow downward only
- No layer may skip another

## Anti-patterns:

- Business logic in API Routes
- SQL outside repositories
- Shared mutable state
- Framework coupling in domain

## Rule of thumb:

If it decides what happens → Domain
If it decides how data is stored → Repository
If it decides HTTP behavior → API Route
If it decides presentation → UI
