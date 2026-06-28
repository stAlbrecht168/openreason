# Changelog

All notable changes to OpenReason are documented here.

---

## Unreleased

---

## 0.2.0 — 2026-06-28

This release establishes the full Claude-Code-first architecture and prepares the repository for public contribution.

### Added

**Architecture**
- `src/openreason/` reasoning layer: `ReasoningEngine` class as the public programmatic API, `buildAnalysisPlan()`, structured `EVIDENCE_MODEL` with labels/names/meanings/confidence levels, `isValidEvidenceStatus()`, `getEvidenceEntry()`
- `src/schema.ts`: `AnalysisPlan`, `AnalysisResult`, `PackSchema`, `PackFrameworkEntrySchema`, `MaturityLevelSchema`, `VerificationStatusSchema` — `verification_status` field added to `FrameworkSchema`
- `packs/` directory with five capability pack YAML files: `logic`, `discourse`, `framing-rhetoric`, `psychology`, `propaganda`
- `validators/health.ts` — single-command plain-language health check with router intent coverage detection

**Claude Code interface**
- `CLAUDE.md` — rewritten as full analyst briefing: evidence model table, framework reference, analysis workflow, maintenance workflow, maturity vocabulary, refusal rules, repository layout
- `.claude/commands/openreason-analyze.md` — primary analysis command replacing `openreason-use`
- `.claude/commands/openreason-audit.md` — repository consistency audit command
- `.claude/commands/openreason-framework.md` — framework creation/improvement command replacing `openreason-add-framework`
- `.claude/commands/openreason-test.md` — health check command with plain-language failure reporting
- `.claude/skills/openreason/SKILL.md` — rewritten with full evidence model, framework summaries, selection guide, standard report format, maturity vocabulary

**Tests**
- `tests/consistency.test.ts` — pack/framework cross-reference (draft entries have YAML; planned entries don't)
- `tests/examples.test.ts` — validates evidence label correctness in all `*.analysis.md` files
- `tests/readme.test.ts` — README maturity claim accuracy against YAML state
- `tests/resolver.test.ts` — framework activation for discourse, logic, rhetoric, fallback inputs
- `tests/engine.test.ts` — `ReasoningEngine.analyze()` output shape and scaffold headings
- `tests/evidence.test.ts` — `EVIDENCE_MODEL` structure and `isValidEvidenceStatus()`
- `tests/maturity.test.ts` — `VerificationStatusSchema` and framework defaults
- `tests/packs.test.ts` — pack loading, structure, capability coverage, `MaturityLevelSchema`

**Examples**
- `examples/technology-regulation.md` — new primary example input (replaces iran-somalia as the default)
- `examples/technology-regulation.analysis.md` — full structured analysis demonstrating all evidence labels
- `docs/examples/technology-regulation.md` — pedagogical guide with "What OpenReason prevents" section

**Documentation**
- `docs/book/README.md` and chapters `01` through `07` — full book with ~1,400 lines covering: why OpenReason exists, the evidence model, framework packs, writing frameworks, using Claude Code, verification, and worked examples
- `docs/PROJECT_CHARTER.md` — vision, design principles, implementation status table, known limitations, roadmap
- `docs/ARCHITECTURE.md` — three-layer architecture (conceptual, implementation, integration) with `ReasoningEngine` API
- `docs/CLAUDE_CODE_WORKFLOW.md` — seven practical user scenarios with slash command reference
- `docs/frameworks/PACKS.md` — pack reference with capability table
- `docs/frameworks/MATURITY_LEVELS.md` — maturity levels, verification statuses, how to verify, planned framework list
- `docs/TESTING.md` — testing strategy and test file reference
- `docs/VALIDATION.md` — schema validation, content verification, health check documentation
- `docs/audits/REPOSITORY_AUDIT.md` — first full repository audit with findings and fixes applied
- `decisions/ADR-0001-claude-code-first.md`, `decisions/ADR-0002-evidence-status-model.md`

**npm scripts**
- `health` — run `validators/health.ts` directly
- `cc:check` — fast check: validate + test (no build required)
- `cc:health` — validate + plain-language health report

### Changed

- `src/router.ts` — removed orphaned `fact_checking` intent (no framework handled it; inputs now correctly fall back to `general_analysis`)
- `schemas/framework.schema.json` — synced with Zod schema: added `verification_status`, `minLength`/`minItems` constraints, structured `references` required fields
- `tsconfig.json` — `rootDir` changed from `.` to `src`; test files removed from `include` (they run via `tsx`, not `tsc`)
- `docs/DEVELOPER_GUIDE.md` — updated to include `src/openreason/`, `packs/`, `validators/`, new npm scripts
- `docs/PROJECT_CHARTER.md` — updated stale implementation table and roadmap
- `docs/CLAUDE_CODE.md` — redirected to `docs/CLAUDE_CODE_WORKFLOW.md`
- `.claude/commands/openreason-audit.md` — updated `fact_checking`-specific check to general router intent coverage check

### Framework status

All four implemented frameworks remain `draft`. Their concepts have not been verified against cited sources.

| Framework | File | Verification status |
|---|---|---|
| `logic-walton` | `frameworks/logic/walton.yaml` | draft |
| `discourse-van-dijk` | `frameworks/discourse/van_dijk.yaml` | draft |
| `framing-entman` | `frameworks/framing/entman.yaml` | draft |
| `rhetoric-aristotle` | `frameworks/rhetoric/aristotle.yaml` | draft |

---

## 0.1.0 — initial proof of concept

- Claude Code-first workflow
- TypeScript reference implementation
- Intent router, framework resolver, prompt compiler, deterministic analysis packet generator
- Four initial frameworks: Walton, van Dijk, Entman, Aristotle
- Evidence-status model
- Example Iran/Somalia contrast analysis input
- Documentation, GitHub Actions, tests, and Custom GPT notes
