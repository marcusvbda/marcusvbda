# Marcus VBda — Portfolio

**Next.js 16 + React 19 — Production-grade personal portfolio**

All code — human or AI-generated — **must** follow the engineering standards defined in `.claude/skills/`.
Violations are treated as bugs, not suggestions.

---

## Project Overview

Personal portfolio website for Marcus Vinicius Bassalobre de Assis, Senior Software Engineer.
Stack: Next.js 16, React 19, TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion.

---

## Engineering Skills

| Skill | File | Purpose |
|-------|------|---------|
| `architecture` | `.claude/skills/architecture.md` | System boundaries, layering, dependency direction |
| `backend` | `.claude/skills/backend.md` | API Routes: validation, auth, errors, HTTP contracts |
| `frontend` | `.claude/skills/frontend.md` | Components, React Query, UX, accessibility |
| `database` | `.claude/skills/database.md` | SQL, repositories, transactions, migrations |
| `domain-services` | `.claude/skills/domain-services.md` | Business rules, invariants, orchestration |
| `error-taxonomy` | `.claude/skills/error-taxonomy.md` | Shared error model (domain → backend → frontend) |
| `performance` | `.claude/skills/performance.md` | Async, jobs, cache, observability |
| `security` | `.claude/skills/security.md` | Secrets, trust boundaries, least privilege |
| `theming` | `.claude/skills/theming.md` | Design tokens, dark/light mode, visual consistency |
| `code-review` | `.claude/skills/code-review.md` | Mandatory code review standards |

---

## General Principles

- Performance, security, and maintainability first
- Explicit over complex abstractions
- Strict separation of concerns
- Fail fast, recover gracefully
- Predictability over flexibility
- Architectural violations are bugs

---

## Key Commands

```bash
yarn dev       # Development server
yarn build     # Production build
yarn lint      # ESLint
```
