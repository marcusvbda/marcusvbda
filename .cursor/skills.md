# Engineering Standards (skills)

## Project

**Next.js 16 + React 19 — Production-grade**

Os padrões de engenharia deste repositório estão organizados como **Cursor Skills** em `.cursor/skills/`.

Todo código — humano ou gerado por IA — DEVE seguir esses padrões.
Violações são tratadas como bugs.

---

## Estrutura de Skills

| Skill | Descrição |
|-------|-----------|
| `architecture` | Boundaries do sistema, layering, direção de dependências |
| `backend` | API Routes: validação, auth, erros, contratos HTTP |
| `frontend` | Componentes, React Query, UX, acessibilidade |
| `database` | SQL, repositórios, transações, migrations |
| `domain-services` | Regras de negócio, invariantes, orquestração |
| `error-taxonomy` | Modelo de erros compartilhado (domain → backend → frontend) |
| `performance` | Async, jobs, cache, observabilidade |
| `security` | Secrets, trust boundaries, least privilege |
| `payments-stripe` | Integração Stripe, webhooks, idempotência |
| `theming` | Design tokens, dark/light mode, consistência visual |
| `code-review` | Padrões obrigatórios para revisão de código |

---

## Princípios Gerais

- Performance, segurança e manutenibilidade em primeiro lugar
- Explícito sobre abstrações complexas
- Separação rigorosa de responsabilidades
- Falhar rápido, recuperar com graça
- Previsibilidade sobre flexibilidade
- Violações arquiteturais são bugs

---

## Enforcement

- Estes documentos são normativos, não consultivos
- Código que viola os padrões deve ser corrigido
- Conveniência não é justificativa

Se o comportamento não é claro, o design do sistema está errado.
