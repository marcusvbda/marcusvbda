# Performance & Async Processing

Performance is a **first-class concern**.
All layers must be designed to scale predictably under load.

---

## Async & Event Processing

### Stack
- socket.io for real-time communication
- Pusher for external or third-party messaging
- QStash for background and long-running jobs

### Core Async Rules
- HTTP requests must never block on long-running tasks
- All background jobs must be idempotent and retry-safe
- Async processing must be explicit and observable
- Fire-and-forget without tracking is forbidden

---

## Frontend Performance

- Reduce JavaScript bundle size
- Avoid unnecessary hydration
- Prefer Server Components
- Measure Core Web Vitals continuously
- No client components by default
- Performance regressions block approval

---

## Caching Strategy

- Cache only deterministic outputs
- Cache invalidation must be explicit
- No stale data without intent
- Prefer server-side caching

---

## Non-Negotiables

- No blocking HTTP requests
- No unbounded retries
- No silent async failures
- No performance assumptions

Performance issues are production bugs.
