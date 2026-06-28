# Example Guide: Technology and Regulation

**Input file:** [`examples/technology-regulation.md`](../../examples/technology-regulation.md)
**Analysis file:** [`examples/technology-regulation.analysis.md`](../../examples/technology-regulation.analysis.md)

---

## What this example teaches

This example uses a short, familiar type of argument to show what OpenReason does differently from a standard AI analysis.

The statement — *"Technology will solve climate change. We do not need more regulation."* — is useful as a teaching example because:

- It is short enough to analyse fully
- It contains a genuine argument structure, not just an assertion
- It activates multiple packs at different intensities
- The analytical work is visible without being politically loaded
- It shows what the evidence-status model prevents as well as what it enables

---

## How to read the analysis

Open [`examples/technology-regulation.analysis.md`](../../examples/technology-regulation.analysis.md) alongside this guide.

Each analytical claim in the analysis carries a label in square brackets: `[O2]`, `[L1]`, `[F1]`, and so on. These labels are the evidence-status model in action. They tell you exactly what kind of claim is being made and how much weight to give it.

---

## The evidence-status labels, explained through this example

### O2 — Explicit claim

```
[O2] The speaker asserts that technology will solve climate change.
[O2] The speaker asserts that more regulation is not needed.
```

O2 marks something the speaker explicitly says. It is not an interpretation of what they mean. It is not a judgment about whether they are right. It is a factual record of what they stated.

This is the safest place to start any analysis. Before applying any framework, map what is actually in the text.

### L1 — Logical inference

```
[L1] The inference from the first claim to the second requires an unstated premise.
[L1] The burden of proof on the first claim is not met as stated.
```

L1 marks something that follows from the logical structure of the argument. It is more analytic than O2, but it is still relatively close to the text. Logical analysis does not require the analyst to interpret meaning or guess intent — it requires examining whether the stated conclusion follows from the stated premises.

A good L1 finding shows its work: *because* the argument relies on this unstated premise, *it follows that* the conclusion requires examining that premise.

### F1 — Framing interpretation

```
[F1] The problem is framed as technological.
[F1] What is omitted: timing, governance, distributional questions.
```

F1 is already an interpretation. The analyst is not just reporting what is said; they are applying Entman's framing model to identify what the statement defines as the problem, what it omits, and what solution becomes thinkable within the frame.

F1 findings are supported by the text but go beyond it. Two analysts applying the same framework to the same text might reach somewhat different F1 conclusions. That is why they must be labelled as interpretations, not observations.

### R1 — Rhetorical interpretation

```
[R1] The argument uses an enthymeme — an unstated premise the audience must supply.
[R1] Declarative certainty is a rhetorical choice that positions the speaker as authoritative.
```

R1 marks an interpretation of how persuasion operates. It answers: *how is this structured to persuade?* — not *is this persuasive?* or *is the speaker being manipulative?*

The enthymeme finding is specific: the statement only works as persuasion if the audience already accepts that technology and regulation are alternatives. By not stating that premise, the speaker avoids defending it. That is a structural observation, not a character claim.

### D1 — Discourse interpretation

```
[D1] "We" constructs a collective subject whose membership is unspecified.
[D1] The statement implicitly positions innovators (agents) and regulators (rendered superfluous).
```

D1 marks an interpretation of how language constructs social reality — actor roles, group membership, power relations. D1 findings are more interpretive than L1 or F1, and their strength depends on evidence from the text.

The analysis notes that van Dijk's framework is activated at *reduced intensity* here. That is an important honesty marker: the framework is most powerful on texts with explicit group othering. This statement doesn't do that strongly. Acknowledging where a framework has less to say is part of transparent analysis.

### C1 — Possible cognitive effect

```
[C1] The pattern of asserting a single future solution as sufficient may be associated with
     reduced urgency about other interventions.
```

C1 marks something that *may* happen in an audience's thinking. It is not a claim that this effect occurred or will occur. It is a cautious observation about patterns associated with this type of framing in the research literature.

C1 always uses weak language: *may*, *could*, *might be associated with*. It is never stated as a fact.

In this analysis, the C1 finding is further marked as provisional because the Psychology Pack frameworks are not yet implemented. That is an extra layer of epistemic honesty.

### H1 — Hypothesis

```
[H1] A possible but unproven hypothesis: the confident framing of technology as sufficient
     may make regulatory proposals appear unnecessary to an audience that accepts the premise.
     Whether this is the intended effect cannot be determined from the text alone.
```

H1 is the most cautious level used in this analysis. A hypothesis is plausible and worth noting, but it is not supported by the text in the way that L1 or F1 findings are.

The H1 label is critical whenever the analysis approaches anything resembling intent, motive, or effect. These things may be real — but they cannot be read directly from a text. They require the H1 marker to signal the epistemic step being taken.

---

## What OpenReason prevents

Standard AI analysis of this statement might produce fluent, confident observations that blur several important distinctions. Here is what OpenReason's method prevents, illustrated by this specific example.

### 1. Jumping from a quote to motive

**Without OpenReason:**
> "The speaker opposes climate regulation because they are allied with fossil fuel interests."

**With OpenReason:**
> [O2] The speaker asserts that regulation is not needed.
> [H1] A possible but unproven hypothesis is that this position serves particular interests. The text does not establish this.

The first version treats an inference as a fact. The second shows the inferential step and marks it honestly. Motive is never higher than H1. The text itself gives us what was said, not why it was said.

### 2. Treating an interpretation as a fact

**Without OpenReason:**
> "The statement frames technology and regulation as opposites."

**With OpenReason:**
> [F1] The statement frames climate change as a technological problem and positions regulatory approaches as outside the frame. This is a framing interpretation — supported by the text but not a simple observation of it.

Framing analysis is real and useful. But it is an interpretation, not a direct reading of the text. The F1 label signals this. A reader who disagrees with the framing interpretation can engage with it precisely because it is marked as such.

### 3. Hiding framework choice

**Without OpenReason:**
> "This argument has logical weaknesses."

**With OpenReason:**
> Applying the Logic Pack (Walton, draft): [L1] The second claim relies on an unstated premise. [L1] The burden of proof on the first claim is not met as stated.

The first version does not tell you what standard of logical analysis is being applied, what the analyst was looking for, or what they might have missed. The second version shows the framework, its maturity status, and the specific finding.

### 4. Mixing observation and speculation

**Without OpenReason:**
> "This statement will make people less likely to support climate policy."

**With OpenReason:**
> [C1] The pattern of asserting a single sufficient solution may be associated with reduced urgency about other interventions. Treat as [H1]-level pending implementation of Psychology Pack frameworks.

The first version asserts a causal effect on audiences as though it is established. The second version describes a possible pattern, uses cautious language, marks it at the appropriate level (C1/H1), and flags the limitation of the underlying framework.

---

## How each pack contributed

| Pack | Frameworks used | What it found |
|---|---|---|
| Logic | Walton (draft) | Unstated premise; unmet burden of proof; non sequitur candidate |
| Framing/Rhetoric | Entman (draft) + Aristotle (draft) | Problem framed as technological; solution frame excludes regulation; enthymeme; declarative ethos |
| Discourse | van Dijk (draft, reduced activation) | Pronoun "we" as solidarity construction; implicit innovator/regulator roles |
| Psychology | Planned, not implemented | Possible single-action framing effect; marked H1 and provisional |

---

## The counterinterpretation section

The analysis includes a "Strongest counterinterpretation" section. This is not optional.

OpenReason requires every analysis to include the most plausible alternative reading. For this example, the counterinterpretation acknowledges that:

- Technological transitions have historically been decisive in many domains
- The speaker may have considered and rejected the counterarguments
- Selective framing is present in all communication, not only in bad-faith communication

The counterinterpretation does not undo the analytical findings. The logical gap still exists. The framing omissions are still present. But it prevents the analysis from reading as advocacy disguised as method.

---

## Using this example in Claude Code

To run this analysis yourself in Claude Code:

```
/openreason-analyze examples/technology-regulation.md
```

Or in natural language:

```
Analyze examples/technology-regulation.md using OpenReason.
Show me how the Logic Pack and Framing/Rhetoric Pack apply.
```

To see how the analysis changes if you modify the input:

```
Analyze this statement using OpenReason:
"Renewable energy is now cheaper than fossil fuels. We should let the market decide."
```

The frameworks are the same. The findings will differ because the argument structure is different.

---

## Further reading

- [`docs/frameworks/PACKS.md`](../frameworks/PACKS.md) — full pack reference
- [`docs/frameworks/MATURITY_LEVELS.md`](../frameworks/MATURITY_LEVELS.md) — what draft and planned mean
- [`frameworks/logic/walton.yaml`](../../frameworks/logic/walton.yaml) — Walton framework specification
- [`frameworks/framing/entman.yaml`](../../frameworks/framing/entman.yaml) — Entman framework specification
- [`frameworks/rhetoric/aristotle.yaml`](../../frameworks/rhetoric/aristotle.yaml) — Aristotle framework specification
- [`frameworks/discourse/van_dijk.yaml`](../../frameworks/discourse/van_dijk.yaml) — van Dijk framework specification
