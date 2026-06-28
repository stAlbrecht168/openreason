import { detectIntent } from '../router.js';
import { loadFrameworks } from '../loader.js';
import { resolveFrameworks } from '../resolver.js';
import { compileInstructions } from '../compiler.js';
import { AnalysisPlan } from '../schema.js';
import { EVIDENCE_LABELS } from './evidence.js';

export function buildAnalysisPlan(input: string, frameworksRoot = 'frameworks'): AnalysisPlan {
  const intent = detectIntent(input);
  const frameworks = loadFrameworks(frameworksRoot);
  const resolution = resolveFrameworks(intent, frameworks, input);
  const instructions = compileInstructions(input, intent, resolution.activatedFrameworks);

  return {
    input,
    intent,
    frameworks: resolution.activatedFrameworks,
    evidenceModel: EVIDENCE_LABELS,
    instructions,
  };
}
