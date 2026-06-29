# Framework Authoring Guide

A framework is a structured analytical method derived from a documented theoretical tradition.

It is not a summary of an author's biography.
It is a reusable method that OpenReason can select, apply, and explain.

**Before writing a framework, read [`docs/FRAMEWORK_SPECIFICATION.md`](FRAMEWORK_SPECIFICATION.md).**
The specification is the authoritative source. This guide is a quick-start companion.

---

## Every framework consists of two files

```
frameworks/<domain>/
  <id>.yaml     ← machine layer: loaded and validated by the engine
  <id>.md       ← human layer: narrative, examples, verification record, changelog
```

Both files are required. A framework without a companion `.md` is incomplete.

---

## Required fields in the YAML file

| Field | Rules |
|---|---|
| `id` | `<domain>-<surname>` pattern, e.g. `logic-walton` |
| `name` | `Author — Theory` format |
| `version` | Start at `0.1.0`; increment when content changes |
| `domain` | One of the defined domains (see spec Part 4) |
| `purpose` | What analytical question does this framework answer? |
| `scope` | What inputs is it for? What is it NOT for? |
| `verification_status` | Always `draft` until verified |
| `capabilities` | Must match capability names in `packs/` |
| `intents` | Must match intent names in `src/router.ts` |
| `triggers` | Words whose presence suggests this framework is relevant |
| `anti_triggers` | Words that should suppress activation |
| `core_concepts` | 3–8 real concepts from the source tradition |
| `evidence_statuses` | Must include O1, O2, H1; add domain-specific statuses |
| `analysis_steps` | ≥3 ordered, actionable steps |
| `decision_rules` | ≥2 rules in IF/THEN format |
| `analysis_questions` | ≥3 questions practitioners of this tradition actually ask |
| `output_fields` | Named outputs appearing in the analysis report |
| `limitations` | ≥2 substantive limitations (not "may not apply everywhere") |
| `references` | ≥1 real source with title, author, and note |

See [`schemas/framework.schema.json`](../schemas/framework.schema.json) for the full schema.

---

## Required sections in the companion `.md` file

1. Header (ID, domain, version, verification status, pack, date)
2. Purpose
3. Scope
4. Capabilities provided
5. Workflow summary
6. Evidence mapping
7. Decision rule rationale
8. Worked example
9. Limitations
10. Known gaps
11. References
12. Verification record
13. Changelog

Sections you cannot complete yet must be present as `[NOT YET WRITTEN]`.
Do not omit sections because they are empty.

---

## Rules

1. **Do not invent content.** Every concept, step, and rule must be traceable to the cited sources.
2. **Do not add concepts from adjacent traditions** without acknowledging the source.
3. **Always set `verification_status: draft`** when creating a framework. Change it only after doing the actual verification work described in [`docs/VERIFICATION.md`](VERIFICATION.md).
4. **Use cautious language for social and cognitive effects.** S1 and C1 claims must use "may", "could", "is associated with" — never "does", "proves".
5. **Never state motive as fact.** Motive claims require H1.
6. **Add or update tests** when adding a new framework that introduces new trigger words or intents.

---

## After writing a framework

Run:
```bash
npm run validate
npm test
npm run cc:health
```

All three must pass before the framework is ready for use.

---

## Example

See:
- [`frameworks/logic/walton.yaml`](../frameworks/logic/walton.yaml) — YAML example
- [`frameworks/logic/walton.md`](../frameworks/logic/walton.md) — companion `.md` example
