---
name: payments-stripe
description: Defines Stripe integration patterns, webhook validation, idempotency, and payment state safety. Use when implementing payment flows, webhooks, or Stripe integration.
---

# Payments & Stripe Integration

Payments are **financially critical operations** and must be handled with
maximum safety, explicitness, and idempotency.

Stripe is treated as an external, untrusted system.

---

## Core Principles

- Payments must be deterministic
- Every operation must be idempotent
- Client input is never a source of truth
- Stripe events are authoritative only after verification

---

## Architectural Boundaries

- Payment logic is isolated from core domain logic
- Core domain must not depend on Stripe SDK or concepts
- Payment layer acts as an anti-corruption boundary

Rules:

- Domain services consume abstract payment results
- Stripe-specific details remain in the payment layer only

---

## Client Interaction Rules

- Client initiates payment intent creation only
- Client must never confirm business state
- Payment status must always be verified server-side

The client is an initiator, not a validator.

---

## Webhook Handling

- All webhook signatures must be verified
- Webhooks are treated as untrusted input
- Raw request body must be used for signature verification

Rules:

- No processing before verification
- Invalid signatures must be rejected immediately
- Webhook handlers must be isolated and minimal

---

## Idempotency

- Idempotency keys are mandatory for:
  - Payment intent creation
  - Webhook event processing
- Duplicate events must be safely ignored
- Idempotency must be enforced at the application level

Idempotency is a business guarantee, not a Stripe feature.

---

## Payment States

- Payment states must be explicit and finite
- State transitions must be deterministic
- Invalid transitions are forbidden

Rules:

- No implicit state changes
- No inferred success or failure
- Payment state is updated only after verification

---

## Failure Handling

- Graceful retries for transient failures
- Permanent failures must be explicit
- No double-processing under any circumstance

Rules:

- Retry logic must be bounded
- Side effects must be idempotent
- Partial failures must be recoverable

---

## Security Rules

- Stripe secrets must come from environment variables only
- No secrets or sensitive data in logs
- No exposure of internal payment identifiers

Rules:

- Never trust client-provided payment status
- Never log full webhook payloads
- Access to payment endpoints must be restricted

---

## Logging & Observability

- Log payment lifecycle events (non-sensitive)
- Correlate logs with payment identifiers
- Errors must be traceable without exposing secrets

---

## Testing Expectations

- Webhook signature verification must be tested
- Idempotency scenarios must be covered
- Failure and retry paths must be explicit
- Payment state transitions must be validated

---

## Non-Negotiables

- No skipping signature verification
- No client-side authority
- No duplicate processing
- No architectural shortcuts

Payment failures are expensive.  
Predictability and safety are mandatory.
