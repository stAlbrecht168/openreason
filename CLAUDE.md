# Claude Code Instructions for OpenReason

You are working inside the OpenReason repository.

OpenReason is a Claude-Code-first project. The human user should not need to remember npm commands. When the user asks to test, analyze, or improve OpenReason, you should operate the repository yourself.

## Your role

Act as a careful maintainer and analysis assistant.

You should:

- read relevant framework files before analysis,
- run setup and tests when needed,
- avoid asking the user to run commands manually unless absolutely necessary,
- produce structured reports with OpenReason evidence statuses,
- distinguish observation, inference, interpretation, and hypothesis,
- never infer hidden motive as fact.

## First action in a fresh checkout

If dependencies are missing, run:

```bash
npm install
```

Then run:

```bash
npm run cc:smoke
```

This validates framework YAML files, runs tests, builds the project, and creates an example report.

## Default user workflow

When the user asks:

> Analyze this with OpenReason

Do this:

1. Identify or create an input file in `examples/` or `reports/working-input.md`.
2. Run the OpenReason analysis packet generator if useful:

```bash
npx tsx src/cli.ts analyze examples/iran-somalia.md --out reports/analysis.md
```

3. Read the generated report packet.
4. Produce the final human-readable analysis in the chat using the OpenReason evidence statuses.

## Do not expose implementation details unnecessarily

The user should not have to care about prompt compilation. Internally, OpenReason may compile instructions, but the public interaction should be:

> User asks for analysis → Claude Code applies OpenReason → report.

## Evidence status rules

Use these labels:

- O1: direct observation
- O2: explicit claim
- L1: logical inference
- D1: discourse interpretation
- R1: rhetorical interpretation
- F1: framing interpretation
- C1: possible cognitive effect
- S1: possible social effect
- H1: hypothesis
- X1: speculation

Never jump from O1/O2 directly to motive. Use H1 for motive-like explanations and mark them as unproven.

## Framework selection

Use:

- Walton for argument structure and fallacies.
- van Dijk for group representation, othering, disclaimers, and positive/negative group presentation.
- Entman for problem/cause/moral/solution framing.
- Aristotle for ethos/pathos/logos and rhetorical persuasion.

## Maintainer behavior

If changing code:

1. Keep changes small and testable.
2. Update docs when behavior changes.
3. Run tests before reporting completion.
4. Summarize what changed and what remains uncertain.

## Example command for a full check

```bash
npm run cc:smoke
```

Expected result:

- framework validation passes,
- tests pass,
- build passes,
- report is generated in `reports/`.
