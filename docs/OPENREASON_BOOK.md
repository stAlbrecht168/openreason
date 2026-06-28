# The OpenReason Book

This is a short, human-readable introduction to the ideas behind OpenReason.

## 1. Why OpenReason exists

People increasingly use AI to analyze political speeches, videos, interviews, articles, and online debates.

These analyses can be useful, but they are often opaque. A model may identify a fallacy, a rhetorical strategy, or a discourse pattern without explaining which framework it used or how much evidence supports the conclusion.

OpenReason exists to make this process visible.

## 2. The core idea

OpenReason separates three things that are often mixed together:

1. the material being analyzed,
2. the theory or framework being used,
3. the model that writes the final answer.

The framework should not be hidden inside a vague prompt. It should be documented, testable, and reusable.

## 3. What is a framework?

A framework is a structured method for analysis.

Examples:

- Walton helps analyze arguments.
- van Dijk helps analyze discourse about groups.
- Entman helps analyze framing.
- Aristotle helps analyze persuasion.

OpenReason stores these frameworks as YAML files.

A framework file describes:

- when the framework should be used,
- what concepts it contains,
- what questions it asks,
- what outputs it may produce,
- what limitations it has,
- which sources support it.

## 4. Why evidence statuses matter

Not all analytical statements have the same status.

Consider this chain:

```text
[O2] A speaker contrasts Iranians with Somalis.
→ [L1] Accepting one group does not logically justify rejecting another.
→ [D1] Iranians may function as a contrast group.
→ [S1] This may reinforce a hierarchy between minorities.
→ [H1] This may help the speaker appear more moderate.
```

The first statement is close to the material. The last statement is a hypothesis. OpenReason wants those differences to remain visible.

## 5. Why the compiler matters

The compiler is the heart of OpenReason.

It reads:

- the input material,
- the detected intent,
- the available frameworks.

It then creates a compiled prompt.

This prompt tells a model which frameworks to use and which output structure to follow.

## 6. Why this is useful for theory-oriented people

If you understand a theory, you can help make the framework better.

You can ask:

- Does this YAML file represent the author fairly?
- Are the concepts accurate?
- Are the limitations honest?
- Are the tests good examples?
- Does the output overclaim?

This makes OpenReason a collaboration between technical and non-technical contributors.

## 7. Current limitations

OpenReason is still early.

It currently compiles prompts. It does not yet automatically call LLM APIs, run real benchmarks, or verify claims against external sources.

The first goal is modest:

> Make the reasoning method visible and testable.
