# CLAUDE.md — OpenReason Claude Code Instructions

This repository is a TypeScript proof of concept for **OpenReason**, a framework compiler for transparent reasoning analysis.

## Project Goal

OpenReason does not directly “decide” an analysis. It compiles structured reasoning frameworks into a model-readable prompt that can be tested across Claude, ChatGPT, and other LLMs.

Pipeline:

```text
User input
→ Intent detection
→ Framework resolution
→ Prompt compilation
→ LLM analysis
→ Evidence-status review
```

## Evidence Status Model

Use these statuses consistently:

- `O1` Direct observation
- `O2` Explicit claim
- `L1` Logical inference
- `D1` Discourse interpretation
- `R1` Rhetorical interpretation
- `F1` Framing interpretation
- `C1` Cognitive effect
- `S1` Social effect
- `H1` Hypothesis
- `X1` Speculation

Never jump directly from quote/observation to motive. Keep observation, inference, interpretation, effect, and hypothesis separate.

## Important Commands

Run these after changing code or frameworks:

```bash
npm run validate
npm test
npm run build
npm run compile:example
```

For a full local smoke test:

```bash
npm run cc:smoke
```

## Development Rules

1. Framework YAML files live in `frameworks/**`.
2. Framework files must validate against the Zod schema in `src/schema.ts`.
3. Router behavior is tested in `tests/router.test.ts`.
4. Compiler behavior is tested in `tests/compiler.test.ts`.
5. Do not hard-code one analysis into the compiler. The compiler must remain framework-driven.
6. If adding a framework, add or update tests.
7. Keep generated outputs such as `compiled_prompt.md` out of commits unless intentionally documenting an example.

## Claude Code Workflow

When asked to test OpenReason:

1. Inspect `package.json`.
2. Run `npm install` if dependencies are missing.
3. Run `npm run cc:smoke`.
4. Open `compiled_prompt.md`.
5. Use the compiled prompt to analyze `examples/iran-somalia.md`.
6. Report whether the selected frameworks match the expected intent.

Expected for `examples/iran-somalia.md`:

- Primary intent: `discourse_analysis`
- Secondary: `logical_analysis`, `framing_analysis` may appear depending on keyword matching
- Expected frameworks include:
  - `van-dijk-discourse-analysis`
  - `walton-informal-logic`
  - `entman-framing`

## What “Done” Means

A change is done only when:

```bash
npm run validate
npm test
npm run build
```

all pass.
