# Architecture

OpenReason has two layers:

1. A conceptual layer: evidence statuses, frameworks, reasoning rules.
2. A reference implementation: TypeScript files that load frameworks and create analysis packets.

## Pipeline

```text
Input
→ Intent Router
→ Framework Resolver
→ Instruction Compiler
→ Analysis Packet
→ Human/LLM Final Analysis
```

## Why an analysis packet?

The analysis packet makes the framework selection and evidence model visible. Claude Code or another LLM can then produce the final prose analysis while preserving the selected framework logic.

## Modules

- `src/router.ts`: detects user intent.
- `src/loader.ts`: loads framework YAML files.
- `src/resolver.ts`: selects frameworks.
- `src/compiler.ts`: creates OpenReason analysis instructions.
- `src/engine.ts`: creates an analysis packet.
- `src/cli.ts`: exposes validation, inspection, compilation, and analysis commands.
