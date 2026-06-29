# George Lakoff — Cognitive Framing

**ID:** `framing-lakoff`  
**Domain:** framing_analysis  
**Version:** 0.1.0  
**Verification status:** draft  
**Pack:** `framing-rhetoric`  
**Last updated:** 2026-06-29

---

## Purpose

This framework analyses how conceptual metaphors and cognitive frames shape political understanding. Where Entman's model describes the *structure* of a frame (what a text identifies as the problem, cause, and solution), Lakoff explains the *cognitive mechanism* by which frames work: language activates mental structures that organise entire domains of understanding, and the vocabulary used to discuss an issue shapes which mental structure gets activated — whether or not the speaker intends this effect.

Lakoff's most practically important contribution is the *reframing problem*: when you argue against a frame using its own vocabulary, you tend to reinforce the frame rather than defeat it. Understanding this mechanism is essential for analysing why certain political communications are persuasive even when their explicit logic is thin.

## Scope

**Appropriate for:**
- Political communication where the cognitive dimension of language matters
- Analysis of why certain framings are persuasive even to audiences aware of their partiality
- Contexts where the analyst wants to identify reframing strategy or its absence
- Texts using systematic metaphorical language about social or political issues

**Not appropriate for:**
- Texts where the structural description of a frame is sufficient (use `framing-entman`)
- Purely logical arguments without metaphorical framing
- Quick structural frame analysis

**Key distinction from Entman:** Entman asks "what four-part frame is present?" Lakoff asks "what cognitive structure does this language activate, and why is that persuasive?" Both can be applied to the same text; they answer different questions.

## Capabilities provided

- `framing_analysis` — conceptual metaphor identification and cognitive frame analysis

## Workflow summary

**Step 1 — Identify conceptual metaphors.** Lakoff and Johnson (1980) demonstrate that most abstract thought is structured by conceptual metaphor: understanding one domain (abstract) in terms of another (concrete and familiar). Common political metaphors: "the war on drugs" (drug policy as warfare), "tax relief" (taxes as a burden, relief as removing it), "the social safety net" (society as a device that catches falling people). Each metaphor activates a different conceptual structure.

**Step 2 — Identify the activated frame.** The metaphor activates a frame: a mental structure that includes roles (who is the hero, the villain, the victim?), typical actions, expected outcomes, and implicit values. "Tax relief" activates a frame in which taxes are an affliction and the politician who reduces them is a rescuer. This frame comes with the concept bundled in; you cannot use "relief" neutrally.

**Step 3 — Identify the moral model (if present).** Lakoff argues that US political discourse (and political discourse more broadly) is often structured by competing moral models. The *strict father* model values discipline, self-reliance, authority, and clear rules. The *nurturant parent* model values empathy, community support, and collaborative problem-solving. Many political frames implicitly invoke one of these models.

**Step 4 — Identify what is foregrounded and hidden.** Every frame highlights some aspects of a situation and conceals others. "Tax relief" foregrounds the burden and conceals the public goods taxes fund. "Illegal alien" foregrounds legal status and conceals personhood and circumstance.

**Step 5 — Identify the reframing risk.** If a counterargument engages on the frame's own terms ("taxes are not a burden because..."), it reinforces the frame by repeating its vocabulary. Effective reframing offers a competing conceptual structure rather than a refutation within the existing one.

## Evidence mapping

| Status | When used |
|---|---|
| O1 | Verbatim quotes — the specific vocabulary, metaphors, and compound terms used |
| O2 | Explicit claims the speaker makes about the issue |
| F1 | Framing interpretations: cognitive frames and conceptual metaphors identified |
| C1 | Possible cognitive effects: how the activated frames may shape audience thinking |
| H1 | Hypotheses about communicative intent or strategic framing use |

**Critical discipline:** C1 claims about cognitive effects are *possible* effects, grounded in general research on language and cognition — not observations of specific audience responses. Every C1 claim must be stated cautiously ("may activate," "tends to foreground") and never as established fact.

## Decision rule rationale

- **Conceptual frame identification [F1]** — Lakoff & Johnson (1980) establish that metaphors are not decorative but constitutive: they determine which conceptual structure gets applied. Identifying the frame is an F1 interpretation grounded in vocabulary analysis.
- **Framing effect identification [F1]** — When a word choice carries an implicit valuation (positive or negative), the choice is doing framing work. "Tax relief" implies relief is needed; "investment" implies a productive return. These are not neutral.
- **Reframing risk [F1]** — Lakoff (2004) argues that the brain reinforces frames when their vocabulary is repeated, even in negation ("don't think of an elephant" makes you think of an elephant). Identifying when counterarguments risk this effect is a core analytical contribution.
- **Moral model identification [F1]** — The strict father and nurturant parent models structure many political communications. When a text systematically appeals to self-reliance, discipline, and authority, or to community, empathy, and shared responsibility, identifying the moral model explains why the communication resonates with certain audiences.
- **Compound term analysis [F1]** — Compound political terms ("welfare dependency," "tax relief," "illegal alien") pack entire frames into single phrases. Decomposing them reveals the framing in the language itself.

## Worked example

*Note: This example has not been verified against source texts. It illustrates the framework's application.*

**Input:** "We need tax relief for hardworking families. Government should stop penalising success."

**Application:**
- [O1] Key vocabulary: "tax relief," "hardworking," "penalising success."
- [F1] **"Tax relief"** activates a frame in which taxes are a burden or affliction, and the politician who reduces them is a rescuer or healer. Once this frame is activated, arguing about tax rates requires engaging with the "relief" frame — which is difficult to do neutrally.
- [F1] **"Hardworking families"** activates the strict father moral model: people who work hard deserve to keep what they earn; those who do not work hard do not. This implicit moral structure is carried in the adjective, not stated.
- [F1] **"Penalising success"** reframes taxation as punishment. The frame implies that success is being discouraged rather than that public revenue is being raised. The concept of public goods funded by taxation is absent from this frame.
- [C1] This combination of frames may make alternative framings of taxation — as investment in shared infrastructure — harder to access for an audience that has already activated the "burden/penalty" frame.
- [H1] Whether the speaker is using these frames strategically or simply drawing on available political vocabulary cannot be determined from the text alone.

## Complementarity with other frameworks

This framework is most analytically powerful when used alongside:

- **Entman** — Entman maps the structural four-part frame; Lakoff explains the cognitive mechanism underneath. Applied together: Entman identifies what the frame says; Lakoff explains why it works cognitively.
- **Aristotle** — Aristotle identifies the pathos appeal (what emotion is activated); Lakoff identifies the cognitive frame that makes the emotional appeal feel natural or inevitable.

## Limitations

**Cognitive effects are possible, not proven.** Lakoff's claims about frame activation draw on cognitive linguistics research on general patterns, not on evidence about specific audiences reading specific texts. All cognitive claims must be C1 (possible effect) and stated with caution.

**Cultural context dependency.** The strict father and nurturant parent models were developed primarily in the context of US political discourse. Their applicability to other political cultures requires assessment; applying them uncritically to non-US contexts may produce misleading findings.

**The reframing problem is a hypothesis.** Lakoff's claim that refutation reinforces frames is a significant theoretical claim. It has empirical support in some contexts but does not apply universally. It should be stated as a possible risk (F1/H1), not as a certain outcome.

**Does not prove intent.** Many frame-activating terms are conventional political vocabulary. A speaker may use "tax relief" because it is the standard phrase, not because they are strategically activating a cognitive frame.

**Academic context.** Lakoff's political work (*Don't Think of an Elephant!*) is explicitly advocacy-oriented and addressed to progressive political communicators. Analysts should be aware of this context when citing it and should also engage with *Metaphors We Live By* for the underlying cognitive theory.

## Known gaps

- The framework does not yet include Lakoff's concept of "issue framing" at the level of entire policy domains (healthcare as health care vs. healthcare as a commodity).
- The `decision_rules` do not yet systematically cover Lakoff's broader taxonomy of moral frames beyond strict father and nurturant parent.
- The relationship between Lakoff's cognitive frames and Entman's structural four-part frame needs explicit mapping — they analyse the same phenomena at different levels.

## References

- Lakoff, George. *Don't Think of an Elephant! Know Your Values and Frame the Debate*. Chelsea Green Publishing, 2004. Revised edition: 2014. ISBN: 978-1603585927 (rev. ed.).
- Lakoff, George, and Mark Johnson. *Metaphors We Live By*. University of Chicago Press, 1980. Updated edition: 2003. ISBN: 978-0226468013.

*Publication details from publicly available bibliographic records. ISBN should be verified before formal academic citation.*

## Verification record

**Date:** Not yet verified  
**Verified by:** Not yet verified  
**Sources consulted:** None  

| Concept | Status |
|---|---|
| conceptual metaphor | — not yet checked against Lakoff & Johnson (1980) |
| frame activation | — not yet checked against Lakoff (2004) |
| the strict father model | — not yet checked; Lakoff's own formulation is in the 2004 book |
| the nurturant parent model | — not yet checked |
| reframing | — not yet checked; the reframing problem is Lakoff's central political claim |
| moral frames | — not yet checked |

*Priority for verification: conceptual metaphor (Lakoff & Johnson 1980, chapters 1–3) and frame activation (Lakoff 2004, Part 1). The strict father/nurturant parent dichotomy is Lakoff's own interpretive framework — check it against the source rather than secondary summaries.*

## Changelog

### 0.1.0 — 2026-06-29
- Initial implementation
- All fields populated per FRAMEWORK_SPECIFICATION.md v1.0
- Complementarity section added explaining relationship with Entman and Aristotle
- C1 evidence status discipline note added
