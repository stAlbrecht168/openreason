import { Framework } from "./schema.js";
import { Intent } from "./router.js";

export function compilePrompt(input: string, intents: Intent[], frameworks: Framework[]): string {
  const evidenceModel = `
Evidence status model:
- O1: Direct observation
- O2: Explicit claim
- L1: Logical inference
- D1: Discourse interpretation
- R1: Rhetorical interpretation
- F1: Framing interpretation
- C1: Cognitive effect
- S1: Social effect
- H1: Hypothesis
- X1: Speculation

Rules:
- Never jump directly from quote to hypothesis.
- Separate observation, inference, interpretation, and hypothesis.
- Do not infer motive as fact.
- Mark uncertainty explicitly.
`;

  const frameworkBlocks = frameworks.map((fw) => `
## Framework: ${fw.name} (${fw.id})
Domain: ${fw.domain}
Purpose: ${fw.purpose}
Allowed evidence statuses: ${fw.evidence_statuses.join(", ")}

Core concepts:
${fw.concepts.map((c) => `- ${c}`).join("\n")}

Workflow:
${fw.workflow.map((s, i) => `${i + 1}. ${s}`).join("\n")}

Decision rules:
${fw.decision_rules.map((r) => `- ${r}`).join("\n")}

Analysis questions:
${fw.analysis_questions.map((q) => `- ${q}`).join("\n")}

Output fields:
${fw.output_fields.map((f) => `- ${f}`).join("\n")}

Limitations:
${fw.limitations.map((l) => `- ${l}`).join("\n")}
`).join("\n");

  return `# OpenReason Compiled Prompt

You are using OpenReason, a transparent reasoning framework compiler.

## Detected intents
${intents.map((i) => `- ${i.name} (score ${i.score}; matched: ${i.matched.join(", ") || "none"})`).join("\n")}

## Evidence model
${evidenceModel}

## Activated frameworks
${frameworkBlocks}

## Required output format

1. Summary
2. Intent and resource map
3. Claim map with evidence statuses
4. Evidence graph
5. Framework-based analysis
6. Social or cognitive effects, only when supported
7. Strongest counterinterpretation
8. Confidence report

For every major conclusion include:
- evidence_status
- framework_used
- confidence: high | medium | low | unknown

## User material to analyze

${input}
`;
}
