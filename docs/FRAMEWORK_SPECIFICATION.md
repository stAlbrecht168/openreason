# OpenReason Framework Specification

**Version:** 1.0  
**Status:** Active  
**Applies to:** All frameworks in `frameworks/`

This document defines what every OpenReason framework must contain,
where each piece of information lives, and what standards it must meet.

---

## Overview

Every framework consists of two files in its domain directory:

```
frameworks/<domain>/
  <id>.yaml     ← machine layer: loaded by the engine, validated by Zod schema
  <id>.md       ← human layer: narrative, examples, changelog, verification record
```

The YAML file is the analytical specification the engine reads.
The Markdown companion is the human document that explains, evidences, and tracks the framework.

Neither file is optional. A framework without a companion `.md` is incomplete.

---

## Part 1 — YAML file specification (`<id>.yaml`)

The YAML file is validated at runtime against `schemas/framework.schema.json`
and `src/schema.ts` (Zod). All fields listed here are required unless noted optional.

### 1.1 Metadata fields

```yaml
id: <domain>-<surname>
name: <Full Author Name> — <Theory Name>
version: <semver>
domain: <domain_string>
verification_status: draft | reviewed | verified | contested
```

**`id`** — Unique identifier. Pattern: `<domain>-<author-surname>`.
Examples: `logic-walton`, `discourse-van-dijk`, `framing-entman`.

**`name`** — Human-readable name. Format: `Author Name — Theory Name`.

**`version`** — Semantic version of this YAML file. Start at `0.1.0`.
Increment when content changes: patch for small corrections, minor for new fields, major for structural rethinks.

**`domain`** — The broad analytical category. One of: `informal_logic`, `critical_discourse_analysis`, `framing_analysis`, `rhetoric`, `propaganda_analysis`, `cognitive_bias`, `moral_psychology`, or a new domain name if genuinely different.

**`verification_status`** — How carefully the YAML content has been checked against cited sources.
- `draft`: written, not checked
- `reviewed`: checked against secondary sources
- `verified`: checked against primary cited sources
- `contested`: known disagreement with the source tradition

Default: `draft`. **Never change this field without doing the actual verification work.**

---

### 1.2 Purpose and scope

```yaml
purpose: >
  One or two sentences: what analytical question does this framework answer?

scope: >
  One or two sentences: what inputs is this framework appropriate for?
  What inputs is it NOT appropriate for?
```

**`purpose`** — The analytical question the framework addresses. Specific enough that someone can decide whether to activate it for a given input.

**`scope`** — Explicit statement of both what the framework covers AND what it does not. This is the most-neglected field. It must say what the framework is NOT for, not just what it is for.

---

### 1.3 Routing fields

```yaml
capabilities:
  - <capability_name>

intents:
  - <intent_name>

triggers:
  - <keyword>

anti_triggers:
  - <keyword_that_should_suppress_activation>
```

**`capabilities`** — The analytical capabilities this framework contributes to. Must match capability names defined in `packs/`. A framework may contribute to more than one capability.

**`intents`** — Intent categories from the router (`src/router.ts`) that should activate this framework. A framework must list the intents it is genuinely suited for. Do not list intents it can only partially address.

**`triggers`** — Words or phrases whose presence in an input suggests this framework is relevant. Used by the resolver's trigger scoring. Be specific: triggers that are too broad will activate the framework unnecessarily.

**`anti_triggers`** — Words or phrases that indicate this framework should NOT activate even if other signals are present. Use sparingly; a missing anti-trigger is less harmful than a wrong one.

---

### 1.4 Conceptual content

```yaml
core_concepts:
  - <concept_name>

evidence_statuses:
  - O1
  - O2
  - <status_appropriate_to_domain>
  - H1
```

**`core_concepts`** — The 3–8 most important concepts from the source tradition that this framework operationalises. Every concept must be:
- a real concept in the source tradition (not invented)
- traceable to one of the listed references
- distinct from the others in the list

**`evidence_statuses`** — The evidence status labels this framework produces. Rules:
- `O1` and `O2` must be included (every framework grounds in observations)
- `H1` must be included (every framework must be able to express uncertainty)
- Include domain-specific statuses (`D1` for discourse, `R1` for rhetoric, `F1` for framing, `L1` for logic, `C1`/`S1` if cognitive or social effects are relevant)
- Do not include statuses the framework cannot justify (e.g., do not include `D1` in a logic framework)

---

### 1.5 Analytical workflow

```yaml
analysis_steps:
  - Step 1: ...
  - Step 2: ...

decision_rules:
  - IF <condition> THEN <action>.
  - IF <condition> THEN <action>.

analysis_questions:
  - <question_that_the_framework_asks>?
```

**`analysis_steps`** — An ordered procedure. Each step should be actionable: someone reading it should know what to do. Steps should be derivable from the source tradition — do not invent analytical moves.

**`decision_rules`** — Conditional rules in the form `IF <pattern> THEN <action>`. Rules must be grounded in the source tradition and state the decision clearly. Rules that are so hedged they never produce a finding are not useful. Rules that claim to prove motive are not acceptable.

**`analysis_questions`** — The key questions an analyst asks when applying this framework. These appear in the report scaffold. They should be the questions practitioners of this tradition actually ask.

---

### 1.6 Output

```yaml
output_fields:
  - <field_name>
```

**`output_fields`** — Named output categories the framework produces in a completed analysis. These are the headings under "Framework findings" in a report. Each field corresponds to a distinct analytical output (e.g., `claim`, `premises`, `conclusion` for Walton; `ethos`, `pathos`, `logos` for Aristotle).

---

### 1.7 Limitations

```yaml
limitations:
  - <specific_limitation>
```

**`limitations`** — At least two, and preferably three to five. These must be substantive. A valid limitation names something specific the framework cannot determine. Examples of valid limitations:

- "Does not prove speaker intent."
- "Cannot verify the empirical truth of claims."
- "Requires explicit group comparisons; less powerful on implicit representation."

Examples of invalid limitations (too generic):
- "May not apply to all texts."
- "Has limitations."

---

### 1.8 References

```yaml
references:
  - title: <Title>
    author: <Author Name>
    year: <year>        # optional but strongly recommended
    note: >
      What this source contributes to the framework and what was used from it.
```

**`references`** — At least one entry. Each reference must:
- Name a real book, article, or paper
- Identify the author
- Include a note explaining what was taken from that source

Prefer primary sources over secondary summaries. If a secondary source is used, say so in the note.

---

## Part 2 — Companion file specification (`<id>.md`)

The companion file is the human document for the framework. It provides:
- context a YAML file cannot express
- narrative explanation of how the framework works
- worked examples
- verification records
- a changelog

Sections marked `[NOT YET WRITTEN]` are honest placeholders.
They are **required** even when content is not yet available.

### Required sections (in order)

```markdown
# <Framework Name>

**ID:** `<id>`  
**Domain:** <domain>  
**Version:** <version>  
**Verification status:** draft | reviewed | verified | contested  
**Pack:** `<pack-id>`  
**Last updated:** <date>

---

## Purpose

[One paragraph: what analytical question does this framework answer?]

## Scope

[What inputs is this framework appropriate for? What is it NOT for? Be specific.]

## Capabilities provided

[Which capability names from the packs does this framework contribute to?]

## Workflow summary

[A plain-language description of how an analyst applies this framework.
Not the YAML steps — a narrative that explains the reasoning behind the steps.]

## Evidence mapping

[Which evidence statuses does this framework produce, and under what conditions?
Example: "O1/O2 are used to record the explicit text; L1 is used when a logical
inference follows from the argument structure; H1 is used for any claim about
speaker intent or purpose."]

## Decision rule rationale

[For each decision rule in the YAML, explain in one sentence WHY that rule
follows from the source tradition. If you cannot explain the rationale,
the rule should be reconsidered.]

## Worked example

[A short (1–4 sentence) input and the analysis produced by applying this framework.
Show at least one O1/O2, one domain-specific status, and one H1.
Mark draft examples clearly: "This example has not been verified against source texts."]

## Limitations

[Prose expansion of the YAML limitations field. Explain WHY each limitation exists
and what an analyst should do when they encounter it.]

## Known gaps

[What is the framework not yet covering that it should? What is uncertain?
This section is not a failure — it is a commitment to honesty.]

## References

[Full bibliographic entries for each item in the YAML references field.
If a publication year, publisher, or page range is known, include it.
If not known with certainty, write: "year uncertain" or "publisher not verified".]

## Verification record

**Date:** [date or "not yet verified"]  
**Verified by:** [name/role or "not yet verified"]  
**Sources consulted:** [list or "none"]  

[For each core concept verified: "✓ concept_name — confirmed in [source], [page/chapter]"]
[For each concept NOT verified: "— concept_name — not yet checked"]

## Changelog

### <version> — <date>
[What changed and why. Be specific.]
```

---

## Part 3 — Maturity and verification rules

### Maturity levels (used in packs)

| Level | File exists? | Companion `.md` exists? | Verified? |
|---|---|---|---|
| `planned` | No | No | No |
| `draft` | Yes | Yes (may have placeholders) | No |
| `reviewed` | Yes | Yes | Secondary sources |
| `verified` | Yes | Yes, complete | Primary sources |

A framework may not be promoted from `draft` to `reviewed` without:
1. A completed verification record in the companion `.md`
2. The `verification_status` field updated in the `.yaml`
3. At least one contributor named in the verification record

### What verification means

Verification is not about whether the framework "seems right." It means:

1. Opening the cited primary source
2. For each `core_concept`: finding where it appears in the source and confirming the name and description match
3. For each `decision_rule`: confirming the rule is consistent with how the source tradition applies the concept
4. For each `limitation`: confirming the limitation is recognised in the scholarly literature
5. Documenting every check in the verification record

If a concept cannot be verified, either correct it or mark the framework `contested`.

---

## Part 4 — File naming and directory structure

```
frameworks/
  <domain>/
    <id>.yaml       ← machine layer (engine reads this)
    <id>.md         ← human layer (contributors and researchers read this)
```

Directory names (`<domain>`) should match the framework's `domain` field:
- `logic/` for `informal_logic`
- `discourse/` for `critical_discourse_analysis`
- `framing/` for `framing_analysis`
- `rhetoric/` for `rhetoric`
- `propaganda/` for `propaganda_analysis`
- `psychology/` for cognitive and moral psychology frameworks

---

## Part 5 — Schema requirements summary

The following fields are required in every YAML file and validated by the Zod schema:

| Field | Type | Rules |
|---|---|---|
| `id` | string | `<domain>-<surname>` pattern |
| `name` | string | `Author — Theory` format |
| `version` | string | semver |
| `domain` | string | one of the defined domains |
| `purpose` | string | ≥1 sentence |
| `scope` | string | ≥1 sentence, must include what framework is NOT for |
| `verification_status` | enum | `draft\|reviewed\|verified\|contested` |
| `capabilities` | array | ≥1 item, must match pack capability names |
| `intents` | array | ≥1 item, must exist in router |
| `triggers` | array | ≥1 item |
| `anti_triggers` | array | optional, empty list if none |
| `core_concepts` | array | ≥1 item |
| `evidence_statuses` | array | must include O1, O2, H1; others as appropriate |
| `analysis_steps` | array | ≥3 steps |
| `decision_rules` | array | ≥2 rules, IF/THEN format |
| `analysis_questions` | array | ≥3 questions |
| `output_fields` | array | ≥1 item |
| `limitations` | array | ≥2 substantive limitations |
| `references` | array | ≥1 item with title and author |

---

## Part 6 — Updating the schema for new fields

When new required fields are added to this specification:

1. Add the field to `src/schema.ts` (Zod) — make it optional with a default if adding to existing frameworks would be a large migration
2. Add the field to `schemas/framework.schema.json` — keep in sync with Zod
3. Update all existing framework YAML files
4. Update this document's Part 5 table
5. Update `docs/FRAMEWORK_AUTHORING.md`

---

## Part 7 — Related documents

| Document | Purpose |
|---|---|
| `docs/FRAMEWORK_AUTHORING.md` | Step-by-step guide for creating a new framework |
| `docs/VERIFICATION.md` | Verification workflow and levels |
| `docs/frameworks/MATURITY_LEVELS.md` | Maturity levels and how to advance them |
| `docs/frameworks/PACKS.md` | Pack definitions and capability registry |
| `schemas/framework.schema.json` | JSON Schema for editor validation |
| `src/schema.ts` | Zod schema — authoritative at runtime |
