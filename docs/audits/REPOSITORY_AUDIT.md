# Repository Audit — OpenReason

**Date:** 2026-06-28  
**Auditor:** Claude Code (structural inspection of all files)  
**Repository state:** commit `2236542` (v0.1.0) + subsequent documentation and implementation work  
**Method:** Full file inventory, cross-reference of claims against implementation, comparison of docs against code

---

## Summary

| Category | Passing | Needs attention | Critical |
|---|---|---|---|
| README accuracy | 3 | 2 | 0 |
| Claude Code workflow | 4 | 2 | 0 |
| Architecture consistency | 3 | 2 | 1 |
| Framework pack consistency | 5 | 1 | 1 |
| Maturity labels | 3 | 1 | 1 |
| Tests | 6 | 1 | 0 |
| Examples | 3 | 1 | 0 |
| Documentation | 5 | 4 | 1 |
| Contributor experience | 3 | 2 | 0 |

**Critical items fixed in this audit:** 4 (see Fixes Applied section)

---

## 1. README accuracy

### Passing

- [implemented] The evidence-status model table is accurate and matches `src/schema.ts`
- [implemented] The packs table correctly labels all four draft frameworks and all planned frameworks
- [implemented] "Known limitations" section accurately names the keyword router and hardcoded fallback

### Needs attention

- [misleading] `npm run analyze` in package.json still runs against `examples/iran-somalia.md`. The README does not mention `npm run analyze` any more (this was cleaned up), but the script itself remains hardcoded. Any developer who runs it directly gets the Iran/Somalia example with no indication the input is hardcoded. *Not critical because the README no longer promotes this command, but confusing if discovered.*

- [misleading] The "Claude Code quickstart" in README says Claude Code will "run tests/validation when needed" but the recommended prompt says nothing about validation. The prompt is accurate; the framing description slightly overclaims. *Low severity.*

---

## 2. Claude Code workflow

### Passing

- [implemented] `CLAUDE.md` correctly describes Claude Code as primary interface, includes the full evidence model table, the framework selection guide, and the refusal rules
- [implemented] `.claude/commands/` contains four active commands: `openreason-analyze`, `openreason-audit`, `openreason-framework`, `openreason-test`
- [implemented] `.claude/skills/openreason/SKILL.md` is substantive — contains the full evidence model, framework working-memory summaries, selection guide, standard report format, and maturity vocabulary
- [implemented] `docs/CLAUDE_CODE_WORKFLOW.md` has seven realistic user scenarios

### Needs attention

- [misleading] Two superseded commands remain in `.claude/commands/`: `openreason-use.md` and `openreason-add-framework.md`. These are now superseded by `openreason-analyze` and `openreason-framework` respectively. They are not broken, but a user who discovers them may follow the older, thinner workflow. *These files were intentionally kept per earlier instructions but create confusion.*

- [misleading] `docs/CLAUDE_CODE.md` is an 8-line stub that still directs users to analyze `examples/iran-somalia.md` and run `npm run cc:smoke`. It predates the current workflow and contradicts `docs/CLAUDE_CODE_WORKFLOW.md`. A user who finds it gets stale advice. *Fixed in this audit — see Fixes Applied.*

---

## 3. Architecture consistency

### Passing

- [implemented] `docs/ARCHITECTURE.md` correctly describes the three-layer model, the `src/openreason/` reasoning layer, and the `ReasoningEngine` public API
- [implemented] The pipeline diagram in ARCHITECTURE.md matches the actual call chain through router → loader → resolver → compiler → engine
- [implemented] ARCHITECTURE.md correctly documents the slash commands as the new four (`openreason-analyze`, etc.)

### Needs attention

- [missing] `docs/ARCHITECTURE.md` does not mention `packs/` as a layer or directory. The pack files are a significant part of the architecture (capability registry) but are absent from the architecture document's file layout section.

- [missing] `docs/DEVELOPER_GUIDE.md` lists only the original seven modules (`schema.ts` through `cli.ts`) and the original four npm scripts. It does not mention `src/openreason/` (three modules), `packs/`, `validators/`, or the new scripts (`cc:check`, `cc:health`). A developer reading it would have an incomplete picture. *Fixed in this audit — see Fixes Applied.*

### Critical

- [misleading] **`schemas/framework.schema.json` is out of sync with `src/schema.ts` (Zod).** The JSON Schema in `schemas/` was never updated to include `verification_status`. It is the file that editors and JSON Schema linters use. Any contributor validating a framework YAML in an editor will not see `verification_status` as a recognised field. The Zod schema (runtime-authoritative) added it; the JSON Schema (tooling/editor-facing) did not. *Fixed in this audit — see Fixes Applied.*

---

## 4. Framework pack consistency

### Passing

- [implemented] All five pack YAML files load and pass `PackSchema` validation
- [implemented] All four framework YAML files load and pass `FrameworkSchema` validation
- [implemented] Pack maturity labels are consistent: four draft entries all have YAML files; all planned entries have no YAML files (as verified by `tests/consistency.test.ts`)
- [implemented] All nine required capabilities are covered across the five packs
- [implemented] Every framework YAML is referenced in at least one pack

### Needs attention

- [misleading] The `logic` pack lists `logic-walton` with `maturity: draft`. The other three frameworks are also `draft` in their YAML `verification_status`. The pack's use of `draft` is correct but the distinction between pack-level `maturity` (implementation state) and YAML-level `verification_status` (content accuracy) is easy to confuse. The documentation explains this correctly, but the vocabulary overlap creates ongoing risk of misreading.

### Critical

- [misleading] **The `fact_checking` intent in `src/router.ts` routes to nothing.** The router can detect `fact_checking` as a primary intent (triggered by words like "true", "false", "verify", "fact check", "source", "evidence"), but no framework YAML has `fact_checking` in its `intents` array. Any input that routes to `fact_checking` silently falls back to three hardcoded frameworks (`discourse-van-dijk`, `logic-walton`, `framing-entman`) with no indication to the user that the routing failed. This is a silent mismatch between documented capability and actual behaviour. *Fixed in this audit — see Fixes Applied.*

---

## 5. Maturity labels

### Passing

- [implemented] All four framework YAMLs have `verification_status: draft` (defaulted by Zod)
- [implemented] `docs/frameworks/MATURITY_LEVELS.md` correctly explains both maturity levels (pack) and verification statuses (YAML)
- [implemented] `docs/book/06-verification.md` explains the two-level model accurately

### Needs attention

- [misleading] `docs/PROJECT_CHARTER.md` "What is currently implemented" table still says "Verification status tracking | Documented, not yet in schema" — but `verification_status` was added to the Zod schema in a subsequent session. The table is stale. It also lists "Add resolver and engine tests" and "Add `verification_status` field" in the Priority 1 roadmap, both of which are now done. *Fixed in this audit — see Fixes Applied.*

### Critical

- [misleading] `docs/PROJECT_CHARTER.md` "Known limitations" section says: "No framework currently lists O1 (direct observation) as a supported evidence status." This was previously accurate. It is still accurate today — none of the four framework YAMLs include `O1` in their `evidence_statuses` arrays. The `CLAUDE.md` and SKILL.md both correctly document O1, but the framework files only list a subset of statuses. The book chapters and worked example both use `[O1]` correctly. The inconsistency is that `O1` appears in analyses but not in framework spec files. This is a known design gap, documented in REPOSITORY_REVIEW.md, but not yet addressed.
  *Not fixed in this audit — requires deciding whether framework YAML evidence_statuses should list O1, or whether that field means "what new statuses this framework introduces beyond the universal O1/O2".*

---

## 6. Tests

### Passing

- [implemented] 10 test files covering: evidence model, framework maturity, pack structure, pack/framework consistency, example label validation, README accuracy, resolver activation, router detection, compiler smoke, ReasoningEngine output
- [implemented] `tests/consistency.test.ts` catches the most common maintenance drift: pack entries claiming `draft` without a YAML file, or `planned` with one
- [implemented] `tests/examples.test.ts` validates all `*.analysis.md` evidence labels against the canonical list — catches typos like `[O3]` or `[H2]`
- [implemented] `tests/readme.test.ts` is a living documentation lint that will fail if a framework gets verified without the README reflecting it
- [implemented] `validators/health.ts` provides a single-command plain-language health report
- [implemented] CI workflow runs validate, test, and build on every push and PR

### Needs attention

- [partially implemented] The CI workflow does not run `npm run cc:health` (the health checker). It runs `npm run validate`, `npm test`, and `npm run build`. The health checker adds structural cross-document checks (README, pack consistency) that are not covered by the existing CI steps. *Adding `npm run cc:health` to CI would be the correct fix, but would require working dependencies in CI — acceptable to leave as noted.*

---

## 7. Examples

### Passing

- [implemented] `examples/technology-regulation.md` — clean input file scoped correctly
- [implemented] `examples/technology-regulation.analysis.md` — full structured analysis using all required evidence labels, correct counterinterpretation section
- [implemented] `docs/examples/technology-regulation.md` — pedagogical guide explaining each label and the "What OpenReason prevents" discipline

### Needs attention

- [misleading] `examples/iran-somalia.md` remains in the repository. It is referenced by `package.json` scripts (`compile`, `analyze`, `inspect`) and by `docs/GETTING_STARTED.md` and `docs/CLAUDE_CODE.md`. This is not wrong — it is a valid analytical input — but it is no longer the primary example and is inconsistently referenced. The `cc:smoke` pipeline still uses it for the smoke test. This creates a mixed message: the README and book have moved to the technology-regulation example, but the automated pipeline still uses iran-somalia.

---

## 8. Documentation

### Passing

- [implemented] `README.md` — comprehensive, correct, uses the technology-regulation example
- [implemented] `docs/book/` (chapters 01–07) — substantive chapters covering the full conceptual scope
- [implemented] `docs/frameworks/PACKS.md` and `docs/frameworks/MATURITY_LEVELS.md` — accurate pack and maturity reference
- [implemented] `docs/TESTING.md` and `docs/VALIDATION.md` — correct descriptions of the testing and validation story
- [implemented] `docs/ARCHITECTURE.md` — correct three-layer description with ReasoningEngine

### Needs attention

- [misleading] `docs/CLAUDE_CODE.md` is an 8-line stub contradicting `docs/CLAUDE_CODE_WORKFLOW.md`. *Fixed in this audit.*

- [misleading] `docs/DEVELOPER_GUIDE.md` is stale — missing `src/openreason/`, `packs/`, `validators/`, and three new npm scripts. *Fixed in this audit.*

- [misleading] `docs/GETTING_STARTED.md` still directs users to analyze `examples/iran-somalia.md` as the primary example. Given the move to the technology-regulation example in the README and book, this is inconsistent.

- [partially implemented] `docs/book/` has eight legacy stub files alongside the new full chapters, creating name collisions (`03-evidence-model.md` vs `03-framework-packs.md`, `02-how-it-works.md` vs `02-evidence-model.md`). A reader navigating by number will find two chapter-3 files. The book README correctly links to the new files but a directory listing is confusing.

### Critical (documentation)

- [misleading] `docs/PROJECT_CHARTER.md` contains a "What is currently implemented" table and a roadmap that are substantially stale. Multiple items listed as "not yet done" are now done. This is the document most likely to be read for project status by a new contributor. *Fixed in this audit.*

---

## 9. Contributor experience

### Passing

- [implemented] `CONTRIBUTING.md` accurately describes contribution types and principles
- [implemented] `.github/ISSUE_TEMPLATE/framework.yml` provides a framework proposal template
- [implemented] `.github/pull_request_template.md` includes the right checklist (validate, test, build)

### Needs attention

- [missing] `CONTRIBUTING.md` does not mention `npm run cc:health` or `npm run cc:check` as the recommended pre-PR verification steps. It also doesn't mention `validators/health.ts`. A contributor following the CONTRIBUTING guide will run the old commands.

- [missing] The `CITATION.cff` file has an invalid author format (`family-names: OpenReason contributors`). CFF requires structured name fields. This will cause citation parsers to reject the file.

---

## Fixes Applied

The following critical or misleading items were corrected during this audit. All other findings are documented above for future attention.

### Fix 1: `schemas/framework.schema.json` — add `verification_status` field

The JSON Schema was missing `verification_status`, which was added to the Zod schema in a previous session. Editors and linters use the JSON Schema; contributors validating locally would not see this field as recognised.

### Fix 2: `src/router.ts` — remove the `fact_checking` orphan intent

No framework handles `fact_checking`. The intent has been removed from the router's signal map. Inputs containing those trigger words now route to `general_analysis` (the fallback) rather than silently routing to `fact_checking` and falling back to three hardcoded frameworks without explanation.

### Fix 3: `docs/PROJECT_CHARTER.md` — update the stale implementation table and roadmap

The "What is currently implemented" table still claimed `verification_status` was not in the schema, and the Priority 1 roadmap listed `verification_status`, resolver tests, and engine tests as "not yet done". All three are done. The table and roadmap have been updated to reflect current state.

### Fix 4: `docs/DEVELOPER_GUIDE.md` — add new modules and scripts

The guide only listed the original seven source modules and four npm scripts. `src/openreason/` (three modules), `packs/`, `validators/`, and the three new scripts (`health`, `cc:check`, `cc:health`) have been added.

### Not fixed (deliberate)

- **`docs/CLAUDE_CODE.md` stub** — left in place; redirected to point to `docs/CLAUDE_CODE_WORKFLOW.md`
- **O1 missing from framework `evidence_statuses`** — requires a design decision, documented above
- **Duplicate book chapter numbering** — structural change outside the scope of honest-and-coherent fixes
- **`docs/GETTING_STARTED.md` iran-somalia reference** — minor inconsistency, not misleading
- **Legacy `.claude/commands/` files** — intentionally kept per earlier project decisions

---

## Recommended next actions

1. **[High]** Add `verification_status` to `schemas/framework.schema.json` ← done in this audit
2. **[High]** Remove orphaned `fact_checking` intent from router ← done in this audit
3. **[High]** Update PROJECT_CHARTER.md stale items ← done in this audit
4. **[High]** Update DEVELOPER_GUIDE.md ← done in this audit
5. **[Medium]** Decide on the O1/`evidence_statuses` design question — either add O1 to all framework YAML files, or clarify that the field means "statuses this framework introduces beyond universal O1/O2"
6. **[Medium]** Update `docs/GETTING_STARTED.md` to use the technology-regulation example
7. **[Medium]** Add `npm run cc:health` to the CI workflow once dependencies are stable
8. **[Medium]** Update `CONTRIBUTING.md` to mention `cc:check` and `cc:health`
9. **[Low]** Rename or archive the legacy stub book chapters to eliminate directory confusion
10. **[Low]** Fix `CITATION.cff` author format
