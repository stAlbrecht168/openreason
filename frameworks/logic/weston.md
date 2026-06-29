# Anthony Weston — A Rulebook for Arguments

**ID:** `logic-weston`  
**Domain:** informal_logic  
**Version:** 0.1.0  
**Verification status:** draft  
**Pack:** `logic`  
**Last updated:** 2026-06-29

---

## Purpose

This framework provides a practical, accessible checklist for evaluating everyday argument quality. It asks whether premises are well-supported, consistent, and relevant; whether the conclusion is clear; and whether the argument form (inductive, analogical, causal, deductive) is being used correctly. Its value is accessibility: it applies Weston's practical criteria without requiring familiarity with argument theory.

## Scope

**Appropriate for:**
- Short, everyday arguments in journalism, public discourse, student writing
- Quick assessment of whether an argument meets basic quality standards
- Introductory argument analysis where theoretical apparatus would obscure more than it reveals

**Not appropriate for:**
- Complex philosophical or legal arguments where the inferential structure needs deep scrutiny (use `logic-walton` or `logic-toulmin`)
- Systematic fallacy identification across a long text (use `logic-damer`)
- Discourse, framing, or rhetoric analysis

**Note:** This framework is intentionally the simplest of the four logic frameworks. Its comparative advantage is accessibility and speed, not depth. When an analysis needs more than a quality checklist, activate `logic-walton` instead.

## Capabilities provided

- `argument_analysis` — basic argument quality assessment
- `fallacy_detection` — identification of the most common surface-level fallacies

## Workflow summary

Weston's approach begins with the conclusion — the point — and works back. Once the conclusion is clear, the analyst lists the reasons (premises) offered. The assessment has three parts: Are the premises well-supported? Are they consistent with each other? Are they relevant to the conclusion?

After assessing premise quality, the analyst identifies the argument form. Weston distinguishes four main forms:
- **Inductive** — generalising from examples to a pattern
- **Analogical** — arguing from similarity between cases
- **Causal** — arguing that one thing causes another
- **Deductive** — concluding necessarily from premises

Each form has characteristic error patterns. An inductive argument fails if the sample is too small or unrepresentative. An analogical argument fails if the compared cases are not relevantly similar. A causal argument fails if correlation is mistaken for causation. A deductive argument fails if the conclusion does not follow necessarily from the premises.

## Evidence mapping

| Status | When used |
|---|---|
| O1 | Verbatim quotes from the argument being assessed |
| O2 | The explicit conclusion and premises as stated |
| L1 | Quality assessments: support, consistency, relevance; argument form identification and evaluation |
| H1 | Any claim about why the argument has the flaws it does |

## Decision rule rationale

- **Unsupported premises [L1]** — Weston's core criterion: a premise that is merely asserted without support is doing argumentative work on borrowed credit. Identifying it is an L1 finding because it requires evaluating what counts as support.
- **Inconsistent premises [L1]** — If two premises contradict each other, the argument cannot hold both simultaneously. This is a basic internal coherence check.
- **Irrelevant premises [L1]** — Relevance is Weston's requirement that reasons actually bear on the conclusion. Irrelevant premises may be true but provide no argumentative force.
- **Analogical similarity [L1]** — Analogical arguments require that the compared cases share the relevant features. Weston's critical question: are the cases similar in the ways that matter?
- **Causal reasoning [L1]** — Weston emphasises the correlation/causation distinction as one of the most common errors in everyday argument. Post hoc ergo propter hoc ("after this, therefore because of this") is the archetypal error.

## Worked example

*Note: This example has not been verified against source texts. It illustrates the framework's application.*

**Input:** "Our crime rate went down after we hired more police officers. More police reduce crime."

**Application:**
- [O2] Premise: crime rate went down after hiring more police.
- [O2] Conclusion: more police reduce crime.
- [L1] This is a causal argument. The premise establishes temporal correlation (after hiring, crime fell), not causation.
- [L1] Weston's decision rule: correlation has been confused with causation. Other factors (economic changes, policing strategies, demographic shifts) may have contributed; they are not examined.
- [L1] The premise is stated as fact but is itself an empirical claim requiring support — crime statistics source and measurement period are not specified. Flag as partially unsupported.
- [H1] Whether the speaker is unaware of the causation-correlation distinction or is deliberately simplifying cannot be determined from the text.

## Limitations

**Intentionally simplified.** This is a practical checklist, not a theoretical framework. For complex arguments, it provides a useful starting point but will not surface the depth of findings that Walton or Toulmin would.

**No systematic fallacy taxonomy.** Weston identifies common error patterns but does not provide the comprehensive fallacy classification that Damer does. For systematic fallacy analysis, activate `logic-damer`.

**Premise support is context-dependent.** What counts as "well-supported" varies by domain, audience, and communicative context. Two analysts may disagree about whether a premise is adequately supported.

**Academic standing.** *A Rulebook for Arguments* is a textbook aimed at students, not a primary research contribution to argument theory. It is reliable for what it is — a practical guide — but should not be cited as a theoretical source.

## Known gaps

- The framework does not yet cover Weston's guidance on argument writing and construction (Part III of the Rulebook), which is less relevant to analysis than to production.
- The `decision_rules` do not yet enumerate Weston's specific categories of irrelevance (personal attack, appeal to emotion, appeal to authority).

## References

- Weston, Anthony. *A Rulebook for Arguments*. Hackett Publishing, 1987. Fifth edition: 2017. ISBN: 978-1624666544 (5th ed.).

*A Rulebook for Arguments is a widely used undergraduate textbook. Publication details are from publicly available records; ISBN should be verified before formal academic citation. The fifth edition (2017) is the most current.*

## Verification record

**Date:** Not yet verified  
**Verified by:** Not yet verified  
**Sources consulted:** None  

| Concept | Status |
|---|---|
| premise support | — not yet checked against Weston (1987/2017) |
| premise consistency | — not yet checked |
| relevance | — not yet checked |
| argument forms | — not yet checked |
| short arguments | — not yet checked |

*Verification requires reading Weston (2017) chapters 1–4 (approximately 40 pages) and confirming the criteria described here match the source.*

## Changelog

### 0.1.0 — 2026-06-29
- Initial implementation
- All fields populated per FRAMEWORK_SPECIFICATION.md v1.0
- Companion `.md` file created with full sections
- Scope note added distinguishing this framework from Walton and Toulmin
