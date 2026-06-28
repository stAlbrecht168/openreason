# Chapter 6: Verification

## The gap between a framework file and a reliable method

Creating a framework file is the beginning of the work, not the end.

A framework that says it is derived from Walton's informal logic, but whose decision rules misrepresent what Walton actually argued, is not a reliable analytical tool. It looks structured. It has fields and references. It validates against the schema. But if the content is wrong — if the concepts are inaccurate, if the decision rules are too strong or too weak, if important limitations are missing — then every analysis that uses it will be systematically flawed.

This is the verification problem. OpenReason addresses it by being honest about where every framework stands on the path from first draft to reliable method.

---

## The two-level model

OpenReason tracks framework quality at two distinct levels, because two different questions are being asked.

**Level 1 — Implementation status (in the pack files)**

This answers: *does the framework exist as a usable file?*

| Status | Meaning |
|---|---|
| `planned` | No file exists yet; the framework is documented as a future intention |
| `draft` | A file exists and validates against the schema |
| `reviewed` | The file's content has been checked against secondary sources |
| `verified` | The file's content has been checked against the original cited sources |

**Level 2 — Verification status (in the framework YAML file itself)**

This answers: *how carefully has the file's content been checked?*

| Status | Meaning |
|---|---|
| `draft` | First version; not checked against the source tradition |
| `reviewed` | Core concepts checked against secondary sources or expert commentary |
| `verified` | Core concepts checked against the original primary sources |
| `contested` | Known disagreement between the file's content and the source tradition |

The two levels are related but distinct. A framework can be implemented (the file exists) but still `draft` in verification status (nobody has read the sources to check it yet). That is the current state of all four OpenReason frameworks.

---

## Why "it's in the file" is not enough

Consider the van Dijk framework. The file lists several core concepts from critical discourse analysis: the ideological square, positive self-presentation, negative other-presentation, disclaimers, and group hierarchy.

These are terms that appear in van Dijk's work. But are they described accurately? Are they applied in the decision rules in a way consistent with how van Dijk uses them? Are any of them oversimplified in ways that would mislead an analyst? Is anything important missing?

These questions cannot be answered by reading the framework file. They require reading van Dijk.

This is the verification gap. Until someone does that reading and checks the file against it, the framework carries a disclaimer: *these concepts are presented as derived from van Dijk, but this has not been confirmed*.

---

## How to verify a framework

Verification is scholarly work. It does not require programming. It requires reading.

### Step 1: Identify the sources

Read the framework file's `references` section. What are the primary sources? The specific books or papers cited? Start there.

### Step 2: Read the primary sources (for `verified`) or credible secondary sources (for `reviewed`)

For `reviewed` status, a credible secondary source is acceptable: a peer-reviewed article, a textbook chapter, a reputable scholarly summary that describes the tradition. For `verified` status, you need to go back to the original — the book or article the framework cites as its foundation.

### Step 3: Check the core concepts

For each concept in the framework's `core_concepts` list:

- Is this a real concept in the source tradition?
- Is it described accurately in the framework file?
- Is it attributed to the right source?
- Is anything important missing or distorted?

### Step 4: Check the analysis steps and decision rules

These are the most operationally important fields — they determine what an analyst actually does when applying the framework.

- Do the `analysis_steps` reflect the actual methodology of the tradition?
- Are the `decision_rules` too strong? (Do they claim to establish things the tradition would only claim to observe or interpret?)
- Are they too weak? (Are they so hedged as to be analytically useless?)
- Do they stay within what the cited sources support?

### Step 5: Check the limitations

- Are the limitations in the `limitations` field real limitations recognised by scholars in this tradition?
- Are there important limitations missing?
- Would a critic of this tradition recognise these as the key constraints?

### Step 6: Document what you found

If the framework's content is consistent with the sources:
- Change the `verification_status` field to `reviewed` or `verified`
- Add a note in the references section explaining what was checked and by whom

If there are discrepancies:
- Correct the framework file to reflect what the sources actually say
- Or, if the discrepancy is unresolved or contested, change the `verification_status` to `contested` and add an explanation

---

## What `contested` means

Sometimes a concept in a framework file reflects one interpretation of a tradition, and another interpretation is also well-supported. Sometimes a source tradition has evolved over time and the framework reflects an earlier or later version. Sometimes scholars in the field disagree about what the tradition actually implies.

In these cases, the correct status is `contested` — not `draft`, which implies it simply hasn't been checked, but `contested`, which implies it has been checked and found to be genuinely uncertain.

A contested framework is still useful — it can still be applied — but its `contested` status signals to any analyst using it: there is a known disagreement here that may affect the interpretation.

---

## The value of non-technical verification

Verification is an area where people without programming skills can make the highest-value contribution to OpenReason.

Reading van Dijk and checking the framework file against it does not require writing code. It requires knowing how to read academic sources and identify where a summary is accurate, where it oversimplifies, and where it is missing something important.

If you have knowledge of one of the analytical traditions used in OpenReason — even at a graduate-student level — you are qualified to do verification work. The project needs that knowledge more than it needs more code.

---

## The risk of unverified frameworks

It is worth being direct about what happens when frameworks are used without being verified.

An analysis that cites *"van Dijk's concept of contrastive othering"* gains credibility from the citation. The reader may assume that the concept is being applied correctly because it is attributed to a recognised scholar. If the framework file has misrepresented that concept — even slightly — the analysis will be systematically wrong in ways the reader cannot easily detect.

This is not a hypothetical risk. It is the standard risk of any applied analytical method that claims to be grounded in scholarship. The question is whether you acknowledge it or not.

OpenReason acknowledges it. The maturity levels are the mechanism. A `draft` framework says, explicitly: *this has not been checked*. That honesty is a feature, not a limitation.

---

## The long-term goal

The goal is not to stay at `draft` forever. The goal is to build a library of `reviewed` and `verified` frameworks — analytical methods that can be trusted because they have been checked against their sources, corrected where necessary, and documented with enough precision that another analyst could reproduce the reasoning.

That standard is achievable. But it requires sustained effort from people who know the source traditions. The framework files are a starting structure; the verification work is what makes them reliable.

---

*Previous: [Chapter 5 — Using Claude Code](05-using-claude-code.md)*
*Next: [Chapter 7 — Examples](07-examples.md)*
