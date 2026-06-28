# RFC-0003: Intent Router

Status: Draft  
Version: 0.1.0

## Purpose

The Intent Router determines what the user is asking for and selects relevant analytical frameworks.

## Intent Categories

- logical_analysis
- discourse_analysis
- rhetoric_analysis
- framing_analysis
- cognitive_analysis
- propaganda_analysis
- fact_checking
- debate_analysis
- social_impact_analysis

## Router Output

```yaml
primary_intent:
secondary_intents:
input_type:
domain:
activated_frameworks:
deactivated_frameworks:
reason:
confidence:
```

## Router Rule

The router should load only the frameworks needed for the user’s request.

Example:

```yaml
user_prompt: "Why are Iranians used as a contrast group against Somalis?"
primary_intent: discourse_analysis
secondary_intents:
  - logical_analysis
  - rhetoric_analysis
activated_frameworks:
  - discourse-van-dijk
  - framing-entman
  - informal-logic-walton
```
