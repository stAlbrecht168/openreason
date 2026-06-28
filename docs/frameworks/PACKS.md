# Framework Packs

This document explains the pack system and lists all current packs.

---

## Three concepts to understand

### Capabilities

A **capability** is something OpenReason can do for you — a type of analysis.
Capabilities are named consistently across the project:

| Capability | What it analyses |
|---|---|
| `argument_analysis` | The structure of arguments: claims, premises, conclusions, hidden assumptions |
| `fallacy_detection` | Whether an argument contains a recognised informal fallacy |
| `discourse_analysis` | How language constructs social reality, power, and ideology |
| `group_representation_analysis` | How groups are presented — positively, negatively, hierarchically |
| `framing_analysis` | How a problem, cause, moral evaluation, or solution is defined |
| `rhetoric_analysis` | How credibility, emotion, and reasoning are used to persuade |
| `cognitive_effect_analysis` | What cognitive shortcuts or biases a text may activate |
| `social_effect_analysis` | What effects a text may have on groups or social dynamics |
| `propaganda_analysis` | Whether systematic persuasion techniques are present |

Capabilities are stable vocabulary. They do not change when frameworks are added or updated.

### Packs

A **pack** is a bundle of capabilities and the frameworks that provide them.
A pack says: "to perform *framing_analysis*, these frameworks are available — some implemented, some planned."

Packs live in `packs/` as YAML files. They are read by the reasoning layer
to understand what analytical capabilities are available and how mature they are.

Packs do not contain analytical rules or evidence logic — that lives in the framework files.

### Frameworks

A **framework** is an analytical method derived from a documented theoretical tradition.
It specifies: when to use it, what questions to ask, what decision rules apply,
what evidence statuses it produces, and what its limitations are.

Frameworks live in `frameworks/` as YAML files, validated against `schemas/framework.schema.json`.

Each framework referenced in a pack has a maturity level. See `docs/frameworks/MATURITY_LEVELS.md`.

---

## Current packs

### `logic` — argument and fallacy analysis

**Capabilities:** `argument_analysis`, `fallacy_detection`

| Framework | Maturity | Description |
|---|---|---|
| `logic-walton` | draft | Douglas Walton's informal logic. Argument schemes, critical questions, burden of proof. |
| `logic-toulmin` | planned | Stephen Toulmin's argument model: claim, data, warrant, backing, qualifier, rebuttal. |
| `logic-weston` | planned | Anthony Weston's practical argument evaluation. Less technical than Walton or Toulmin. |
| `logic-damer` | planned | T. Edward Damer's taxonomy of informal fallacies. |

---

### `discourse` — critical discourse analysis

**Capabilities:** `discourse_analysis`, `group_representation_analysis`, `social_effect_analysis`

| Framework | Maturity | Description |
|---|---|---|
| `discourse-van-dijk` | draft | Teun A. van Dijk's CDA. In-groups/out-groups, disclaimers, ideological polarisation. |
| `discourse-fairclough` | planned | Norman Fairclough's three-dimensional discourse analysis: text, practice, social structure. |
| `discourse-wodak` | planned | Ruth Wodak's Discourse-Historical Approach. Discriminatory language in political contexts. |

---

### `framing-rhetoric` — framing and rhetorical analysis

**Capabilities:** `framing_analysis`, `rhetoric_analysis`

| Framework | Maturity | Description |
|---|---|---|
| `framing-entman` | draft | Robert Entman's four-part framing model: problem, cause, moral evaluation, solution. |
| `rhetoric-aristotle` | draft | Aristotle's Rhetoric: ethos, pathos, logos, enthymeme. |
| `rhetoric-perelman` | planned | Chaïm Perelman and Lucie Olbrechts-Tyteca's New Rhetoric. Audience-centred argumentation schemes. |
| `framing-lakoff` | planned | George Lakoff's cognitive framing theory. Conceptual metaphors and political frames. |

---

### `psychology` — cognitive and social effects

**Capabilities:** `cognitive_effect_analysis`, `social_effect_analysis`

> **Important:** All findings from this pack must be stated at the H1 (hypothesis)
> or C1/S1 (possible effect) level. This pack identifies patterns associated with
> cognitive or social outcomes in the research literature — it does not establish
> causal claims.

| Framework | Maturity | Description |
|---|---|---|
| `psychology-kahneman-tversky` | planned | Dual-process theory and cognitive biases. Anchoring, availability, framing effects. |
| `psychology-haidt` | planned | Moral Foundations Theory. Which moral foundations political rhetoric appeals to. Note: contested within moral psychology. |

---

### `propaganda` — propaganda technique analysis

**Capabilities:** `propaganda_analysis`, `social_effect_analysis`

> **Important:** Identifying propaganda techniques in a text is itself an interpretive
> act (D1/F1 level). This pack provides tools for recognising patterns documented in
> the literature; it does not automatically establish that a text constitutes propaganda.

| Framework | Maturity | Description |
|---|---|---|
| `propaganda-ipa` | planned | Institute for Propaganda Analysis (1937). Seven classical propaganda devices. |
| `propaganda-jowett-odonnell` | planned | Jowett and O'Donnell's definition and ten-step analysis method. |

---

## How packs relate to the reasoning engine

When `ReasoningEngine.analyze(input)` runs:

1. Intent detection identifies which capabilities are relevant
2. The resolver selects frameworks whose `intents` and `triggers` match
3. The analysis plan includes the activated frameworks

In a future version, the reasoning engine will use pack metadata to:
- Surface which additional planned frameworks would improve coverage
- Warn when only planned (unimplemented) frameworks cover a detected capability

---

## Adding a new pack

1. Create `packs/<id>.yaml` following the schema in `src/schema.ts` (`PackSchema`)
2. Define `id`, `capabilities`, `description`, and `frameworks`
3. Set each framework's `maturity` honestly — do not claim `draft` for frameworks without YAML files
4. Run `npx tsx src/cli.ts validate` (validates framework YAML files; pack validation is separate)
5. Document the pack here

To add a new capability, add it to the `capabilities` vocabulary in this document and in
`docs/frameworks/MATURITY_LEVELS.md`.
