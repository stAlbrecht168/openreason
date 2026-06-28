---
description: Compile an OpenReason prompt from an input file
argument-hint: [input-file]
allowed-tools: Bash, Read, Write, Grep, Glob
---

Compile the provided input file with OpenReason.

If no input file is provided, use:

```text
examples/iran-somalia.md
```

Run:

```bash
npx tsx src/cli.ts compile $0 --out compiled_prompt.md
```

If `$0` is empty, run:

```bash
npm run compile:example
```

Then read `compiled_prompt.md` and summarize:

- detected intents
- loaded frameworks
- whether the prompt contains the evidence model
- whether the prompt contains the required output schema
