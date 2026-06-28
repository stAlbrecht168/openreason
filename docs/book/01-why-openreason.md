# Chapter 1: Why OpenReason Exists

## The problem

Ask a capable AI to analyse a political speech, and it will produce something that reads like expert commentary. The prose is fluent. The conclusions sound measured. The analysis arrives quickly.

But try asking it a few follow-up questions:

*Which analytical tradition did you use?*
*Why that one and not another?*
*Is this sentence a direct quote, or your interpretation of what the speaker implied?*
*Is that last claim a logical inference, or speculation?*

Most AI systems cannot answer these questions clearly — not because the answers are hidden, but because the reasoning was never structured to make them visible. The AI was not prompted to separate observation from interpretation. It was prompted to produce an answer.

This is the problem OpenReason was built to address.

---

## Confidence is not transparency

There is a distinction worth pausing on: the difference between a confident answer and a transparent one.

A confident answer says: *This is what is happening in this text.*

A transparent answer says: *Here is what the text actually says. Here is what follows logically from that. Here is my interpretation of the pattern. Here is a hypothesis I cannot prove but consider worth noting.*

These are not the same thing. A confident answer can be produced quickly and fluently without the analytical work that transparency requires. And fluent confidence can be more misleading than honest uncertainty — because it does not show the reader where to push back.

OpenReason is built on a different priority: **transparency over confidence**.

---

## What "transparent" means in practice

When OpenReason analyses a text, it produces a report structured around one question at every step: *How do you know that?*

The answer to that question determines the label each claim receives:

- If you can point directly to the text — a quote, a stated position — it is an **observation**.
- If it follows from the logical structure of the argument, it is an **inference**.
- If it requires a theory about how language works, how groups are represented, or how frames function, it is an **interpretation**.
- If it is a plausible explanation that cannot be proven from the text alone, it is a **hypothesis**.
- If it is weakly supported and speculative, it is **speculation** — and should be used, if at all, only with that label attached.

These distinctions matter because they determine how strongly a claim should be held, how it can be challenged, and what evidence would change it.

---

## The standard analysis workflow — and what it misses

Most AI analysis workflows look like this:

```
Input → AI → Answer
```

The answer may be good. It may cite relevant frameworks. It may be cautious in its language. But it has one structural problem: the reasoning is inside the AI, not visible to the reader.

You cannot inspect:
- Which framework was selected, and why
- What counted as evidence for each claim
- Where interpretation began and observation ended
- What was deliberately set aside as uncertain

This means you cannot meaningfully challenge the analysis. You can disagree with the conclusion, but you cannot engage with the reasoning, because the reasoning is not shown.

OpenReason changes the workflow:

```
Input
→ Intent detection (what kind of analysis is needed?)
→ Framework selection (which analytical methods apply?)
→ Structured analysis (each claim labelled by type)
→ Counterinterpretation (what is the strongest alternative reading?)
→ Reviewable report
```

Each step is explicit. The framework selection is documented. The analytical claims carry labels. The counterinterpretation is required, not optional.

---

## What OpenReason is not

It is worth being clear about limits.

**OpenReason does not determine truth.** It analyses how arguments are constructed, how texts frame problems, and how language functions rhetorically. It does not adjudicate empirical questions.

**OpenReason does not replace experts.** A linguist, a logician, a discourse analyst with deep knowledge of a specific context will always see more than a structured method can. OpenReason provides a starting structure; it does not provide expertise.

**OpenReason does not infer intention.** What a speaker intended is almost never knowable from a text alone. OpenReason keeps intention at the level of hypothesis — possible, worth noting, but not stated as fact.

**OpenReason is not a political tool.** The same method applies to any text, regardless of who the speaker is or what position they hold. The framework does not change based on whether you agree with the speaker.

---

## Who is this for?

OpenReason is designed to be useful to:

- **Researchers and students** who want to apply analytical frameworks rigorously and want their methodology visible and reviewable
- **Journalists** who want to analyse political communication systematically and show their analytical work
- **Educators** who want to teach argumentation, framing, or rhetoric with structured examples
- **Analysts and policy professionals** who encounter persuasive communication and want a method for examining it carefully
- **Developers** who want to build AI analysis tools on a documented methodological foundation

You do not need to be a software developer to use OpenReason in its primary mode. Claude Code handles the technical steps. The concepts — frameworks, evidence labels, analysis structure — are the part that requires understanding. That is what this book is for.

---

## A note on the current state of the project

OpenReason v0.1.0 is a proof of concept. The four frameworks currently available — Walton, van Dijk, Entman, Aristotle — are implemented as draft files. They have not been formally verified against their original sources. The intent detection is a heuristic. Several planned frameworks do not yet exist.

This matters, and the project does not hide it. One of OpenReason's core principles is honesty about status: a framework's maturity level is always visible, and the limitations of any analysis are part of the analysis.

The book explains not just how the system works, but where its current limits are.

---

*Next: [Chapter 2 — The Evidence Model](02-evidence-model.md)*
