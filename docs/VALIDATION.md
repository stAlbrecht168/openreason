# Validation Guide — OpenReason

Validation in OpenReason has two meanings, and this document covers both:

1. **Schema validation** — automated checks that YAML files are structurally correct
2. **Content verification** — human checks that framework content is academically accurate

These are different processes requiring different skills and tools.

---

## Schema validation (automated)

Schema validation checks that every YAML file follows the required structure. It catches:

- Missing required fields
- Fields with wrong data types
- Invalid enum values (e.g., an unknown evidence status)
- Empty arrays where at least one item is required

### How to run it

```bash
npm run validate
```

Or as part of the full health check:

```bash
npm run cc:health
```

Schema validation runs automatically in CI on every push and pull request.

### What schema validation covers

**Framework files** (`frameworks/**/*.yaml`): validated against `src/schema.ts` (Zod) and `schemas/framework.schema.json` (JSON Schema). The Zod schema is authoritative at runtime.

**Pack files** (`packs/*.yaml`): validated against the `PackSchema` defined in `src/schema.ts`. Pack entries for `draft` or `implemented` frameworks must have corresponding YAML files; this is checked by `tests/consistency.test.ts`.

### What schema validation does not cover

Schema validation cannot check whether framework content is accurate. A framework can pass schema validation while misrepresenting the theory it claims to describe. Content accuracy requires human verification — see below.

---

## Content verification (human-led)

Content verification checks that a framework's analytical concepts, decision rules, and analysis questions faithfully represent the scholarly tradition they cite.

This is explained in detail in [docs/VERIFICATION.md](VERIFICATION.md) and [docs/book/06-verification.md](book/06-verification.md). The key points are summarised here.

### Framework verification levels

Every framework YAML has a `verification_status` field:

| Status | Meaning |
|---|---|
| `draft` | Written but not checked against sources |
| `reviewed` | Checked against secondary sources (textbooks, summaries) |
| `verified` | Checked against the original cited primary sources |
| `contested` | Known discrepancy between the YAML and the source tradition |

**Current status:** all four frameworks are `draft`.

### How to move a framework from `draft` to `reviewed`

1. Read the `references` section of the framework YAML
2. Find a credible secondary source (textbook chapter, peer-reviewed summary) covering the tradition
3. For each `core_concept`, `analysis_step`, and `decision_rule`:
   - Is this concept present in the secondary source?
   - Is it described consistently?
4. If consistent: set `verification_status: reviewed` and add a note in the references section
5. If inconsistent: correct the YAML or set `verification_status: contested` with an explanation

### How to move from `reviewed` to `verified`

Repeat with the cited original primary source instead of a secondary source.

### What counts as a valid primary source?

The sources listed in each framework's `references` section. For example:

- **Walton**: *Informal Logic* (1989) or *Argumentation Schemes* (Walton, Reed & Macagno, 2008)
- **van Dijk**: *Discourse and Power* (2008) or *Racism and Discourse in Spain and Latin America*
- **Entman**: "Framing: Toward Clarification of a Fractured Paradigm" (1993)
- **Aristotle**: *Rhetoric* (any standard scholarly translation)

---

## Consistency validation (automated)

Beyond schema and content, the test suite includes consistency checks that span multiple files.

### Pack/framework consistency (`tests/consistency.test.ts`)

- Every pack entry marked `draft` must have a framework YAML file
- Every pack entry marked `planned` must NOT have a framework YAML file
- Every framework YAML must be referenced in at least one pack

Run with `npm test`.

### Example file validation (`tests/examples.test.ts`)

- Evidence labels in `examples/*.analysis.md` must be valid OpenReason statuses
- Every analysis file must contain at least one O1/O2 observation and at least one H1 hypothesis

Run with `npm test`.

### README accuracy (`tests/readme.test.ts`)

- README acknowledges draft framework status
- README does not claim frameworks are verified unless the YAML says so

Run with `npm test`.

---

## The health check (single command for Claude Code)

To get a full validation report in plain language:

```bash
npm run cc:health
```

This runs:
1. `npm run validate` — framework schema validation
2. `npx tsx validators/health.ts` — all structural checks with plain-language output

Exit code 0 means everything passes. Exit code 1 means at least one check failed, with a specific description of what to fix.

---

## Adding a new validation

### For schema rules

Add a field to `FrameworkSchema` or `PackSchema` in `src/schema.ts`. The Zod schema is enforced automatically when YAML files are loaded at runtime and in tests.

Also update `schemas/framework.schema.json` to keep it in sync with the Zod schema.

### For content rules

Add a `describe`/`it` block to the appropriate test file, or add a check function to `validators/health.ts` if the output should appear in the plain-language health report.

### For new consistency rules

Add to `tests/consistency.test.ts` for cross-file rules, or to `validators/health.ts` if the check should appear in the health report.

---

## Schema synchronisation

The framework schema is defined in two places:

- `src/schema.ts` — Zod, authoritative at runtime
- `schemas/framework.schema.json` — JSON Schema, used by editors and linters

These must be kept in sync manually. When you change one, update the other. A future CI check may automate this comparison, but for now it is a manual responsibility.
