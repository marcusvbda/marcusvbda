---
name: performance
description: Defines performance constraints for frontend rendering, backend execution, async processing, and database access. Use when implementing async jobs, caching, or optimizing performance.
---

# Performance & Async Processing

Performance is a **first-class concern**.
All layers must be designed to scale predictably under load.

---

## Async & Event Processing

### Stack

- socket.io for real-time communication
- Pusher for external or third-party messaging
- QStash for background and long-running jobs

---

### Core Async Rules

- HTTP requests must never block on long-running tasks
- All background jobs must be idempotent and retry-safe
- Async processing must be explicit and observable

Rules:

- Fire-and-forget without tracking is forbidden
- Job retries must be bounded
- Side effects must be idempotent

---

## Job Execution

- Jobs must have a single responsibility
- Job input must be validated
- Jobs must tolerate duplicate execution

Rules:

- No shared mutable state
- No reliance on execution order
- Job failures must be detectable and recoverable

---

## Shared Clients

- External clients must be instantiated in `/lib`
- Clients must be reused where possible
- Client configuration must be explicit

Rules:

- No per-request client instantiation
- No hidden global state

---

## Backend Performance

- Minimize cold starts
- Cache aggressively where safe
- Avoid synchronous heavy work in request lifecycle

Rules:

- No blocking IO in request handlers
- CPU-heavy work must be offloaded
- Cache invalidation must be explicit

---

## Frontend Performance

- Reduce JavaScript bundle size
- Avoid unnecessary hydration
- Prefer Server Components
- Measure Core Web Vitals continuously

Rules:

- No client components by default
- No hydration for static or read-only content
- Performance regressions block approval

---

## Caching Strategy

- Cache only deterministic outputs
- Cache invalidation must be explicit
- No stale data without intent

Rules:

- Prefer server-side caching
- Client cache must be consistent with backend contracts

---

## Observability

- Use structured logging
- Prefer metrics over logs
- Measure performance; never assume it

Rules:

- Every async system must emit metrics
- Latency and error rates must be trackable
- Logs must be machine-readable

---

## Testing & Validation

- Load-sensitive paths must be tested
- Async retry behavior must be validated
- Performance changes must be measurable

---

## Non-Negotiables

- No blocking HTTP requests
- No unbounded retries
- No silent async failures
- No performance assumptions

Performance issues are production bugs.
