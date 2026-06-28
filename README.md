# OpenReason Spec

OpenReason is an open specification for transparent, testable, and source-grounded reasoning frameworks for LLMs.

The goal is to make argument analysis, rhetorical analysis, discourse analysis, framing analysis, and related methods reproducible and inspectable.

OpenReason is not a prompt collection. It is a specification for representing analytical frameworks as structured, versioned, validated resources.

## Core Ideas

- Every framework should have a documented purpose and scope.
- Every analytical rule should be traceable to a source or explicit design decision.
- Every conclusion should expose its evidence status.
- Observation, inference, interpretation, hypothesis, and speculation must be separated.
- Frameworks should be testable through gold-standard examples.

## Repository Structure

```text
openreason-spec/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
├── ROADMAP.md
├── rfcs/
├── schemas/
├── examples/
└── validators/
```

## Current Version

Version: `0.1.0-draft`

This repository currently defines the initial specification draft:

- RFC-0001: Evidence Model
- RFC-0002: Framework Schema
- RFC-0003: Intent Router
- RFC-0004: Verification Workflow
- RFC-0005: Testing Standard

## Quick Start

Validate the example framework:

```bash
python validators/validate_framework.py examples/walton.framework.yaml schemas/framework.schema.yaml
```

## Planned Repositories

- `openreason-spec` — standards and schemas
- `openreason-frameworks` — verified framework packages
- `openreason-engine` — software that loads, validates, and applies frameworks
- `openreason-mcp` — MCP server for repository and framework operations

## Motto

Transparent reasoning, grounded in documented analytical frameworks.
