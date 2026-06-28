# RFC-0001: Evidence Model

Status: Draft  
Version: 0.1.0

## Purpose

The Evidence Model defines how analytical statements are classified according to their evidential status.

The goal is to prevent unsupported leaps from observation to interpretation.

## Evidence Status Codes

| Code | Name | Meaning |
|---|---|---|
| O1 | Direct Observation | Directly visible, audible, or quoted from material |
| O2 | Explicit Claim | A claim explicitly made by a speaker or text |
| L1 | Logical Inference | A conclusion derived from argument structure |
| D1 | Discourse Interpretation | Interpretation based on discourse analysis |
| R1 | Rhetorical Interpretation | Interpretation based on persuasion strategy |
| F1 | Framing Interpretation | Interpretation based on framing theory |
| C1 | Cognitive Interpretation | Possible psychological or bias-related effect |
| S1 | Social Effect | Possible effect on groups, institutions, or discourse |
| H1 | Hypothesis | Plausible but not directly established explanation |
| X1 | Speculation | Weakly supported or uncertain interpretation |

## Evidence Chain

Analyses should follow this order:

```text
Observation → Claim → Evidence → Inference → Interpretation → Hypothesis
```

Do not jump directly from O1/O2 to H1/X1.

## Required Practice

Every major conclusion should include:

```yaml
statement:
evidence_status:
framework:
confidence:
source_reference:
```

## Confidence Is Separate

Evidence status is not the same as confidence.

Example:

```yaml
statement: "The speaker explicitly rejects Group B."
evidence_status: O2
confidence: high
```

```yaml
statement: "The speaker may be using Group A to deflect accusations of prejudice."
evidence_status: H1
confidence: low
```
