# OpenReason

> **Transparent reasoning for AI analysis.**

OpenReason is an open-source project for making AI-assisted analysis more transparent, testable, and grounded in documented analytical frameworks.

It is designed for people who want to analyze political videos, interviews, speeches, social-media posts, articles, and arguments using theories from informal logic, rhetoric, discourse analysis, and framing research.

You do **not** need to be a software expert to understand the project. The technical code is only the reference implementation. The real idea is simpler:

> OpenReason helps an AI show *which method it is using*, *why it selected that method*, and *which parts of its analysis are observations, inferences, interpretations, or hypotheses*.

---

## Why OpenReason exists

Today, many AI analyses look like this:

```text
Input material → ChatGPT/Claude → Answer
```

The answer may sound convincing, but it is often unclear:

- Which theory did the model use?
- Which assumptions did it make?
- Which claims are directly observable?
- Which claims are interpretations?
- Which claims are only hypotheses?
- Could another person reproduce the analysis?

OpenReason changes the workflow:

```text
Input material
→ Intent detection
→ Framework selection
→ Evidence-status model
→ Structured analysis
→ Reviewable report
```

The goal is not to make the AI “always right”. The goal is to make the reasoning process visible enough that humans can inspect, challenge, improve, and test it.

---

## What OpenReason is not

OpenReason is not a fact-checking organization.

OpenReason does not decide political truth.

OpenReason does not infer hidden motives as facts.

OpenReason does not replace experts.

OpenReason provides structured analytical methods that humans and AI systems can use more transparently.

---

## The easiest way to use this project: Claude Code

This repository is designed so that **Claude Code can be your interface**.

You do not need to remember npm commands. Claude Code should read `CLAUDE.md`, run checks when needed, inspect the frameworks, and help you analyze or improve the project.

### 1. Clone the repository

```bash
git clone https://github.com/stAlbrecht168/openreason.git
cd openreason
```

### 2. Open Claude Code in the repository

```bash
claude
```

### 3. Tell Claude Code what to do

Paste this:

```text
Read CLAUDE.md. Treat OpenReason as the analysis engine. Do not ask me to run npm commands manually. Set up dependencies if needed, run the smoke test, then analyze examples/iran-somalia.md using the OpenReason evidence statuses.
```

Claude Code should then:

1. read the project instructions,
2. install dependencies if needed,
3. validate framework files,
4. run tests,
5. run the example analysis,
6. produce a structured report.

---

## What the project contains

```text
openreason/
├── README.md                  # this overview
├── CLAUDE.md                  # persistent instructions for Claude Code
├── package.json               # reference implementation setup
├── src/                       # TypeScript reference implementation
├── frameworks/                # analytical frameworks in YAML
├── examples/                  # example inputs for analysis
├── docs/                      # explanatory documentation and book chapters
├── tests/                     # automated tests
├── .claude/                   # Claude Code commands and skill instructions
├── .github/                   # GitHub Actions and templates
└── custom-gpt/                # notes for using OpenReason with ChatGPT
```

---

## First example: Iran/Somalia contrast framing

Suppose a public figure says something like:

> “I prefer Iranians to Somalis.”

A normal AI might immediately explain why this is problematic.

OpenReason first asks:

1. What is the user asking for?
2. Which analytical frameworks are relevant?
3. What is directly observable?
4. What is a logical inference?
5. What is a discourse interpretation?
6. What is a social-effect hypothesis?

For this kind of prompt, OpenReason may activate:

- **Douglas Walton** for argument analysis,
- **Teun A. van Dijk** for group representation and discourse analysis,
- **Robert Entman** for framing,
- **Aristotle** for rhetorical structure.

The resulting report separates observations from interpretations.

---

## The evidence-status model

OpenReason uses evidence labels so readers can see how strong each analytical step is.

| Status | Meaning |
|---|---|
| O1 | Direct observation: visible, audible, or quoted material |
| O2 | Explicit claim made by the speaker |
| L1 | Logical inference from the argument structure |
| D1 | Discourse interpretation |
| R1 | Rhetorical interpretation |
| F1 | Framing interpretation |
| C1 | Possible cognitive effect |
| S1 | Possible social effect |
| H1 | Hypothesis, plausible but not proven |
| X1 | Speculation, weakly supported and usually avoided |

This is one of the core ideas of OpenReason: **observation and interpretation must not be mixed.**

---

## Frameworks included in this proof of concept

### Douglas Walton — Informal Logic

Used for argument structure:

- What is the claim?
- What are the premises?
- Does the conclusion follow?
- Is the burden of proof met?

### Teun A. van Dijk — Critical Discourse Analysis

Used for group representation:

- Who is presented as “us”?
- Who is presented as “them”?
- Is one group used as an exception to reject another group?
- Are disclaimers or group hierarchies present?

### Robert Entman — Framing

Used for identifying how an issue is framed:

- What is defined as the problem?
- Who or what is blamed?
- What moral evaluation is implied?
- What solution becomes thinkable?

### Aristotle — Rhetoric

Used for persuasion analysis:

- Ethos: credibility
- Pathos: emotion
- Logos: reasoning
- Enthymeme: unstated premise

---

## For non-technical contributors

You can contribute without writing code.

Useful contributions include:

- checking whether framework summaries match the original sources,
- suggesting better examples,
- reviewing whether an analysis overclaims,
- adding test cases,
- improving documentation,
- explaining theories in clearer language,
- translating documentation.

Start with:

- `docs/GETTING_STARTED.md`
- `docs/book/00-preface.md`
- `docs/book/03-evidence-model.md`
- `frameworks/`

---

## For technical contributors

The reference implementation is written in TypeScript.

Manual setup, if you do want to run it yourself:

```bash
npm install
npm run validate
npm test
npm run build
npm run analyze
```

But if you use Claude Code, you can simply ask Claude Code to run the setup and tests for you.

---

## Using OpenReason with ChatGPT

ChatGPT cannot run the local TypeScript reference implementation by itself. There are two practical options:

1. Use OpenReason as a **Custom GPT knowledge base**.
2. Use OpenReason locally or in Claude Code to prepare analysis instructions, then paste the input into ChatGPT.

See `custom-gpt/README.md` for details.

---

## Project philosophy

OpenReason is not a prompt collection.

OpenReason is a step toward **reviewable reasoning**:

- methods should be explicit,
- frameworks should be documented,
- claims should carry evidence status,
- interpretations should be distinguishable from observations,
- and analytical rules should be open to review.

See `docs/MANIFESTO.md` for the project manifesto.

