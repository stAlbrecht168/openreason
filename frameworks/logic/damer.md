# T. Edward Damer — Attacking Faulty Reasoning

**ID:** `logic-damer`  
**Domain:** informal_logic  
**Version:** 0.1.0  
**Verification status:** draft  
**Pack:** `logic`  
**Last updated:** 2026-06-29

---

## Purpose

This framework provides two complementary tools for argument evaluation. The first is a four-criteria checklist for good arguments: premises must be acceptable, relevant, sufficient, and the argument must address the strongest counterargument. The second is a taxonomy of informal fallacies. Together they allow a systematic assessment of argument quality and a named identification of failure modes.

## Scope

**Appropriate for:**
- Systematic fallacy identification across an argument or series of arguments
- Evaluation of whether an argument meets basic quality standards
- Contexts where naming a specific fallacy type is analytically useful (e.g., "this is an ad hominem, not a response to the argument")

**Not appropriate for:**
- Argument structure reconstruction in depth (use `logic-walton` or `logic-toulmin`)
- Discourse or framing analysis
- Purely emotional or rhetorical analysis

## Capabilities provided

- `fallacy_detection` — systematic identification of informal fallacies
- `argument_analysis` — four-criteria quality assessment

## Workflow summary

Damer's framework proceeds in two phases.

**Phase 1: the four criteria.** A good argument has premises that are (1) *acceptable* — a reasonable person would grant them without further argument; (2) *relevant* — they bear on the conclusion; (3) *sufficient* — they provide enough support, taken together; and (4) it addresses the *strongest counterargument* — it doesn't ignore the best objection to its own conclusion. An argument can fail any or all four criteria without being formally invalid.

**Phase 2: fallacy taxonomy.** If any of the four criteria are violated, the analyst checks whether the violation matches a named fallacy type. Damer's taxonomy is organised by criterion: fallacies of relevance (e.g., ad hominem, appeal to authority), fallacies of insufficiency (e.g., hasty generalisation), fallacies of acceptability (e.g., begging the question), and fallacies of counterargument handling (e.g., straw man).

Not every argument failure fits a named fallacy. Phase 1 findings (which criterion is violated) are sufficient even when Phase 2 yields no named type.

## Evidence mapping

| Status | When used |
|---|---|
| O1 | Verbatim quotes — the actual argument as stated |
| O2 | The explicit conclusion and premises |
| L1 | Criteria assessments; fallacy identifications |
| H1 | Any hypothesis about speaker awareness or intent in using a fallacious form |

## Decision rule rationale

- **Ad hominem [L1]** — An attack on the person making an argument rather than on the argument itself. This is a relevance fallacy: facts about the person are generally irrelevant to the truth of their conclusion. (Damer's relevance category.)
- **Straw man [L1]** — Misrepresenting the opposing position to make it easier to attack. The argument defeats a position the opponent does not hold. This violates the counterargument criterion: the real objection has not been addressed.
- **False dichotomy [L1]** — Presenting only two options when more exist. This is a sufficiency fallacy: the premises do not sufficiently support the conclusion that one of only two choices must be made.
- **Begging the question [L1]** — Assuming the conclusion in the premises. The argument is circular: it cannot establish what it needs to establish because it already assumes it. (Damer's acceptability category.)
- **Non sequitur [L1]** — A conclusion that does not follow from the premises even if they are true. The inference is invalid; the premises are insufficient.
- **Acceptability problem [L1]** — A premise that would require its own argument to be accepted. Flagging acceptability problems is important before spending time evaluating relevance and sufficiency: if the premises are not acceptable, the rest of the analysis may be wasted.
- **Missing counterargument [L1]** — The fourth criterion: the strongest objection should be acknowledged and addressed. When it is not, the argument is incomplete regardless of how well the other criteria are met.

## Worked example

*Note: This example has not been verified against source texts. It illustrates the framework's application.*

**Input:** "You can't trust what she says about climate change — she works for an oil company. Besides, either we stop all fossil fuels immediately or the planet is doomed."

**Application:**
- [O2] First argument: the speaker's conclusions about climate change should not be trusted because of her employer.
- [O2] Second argument: the only options are immediate cessation of fossil fuels or planetary doom.
- [L1] **Ad hominem (relevance fallacy):** The first argument attacks the credibility of the source rather than the content of the claims. Even if the speaker has a conflict of interest, this does not establish that her claims are false. (Damer: relevance criterion violated.)
- [L1] **False dichotomy (sufficiency fallacy):** The second argument presents only two options when a spectrum of policies and timelines exists. The dichotomy is false; the premises do not sufficiently support the forced choice. (Damer: sufficiency criterion violated.)
- [L1] Neither argument addresses the strongest counterargument (what specific claims about climate change are being contested, and on what evidential basis?).
- [H1] Whether the speaker is aware of these fallacy patterns or is deploying them strategically cannot be determined from the text.

## Limitations

**Taxonomy is not exhaustive.** An argument can fail badly without fitting a named fallacy. The four criteria (acceptability, relevance, sufficiency, counterargument) are more important than the named types — use them first.

**Acceptability is audience-relative.** What a "reasonable person" would accept without further argument varies by community, context, and existing knowledge. Two analysts may disagree about acceptability assessments.

**Naming fallacies is not a substitute for analysis.** Labelling something as "ad hominem" or "straw man" is an L1 finding that requires explanation. The label alone is not an argument.

**Academic standing.** *Attacking Faulty Reasoning* is a college-level textbook. It is reliable for practical fallacy identification but is not a primary research contribution. Citations in academic contexts should acknowledge its pedagogical rather than theoretical status.

**Does not reconstruct structure.** This framework assesses argument quality but does not reconstruct the full argument structure with implicit premises. For that, use `logic-walton` or `logic-toulmin`.

## Known gaps

- The `decision_rules` cover only the most common fallacy types. Damer's full taxonomy includes many more; a complete implementation would enumerate them systematically.
- The framework does not yet include Damer's guidance on how to respond to fallacious arguments — only on how to identify them.
- The relationship between Damer's four criteria and Walton's critical questions is not yet mapped; there is significant conceptual overlap.

## References

- Damer, T. Edward. *Attacking Faulty Reasoning: A Practical Guide to Fallacy-Free Arguments*. Wadsworth, 1980. Seventh edition: Cengage, 2012. ISBN: 978-1133049982 (7th ed.).

*Attacking Faulty Reasoning is a widely used undergraduate logic textbook. Publication details are from publicly available records; ISBN and publisher should be verified before formal academic citation. The seventh edition (2012) is the most current.*

## Verification record

**Date:** Not yet verified  
**Verified by:** Not yet verified  
**Sources consulted:** None  

| Concept | Status |
|---|---|
| acceptability | — not yet checked against Damer (2012) |
| relevance | — not yet checked |
| sufficiency | — not yet checked |
| counterargument condition | — not yet checked |
| informal fallacies | — not yet checked; taxonomy coverage is partial |

*Verification requires reading Damer (2012) chapters 2–4 and confirming the four criteria and the fallacy types included in the decision_rules match the source. Priority: the four-criteria model first, then the most common fallacy types.*

## Changelog

### 0.1.0 — 2026-06-29
- Initial implementation
- All fields populated per FRAMEWORK_SPECIFICATION.md v1.0
- Companion `.md` file created with full sections
- Two-phase workflow (criteria then fallacy taxonomy) documented
