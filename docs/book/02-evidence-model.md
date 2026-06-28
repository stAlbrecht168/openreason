# Chapter 2: The Evidence Model

## Why labelling claims matters

Suppose someone says:

> "Technology will solve climate change. We do not need more regulation."

Now suppose an analyst says: *"The speaker wants to protect corporate interests."*

These two things are not the same kind of claim. The first is what was said. The second is an interpretation of motive. If you treat them the same way — as equally solid pieces of evidence — you will produce analysis that is harder to check, easier to misuse, and more likely to mislead.

The evidence model is OpenReason's solution to this problem. It gives every analytical claim a label that shows what kind of claim it is and how much epistemic weight it carries.

This chapter explains each label, shows how they relate to each other, and teaches the discipline of using them correctly.

---

## The ten labels

| Label | Name | Meaning |
|---|---|---|
| O1 | Direct observation | A verbatim quote, a visible fact, something stated in the text |
| O2 | Explicit claim | A position or assertion the speaker explicitly makes |
| L1 | Logical inference | Follows from the logical structure of the argument |
| D1 | Discourse interpretation | How groups, relationships, or power are constructed in language |
| R1 | Rhetorical interpretation | How persuasion operates through the text |
| F1 | Framing interpretation | What is defined as the problem, cause, or solution |
| C1 | Possible cognitive effect | How the text may affect how a reader thinks — stated with caution |
| S1 | Possible social effect | How the text may affect groups or social dynamics — stated with caution |
| H1 | Hypothesis | A plausible explanation, not proven by the text alone |
| X1 | Speculation | Weakly supported; used only when explicitly requested |

The labels are arranged roughly in order of epistemic strength — from the most grounded (O1, O2) to the most speculative (H1, X1). This ordering is not rigid, but it signals how carefully each level must be handled.

---

## The ladder of inference

Think of the labels as rungs on a ladder. You climb from the bottom — what is actually in the text — upward through increasingly interpretive levels. The key discipline is: **you must show each rung you climb.**

```
X1  Speculation
H1  Hypothesis
──────────────────────────────── effects and motives
S1  Possible social effect
C1  Possible cognitive effect
──────────────────────────────── interpretations
F1  Framing interpretation
R1  Rhetorical interpretation
D1  Discourse interpretation
──────────────────────────────── inferences
L1  Logical inference
──────────────────────────────── observations
O2  Explicit claim
O1  Direct observation
```

A responsible analysis builds upward from observations. Each step is grounded in the step below it. You do not jump from an observation (O2) directly to a hypothesis (H1) without showing the chain of reasoning — the inferences and interpretations that connect them.

An analysis that jumps rungs is not wrong in the sense of being dishonest, but it is wrong in the sense of being unverifiable. The reader cannot see what connects the observation to the conclusion.

---

## Each label explained

### O1 — Direct observation

O1 is the most reliable level. It records what is directly present in the text — a verbatim quote, a stated fact, something that any reader can verify by looking at the source.

> [O1] The statement consists of two sentences.
> [O1] The first sentence reads: *"Technology will solve climate change."*

O1 findings do not require interpretation. They are anchored in the text itself. If you disagree with an O1 claim, you do so by pointing to the text, not by offering a competing theory.

---

### O2 — Explicit claim

O2 records positions and assertions the speaker explicitly makes. It differs from O1 in that it captures the *meaning* of what is said, not just the words.

> [O2] The speaker asserts that technology will solve climate change.
> [O2] The speaker asserts that more regulation is not needed.

O2 is still close to the text — it does not add analytical inference or interpretation. But it moves from the words to the claim they make. This distinction matters when a speaker uses indirect language: what they *say* (O1) and what they *assert* (O2) can sometimes differ.

---

### L1 — Logical inference

L1 records what follows from the logical structure of the argument. This requires applying a framework for argument analysis — checking whether a conclusion follows from its premises, whether assumptions are stated or hidden, whether the burden of proof is met.

> [L1] The second claim is presented as following from the first. The inferential link requires an unstated premise: that technology and regulation are alternatives rather than complements.

An L1 claim is more interpretive than O2 — the analyst is doing logical work, not just recording what is said. But it is grounded work: a good L1 finding shows the logical structure it is analysing and explains why the inference does or does not hold.

**The discipline of L1:** do not present a logical analysis as if it were an observation. If you write *"the speaker's argument is fallacious"* without showing the logical structure, you are making an L1-level claim without the evidence to support it.

---

### D1 — Discourse interpretation

D1 records how the text constructs social reality through language — how groups are positioned, how relationships of power or normality are implied, how collective identities are built or eroded.

> [D1] The word "we" constructs a collective subject whose membership is unspecified. This invites the audience to identify with the speaker's position as though it were a natural consensus.

D1 requires a specific analytical framework — in OpenReason's current implementation, Teun van Dijk's critical discourse analysis. Without a framework, a D1 claim is just the analyst's opinion about what the language "really means."

**The discipline of D1:** name the framework you are using. Be precise about which aspect of the text is being analysed. Do not overstate: if the text only mildly constructs a discourse pattern, say so.

---

### R1 — Rhetorical interpretation

R1 records how the text operates as persuasion — what emotional registers it activates, how credibility is constructed, what reasoning structure is offered and what it requires from the audience.

> [R1] The argument relies on an enthymeme: an unstated premise the audience must supply for the conclusion to follow. The audience must believe that technology and regulation are in competition for the argument to work as presented.

R1 requires a framework for rhetorical analysis — in OpenReason's implementation, Aristotle's Rhetoric. An R1 claim describes the *structure* of persuasion, not its effectiveness or its honesty.

**The discipline of R1:** R1 describes how a text is structured to persuade. It does not say the text is manipulative, deceptive, or effective. Those are different claims and require different evidence.

---

### F1 — Framing interpretation

F1 records how the text defines a problem, assigns cause, makes a moral evaluation, or implies a solution. Framing analysis, in Robert Entman's model, asks not just what is said but what is made salient and what is left out.

> [F1] The problem is framed as technological: climate change is presented as something innovation will resolve. Systemic, governance, and distributional dimensions are not present in the frame.

F1 is particularly important for policy-related communication, where how a problem is named determines what solutions appear natural or appropriate.

**The discipline of F1:** the frame is a property of the text, not of the analyst's preferences. A framing observation must be grounded in what the text emphasises and what it omits — not in what the analyst thinks should have been said.

---

### C1 — Possible cognitive effect

C1 records patterns in the text that the research literature associates with cognitive responses in readers or listeners. It is always stated cautiously — "may," "could," "is associated with" — and never as a proven causal claim.

> [C1] The pattern of asserting a single sufficient solution may be associated with reduced urgency about other interventions. This is based on general persuasion research; it is not a proven effect of this specific statement.

C1 operates at the level of possibility, not certainty. The Psychology Pack frameworks — which will eventually formalise this type of analysis — are planned but not yet implemented. In the current version of OpenReason, C1 observations should be treated as provisional.

**The discipline of C1:** never present a cognitive effect as established. Always include a statement of what is and is not known. Use "may," "could," "the literature associates."

---

### S1 — Possible social effect

S1 records patterns associated with social-level effects — how communication may influence group dynamics, social norms, or collective behaviour. Like C1, it is always stated with caution.

> [S1] Framing regulatory approaches as unnecessary may contribute to reduced public support for regulatory policy, though this depends on audience, context, and prior exposure.

S1 is even more uncertain than C1, because social effects involve many interacting factors that no single statement can determine. It should be used sparingly and carefully.

**The discipline of S1:** social effects are context-dependent. A statement that might shift opinion in one context may have no effect in another. S1 claims are about patterns and possibilities, not predictions.

---

### H1 — Hypothesis

H1 marks a plausible explanation that is not proven by the text. It is the appropriate level for claims about purpose, intent, or function when those cannot be established from the text alone.

> [H1] A possible but unproven hypothesis: the confident framing of technology as sufficient may serve to reduce the perceived urgency of regulatory approaches. Whether this is the intended function of the statement cannot be determined from the text alone.

H1 is one of the most important labels in OpenReason's model. Many AI analyses make H1-level claims without the label — presenting hypotheses about motive, intent, or strategic function as though they were established facts. The label forces the analyst to be explicit about the epistemic step being taken.

**The discipline of H1:** the most important rule. Never present a motive or intent claim without the H1 label. "The speaker wants X" is almost always H1. "The speaker said X" is O2. These are very different things.

---

### X1 — Speculation

X1 marks claims that are weakly supported and speculative — beyond what the evidence can reasonably support. It is used only when explicitly requested, and even then must be labelled clearly.

Most analyses do not need X1. If you find yourself reaching for it, consider whether you have exhausted the evidence more carefully.

---

## The chain in practice

A well-structured evidence chain looks like this:

```
[O2] "Technology will solve climate change. We do not need more regulation."

[L1] The second claim is presented as following from the first.
     This requires the unstated premise: technology and regulation
     are alternatives — if one suffices, the other is unnecessary.

[F1] The problem is framed as technological. Governance,
     transition timing, and distributional questions are absent.

[R1] The argument is an enthymeme: the audience must supply
     the premise "if technology works, regulation is redundant."

[H1] A possible hypothesis: the confident framing may function
     to make regulatory proposals appear unnecessary. This is
     plausible from the structure of the argument, but the
     speaker's intent is not established by the text.
```

Notice what this chain does: it shows each step. A reader who disagrees with the F1 observation can say *"the framing doesn't actually exclude governance"* and point to evidence. A reader who disagrees with the H1 can say *"the hypothesis is implausible because..."* and offer an alternative. The analysis is contestable at every level — which is exactly the point.

---

## The four distinctions to keep clear

The evidence model rests on four distinctions. These are worth memorising because they are the most commonly blurred.

**1. Observation vs. interpretation.** What the text says (O1/O2) is not the same as what it means (D1/R1/F1). You can agree on the former while disagreeing about the latter. Do not present interpretations as observations.

**2. Inference vs. interpretation.** Logical inference (L1) works from the argument's structure — it is relatively independent of the analyst's theoretical commitments. Discourse, rhetorical, and framing interpretation (D1/R1/F1) require specific theoretical frameworks. Both are valid; they are not the same.

**3. Interpretation vs. hypothesis.** An interpretation (D1/R1/F1) is grounded in the text through a framework. A hypothesis (H1) goes beyond what the text can establish — it typically involves intent, motive, or function. Do not present hypotheses as interpretations.

**4. Hypothesis vs. fact.** H1 is explicitly marked as unproven. "A possible hypothesis" is not "it is established that." Treating a plausible hypothesis as a fact is one of the most common analytical errors.

---

## What the model prevents

The evidence model does not make analysis easier. In some ways it makes it harder — because it requires the analyst to be honest about each step, rather than producing a smooth narrative that blends levels together.

What it prevents:

- **The motive jump:** going from *"the speaker said X"* (O2) to *"the speaker intends Y"* (requires H1) without showing the chain
- **The interpretation-as-fact:** presenting a framing or discourse observation (F1/D1) as an established truth rather than an interpretation
- **The unanchored claim:** making an L1/D1/R1 claim without the framework that justifies it
- **The confident speculation:** using declarative language ("this demonstrates," "this proves") for claims that are only H1-level

---

*Previous: [Chapter 1 — Why OpenReason](01-why-openreason.md)*
*Next: [Chapter 3 — Framework Packs](03-framework-packs.md)*
