# Getting Started

This guide is for people who want to try OpenReason without becoming TypeScript developers.

## Recommended path: Claude Code

OpenReason is designed so that Claude Code can operate the repository for you.

1. Clone the repository.
2. Open Claude Code inside it.
3. Ask Claude Code to read `CLAUDE.md`.
4. Ask it to analyze an example.

Example prompt for Claude Code:

```text
Read CLAUDE.md. Treat OpenReason as the analysis engine. Do not ask me to run npm commands manually. Run the smoke test and analyze examples/iran-somalia.md.
```

## What happens behind the scenes

Claude Code will run the project checks, select frameworks, generate an analysis packet, and then write a final answer using OpenReason evidence statuses.

You do not need to run npm commands manually unless you want to.

## Manual path for developers

```bash
npm install
npm run validate
npm test
npm run build
npm run analyze
```

The generated report appears under `reports/`.
