# Douglas Walton — Informal Logic

**ID:** `logic-walton`  
**Domain:** informal_logic  
**Version:** 0.2.0  
**Verification status:** draft  
**Pack:** `logic`  
**Last updated:** 2026-06-29

---

## Purpose

This framework provides tools for analysing everyday arguments — situations where a speaker advances a conclusion and offers reasons in support. It identifies explicit claims and premises, reconstructs implicit assumptions, evaluates whether conclusions follow from their premises, and detects common informal fallacies. It operationalises Walton's concept of *defeasible reasoning*: most everyday arguments are not deductively valid but are provisionally acceptable unless challenged by a counterargument.

## Scope

**Appropriate for:**
- Texts containing an explicit argument (a conclusion supported by reasons)
- Debates, editorials, position statements, policy arguments
- Any input where the user asks whether a conclusion follows from its premises, or whether a fallacy is present
- Burden-of-proof disputes

**Not appropriate for:**
- Purely descriptive texts with no argumentative structure
- Emotional appeals without reasoning content (use `rhetoric-aristotle`)
- Factual lookups or empirical claims without an argument structure
- Group representation or discourse analysis (use `discourse-van-dijk`)

## Capabilities provided

- `argument_analysis` — identifying and evaluating argument structure
- `fallacy_detection` — identifying informal fallacies

## Workflow summary

An analyst applying this framework begins by identifying the conclusion — what the speaker is trying to establish. They then work backward to the stated premises, then ask what unstated assumptions are required for the premises to support the conclusion. This is the heart of Walton's approach: making the implicit explicit.

Once the argument is reconstructed, the analyst applies *critical questions* — the questions specific to the argument scheme being used. For an argument from analogy, the critical question is whether the cases compared are sufficiently similar. For an argument from authority, the critical question is whether the authority is genuinely expert in the relevant domain. Failing to answer critical questions leaves the argument defeasible.

Burden of proof is assessed last: has the speaker provided sufficient grounds for the conclusion they are claiming? If not, flag it — but do not assume the claim is false.

## Evidence mapping

| Status | When used |
|---|---|
| O1 | Verbatim quotes from the text being analysed |
| O2 | Explicit claims and conclusions the speaker states |
| L1 | Logical inferences: whether the conclusion follows from the premises, presence of fallacies, identification of implicit premises |
| H1 | Any hypothesis about speaker intent, purpose, or motive |

**Important:** L1 is used for logical analysis of argument structure, not for claims about what the speaker intended. A non-sequitur is an L1 finding. "The speaker is deliberately misleading" would require H1.

## Decision rule rationale

- **IF conclusion does not follow from premises THEN non sequitur [L1]** — Walton's core concept: an argument is valid only if the conclusion is entailed by the premises. When it is not, the inference fails regardless of the truth of the premises.
- **IF analogy is used THEN compare similarities and differences [L1]** — Argument from analogy has a specific critical question: are the compared cases relevantly similar? (Walton & Macagno, 2008, Chapter 9)
- **IF broad group claim from limited examples THEN check hasty generalisation [L1]** — Inductive generalisation requires sufficient, representative examples. Hasty generalisation is one of the most common informal fallacies.
- **IF demand for acceptance without evidence THEN burden of proof [L1]** — Walton's burden-of-proof concept: the party making a claim bears the obligation to provide supporting evidence.
- **IF premise is implicit THEN reconstruct and state it explicitly [L1]** — Implicit premises must be surfaced before the argument can be evaluated.

## Worked example

*Note: This example has not been verified against source texts. It illustrates the framework's application.*

**Input:** "Technology will solve climate change. We do not need more regulation."

**Application:**
- [O2] Speaker asserts: technology will solve climate change.
- [O2] Speaker asserts: no additional regulation is needed.
- [L1] The second claim is presented as following from the first, but the inference requires an unstated premise: that technology and regulation are alternatives. This premise is not argued.
- [L1] The first claim is a prediction offered without a timeframe, mechanism, or evidential basis. As stated, the burden of proof is unmet.
- [H1] A possible but unproven hypothesis: the speaker may consider the unstated premise obvious. Whether this is the case cannot be determined from the text alone.

## Limitations

**Does not verify empirical truth.** The framework evaluates argument structure, not the factual content of claims. A logically valid argument may rest on false premises; a logically flawed argument may have a true conclusion. Walton explicitly distinguishes logical validity from empirical accuracy.

**Does not prove intent.** Finding a non-sequitur or an unmet burden of proof does not establish that the speaker is being deceptive. The flaw may be the result of compression, oral context, or unstated shared assumptions. Motive claims require H1.

**Limited on vague language.** The framework requires specific claims or quotes to work well. When a text is deliberately vague, the logical structure is harder to reconstruct and findings are weaker.

**Defeasibility is normal, not a flaw.** Walton's approach treats most arguments as defeasible — provisionally acceptable but revisable when challenged. An argument being defeasible does not mean it is worthless; it means conclusions should be held proportionally to the evidence.

## Known gaps

- The `analysis_steps` in the YAML do not yet reflect Walton's full taxonomy of argument schemes (there are over 60 in Walton, Reed & Macagno 2008). The current steps cover the most common cases only.
- The `decision_rules` cover only four of the most common fallacy types. A more complete ruleset would require systematic review of the *Argumentation Schemes* taxonomy.
- Critical question sets for specific argument schemes (authority, analogy, sign, cause-to-effect) are not yet included as individual decision rules.

## References

- Walton, Douglas. *Informal Logic: A Pragmatic Approach*. Cambridge University Press, 1989. (Second edition 2008.) ISBN: 978-0521713801.
- Walton, Douglas, Chris Reed, and Fabrizio Macagno. *Argumentation Schemes*. Cambridge University Press, 2008. ISBN: 978-0521723749.

*Publication details are based on publicly available bibliographic records. Publisher and ISBN should be verified before citing in formal academic work.*

## Verification record

**Date:** Not yet verified  
**Verified by:** Not yet verified  
**Sources consulted:** None  

| Concept | Status |
|---|---|
| argument schemes | — not yet checked against Walton (1989) |
| critical questions | — not yet checked against Walton (1989) |
| defeasible reasoning | — not yet checked against Walton (1989) |
| burden of proof | — not yet checked against Walton (1989) |
| relevance | — not yet checked |

*Verification requires reading Walton (1989) chapters 1–3 and Walton, Reed & Macagno (2008) chapters 1–2 and confirming each concept name and description matches the source.*

## Changelog

### 0.2.0 — 2026-06-29
- Added `scope` field clarifying what the framework is NOT for
- Added `capabilities` field linking to pack registry
- Added `O1` to `evidence_statuses` (was previously missing)
- Added `year` to references
- Expanded `analysis_steps` to include burden-of-proof step explicitly
- Added `burden_of_proof_assessment` to `output_fields`
- Created this companion `.md` file

### 0.1.0 — initial
- Initial YAML implementation
