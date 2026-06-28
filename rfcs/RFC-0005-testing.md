# RFC-0005: Testing Standard

Status: Draft  
Version: 0.1.0

## Purpose

Frameworks should include tests to check whether they are applied correctly.

## Test Types

- positive tests: framework should activate
- negative tests: framework should not activate
- routing tests: correct frameworks selected
- output tests: expected evidence status and fields appear
- regression tests: previously fixed issues do not reappear

## Test Format

```yaml
- id: test-001
  input: "I like Group A but not Group B."
  expected:
    activated_frameworks:
      - discourse-van-dijk
    detected_patterns:
      - contrastive_othering
    evidence_status:
      - O2
      - D1
```

## Negative Test Example

```yaml
- id: negative-001
  input: "2 + 2 = 4"
  expected:
    activated_frameworks: []
    reason: "No argument-analysis framework required."
```
