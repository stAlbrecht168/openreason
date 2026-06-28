# RFC-0004: Verification Workflow

Status: Draft  
Version: 0.1.0

## Purpose

Framework modules must be checked against original sources or documented secondary sources.

The goal is to avoid fictional or distorted theory summaries.

## Verification Levels

| Status | Meaning |
|---|---|
| draft | Created but not checked |
| reviewed | Checked for internal consistency |
| verified | Checked against source material |
| source-mapped | Individual rules mapped to sources |

## Recommended Files

Each framework package should eventually contain:

```text
framework.yaml
source-map.yaml
verification.md
tests.yaml
examples.yaml
limitations.md
changelog.md
```

## Verification Questions

- Does the source actually support the concept?
- Is the concept renamed or simplified accurately?
- Are limitations stated?
- Are rules too broad?
- Are examples faithful to the framework?

## Source Map Example

```yaml
rule_id: walton-analogy-001
rule: "If analogy is used, compare relevant similarities and differences."
source:
  work: "Argumentation Schemes"
  section: "Argument from Analogy"
  concept: "critical questions"
verification_status: verified
```
