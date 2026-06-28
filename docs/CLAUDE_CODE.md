# Testing OpenReason in Claude Code

This guide explains how to test the OpenReason TypeScript PoC inside Claude Code.

## 1. Open the repo in Claude Code

```bash
cd /path/to/openreason
claude
```

Claude Code reads project context from `CLAUDE.md`. The official Claude Code docs describe `CLAUDE.md` as persistent project context and recommend starting there for project conventions.

## 2. Install dependencies

Inside your terminal or via Claude Code:

```bash
npm install
```

## 3. Run the full smoke test

```bash
npm run cc:smoke
```

This runs:

```bash
npm run validate
npm test
npm run build
npm run compile:example
```

Expected result:

- framework validation passes
- tests pass
- TypeScript build passes
- `compiled_prompt.md` is created

## 4. Test the compiler manually

```bash
npm run compile:example
```

Then open:

```bash
compiled_prompt.md
```

You should see:

- detected intents
- evidence model
- activated frameworks
- required output format
- the user material from `examples/iran-somalia.md`

## 5. Ask Claude Code to run the OpenReason analysis

In Claude Code, ask:

```text
Use the workflow in CLAUDE.md. Run the smoke test, read compiled_prompt.md, and then produce an OpenReason-style analysis of examples/iran-somalia.md. Keep evidence statuses explicit.
```

Claude Code should inspect the repo, run commands, and produce a report.

## 6. Use the included skill

The repo includes a project skill:

```text
.claude/skills/openreason/SKILL.md
```

Ask Claude Code:

```text
Use the OpenReason skill to compile and analyze examples/iran-somalia.md.
```

## 7. Use slash commands if available

The repo also includes project slash commands under:

```text
.claude/commands/
```

Try:

```text
/openreason-test
```

or:

```text
/openreason-analyze examples/iran-somalia.md
```

Claude Code supports custom project commands stored in `.claude/commands/`; current docs recommend `.claude/skills/<name>/SKILL.md` for the newer skill format, while continuing to support commands.

## 8. Iterative development loop

Use this loop:

```text
Change framework YAML or TypeScript
→ npm run validate
→ npm test
→ npm run build
→ npm run compile:example
→ inspect compiled_prompt.md
→ ask Claude Code for analysis quality review
→ commit
```

## 9. What to check in output

For the Iran/Somalia example, check whether the compiled prompt activates:

- discourse analysis via van Dijk
- logic analysis via Walton
- framing analysis via Entman

The final analysis should distinguish:

- direct/explicit claims (`O1`, `O2`)
- logical inferences (`L1`)
- discourse interpretations (`D1`)
- social effects (`S1`)
- hypotheses (`H1`)

## 10. Suggested Claude Code prompt

```text
You are working in the OpenReason repository.
Follow CLAUDE.md exactly.
Run npm run cc:smoke.
Then read compiled_prompt.md and examples/iran-somalia.md.
Produce a short OpenReason analysis and identify whether the compiler selected the correct frameworks.
If anything fails, propose a minimal patch and rerun the tests.
```
