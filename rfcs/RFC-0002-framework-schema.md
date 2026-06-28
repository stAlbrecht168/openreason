# RFC-0002: Framework Schema

Status: Draft  
Version: 0.1.0

## Purpose

A framework is a structured representation of an analytical method.

A framework is not an opinion, ideology, or generic prompt.

It must define:

- purpose
- scope
- triggers
- concepts
- workflow
- decision rules
- outputs
- limitations
- references
- tests

## Required Fields

```yaml
id:
name:
version:
author:
domain:
purpose:
status:
intents:
triggers:
anti_triggers:
core_concepts:
analysis_steps:
decision_rules:
analysis_questions:
output_fields:
limitations:
references:
```

## Status Values

```yaml
status:
  - draft
  - reviewed
  - verified
  - deprecated
```

## Design Rule

A framework should describe what it is allowed to conclude.

For example, an informal logic framework may output:

- premises
- conclusions
- fallacies
- burden-of-proof issues

It should not output:

- psychological motives
- social effects
- discourse hierarchies

unless those are part of a routed secondary framework.
