# Getting Started with OpenReason

This guide is for people who want to try OpenReason without needing deep technical knowledge.

## What you will do

You will:

1. install the project,
2. run the checks,
3. generate a compiled prompt,
4. test that prompt in Claude Code or ChatGPT.

## What OpenReason currently does

OpenReason does not yet contact Claude or ChatGPT automatically.

It creates a file called:

```text
compiled_prompt.md
```

That file contains the analysis instructions generated from the frameworks in this repository.

You can then paste that file into Claude, ChatGPT, or another LLM.

## Step 1: Install Node.js

Install Node.js LTS from:

https://nodejs.org

Check that it works:

```bash
node --version
npm --version
```

## Step 2: Install dependencies

In the project folder:

```bash
npm install
```

## Step 3: Run the smoke test

```bash
npm run cc:smoke
```

This runs:

- framework validation,
- automated tests,
- TypeScript build,
- example prompt compilation.

## Step 4: Open the compiled prompt

Open:

```text
compiled_prompt.md
```

This is the generated OpenReason prompt.

## Step 5: Try it in Claude Code

Start Claude Code in the repository:

```bash
claude
```

Then paste:

```text
Follow CLAUDE.md. Run npm run cc:smoke, read compiled_prompt.md, and analyze examples/iran-somalia.md using OpenReason evidence statuses.
```

## Step 6: Try it in ChatGPT

Copy the content of `compiled_prompt.md` into ChatGPT.

Then ask:

```text
Use this OpenReason prompt to analyze the following material. Label every major conclusion with an evidence status.
```

Add the text you want analyzed.

## What success looks like

A good OpenReason-style answer should include:

- detected intent,
- selected frameworks,
- claim map,
- evidence graph,
- framework-based analysis,
- counterinterpretation,
- confidence report.

It should not jump directly from a quote to a speculative claim.
