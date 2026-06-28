# Framework Authoring Guide

A framework is a structured description of an analytical method.

It is not a summary of an author’s biography. It is a reusable method that can be selected by OpenReason.

## Required fields

Each framework YAML file should include:

- `id`
- `name`
- `version`
- `domain`
- `purpose`
- `intents`
- `triggers`
- `anti_triggers`
- `core_concepts`
- `evidence_statuses`
- `analysis_steps`
- `decision_rules`
- `analysis_questions`
- `output_fields`
- `limitations`
- `references`

## Rules

1. Keep frameworks focused.
2. Do not add concepts that are not connected to the cited source.
3. Always include limitations.
4. Use cautious language for social and cognitive effects.
5. Add tests when changing router behavior.

## Example

See `frameworks/logic/walton.yaml`.
