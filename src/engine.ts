import fs from 'node:fs';
import path from 'node:path';
import { detectIntent } from './router.js';
import { loadFrameworks } from './loader.js';
import { resolveFrameworks } from './resolver.js';
import { compileInstructions, evidenceModel } from './compiler.js';
import { AnalysisPacket } from './schema.js';

export function createAnalysisPacket(inputPath: string): AnalysisPacket {
  const input = fs.readFileSync(inputPath, 'utf8');
  const intent = detectIntent(input);
  const frameworks = loadFrameworks();
  const resolution = resolveFrameworks(intent, frameworks, input);
  const compiledInstructions = compileInstructions(input, intent, resolution.activatedFrameworks);
  const reportMarkdown = renderDeterministicReport(inputPath, input, intent, resolution.activatedFrameworks, compiledInstructions);
  return {
    inputPath,
    input,
    intent,
    frameworks: resolution.activatedFrameworks.map((f) => f.id),
    evidenceModel,
    reportMarkdown,
    compiledInstructions
  };
}

export function writeAnalysisPacket(packet: AnalysisPacket, outPath: string): void {
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, packet.reportMarkdown, 'utf8');
}

function renderDeterministicReport(inputPath: string, input: string, intent: ReturnType<typeof detectIntent>, frameworks: ReturnType<typeof loadFrameworks>, compiled: string): string {
  const likelyContrast = /iran|iranian|iraner/i.test(input) && /somali|somalia|somalier/i.test(input);
  const frameworkList = frameworks.map((f) => `- ${f.name} (${f.id})`).join('\n');

  return `# OpenReason Analysis Packet

This is a deterministic OpenReason packet. It does not replace the final human/LLM analysis. It shows the selected intent, frameworks, evidence model, and an initial structured report scaffold.

## Input

Source: \`${inputPath}\`

## Intent and resource map

- Primary intent: **${intent.primaryIntent}**
- Secondary intents: ${intent.secondaryIntents.length ? intent.secondaryIntents.join(', ') : 'none'}
- Confidence: **${intent.confidence}**
- Matched signals: ${intent.matchedSignals.length ? intent.matchedSignals.join(', ') : 'none'}

## Activated frameworks

${frameworkList}

## Evidence model

| Status | Meaning |
|---|---|
| O1 | Direct observation |
| O2 | Explicit claim |
| L1 | Logical inference |
| D1 | Discourse interpretation |
| R1 | Rhetorical interpretation |
| F1 | Framing interpretation |
| C1 | Possible cognitive effect |
| S1 | Possible social effect |
| H1 | Hypothesis |
| X1 | Speculation |

## Initial evidence graph

${likelyContrast ? `- [O2] The input concerns a contrast between Iranians/Iran and Somalis/Somalia.
- [L1] Acceptance or praise of one group does not by itself justify rejection of another group.
- [D1] The accepted group may function as a contrast group if it is used to make another group appear less acceptable.
- [F1] The comparison may frame migration as a hierarchy of acceptable and unacceptable groups.
- [S1] This may contribute to minority splitting or conditional inclusion.
- [H1] A possible, but not proven, function is plausible deniability against accusations of generalized prejudice.` : `- [O1/O2] Extract direct quotes and explicit claims from the input.
- [L1] Identify logical inferences only after claim extraction.
- [D1/R1/F1] Apply selected frameworks only where supported by the text.
- [S1/H1] Mark possible effects and hypotheses cautiously.`}

## How Claude Code should use this packet

Claude Code should now read the original input and produce a final analysis using the compiled instructions below. It should not treat this deterministic scaffold as the final answer.

---

# Compiled OpenReason Instructions

${compiled}
`;
}
