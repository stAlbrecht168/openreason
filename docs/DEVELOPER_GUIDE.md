# Developer Guide

The reference implementation is intentionally small.

## Main source modules

**Core pipeline** (`src/`):

- `src/schema.ts` — Zod schemas and shared types (`Framework`, `Pack`, `AnalysisPlan`, `AnalysisResult`, …)
- `src/loader.ts` — YAML loading and validation for framework files
- `src/router.ts` — keyword-based intent detection
- `src/resolver.ts` — framework scoring and selection
- `src/compiler.ts` — instruction generation from framework content (internal detail)
- `src/engine.ts` — deterministic analysis packet generation for the CLI
- `src/cli.ts` — CLI commands (validate, inspect, compile, analyze)

**Reasoning layer** (`src/openreason/`):

- `src/openreason/index.ts` — `ReasoningEngine` class; the public programmatic API
- `src/openreason/planner.ts` — `buildAnalysisPlan(input)` — orchestrates the full pipeline
- `src/openreason/evidence.ts` — structured evidence model with labels, names, meanings, confidence
- `src/openreason/packs.ts` — YAML loading and validation for pack files

## Other directories

- `frameworks/` — analytical framework YAML files (one per tradition)
- `packs/` — capability pack YAML files (capability registry)
- `validators/` — standalone health check scripts
- `tests/` — Vitest test suite
- `schemas/` — JSON Schema for framework YAML files (for editor/linter support)

## Development commands

```bash
npm run validate       # validate framework YAML files against schema
npm test               # run the full Vitest test suite
npm run build          # TypeScript compile to dist/
npm run cc:check       # fast check: validate + test (no build required)
npm run cc:health      # plain-language health report (preferred for Claude Code)
npm run cc:smoke       # full check: validate + test + build + analyze example
npm run health         # run validators/health.ts directly
```

## Design principles

- The CLI is not the main user interface. Claude Code is.
- `ReasoningEngine.analyze(input)` is the public API surface. Internal modules (compiler, engine) are implementation details.
- Framework files and pack files define what OpenReason can do. Adding a framework YAML requires no code changes.
- Packs are the capability registry: they declare which capabilities exist and which frameworks provide them.

## Adding a framework

1. Create `frameworks/<domain>/<id>.yaml` following `schemas/framework.schema.json`
2. Run `npm run validate` — it must pass
3. Update the relevant pack in `packs/` to reference the new framework ID with maturity `draft`
4. Add tests in `tests/consistency.test.ts` if the new framework introduces new assertions
5. Run `npm run cc:health` to confirm the full health check passes

## Schema synchronisation

The framework schema is defined in two places that must be kept in sync:

- `src/schema.ts` — Zod, authoritative at runtime
- `schemas/framework.schema.json` — JSON Schema, used by editors and linters

When adding a field to one, add it to the other.
