# Robert Entman — Framing Analysis

**ID:** `framing-entman`  
**Domain:** framing_analysis  
**Version:** 0.2.0  
**Verification status:** draft  
**Pack:** `framing-rhetoric`  
**Last updated:** 2026-06-29

---

## Purpose

This framework analyses how communication frames an issue — how it defines what the problem is, who or what caused it, whether it is morally acceptable, and what should be done about it. The key insight of Entman's (1993) model is that framing works through *salience*: making certain aspects of a perceived reality more noticeable, meaningful, or memorable than others. What a text omits is as analytically important as what it includes.

## Scope

**Appropriate for:**
- News articles, political speeches, op-eds, campaign materials
- Policy documents and public communications about issues or events
- Any text that presents a problem, assigns responsibility, and implies a response
- Media analysis, political communication analysis

**Not appropriate for:**
- Purely descriptive texts with no evaluative dimension
- Abstract logical arguments without a problem/solution structure (use `logic-walton`)
- Texts primarily about group identity dynamics without an issue frame (use `discourse-van-dijk`)

## Capabilities provided

- `framing_analysis` — problem definition, causal attribution, moral evaluation, treatment recommendation
- `social_effect_analysis` — possible effects of how issues are framed on public understanding or policy

## Workflow summary

An analyst applying this framework works through Entman's four framing functions in sequence. Each function is a distinct analytical move:

1. **Problem definition**: What does the text treat as the issue? What is presented as having gone wrong, or as requiring attention? The definition shapes everything that follows.
2. **Causal interpretation**: Who or what is identified as responsible? Causal framing often involves a choice between attributing problems to individuals, groups, structures, or circumstances.
3. **Moral evaluation**: What implicit judgement is rendered? Moral evaluation in framing is often unstated — conveyed through word choice, emphasis, and comparison rather than explicit assertion.
4. **Treatment recommendation**: What solution becomes thinkable within this frame? Entman's insight is that once a problem and cause are defined, the solution space narrows.

After working through the four functions, the analyst identifies what the frame omits — alternative causations, solutions, or perspectives that are absent — and notes what alternative framings of the same issue would emphasise.

## Evidence mapping

| Status | When used |
|---|---|
| O1 | Verbatim quotes that reveal the frame directly |
| O2 | Explicit problem definitions, causal claims, or solution proposals the text states |
| F1 | Framing interpretations: the four framing functions identified through analysis |
| S1 | Possible social effects: how this framing may shape public understanding or policy response |
| H1 | Hypotheses about the communicator's intent or strategic framing choices |

**Important:** F1 claims are interpretations that require the analyst to apply the four-function framework to the text. They are not simple observations. A framing observation must be grounded in textual evidence.

## Decision rule rationale

- **Causal attribution to groups [F1]** — When cause is assigned to the culture, religion, or national origin of a group rather than to systemic, structural, or situational factors, this is a specific causal framing choice. It locates the problem in a group rather than in circumstances. Entman (1993) notes that causal framing is one of the most consequential framing choices.
- **Treatment recommendation framing [F1]** — The implied solution is analytically important even when not stated. If the problem is framed as a group causing harm, restriction of that group becomes the natural treatment. Identifying the treatment recommendation that follows from a problem/cause frame reveals the full scope of the frame.
- **Omissions [F1]** — Entman emphasises that what is left out of a frame is as important as what is included. An omission finding requires the analyst to know what relevant information exists and note its absence.
- **Implicit moral evaluation [F1]** — Moral judgements in political communication are often implicit rather than stated. Word choice ("illegal" vs. "undocumented"), emphasis, and comparison all carry evaluative weight. Making these implicit evaluations explicit is a framing analysis task.

## Worked example

*Note: This example has not been verified against source texts. It illustrates the framework's application.*

**Input:** "Technology will solve climate change. We do not need more regulation."

**Application:**
- [O2] Speaker defines climate change as a problem that technology will resolve.
- [F1] **Problem definition:** Climate change is framed as a technological problem — something that innovation will address. Systemic, governance, and distributional dimensions are absent from the frame.
- [F1] **Causal interpretation:** The causal frame is implicit: the problem exists because of insufficient technology, not because of governance failures or market structure.
- [F1] **Moral evaluation:** Technological optimism is positioned as the realistic, forward-looking stance. The alternative (regulation) is positioned as unnecessary intervention.
- [F1] **Treatment recommendation:** The natural response within this frame is to wait for or invest in technology. Regulatory approaches become unnecessary within the frame, not merely ineffective.
- [F1] **Omissions:** The frame does not address timing (when will technology arrive?), transition risk, governance of technology deployment, or who bears the costs if technology is delayed.
- [H1] Whether this framing is the result of strategic communication choice or genuine belief cannot be determined from the text alone.

## Limitations

**Does not determine factual accuracy.** A framing analysis identifies how an issue is presented, not whether the underlying claims are true. A technologically optimistic frame can coexist with accurate empirical claims. Frame identification ≠ fact-checking.

**Frame effects are context-dependent.** Identifying a frame does not establish that it will have a particular effect on audiences. S1 claims about frame effects depend heavily on audience, context, and prior exposure.

**Does not establish intent.** Finding a consistent frame does not prove the communicator made a strategic choice. Many frames are the result of genre conventions, shared assumptions, or professional norms rather than deliberate framing decisions.

**Omission analysis is limited by analyst knowledge.** Identifying what is absent requires the analyst to know what could have been included. This means omission findings are only as reliable as the analyst's knowledge of the relevant domain.

## Known gaps

- The framework does not yet include Entman's later work on "cascading network activation" (2004), which describes how frames spread through media systems.
- The `decision_rules` do not yet cover framing through visual elements, which Entman addresses in later work.
- The `analysis_questions` do not yet prompt for alternative framings systematically.

## References

- Entman, Robert M. "Framing: Toward Clarification of a Fractured Paradigm." *Journal of Communication*, 43(4), 1993, pp. 51–58.

*This is a journal article, not a book. The 1993 paper is the primary source for the four-function model. Entman has written extensively on framing since; this framework is based only on the 1993 article.*

## Verification record

**Date:** Not yet verified  
**Verified by:** Not yet verified  
**Sources consulted:** None  

| Concept | Status |
|---|---|
| problem definition | — not yet checked against Entman (1993) |
| causal interpretation | — not yet checked against Entman (1993) |
| moral evaluation | — not yet checked against Entman (1993) |
| treatment recommendation | — not yet checked against Entman (1993) |
| salience | — not yet checked |

*Verification requires reading Entman (1993) in full and confirming each of the four framing functions is described as the framework presents them. The article is 7 pages; this is achievable.*

## Changelog

### 0.2.0 — 2026-06-29
- Added `scope` field
- Added `capabilities` field
- Added `O1` to `evidence_statuses`
- Added `alternative_framings` to `output_fields`
- Added `year` to references with journal citation detail
- Expanded `limitations` and `decision_rules`
- Created this companion `.md` file

### 0.1.0 — initial
- Initial YAML implementation
