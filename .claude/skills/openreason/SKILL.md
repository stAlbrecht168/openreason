---
name: openreason
description: Compile and test OpenReason reasoning prompts from framework YAML files, then produce evidence-status-aware analysis.
---

# OpenReason Skill

Use this skill when the user asks to test, run, debug, extend, or analyze with OpenReason.

## Workflow

1. Read `CLAUDE.md`.
2. Inspect `package.json` for scripts.
3. Run:

```bash
npm run cc:smoke
```

4. Read `compiled_prompt.md`.
5. Read the target input file, usually `examples/iran-somalia.md` unless the user provides another file.
6. Produce an OpenReason-style analysis using evidence statuses.
7. If a command fails, propose the smallest patch, apply it, and rerun tests.

## Required Checks

Always check:

- Did framework validation pass?
- Did unit tests pass?
- Did TypeScript build pass?
- Was `compiled_prompt.md` generated?
- Which frameworks were selected?
- Are evidence statuses used correctly?

## Output Style

Use this structure:

1. Test result
2. Selected intents and frameworks
3. Analysis quality check
4. Problems found
5. Minimal next patch

## Evidence Rules

Do not infer speaker motive as fact. Separate direct claim, logical inference, discourse interpretation, social effect, and hypothesis.
