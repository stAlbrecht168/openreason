# Developer Guide

The reference implementation is intentionally small.

## Main files

- `src/schema.ts`: framework schema and shared types.
- `src/loader.ts`: YAML loading and validation.
- `src/router.ts`: intent detection.
- `src/resolver.ts`: framework selection.
- `src/compiler.ts`: OpenReason instruction generation.
- `src/engine.ts`: deterministic analysis packet generation.
- `src/cli.ts`: CLI commands.

## Development checks

```bash
npm run validate
npm test
npm run build
npm run analyze
```

## Design principle

The CLI is not the main user interface. Claude Code is the primary interface for now. The CLI exists so Claude Code and developers can test the repository consistently.
