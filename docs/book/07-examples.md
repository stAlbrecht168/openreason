# Chapter 7: Examples

## How to read this chapter

This chapter walks through a complete OpenReason analysis — showing every concept from the previous chapters in practice.

The statement is: *"Technology will solve climate change. We do not need more regulation."*

This example was chosen because it is short enough to analyse fully, contains several analytically interesting features, and activates multiple framework packs at different intensities. It does not require knowing anything about the speaker, and the analysis does not depend on adjudicating the empirical question of whether the claim is correct.

You can find the full analysis file — formatted as Claude Code would produce it — at [`examples/technology-regulation.analysis.md`](../../examples/technology-regulation.analysis.md). This chapter explains the reasoning behind each section.

---

## Step 1: Start with what is actually said

Before applying any framework, the claim map records what is directly observable in the text.

```
[O1] The statement consists of two sentences.
[O2] The speaker asserts that technology will solve climate change.
[O2] The speaker asserts that more regulation is not needed.
[O1] The second sentence follows the first without a stated logical connective.
```

This is the foundation of the analysis. Everything that follows is built on these observations. If you disagree with anything in the claim map, you have found an error in the analysis at its most basic level.

Notice what is not here: no interpretation, no inference, no hypothesis. Only what is in the text.

---

## Step 2: Select the frameworks

Given this input, which packs are relevant?

The statement contains an argument (two claims in a support relationship), so the **Logic Pack** is relevant. It also frames a problem and implies a solution, so the **Framing/Rhetoric Pack** is relevant. It constructs actor roles through its use of "we" and through its positioning of regulatory approaches, so the **Discourse Pack** has something to say, though with less intensity than for a text that explicitly compares or others groups.

The **Psychology Pack** is noted as relevant but all its frameworks are `planned` — not yet implemented. Observations from that domain are included as provisional C1/H1 items, explicitly marked.

The analysis declares these choices and explains each one. This is not optional — hiding framework selection is one of the things OpenReason is specifically designed to prevent.

---

## Step 3: Build the evidence chain

The evidence chain starts from the claim map and builds upward, rung by rung.

### The logic layer (L1)

```
[L1] The second claim is presented as following from the first.
     The inferential link requires an unstated premise:
     that technology and regulation are alternatives —
     that if one suffices, the other is dispensable.
     This premise is not argued; it is assumed.

[L1] The first claim is a prediction without a timeframe, mechanism,
     or probability. The burden of proof for this prediction
     is not addressed.
```

These are logical inferences produced by the Walton framework. They follow from examining the argument's structure, not from interpreting its meaning or guessing its purpose.

Notice the discipline: L1 says *"this inference requires an unstated premise"* — not *"the speaker is hiding something"* or *"this is deceptive"*. The second conclusion would require H1, not L1. The logical analysis stays within what the argument structure shows.

### The framing and rhetorical layer (F1 and R1)

```
[F1] The problem is framed as technological.
     Governance, transition timing, and distributional questions
     are not present in the frame.

[F1] What is omitted: who governs the development of solutions?
     What happens if technological solutions are delayed?
     Who bears the transition costs?

[R1] The argument uses an enthymeme: the audience must supply
     "if technology is sufficient, regulation is redundant."
     This premise is activated, not examined.

[R1] The declarative certainty of "will solve" and "do not need"
     is a rhetorical choice. It positions the speaker as having
     resolved a question that remains contested.
```

The F1 findings come from Entman's four-part model. Notice that F1 does not say *"the frame is wrong"* or *"the speaker is being misleading."* It says what the frame includes and what it excludes. Whether those omissions are deliberate or reflect a genuine analytical position is a different question — one that belongs at the H1 level.

The R1 findings come from Aristotle. The enthymeme identification is a specific, traceable analytical claim: the argument only works if the audience supplies a particular premise. This is a structural observation about how the argument is built, not a judgment about the speaker's character.

### The discourse layer (D1)

```
[D1] "We" constructs a collective subject whose membership is
     unspecified. This invites the audience to share the speaker's
     position as a natural consensus.

[D1] The statement implicitly positions two actor types:
     those who develop technology (given agency)
     and those who regulate (rendered superfluous within the frame).
     Neither is named or characterised negatively.
```

These D1 findings are modest — and the analysis says so explicitly. Van Dijk's CDA is most powerful when a text involves explicit group othering or ideological polarisation. This statement does not do that strongly. An honest analysis notes the reduced activation level rather than overstating what the discourse framework found.

### The hypothesis layer (H1)

```
[H1] A possible but unproven hypothesis: the framing of
     technology as sufficient may function to make regulatory
     proposals appear unnecessary to an audience that accepts
     the stated premise. Whether this is the intended function
     of the statement cannot be determined from the text alone.
```

The H1 label is doing critical work here. The hypothesis is plausible — it follows from the framing and rhetorical analysis. But plausible is not proven. The text does not establish intent. The H1 marker signals that this step has been taken, and that the reader should hold it accordingly.

---

## Step 4: Apply framework-specific questions

After the evidence graph, the analysis applies each framework's specific questions in full. This is where the analytical depth accumulates.

**For Walton:**
- What is the conclusion? [L1] That regulatory approaches are not required.
- What premises support it? [O2] The stated premise; [L1] the unstated premise.
- Does the conclusion follow? [L1] Only if the unstated premise is accepted.
- Is the burden of proof met? [L1] No.
- Fallacy candidates? Non sequitur (conclusion doesn't follow without the hidden premise); unmet burden of proof.

**For Entman:**
- Problem definition: [F1] technological
- Causal interpretation: [F1] insufficient technology
- Moral evaluation: [F1] implicit — technological optimism positioned as realistic
- Treatment recommendation: [F1] wait for technology; do not add regulation
- Omissions: [F1] timing, governance, distribution

**For Aristotle:**
- Ethos: [R1] authority claimed through declarative certainty
- Pathos: [R1] optimism about human capability — mild appeal
- Logos: [L1] incomplete argument; relies on an unstated premise
- Enthymeme: [R1] "if technology is sufficient, regulation is not needed"

---

## Step 5: The counterinterpretation

Every analysis must include the strongest counterinterpretation. This is not a formality. It is a discipline that prevents the analysis from sliding into advocacy.

For this example:

> The statement could be read as a reasonable expression of technological optimism combined with a policy preference for minimal intervention. Many technological transitions have been driven primarily by innovation rather than regulatory mandates. A speaker who holds this view might consider the unstated premise obvious enough not to state. Under this reading, the logical gap is not a fallacy but a compressed argument.

The counterinterpretation does not eliminate the analytical findings. The logical gap exists whether or not it is intentional. The framing omissions are still there. But the counterinterpretation prevents the analysis from implying that finding these features in the text proves the speaker is acting in bad faith.

---

## What this example shows about the evidence model

### Observation and interpretation are separated

The claim map (O1/O2) is kept strictly separate from the interpretive layers (D1/R1/F1). A reader can agree with the observations while disagreeing with the interpretations — and that disagreement would be a legitimate analytical engagement, not a rejection of the whole analysis.

### The chain is shown

Each step from O2 to L1 to F1/R1 to H1 shows how it follows from the step before. You can challenge any link in the chain and identify exactly where your disagreement lies.

### Framework selection is explained

The analysis does not just apply frameworks; it explains why each one was activated. The Discourse Pack is noted as having lower activation than usual, and that observation is grounded in what the text does and doesn't do.

### Maturity status is declared

Every framework is labelled `[draft]`. The Psychology Pack is labelled as not implemented. These labels are not disclaimers appended at the end — they are part of the analysis from the start.

### Motive is kept at H1

The analysis never says why the speaker made this argument. It describes what the argument does, how it is structured, and what it requires from an audience. Any claim about purpose or intent is explicitly marked as hypothesis.

---

## Using this example as a template

When you run an analysis using OpenReason, the result should look structurally similar to this one:

1. Claim map first — only O1/O2
2. Evidence chain building upward through L1 → D1/R1/F1 → C1/S1 → H1
3. Framework findings with the specific questions answered
4. A counterinterpretation that is genuinely taken seriously
5. Confidence and limitations stated honestly

This structure is consistent regardless of the input. The content changes; the discipline stays the same.

---

## A note on what this analysis did not do

The analysis did not:
- Assess whether climate change is real or serious (out of scope — empirical question)
- Assess whether any specific technology can or will address it (out of scope — empirical question)
- Assess whether any specific regulatory approach is beneficial or harmful (out of scope)
- Determine what the speaker believes or intends (H1 maximum; intent not established)
- Conclude that the statement is misleading or dishonest (this would require H1 at minimum, and a much longer text to support it)

These are not evasions. They are the boundaries of what structured discourse analysis, framing analysis, and rhetorical analysis can establish from a two-sentence statement. Staying within those boundaries is what makes the analysis reliable.

---

## Further exploration

The full analysis is at [`examples/technology-regulation.analysis.md`](../../examples/technology-regulation.analysis.md).

A pedagogical guide that walks through each evidence label and explains "what OpenReason prevents" is at [`docs/examples/technology-regulation.md`](../examples/technology-regulation.md).

To run your own analysis on a different input:

```
Analyze this statement using OpenReason:
[your text here]
```

---

*Previous: [Chapter 6 — Verification](06-verification.md)*
*Back to: [Book Contents](README.md)*
