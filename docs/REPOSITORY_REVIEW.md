# Repository Review — OpenReason v0.1.0

**Reviewer role:** Lead maintainer, first pass  
**Date:** 2026-06-28  
**Scope:** Full repository — architecture, code, documentation, tests, examples, roadmap

---

## 1. What OpenReason Currently Is

OpenReason is a v0.1.0 proof-of-concept for making AI-assisted analytical reasoning transparent and reproducible. Its core contribution is a structured pipeline that, given a text input, selects documented analytical frameworks, generates a compiled analysis packet, and instructs a downstream LLM (primarily Claude Code) to produce a final report that distinguishes observations, inferences, interpretations, and hypotheses.

The project has three layers:

**Conceptual layer** — an evidence-status model (O1/O2/L1/D1/R1/F1/C1/S1/H1/X1) and four analytical frameworks authored as YAML files: Douglas Walton (informal logic), Teun A. van Dijk (critical discourse analysis), Robert Entman (framing analysis), and Aristotle (rhetoric).

**Reference implementation** — a small TypeScript/Node.js CLI (`src/`) that loads framework YAML, routes input to an intent category, resolves the appropriate frameworks, compiles an instruction prompt, and emits a Markdown analysis packet. Five modules total (router, loader, resolver, compiler, engine) plus a CLI entry point.

**AI integration layer** — a Claude Code-first UX: `CLAUDE.md` persistent instructions, three slash commands (`/openreason-use`, `/openreason-add-framework`, `/openreason-test`), and a skill definition. A `custom-gpt/` folder documents minimal ChatGPT adaptation.

The project is intentionally narrow: it is a structure for transparent reasoning, not an autonomous analysis engine. The LLM does the final reasoning; OpenReason constrains and documents how that reasoning should be conducted.

---

## 2. What OpenReason Should Become

Based on the manifesto, ADRs, documentation, and the overall design intent, OpenReason should evolve into a fully portable, framework-driven reasoning protocol usable by researchers, journalists, educators, and developers across any LLM platform.

Specific goals implied by the existing design:

- **A mature framework library** — beyond the four starters, with frameworks covering propaganda analysis (e.g., Ellul), cognitive bias inventory, historical revisionism, scientific framing, and legal argumentation.
- **A verification system** — frameworks should carry a machine-readable verification status (`draft`/`reviewed`/`verified`/`contested`), not just a narrative note.
- **An MCP server** — `docs/MCP_ARCHITECTURE.md` describes this as a future capability; it would allow any MCP-compatible client (Claude Desktop, VS Code extensions, third-party tools) to call OpenReason directly.
- **Multi-platform portability** — the analysis pipeline should work identically in ChatGPT, Gemini, local models, and CI environments, not only Claude Code.
- **A repeatable example library** — analyses that can be re-run and compared across model versions to detect drift.
- **Academic credibility** — the `CITATION.cff` file signals intent to be citeable; this requires verified frameworks, stable IDs, and a proper changelog.

---

## 3. Strengths

**Clear conceptual model.** The evidence-status taxonomy (O1–X1) is genuinely novel as a machine-readable constraint and well-grounded in epistemological distinctions. The separation of observation, inference, interpretation, and hypothesis is the project's strongest intellectual contribution.

**Small, readable implementation.** The TypeScript code is short and comprehensible. Each module has a single responsibility. A new contributor can understand the whole codebase in under an hour.

**Good YAML schema design.** The framework schema (`src/schema.ts` + `schemas/framework.schema.json`) is well-considered. Required fields are meaningful; the dual-validation approach (Zod at runtime + JSON Schema for tooling) is solid.

**Claude Code-first design is coherent.** The decision to treat Claude Code as the primary interface (`ADR-0001`) and to encode behavior in `CLAUDE.md` is pragmatic and well-executed. The slash commands and skill definition are correctly structured.

**Principled documentation.** The manifesto, ADRs, and book chapters are articulate and aligned with each other. The project's purpose and philosophy are easy to understand.

**CI is set up correctly.** The GitHub Actions workflow runs validate, test, and build on every push and pull request. The PR template includes checklist items tied to the actual commands.

---

## 4. Weaknesses

**The router is a keyword counter, not a reasoning component.** `src/router.ts` detects intent by counting how many signals from a hardcoded list appear in lowercased input. This is brittle, order-sensitive, and not documented as a limitation. Inputs that describe multiple intents without using the exact trigger words will receive `general_analysis` by default and fall back to three arbitrary frameworks. This is the biggest functional weakness.

**Framework resolution has a hidden hardcoded fallback.** In `src/resolver.ts` line 15, the fallback when no framework scores above zero is hardcoded to three specific framework IDs (`discourse-van-dijk`, `logic-walton`, `framing-entman`). Aristotle is excluded from the fallback without explanation. If the `rhetoric-aristotle` framework is renamed or removed, the code silently breaks; if new frameworks are added, the fallback is never updated automatically.

**The analysis packet is mostly static scaffolding.** `src/engine.ts` produces a deterministic Markdown report, but its "initial evidence graph" section contains a special-case branch (`likelyContrast`) that hard-codes content specific to the Iran/Somalia example. This means the output quality degrades significantly for any input that does not match the hardcoded pattern. The packet is not a general analytical output; it is a scaffolded template with one well-worked example sewn in.

**The compiled instructions are not tested end-to-end.** The compiler test (`tests/compiler.test.ts`) checks only that the output string contains certain substrings. There are no tests for: the structure of the compiled instructions, whether the output would actually guide an LLM correctly, regression tests for the router's behavior on edge-case inputs, or integration tests for the full pipeline.

**Framework YAML files do not carry a verification status field.** `docs/VERIFICATION.md` defines four verification levels (`draft`, `reviewed`, `verified`, `contested`), but none of the four framework YAML files include this field, and the schema does not require it. The verification system is documented but not implemented.

**No `O1` in any framework's `evidence_statuses` list.** The evidence model defines `O1` (direct observation) as the most basic status, but none of the four frameworks list it as a supported status. This means the compiler can never emit an `O1`-attributed instruction through a framework's guidance. The evidence model and the framework schema are subtly inconsistent.

**The `fact_checking` intent is defined but no framework maps to it.** `src/router.ts` includes `fact_checking` as a detectable intent, but no framework YAML file lists `fact_checking` in its `intents` array. Any input that routes to `fact_checking` will score zero for all frameworks and silently fall back to three defaults.

**No semantic versioning policy.** All four frameworks are at version `0.1.0`. There is no guidance on when to bump versions, what constitutes a breaking change to a framework, or how consumers should treat version changes.

---

## 5. Missing Components

**Verification status in framework YAML.** The schema should include an optional (eventually required) `verification_status` field with an enum of `draft | reviewed | verified | contested`. Without this, the verification documentation is aspirational only.

**A `general_analysis` fallback framework.** When intent is `general_analysis` (low confidence, no signals matched), there is no framework designed for it. The fallback silently applies three specific frameworks regardless of fit.

**Tests for the resolver.** There are no tests for `src/resolver.ts`. The scoring logic (intentScore × 3, triggerScore × 1, antiScore × −5) and the fallback behavior are untested.

**Tests for the engine.** There are no tests for `src/engine.ts`. The deterministic report rendering, including the `likelyContrast` special-case branch, is untested.

**Tests for the loader with invalid YAML.** There is one test that checks the loader returns ≥4 frameworks from valid files. There are no tests for: missing required fields, unknown field names, invalid evidence status values, or duplicate IDs.

**A second example input.** The project has exactly one example input (`examples/iran-somalia.md`) and one hard-coded analysis. Any user who brings different material immediately encounters the generic scaffold rather than a worked example.

**A worked example output.** There is no committed example of a complete final analysis. A user following the getting-started guide will generate a packet but has no reference output to compare against.

**A `reports/` directory placeholder.** The `reports/` directory is in `.gitignore` and is never created in the repository. The `init-report-dir` CLI command exists but is not called automatically. `npm run analyze` will fail on a clean checkout if the `reports/` directory does not exist — which `engine.ts` handles by calling `fs.mkdirSync(path.dirname(outPath), { recursive: true })`, so this technically works, but the directory's absence is confusing.

**No framework for `fact_checking` intent.** The intent exists in the router but routes to nothing.

**No linting or formatting configuration.** There is no ESLint, Prettier, or similar tooling. Code style is consistent by convention but not enforced.

**No type-checking step in CI.** The CI runs `npm run build` (which runs `tsc`), so type errors are caught, but `tsc` is not run as a standalone check-only step before tests. A type error discovered during build comes after the test run rather than before.

**No changelog entry format.** The `CHANGELOG.md` has a single entry with no date, no link to commits, and no structured format (e.g., Keep a Changelog). Future entries will likely be inconsistent.

---

## 6. Architectural Inconsistencies

**Dual schema definition without synchronization.** The framework schema is defined in two places: `src/schema.ts` (Zod) and `schemas/framework.schema.json` (JSON Schema). These are independent and can drift. For example, `anti_triggers` is listed as required in the JSON Schema's `required` array but defaults to `[]` in Zod (making it optional). There is no test or tooling to verify they stay in sync.

**`anti_triggers` is required in JSON Schema but optional in Zod.** The JSON Schema `required` array at line 5 does not include `anti_triggers`, but it also does not explicitly mark it optional. Meanwhile, Zod defaults it to `[]`. The two schemas give different answers about whether a framework without `anti_triggers` is valid.

**The engine embeds a domain-specific heuristic (`likelyContrast`) that belongs in a framework.** The logic that detects the Iran/Somalia pattern and generates a pre-written evidence graph belongs in the framework layer or in an example-specific analysis file — not in the engine. The engine should be domain-agnostic.

**The `inspect` command and the `analyze` command overlap but serve different purposes without documentation.** `inspect` runs the intent+resolver pipeline and prints JSON. `analyze` runs the full pipeline and writes a report. There is no explanation of when to use `inspect` vs. `compile` vs. `analyze`. These are internal developer tools but are exposed as first-class CLI commands with no documented use cases.

**Framework IDs use inconsistent naming.** Three frameworks use `domain-author` style (`discourse-van-dijk`, `framing-entman`, `logic-walton`) but one uses `domain-authorname` without a hyphen-separated domain prefix that matches the directory structure (`rhetoric-aristotle` lives in `frameworks/rhetoric/`). The naming is fine, but the directory `frameworks/logic/` contains `walton.yaml` rather than `walton_informal_logic.yaml` or similar — the file name does not carry the ID.

**`rootDir: "."` in `tsconfig.json` includes `tests/` in the build output.** With `"rootDir": "."` and `"outDir": "dist"`, running `tsc` compiles test files into `dist/tests/`. Test code should not be in the published build artifact.

---

## 7. Documentation Inconsistencies

**`docs/VERIFICATION.md` defines a system that is not implemented.** The file documents verification levels and encourages contributors to mark framework status, but there is no `verification_status` field in any framework file or the schema. A contributor reading the docs would expect to add such a field, then find it unsupported.

**`docs/FRAMEWORK_AUTHORING.md` says "add or update tests" but gives no guidance on what tests to write.** The guide lists this as step 4 but provides no example test, no description of what should be tested, and no pointer to existing tests.

**`docs/MCP_ARCHITECTURE.md` describes future tools without a "Status: planned" marker.** A reader could mistake this for existing functionality. The document should clearly state it describes an unimplemented future design.

**The book chapters are very short and do not form a coherent guide.** `docs/book/` contains seven files, most under 15 lines. They introduce concepts but do not provide enough depth to serve as a standalone learning resource. Several chapters simply redirect to other files without adding content.

**`README.md` mentions `npm run analyze` as a command but the script hard-codes the Iran/Somalia example.** A user reading the README would reasonably expect `npm run analyze` to analyze any input. The script only ever analyzes `examples/iran-somalia.md`.

**`CLAUDE.md` and `docs/CLAUDE_CODE.md` contain nearly identical content.** Both documents describe the Claude Code workflow. One is the persistent instruction file; the other is documentation. They should be differentiated more clearly or `docs/CLAUDE_CODE.md` should link to `CLAUDE.md` rather than duplicating it.

**`CONTRIBUTING.md` does not describe the PR process, branch naming, or how to get a review.** It lists contribution types but provides no procedural guidance.

**`CITATION.cff` lists author as `OpenReason contributors` with no family or given names.** This is not a valid CFF author entry and will be rejected by citation parsers that expect structured name fields.

---

## 8. Missing Tests

| Gap | Location | Priority |
|---|---|---|
| Resolver scoring and fallback logic | `src/resolver.ts` | High |
| Engine report rendering — general case (no `likelyContrast`) | `src/engine.ts` | High |
| Engine report rendering — `likelyContrast` branch | `src/engine.ts` | Medium |
| Loader rejection of invalid YAML (missing required fields) | `src/loader.ts` | High |
| Loader rejection of invalid `evidence_statuses` values | `src/loader.ts` | Medium |
| Loader rejection of duplicate framework IDs | `src/loader.ts` | Low |
| Router — low-confidence / no-match input → `general_analysis` | `src/router.ts` | Medium |
| Router — input triggering multiple competing intents | `src/router.ts` | Medium |
| Router — `fact_checking` intent detection | `src/router.ts` | Low |
| Full pipeline integration test (validate → route → resolve → compile → packet) | `src/engine.ts` | High |
| CLI command `inspect` output shape | `src/cli.ts` | Low |
| CLI command `compile` writes a file | `src/cli.ts` | Low |

---

## 9. Missing Examples

| Example | Purpose |
|---|---|
| A logical fallacy in a short argument | Tests Walton framework activation and L1/H1 evidence status path |
| A political speech excerpt with explicit framing | Tests Entman framework, F1 status, omission analysis |
| A persuasive op-ed with ethos/pathos/logos | Tests Aristotle framework activation |
| A neutral or ambiguous input | Tests low-confidence routing and fallback behavior |
| A multi-intent input (e.g., framing + logic) | Tests framework co-activation and combined compiled output |
| A complete committed analysis output | Reference for contributors and users to compare against |

---

## 10. Prioritized Roadmap

### Priority 1 — Stabilize the foundation (before new features)

1. **Fix the `likelyContrast` hard-code in `engine.ts`.** Replace it with a general-purpose scaffold that works for any input. Move example-specific guidance into the example file or a dedicated example analysis document.
2. **Add `verification_status` to the framework schema and all four existing frameworks.** Set all to `draft` until reviewed. This closes the gap between the documentation and the implementation.
3. **Add missing tests.** Resolver, engine, and loader edge-case tests are the highest-risk gaps. Write at minimum: a resolver test for the fallback path, an engine test for non-Iran/Somalia input, and a loader test for an invalid YAML file.
4. **Fix `tsconfig.json` `rootDir`.** Set `rootDir: "src"` or exclude tests from compilation output to prevent test code appearing in `dist/`.
5. **Synchronize the two schema definitions.** Either generate one from the other, add a CI check that compares them, or add a comment explicitly noting which is authoritative. Align the `anti_triggers` handling.

### Priority 2 — Strengthen usability

6. **Add at least two more example inputs** covering distinct intent categories (logical fallacy, political speech framing). Add one committed example output.
7. **Fix the `fact_checking` intent gap.** Either add a fact-checking framework stub or remove `fact_checking` from the router signals until a framework exists.
8. **Document the `inspect`/`compile`/`analyze` command distinction** in `docs/DEVELOPER_GUIDE.md` or `docs/GETTING_STARTED.md`.
9. **Add a type-check-only step to CI** (`tsc --noEmit`) that runs before `npm test` so type errors surface earlier.
10. **Fix `CITATION.cff`** to use a valid CFF author entry format.

### Priority 3 — Expand the framework library

11. **Add a general-purpose `fallback` framework** that provides basic claim-extraction and evidence-graph guidance when no specific framework is triggered.
12. **Add a propaganda analysis framework** (e.g., Ellul or Bernays) to cover intent categories not yet served.
13. **Add a scientific framing framework** to serve `fact_checking` intent and media-about-science analysis.
14. **Draft a framework versioning policy** — what constitutes a breaking change, how to deprecate a framework, and how consumers should treat version bumps.

### Priority 4 — Mature the platform

15. **Implement the MCP server** described in `docs/MCP_ARCHITECTURE.md`. Start with the three most-used tools: `validate_frameworks`, `analyze_input`, `search_frameworks`.
16. **Add a repeatable regression test** that runs the full pipeline on each example input and compares the packet structure (not prose) to a committed snapshot. This catches silent regressions in router or resolver logic.
17. **Expand the `docs/book/` chapters** into a coherent guide of ≥500 words each, or consolidate them into a single well-structured document if short form is preferred.
18. **Add a `ROADMAP.md`** at the root to make the intended direction visible to contributors without requiring them to read this review.

---

*This review reflects the state of the repository as of commit `2236542` (v0.1.0). It is intended as a working document for the maintainer and should be updated as gaps are addressed.*
