# OpenReason Capability Matrix

**Last updated:** 2026-06-29  
**Source of truth:** `packs/*.yaml`, `frameworks/*/*.yaml`

This document maps every framework to the analytical capabilities it contributes.
It is the single place to determine: for a given analytical task, which frameworks are
available today, which are in development, and which are only at the reference stage.

---

## How to read this matrix

### Status indicators

| Symbol | Status | Meaning |
|---|---|---|
| **●** | draft | Framework YAML exists and validates. Concepts not yet verified against cited sources. Available for use — treat findings with appropriate caution. |
| **○** | planned | Framework is documented in a pack. No YAML file exists. Not available for analysis. |
| **◆** | reference | Source tradition is conceptually relevant. No formalisation planned in the near term. |
| **✗** | deprecated | Framework has been superseded or removed. Do not use. |

No framework is currently `deprecated`.

### Capability names

This matrix uses the capability names registered in `packs/`. The task description
uses `cognitive_analysis` — this maps to `cognitive_effect_analysis` in the pack registry.

---

## Matrix

Columns are capabilities. Rows are frameworks.
Each cell shows the framework's status for that capability, or is blank if not applicable.

| Framework | `argument_analysis` | `fallacy_detection` | `discourse_analysis` | `group_representation_analysis` | `framing_analysis` | `rhetoric_analysis` | `propaganda_analysis` | `cognitive_effect_analysis` | `social_effect_analysis` |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **logic-walton** | **●** | **●** | | | | | | | |
| **logic-toulmin** | ○ | ○ | | | | | | | |
| **logic-weston** | ○ | ○ | | | | | | | |
| **logic-damer** | | ○ | | | | | | | |
| **discourse-van-dijk** | | | **●** | **●** | | | | | **●** |
| **discourse-fairclough** | | | ○ | ○ | | | | | ○ |
| **discourse-wodak** | | | ○ | ○ | | | | | ○ |
| **framing-entman** | | | | | **●** | | | | **●** |
| **framing-lakoff** | | | | | ○ | | | | |
| **rhetoric-aristotle** | | | | | | **●** | | | |
| **rhetoric-perelman** | | | | | | ○ | | | |
| **propaganda-ipa** | | | | | | | ○ | | ○ |
| **propaganda-jowett-odonnell** | | | | | | | ○ | | ○ |
| **psychology-kahneman-tversky** | | | | | | | | ○ | ○ |
| **psychology-haidt** | | | | | | | | ○ | ○ |

---

## Coverage summary

| Capability | Draft frameworks | Planned frameworks | Total coverage |
|---|---|---|---|
| `argument_analysis` | 1 (walton) | 2 (toulmin, weston) | 3 |
| `fallacy_detection` | 1 (walton) | 3 (toulmin, weston, damer) | 4 |
| `discourse_analysis` | 1 (van-dijk) | 2 (fairclough, wodak) | 3 |
| `group_representation_analysis` | 1 (van-dijk) | 2 (fairclough, wodak) | 3 |
| `framing_analysis` | 1 (entman) | 2 (lakoff, perelman¹) | 3 |
| `rhetoric_analysis` | 1 (aristotle) | 2 (perelman¹, …) | 3 |
| `propaganda_analysis` | 0 | 2 (ipa, jowett-odonnell) | 2 |
| `cognitive_effect_analysis` | 0 | 2 (kahneman-tversky, haidt) | 2 |
| `social_effect_analysis` | 3 (van-dijk, entman, …) | 5 | 8 |

¹ Perelman contributes to both `rhetoric_analysis` and `framing_analysis` (pack: `framing-rhetoric`).

**Uncovered today (no draft framework):** `propaganda_analysis`, `cognitive_effect_analysis`.

---

## Framework index

### Draft (YAML file exists, verification status: draft)

| ID | Name | Pack | Verification status |
|---|---|---|---|
| `logic-walton` | Douglas Walton — Informal Logic | `logic` | draft |
| `discourse-van-dijk` | Teun A. van Dijk — Critical Discourse Analysis | `discourse` | draft |
| `framing-entman` | Robert Entman — Framing Analysis | `framing-rhetoric` | draft |
| `rhetoric-aristotle` | Aristotle — Rhetoric | `framing-rhetoric` | draft |

### Planned (documented in packs, no YAML file)

| ID | Name | Pack | Primary source |
|---|---|---|---|
| `logic-toulmin` | Stephen Toulmin — Argument Model | `logic` | *The Uses of Argument* (1958) |
| `logic-weston` | Anthony Weston — Practical Argument | `logic` | *A Rulebook for Arguments* (1987) |
| `logic-damer` | T. Edward Damer — Fallacy Taxonomy | `logic` | *Attacking Faulty Reasoning* (1980) |
| `discourse-fairclough` | Norman Fairclough — Three-Dimensional CDA | `discourse` | *Discourse and Social Change* (1992) |
| `discourse-wodak` | Ruth Wodak — Discourse-Historical Approach | `discourse` | Various |
| `framing-lakoff` | George Lakoff — Cognitive Framing | `framing-rhetoric` | *Don't Think of an Elephant!* (2004) |
| `rhetoric-perelman` | Chaïm Perelman & Lucie Olbrechts-Tyteca — New Rhetoric | `framing-rhetoric` | *The New Rhetoric* (1969) |
| `propaganda-ipa` | Institute for Propaganda Analysis — Seven Devices | `propaganda` | *The Fine Art of Propaganda* (1939) |
| `propaganda-jowett-odonnell` | Jowett & O'Donnell — Propaganda Analysis | `propaganda` | *Propaganda and Persuasion* (various) |
| `psychology-kahneman-tversky` | Kahneman & Tversky — Dual-Process Theory | `psychology` | *Thinking, Fast and Slow* (2011) |
| `psychology-haidt` | Jonathan Haidt — Moral Foundations Theory | `psychology` | MFT (2004–present) ² |

² Haidt's Moral Foundations Theory is contested within moral psychology. Any framework derived from it must state this limitation explicitly and must not present it as settled science.

### Deprecated

None currently.

---

## Capability definitions

| Capability | What an analysis produces | Primary framework(s) |
|---|---|---|
| `argument_analysis` | Claim map, premises, conclusions, hidden assumptions, burden-of-proof assessment | walton, (toulmin) |
| `fallacy_detection` | Fallacy candidates with evidence labels | walton, (damer) |
| `discourse_analysis` | In-group/out-group construction, discourse strategies, polarisation patterns | van-dijk, (fairclough, wodak) |
| `group_representation_analysis` | How specific groups are represented positively or negatively | van-dijk, (fairclough, wodak) |
| `framing_analysis` | Problem definition, causal interpretation, moral evaluation, treatment recommendation, omissions | entman, (lakoff) |
| `rhetoric_analysis` | Ethos, pathos, logos, enthymeme, audience positioning | aristotle, (perelman) |
| `propaganda_analysis` | Systematic persuasion technique identification | (ipa, jowett-odonnell) — planned only |
| `cognitive_effect_analysis` | Patterns associated with cognitive shortcuts — stated cautiously at C1/H1 | (kahneman-tversky) — planned only |
| `social_effect_analysis` | Possible social effects — stated cautiously at S1/H1 | van-dijk, entman, (others) |

---

## Notes on `social_effect_analysis`

`social_effect_analysis` is contributed to by several frameworks but with important caveats:

- `discourse-van-dijk` produces `S1` (possible social effect) findings about group representation effects
- `framing-entman` produces `S1` findings about how frame choices may shape public understanding
- All planned frameworks in the `propaganda` and `psychology` packs would contribute `S1` findings

All `social_effect_analysis` findings must be stated at the `S1` or `H1` evidence level.
None of these frameworks establish that a specific text caused a specific social outcome.

---

## Relationship to the evidence model

| Capability | Primary evidence statuses produced |
|---|---|
| `argument_analysis` | O1, O2, L1, H1 |
| `fallacy_detection` | O2, L1 |
| `discourse_analysis` | O1, O2, D1, H1 |
| `group_representation_analysis` | O2, D1, S1 |
| `framing_analysis` | O1, O2, F1, S1 |
| `rhetoric_analysis` | O1, O2, R1, L1, H1 |
| `propaganda_analysis` | O2, D1, F1, R1, H1 — *planned* |
| `cognitive_effect_analysis` | C1, H1 — *planned, all findings cautious* |
| `social_effect_analysis` | S1, H1 — *cautious language required* |

---

## Keeping this document current

This matrix is generated from `packs/*.yaml` and `frameworks/*/*.yaml`.
When any of the following change, update this document:

- A planned framework gets a YAML file (change ○ to **●**)
- A framework's verification status changes (update the index table)
- A new capability is added to a pack (add a column)
- A new framework is added to any pack (add a row)
- A framework is deprecated (change status to ✗ and note the reason)

The `npm run cc:health` command validates that pack capabilities and framework
capabilities are consistent. It does not validate this document.
