# OpenReason

> Transparent reasoning for Large Language Models.

OpenReason is an experimental open-source project for making AI-assisted argument, rhetoric, discourse, and framing analysis more transparent.

It is built for people who want to understand **why** an AI analysis reaches a conclusion — not just read the conclusion itself.

OpenReason does this by turning documented analysis frameworks into a structured prompt that can be used with Claude, ChatGPT, or other language models.

---

## In one sentence

OpenReason is a small compiler that turns theory-based analysis frameworks into an LLM-ready prompt.

```text
User material
  ↓
Intent Router
  ↓
Framework Resolver
  ↓
Prompt Compiler
  ↓
Claude / ChatGPT / other LLM
  ↓
Evidence-aware analysis
```

---

## Why this exists

Many people already ask AI systems to analyze speeches, videos, interviews, political debates, or social-media posts.

The problem is that the reasoning process is often hidden.

A model may say:

> “This is a false analogy.”

or:

> “This is othering.”

But the user often cannot tell:

- Which theory was used?
- Which part was directly observed?
- Which part was an interpretation?
- Which conclusion was only a hypothesis?
- Which framework allowed that conclusion?

OpenReason tries to make those steps explicit.

---

## What OpenReason is not

OpenReason is not a fact-checking organization.

OpenReason does not decide what is politically right or wrong.

OpenReason does not prove what a speaker secretly intended.

OpenReason provides a structured way to apply documented analytical frameworks while separating observation, inference, interpretation, and hypothesis.

---

## Who is this for?

You do not need to be a programmer to understand the idea.

OpenReason may be useful for:

- journalists
- students
- teachers
- researchers
- political scientists
- media scholars
- discourse analysts
- fact-checkers
- developers building AI analysis tools

If you understand theories like rhetoric, informal logic, framing, or discourse analysis, you can help improve OpenReason even without writing code.

---

## What is inside this proof of concept?

This PoC includes:

```text
src/                         TypeScript compiler code
frameworks/                  YAML framework definitions
examples/                    Example input texts
compiled_prompt.md           Generated prompt example
CLAUDE.md                    Claude Code project instructions
.claude/                     Claude Code commands and skill notes
docs/                        Human-readable documentation
tests/                       Automated tests
.github/workflows/ci.yml     GitHub Actions CI
```

Current frameworks:

- **Douglas Walton** — informal logic and argument analysis
- **Teun A. van Dijk** — discourse analysis and group representation
- **Robert Entman** — framing analysis
- **Aristotle** — rhetoric: ethos, pathos, logos

---

## The Evidence Model

OpenReason asks analyses to label conclusions with evidence statuses.

| Status | Meaning |
|---|---|
| O1 | Direct observation |
| O2 | Explicit claim by a speaker |
| L1 | Logical inference |
| D1 | Discourse interpretation |
| R1 | Rhetorical interpretation |
| F1 | Framing interpretation |
| C1 | Possible cognitive effect |
| S1 | Possible social effect |
| H1 | Hypothesis |
| X1 | Speculation |

Example:

```text
[O2] The speaker contrasts Iranians and Somalis.
→ [L1] Accepting one group does not logically justify rejecting another.
→ [D1] Iranians function as a contrast group.
→ [S1] This may reinforce a hierarchy of acceptable and unacceptable minorities.
→ [H1] The contrast may help the speaker appear more moderate.
```

The goal is not to eliminate interpretation. The goal is to mark interpretation clearly.

---

## Install and test locally

### 1. Install Node.js

Install the current LTS version of Node.js from:

https://nodejs.org

You can check your installation with:

```bash
node --version
npm --version
```

### 2. Download or clone the repository

```bash
git clone https://github.com/stAlbrecht168/openreason.git
cd openreason
```

If you are using the ZIP prototype, unzip it and enter the folder:

```bash
unzip openreason-claude-code-poc.zip
cd openreason-ts-poc
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the checks

```bash
npm run validate
npm test
npm run build
```

Expected result: all commands finish without errors.

### 5. Compile the example prompt

```bash
npm run compile:example
```

This creates:

```text
compiled_prompt.md
```

Open this file. It is the prompt produced by OpenReason from the selected frameworks.

---

## Test with Claude Code

Claude Code is currently the easiest way to test this project as a development environment.

### 1. Open the project folder

```bash
cd openreason
claude
```

or, if you are using the ZIP prototype:

```bash
cd openreason-ts-poc
claude
```

### 2. Ask Claude Code to run the smoke test

Paste this into Claude Code:

```text
Follow CLAUDE.md. Run npm run cc:smoke, then read compiled_prompt.md and analyze examples/iran-somalia.md using OpenReason evidence statuses.
```

Expected result:

```text
validate ✓
tests ✓
build ✓
compiled_prompt.md generated ✓
```

Claude should then use the generated prompt and produce an evidence-status-aware analysis.

### 3. Optional Claude Code commands

This repository includes Claude Code helper files:

```text
CLAUDE.md
.claude/skills/openreason/SKILL.md
.claude/commands/openreason-test.md
.claude/commands/openreason-compile.md
.claude/commands/openreason-analyze.md
```

They document the intended workflow for Claude Code.

---

## Test with ChatGPT

ChatGPT cannot run this repository directly unless you use a coding environment or upload files. The simplest workflow is:

1. Run `npm run compile:example` locally.
2. Open `compiled_prompt.md`.
3. Copy the full content into ChatGPT.
4. Add the input material you want analyzed.
5. Ask ChatGPT to follow the OpenReason output format.

Example message:

```text
Use the following OpenReason compiled prompt as your analysis instruction.
Then analyze this material and label every major conclusion with an evidence status.
```

For repeated use, create a ChatGPT Project or Custom GPT and upload:

- `compiled_prompt.md`
- `docs/`
- `frameworks/`
- `examples/`

---

## How to develop iteratively

The intended loop is simple:

```text
Change a framework or compiler file
  ↓
npm run validate
  ↓
npm test
  ↓
npm run compile:example
  ↓
inspect compiled_prompt.md
  ↓
test in Claude Code or ChatGPT
  ↓
commit changes
```

This makes OpenReason testable and improvable.

---

## How non-programmers can contribute

You can help even if you do not write TypeScript.

Useful contributions include:

- checking whether a framework accurately represents an author
- adding references and chapter notes
- writing example analyses
- creating test cases
- explaining theories in plain language
- identifying overclaims or unsupported interpretations
- improving documentation

Example: if you know van Dijk, you can review `frameworks/discourse/van_dijk.yaml` and check whether concepts like “positive self-presentation” and “negative other-presentation” are represented accurately.

---

## Important limitations

This is a proof of concept.

It does not yet:

- call Claude or ChatGPT through an API
- verify factual claims automatically
- prove speaker intent
- guarantee that every model will follow the prompt perfectly
- replace expert review

The current goal is smaller and testable:

> Can OpenReason compile documented frameworks into a useful, transparent analysis prompt?

---

## Recommended reading inside this repo

Start here:

- `docs/GETTING_STARTED.md`
- `docs/OPENREASON_BOOK.md`
- `docs/ARCHITECTURE.md`
- `docs/CLAUDE_CODE.md`
- `docs/DEVELOPER_GUIDE.md`

---

## Project vision

OpenReason should eventually become a reusable, model-independent layer for transparent AI-assisted analysis.

The long-term idea:

```text
Framework YAML
  ↓
OpenReason Compiler
  ↓
Provider-specific prompt
  ↓
Claude / ChatGPT / Gemini / Ollama
  ↓
Evidence-aware report
```

The repository should be readable as both software and a learning resource.

Not hidden prompts.

Transparent methods.
