# Using OpenReason with Claude Code

Claude Code is currently the easiest practical interface for OpenReason.

## Why Claude Code?

OpenReason is a repository with code, frameworks, examples, and documentation. Claude Code can read these files, run tests, update files, and produce analyses inside the project.

## Basic use

Open the repo:

```bash
cd openreason
claude
```

Then ask:

```text
Read CLAUDE.md. Use OpenReason to analyze examples/iran-somalia.md. Do not ask me to run npm manually.
```

## What Claude Code should do

- Read `CLAUDE.md`.
- Install dependencies if needed.
- Run `npm run cc:smoke`.
- Generate an analysis packet.
- Produce a final answer with evidence statuses.

## Important rule

The user should interact naturally. Claude Code should handle technical commands whenever possible.
