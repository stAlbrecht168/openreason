# Developer Guide

This guide explains how the TypeScript PoC is structured.

## Main commands

```bash
npm run validate
npm test
npm run build
npm run compile:example
npm run cc:smoke
```

## Source files

```text
src/schema.ts      Framework schema with Zod
src/loader.ts      Loads and validates YAML frameworks
src/router.ts      Detects user intent from input text
src/resolver.ts    Selects matching frameworks
src/compiler.ts    Creates the compiled prompt
src/cli.ts         Command-line interface
```

## Framework files

Frameworks live in:

```text
frameworks/<domain>/<framework>.yaml
```

Each framework must include:

- id
- name
- version
- domain
- purpose
- intents
- triggers
- anti_triggers
- evidence_statuses
- concepts
- workflow
- decision_rules
- analysis_questions
- output_fields
- limitations
- references

## Adding a new framework

1. Copy an existing YAML file.
2. Change `id`, `name`, `domain`, and `purpose`.
3. Add relevant intents and triggers.
4. Add concepts, workflow, and decision rules.
5. Add limitations.
6. Run:

```bash
npm run validate
npm test
npm run compile:example
```

## Design principle

The compiler should remain model-independent.

It should produce a compiled prompt. Provider-specific API integrations should be added later as separate modules.
