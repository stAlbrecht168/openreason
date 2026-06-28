# Framework Maturity Levels

Every framework referenced in a pack has a maturity level.
Every framework YAML file carries a `verification_status` field.

These are related but distinct concepts. This document explains both.

---

## Maturity levels (in packs)

A maturity level describes the **implementation state** of a framework —
whether it exists as a usable YAML file and whether that file has been
validated against its source tradition.

| Level | Meaning | Framework YAML exists? | Verified against sources? |
|---|---|---|---|
| `implemented` | YAML file exists, schema validates, referenced by tests | Yes | Not required |
| `draft` | YAML file exists; concepts not yet checked against cited sources | Yes | No |
| `planned` | Documented as a future framework; no YAML file yet | No | No |
| `reference` | Foundational tradition used conceptually; not yet formalised as a framework | No | — |

**Current state of all four frameworks:** `draft`.
All four YAML files exist and validate, but none have been verified against their original sources.

---

## Verification status (in framework YAML files)

The `verification_status` field in each framework YAML file tracks how carefully
the framework's content has been checked against the sources it cites.

| Status | Meaning |
|---|---|
| `draft` | Initially written; concepts not checked against the cited source |
| `reviewed` | Concepts checked against a secondary summary or expert commentary |
| `verified` | Concepts checked against the cited original source by a knowledgeable contributor |
| `contested` | Known disagreement between the YAML content and the source tradition |

This field defaults to `draft` if not explicitly set.

---

## The difference between the two

**Maturity** (pack level) answers: *does this framework exist as a usable file?*

**Verification status** (framework YAML level) answers: *how carefully has this framework's
content been checked?*

A framework can be `implemented` (YAML file exists) but `draft` (not yet verified).
That is the current state of all four frameworks.

A framework cannot be `verified` or `reviewed` until someone has actually read the
cited sources and confirmed the framework's content.

---

## Why this matters

If a framework's concepts are wrong — for example, if a decision rule is attributed
to van Dijk but does not reflect what van Dijk actually argues — then any analysis
produced using that framework will carry a systematic error.

OpenReason's goal is transparent reasoning. Transparent reasoning requires knowing
how much to trust each analytical step. Maturity levels and verification statuses
make that trust level explicit.

---

## How to move a framework from `draft` to `reviewed`

1. Read the framework's `references` section. Identify the cited sources.
2. Read a credible secondary source (a textbook chapter, a peer-reviewed summary)
   that describes the framework.
3. For each `core_concept`, `analysis_step`, and `decision_rule` in the YAML file:
   - Is this concept present in the secondary source?
   - Is it described in the same way?
4. If the YAML content is consistent with the secondary source, change `verification_status`
   to `reviewed` and add a note in the references section explaining what was checked.
5. If there are discrepancies, either correct the YAML or mark it `contested` with an explanation.

## How to move from `reviewed` to `verified`

Repeat the process above, but using the primary source (the original book or article)
rather than a secondary summary.

---

## Current verification status by framework

| Framework | Maturity | Verification status | Notes |
|---|---|---|---|
| `logic-walton` | draft | draft | Not yet checked against Walton (1989) or Walton, Reed, Macagno (2008) |
| `discourse-van-dijk` | draft | draft | Not yet checked against van Dijk (2008) or related primary sources |
| `framing-entman` | draft | draft | Not yet checked against Entman (1993) |
| `rhetoric-aristotle` | draft | draft | Not yet checked against Aristotle's Rhetoric |

---

## Planned frameworks

The following frameworks are planned but do not yet have YAML files.
They must not be described as implemented or verified.
They should not be applied in analyses.

**Logic:**
- `logic-toulmin` — Stephen Toulmin, *The Uses of Argument* (1958)
- `logic-weston` — Anthony Weston, *A Rulebook for Arguments* (1987)
- `logic-damer` — T. Edward Damer, *Attacking Faulty Reasoning* (1980)

**Discourse:**
- `discourse-fairclough` — Norman Fairclough, *Discourse and Social Change* (1992)
- `discourse-wodak` — Ruth Wodak, Discourse-Historical Approach (various)

**Framing and rhetoric:**
- `rhetoric-perelman` — Chaïm Perelman and Lucie Olbrechts-Tyteca, *The New Rhetoric* (1969)
- `framing-lakoff` — George Lakoff, *Don't Think of an Elephant!* (2004) and related work

**Psychology (all contested or in-progress in the literature — must be handled with extra caution):**
- `psychology-kahneman-tversky` — Kahneman, *Thinking, Fast and Slow* (2011)
- `psychology-haidt` — Jonathan Haidt, Moral Foundations Theory (2004–present)

**Propaganda:**
- `propaganda-ipa` — Institute for Propaganda Analysis, *The Fine Art of Propaganda* (1939)
- `propaganda-jowett-odonnell` — Jowett and O'Donnell, *Propaganda and Persuasion* (various editions)
