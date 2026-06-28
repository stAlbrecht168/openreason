import { buildAnalysisPlan } from './planner.js';
import { AnalysisResult } from '../schema.js';

export class ReasoningEngine {
  private readonly frameworksRoot: string;

  constructor(frameworksRoot = 'frameworks') {
    this.frameworksRoot = frameworksRoot;
  }

  analyze(input: string): AnalysisResult {
    const plan = buildAnalysisPlan(input, this.frameworksRoot);

    const frameworkList = plan.frameworks
      .map(f => `- ${f.name} (${f.id}) [${f.verification_status}]`)
      .join('\n');

    const reportScaffold = [
      '## OpenReason Analysis',
      '',
      '### Summary',
      '<!-- One paragraph: what is the material and what analytical lens was applied. -->',
      '',
      '### Intent and frameworks',
      `- Detected intent: **${plan.intent.primaryIntent}**`,
      `- Confidence: **${plan.intent.confidence}**`,
      plan.intent.secondaryIntents.length
        ? `- Secondary intents: ${plan.intent.secondaryIntents.join(', ')}`
        : '- Secondary intents: none',
      '',
      '**Frameworks activated:**',
      frameworkList,
      '',
      '### Claim map',
      '<!-- List O1/O2 items only — direct quotes and explicit claims. -->',
      '',
      '### Evidence graph',
      '<!-- Build upward from O1/O2. Each line: [label] claim or interpretation. -->',
      '',
      '### Framework findings',
      ...plan.frameworks.map(f => [
        `#### ${f.name}`,
        ...f.analysis_questions.map(q => `- ${q}`),
        '',
      ].join('\n')),
      '',
      '### Strongest counterinterpretation',
      '<!-- What is the most plausible alternative reading? -->',
      '',
      '### Confidence and limitations',
      '<!-- What cannot this analysis determine? What evidence is missing? -->',
    ].join('\n');

    return { plan, reportScaffold };
  }
}

export { buildAnalysisPlan } from './planner.js';
export { EVIDENCE_MODEL, EVIDENCE_LABELS, isValidEvidenceStatus, getEvidenceEntry } from './evidence.js';
export type { EvidenceStatusEntry } from './evidence.js';
