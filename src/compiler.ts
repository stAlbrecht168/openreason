import { EvidenceStatus, Framework, IntentResult } from './schema.js';

export const evidenceModel: EvidenceStatus[] = ['O1','O2','L1','D1','R1','F1','C1','S1','H1','X1'];

export function compileInstructions(input: string, intent: IntentResult, frameworks: Framework[]): string {
  const frameworkText = frameworks.map((f) => `
## ${f.name} (${f.id})
Domain: ${f.domain}
Purpose: ${f.purpose}
Use for intents: ${f.intents.join(', ')}
Core concepts: ${f.core_concepts.join(', ')}
Evidence statuses allowed: ${f.evidence_statuses.join(', ')}
Analysis steps:
${f.analysis_steps.map((s) => `- ${s}`).join('\n')}
Decision rules:
${f.decision_rules.map((r) => `- ${r}`).join('\n')}
Questions:
${f.analysis_questions.map((q) => `- ${q}`).join('\n')}
Limitations:
${f.limitations.map((l) => `- ${l}`).join('\n')}
`).join('\n');

  return `# OpenReason Analysis Instructions

You are using OpenReason as a transparent analysis engine.

## Detected intent
Primary: ${intent.primaryIntent}
Secondary: ${intent.secondaryIntents.join(', ') || 'none'}
Confidence: ${intent.confidence}
Matched signals: ${intent.matchedSignals.join(', ') || 'none'}

## Non-negotiable rules
- Do not jump from observation directly to motive.
- Separate observation, logical inference, discourse interpretation, framing, rhetorical interpretation, social effect, and hypothesis.
- Do not claim to have watched inaccessible video material.
- Do not infer hidden intent as fact.
- Every important conclusion must include an evidence status.
- Prefer cautious language for C1, S1, H1, and X1 claims.

## Evidence statuses
- O1: Direct observation.
- O2: Explicit claim made by speaker or material.
- L1: Logical inference.
- D1: Discourse interpretation.
- R1: Rhetorical interpretation.
- F1: Framing interpretation.
- C1: Possible cognitive effect.
- S1: Possible social effect.
- H1: Hypothesis.
- X1: Speculation, avoid unless explicitly requested.

## Activated frameworks
${frameworkText}

## Required output
1. Short summary.
2. Intent and resource map.
3. Claim map.
4. Evidence graph.
5. Logical analysis.
6. Discourse/rhetorical/framing analysis as selected by frameworks.
7. Possible effects.
8. Strongest counterinterpretation.
9. Confidence report.

## Input to analyze
${input}
`;
}
