# Daniel Kahneman and Amos Tversky — Dual-Process Theory and Cognitive Biases

**ID:** `psychology-kahneman-tversky`  
**Domain:** cognitive_bias  
**Version:** 0.1.0  
**Verification status:** draft  
**Pack:** `psychology`  
**Last updated:** 2026-06-29

---

## Purpose

This framework identifies patterns in communication that research associates with cognitive shortcuts — fast, automatic, associative processing (System 1) rather than slow, deliberate evaluation (System 2). It draws on Kahneman and Tversky's research programme on heuristics and biases to identify features like numerical anchors, availability-activating examples, and loss-framed alternatives that experimental research associates with reduced deliberate evaluation.

The framework does not produce findings about what any specific audience thinks or does. It identifies structural features of a text that *may* engage cognitive shortcuts. All findings are possible effects (`C1`) or hypotheses (`H1`).

## Scope

**Appropriate for:**
- Communication designed to produce an immediate response before evaluation
- Texts using numerical anchors, vivid anecdotal examples, or loss-framed alternatives
- Supplementary analysis alongside framing or rhetoric frameworks when the cognitive dimension matters

**Not appropriate for:**
- Establishing that a specific audience was psychologically affected — this framework cannot do that
- Replacing argument analysis (use `logic-walton` for logical structure)
- Texts where cognitive shortcuts are not analytically relevant
- Any analysis that claims psychological effects as established facts

**Critical discipline:** This is the most epistemically cautious framework in the pack. Every finding is at most `C1` (possible cognitive effect). The word "may" is not optional hedging — it is the accurate statement of what this analysis can support.

## Capabilities provided

- `cognitive_effect_analysis` — identifying structural patterns associated with cognitive shortcuts

## Workflow summary

**Dual-process context.** Kahneman's central distinction is between System 1 (fast, automatic, associative, emotional) and System 2 (slow, deliberate, analytical). Most everyday cognition runs on System 1; System 2 is effortful and is engaged selectively. Communication that activates System 1 before engaging System 2 may produce acceptance based on emotional resonance rather than deliberate evaluation.

**Anchoring.** When a number is presented early and prominently, it tends to influence subsequent numerical estimates, even when the initial number is arbitrary. The analytical move is to identify whether a text presents an anchor (a price, a statistic, a threshold) and whether subsequent claims are calibrated relative to it.

**Availability heuristic.** Vivid, emotionally engaging, or easily recalled examples feel more representative than they statistically are. When a single dramatic case is used to stand for a pattern, or when memorable imagery substitutes for base-rate information, availability-based reasoning may be engaged.

**Loss aversion.** Losses feel more significant than equivalent gains. A text that frames outcomes as potential losses ("we will lose X" vs. "we will fail to gain X") engages the asymmetry between how losses and gains are weighted. This is one of the most robustly documented cognitive tendencies.

**System 1 activation.** Some texts are structured to produce an emotional response before presenting the argument — this is an attempt to route evaluation through System 1. Identifying this structure is a C1 observation about design, not a claim about audience response.

## Evidence mapping

| Status | When used |
|---|---|
| O1 | Verbatim quotes — the specific numbers, examples, or framings as stated |
| O2 | Explicit claims the text makes |
| C1 | Possible cognitive effects: patterns the experimental literature associates with specific cognitive shortcuts |
| H1 | Hypotheses about communicative intent or the strategic use of cognitive shortcuts |

**Mandatory discipline:** `C1` findings must use weak language: "may engage," "research associates with," "tends to." Never: "activates," "exploits," "causes." The `H1` level is required for any claim about intent.

## Decision rule rationale

- **Anchoring [C1]** — Kahneman & Tversky's anchoring research (collected in Kahneman, Slovic & Tversky 1982) demonstrates that initial numerical information influences subsequent estimates even when subjects are told the anchor is arbitrary. Identifying a prominent early number as a possible anchor is a C1 pattern observation.
- **Availability bias [C1]** — The availability heuristic (Tversky & Kahneman 1973) describes the tendency to assess frequency and probability based on how easily examples come to mind. Vivid, emotionally salient examples inflate perceived frequency. The finding is C1: the example *may* feel more representative than base rates warrant.
- **Loss aversion [C1]** — Prospect theory (Kahneman & Tversky 1979) demonstrates that losses are weighted more heavily than equivalent gains. Loss-framed descriptions of the same outcome produce more negative evaluations. The C1 finding is that loss framing *may* increase the perceived severity of the outcome.
- **System 1 activation [C1]** — When a text is structured to produce emotional response before argument (vivid imagery, emotionally loaded vocabulary, personal narrative preceding statistical claim), this is a design pattern associated with System 1 processing. The finding is C1: this structure *may* reduce the likelihood of deliberate evaluation.

## Worked example

*Note: This example has not been verified against source texts. It illustrates the framework's application.*

**Input:** "Every week, 500 families lose their homes. Last month, Maria, a retired nurse, was evicted after 40 years in her house. We cannot afford to lose 30% more families to homelessness."

**Application:**
- [O1] "500 families," "30%," "40 years" — three numerical elements.
- [O2] The text presents a pattern claim (families losing homes) and a normative claim (we cannot afford this).
- [C1] **Anchoring:** "500 families" is presented first and prominently; the "30% more" figure may be evaluated relative to this anchor rather than independently. Research on anchoring suggests this ordering may influence how the 30% figure is perceived.
- [C1] **Availability:** Maria's story is a single vivid case. Research on availability suggests that after reading a concrete personal story, the frequency of the problem may feel higher than the statistical claim alone would produce.
- [C1] **Loss framing:** "Lose their homes" and "lose 30% more families" frame the issue in terms of loss rather than housing provision. Research on loss aversion suggests this framing may increase the perceived urgency of the problem compared to equivalent gain-framed alternatives.
- [H1] Whether these structural choices are deliberate or reflect conventional journalistic style cannot be determined from the text alone.

## Limitations

**All findings are possible patterns, not established outcomes.** The most important limitation. This framework identifies structural features; it does not observe cognitive processes. A vivid example may trigger availability effects, or it may not. The finding is `C1` — it belongs in the cautious category.

**Individual susceptibility varies substantially.** Cognitive biases are population-level tendencies with significant individual variation. What engages System 1 in one reader may not in another.

**WEIRD population caveat.** Most of the experimental literature on cognitive biases was conducted with Western, educated, industrialised, rich, democratic (WEIRD) populations. Cross-cultural replication of specific biases is uneven. Applying these findings to non-WEIRD audiences requires caution.

**Dual-process theory is itself contested.** System 1/System 2 is an influential simplification, not an established neurological fact. Some cognitive scientists argue the dichotomy is too clean. The framework uses the terminology because it is analytically useful, not because the two-system model is definitively correct.

**Does not prove intent.** Finding a loss-framed statement does not mean the communicator deliberately exploited loss aversion. Loss framing is common in communication for reasons unrelated to cognitive bias exploitation.

## Known gaps

- The framework does not yet include the representativeness heuristic (judging probability by similarity to a prototype), which is as central to Kahneman & Tversky's programme as availability.
- The `decision_rules` do not yet cover affect heuristic (using emotional response as information), which has a substantial literature and is directly relevant to political communication.
- The relationship between this framework's `C1` findings and Lakoff's framing framework's `F1` findings is not yet mapped; they often identify the same features from different angles.

## References

- Kahneman, Daniel. *Thinking, Fast and Slow*. Farrar, Straus and Giroux, 2011. ISBN: 978-0374533557.
- Kahneman, Daniel, Paul Slovic, and Amos Tversky (eds.). *Judgment Under Uncertainty: Heuristics and Biases*. Cambridge University Press, 1982. ISBN: 978-0521284141.

*Publication details from publicly available bibliographic records. The 1982 collection contains the original experimental papers; the 2011 book is the accessible synthesis. Both should be consulted for verification.*

## Verification record

**Date:** Not yet verified  
**Verified by:** Not yet verified  
**Sources consulted:** None  

| Concept | Status |
|---|---|
| dual-process theory | — not yet checked against Kahneman (2011) |
| System 1 processing | — not yet checked |
| System 2 processing | — not yet checked |
| anchoring | — not yet checked against original papers in Kahneman, Slovic & Tversky (1982) |
| availability heuristic | — not yet checked; original paper: Tversky & Kahneman (1973) |
| framing effect | — not yet checked; original paper: Kahneman & Tversky (1981) |
| loss aversion | — not yet checked; original paper: Kahneman & Tversky (1979) |

*Priority: loss aversion and availability heuristic — these are the most operationally useful for communication analysis. For verification, prefer the 1982 collection over the 2011 book, which is a secondary synthesis.*

## Changelog

### 0.1.0 — 2026-06-29
- Initial implementation
- All fields populated per FRAMEWORK_SPECIFICATION.md v1.0
- Evidence discipline note added (C1 mandatory, "may" not optional)
- WEIRD population caveat included in limitations
- Dual-process theory contested status documented
