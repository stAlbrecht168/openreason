# Claude Code Workflow Guide

This guide explains how to use OpenReason through Claude Code.
You do not need to be a software developer.
You do not need to understand the TypeScript code.
You do not need to run npm commands yourself.

---

## What Claude Code does here

When you open this repository in Claude Code and give it an instruction,
Claude Code reads the project's instructions (`CLAUDE.md`), understands the analytical
frameworks in `frameworks/`, and acts as your analysis assistant.

You talk to it in plain language. It handles the technical steps.

---

## Setup (once only)

```bash
git clone https://github.com/stAlbrecht168/openreason.git
cd openreason
claude
```

That's it. In your first conversation, ask Claude Code to run the smoke test:

```
Read CLAUDE.md, then run the smoke test to make sure everything is working.
```

Claude Code will install dependencies, validate the framework files, run tests, and
generate a sample report. If anything fails, it will tell you what happened.

---

## Scenario 1: Analyse a statement

**You want to:** Analyse a political statement, quote, argument, speech excerpt, or article.

**What to say:**

```
Analyse this statement using OpenReason:

"[paste the text here]"
```

Or, if the material is longer, put it in a Markdown file first and say:

```
Analyse examples/my-input.md using OpenReason.
```

**What Claude Code will do:**

1. Read the relevant frameworks from `frameworks/`.
2. Detect which kind of analysis is most useful (argument structure, discourse, framing, rhetoric).
3. Optionally run the packet generator to produce a structured scaffold.
4. Write a structured analysis response that:
   - States which frameworks it used and why
   - Provides a claim map (what is explicitly said)
   - Labels every analytical step with an evidence status (O1, O2, L1, D1, R1, F1, C1, S1, H1)
   - Includes the strongest counterinterpretation
   - States limitations and confidence

**What you will see:**

An analysis where each claim is labelled. For example:

```
[O2] The speaker explicitly states a preference for one group over another.
[L1] Acceptance of one group does not logically imply that rejection of another group is justified.
[D1] The preferred group may function as a contrast group — used to make another group appear less acceptable.
[S1] This framing may contribute to a hierarchy of "acceptable" and "problematic" minorities.
[H1] Whether this is the speaker's intent cannot be determined from the text alone.
```

Each label tells you how confident the analytical step is.
O1/O2 are the most reliable. H1 is a hypothesis — plausible but not proven.

---

## Scenario 2: Understand the evidence-status model

**You want to:** Understand what the labels (O1, O2, L1, etc.) mean.

**What to say:**

```
Explain the OpenReason evidence-status model to me.
```

Claude Code will walk you through the model using an example from the current frameworks.

You can also ask:

```
What is the difference between D1 and H1?
```

or

```
When would I use F1 instead of R1?
```

---

## Scenario 3: Learn about a specific framework

**You want to:** Understand what the Walton, van Dijk, Entman, or Aristotle framework actually does.

**What to say:**

```
Explain the van Dijk framework to me. When is it useful?
```

Claude Code will read `frameworks/discourse/van_dijk.yaml` and explain:
- What the framework analyses
- What questions it asks
- What evidence statuses it produces
- What its limitations are

---

## Scenario 4: Run a repository health check

**You want to:** Verify that the frameworks are valid and the tests pass.

**What to say:**

```
Run the OpenReason smoke test and tell me the results.
```

Or use the slash command:

```
/openreason-test
```

Claude Code will run `npm run cc:smoke` and report whether:
- Framework YAML files pass schema validation
- Automated tests pass
- The TypeScript build succeeds
- The example analysis generates without errors

---

## Scenario 5: Add a new framework

**You want to:** Propose or add an analytical framework from a different theoretical tradition.

**What to say:**

```
I'd like to add a framework for [name or description of the theory].
The main source is [book or paper].
```

Or use the slash command:

```
/openreason-add-framework
```

Claude Code will:
1. Ask you for the relevant details (purpose, key concepts, analytical questions, limitations, citations).
2. Read `docs/FRAMEWORK_AUTHORING.md` and an existing framework for reference.
3. Create a YAML file in the appropriate `frameworks/<domain>/` directory.
4. Run validation.
5. Summarise what was added, what is not yet verified, and what limitations the framework carries.

**Important:** New frameworks are created with status `draft` until their concepts have been checked against the original cited sources. Claude Code will say so explicitly.

---

## Scenario 6: Improve or correct a framework

**You want to:** Fix an error in an existing framework, add a missing concept, or update a citation.

**What to say:**

```
The Walton framework is missing [concept]. Can you add it?
```

or

```
The van Dijk decision rule about disclaimers seems too broad. Let's revise it.
```

Claude Code will read the current YAML file, make the proposed change, re-run validation, and ask you to review the diff before committing.

---

## Scenario 7: Save an analysis to a file

**You want to:** Keep a record of an analysis.

**What to say:**

```
Analyse examples/iran-somalia.md and save the report to reports/iran-somalia-analysis.md.
```

Claude Code will run the packet generator, read the output, produce a final analysis, and write it to the specified file.

---

## Understanding an analysis report

When Claude Code produces an analysis, it will follow this structure:

| Section | What it contains |
|---|---|
| **Summary** | One paragraph describing the input and the analytical lens used |
| **Intent and frameworks** | Which analysis types were detected; which frameworks were activated and why |
| **Claim map** | What the text says explicitly (O1/O2 items) |
| **Evidence graph** | The analytical steps, each labelled O1–H1 |
| **Counterinterpretation** | The strongest alternative reading of the material |
| **Confidence and limitations** | What the analysis cannot determine; what would need to be true for the interpretation to be wrong |

The evidence-status labels are the most important part.
They tell you the epistemic weight of each step.

---

## What Claude Code will not do

- Claim to have watched or heard media it cannot access.
- Assert that a speaker has a particular hidden motive.
- Present a framing interpretation as a proven fact.
- Invent citations or claim a theory says something it cannot verify.
- Tell you what the political truth is.

If you ask for something that would require one of these steps, Claude Code will explain why it cannot do it and offer what it can do instead.

---

## Slash commands

These shortcuts are available when you are inside the repository:

| Command | What it does |
|---|---|
| `/openreason-use` | Run a full OpenReason analysis on material you provide |
| `/openreason-add-framework` | Walk through adding a new analytical framework |
| `/openreason-test` | Run the smoke test and report results |

---

## For contributors who want to go further

If you want to understand the technical implementation, read:

- `docs/ARCHITECTURE.md` — full system design
- `docs/FRAMEWORK_AUTHORING.md` — how to author a framework YAML
- `docs/VERIFICATION.md` — how to verify a framework against its sources
- `docs/DEVELOPER_GUIDE.md` — development commands and design notes
