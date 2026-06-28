import { IntentResult } from './schema.js';

const intentSignals: Record<string, string[]> = {
  discourse_analysis: ['group', 'minority', 'migrant', 'immigrant', 'race', 'ethnic', 'religion', 'muslim', 'iran', 'somali', 'othering', 'contrast', 'hierarchy'],
  logical_analysis: ['argument', 'logic', 'fallacy', 'premise', 'conclusion', 'reasoning', 'valid', 'proof'],
  framing_analysis: ['frame', 'framing', 'narrative', 'problem', 'blame', 'solution', 'threat'],
  rhetoric_analysis: ['rhetoric', 'persuasive', 'persuasion', 'speech', 'emotion', 'credibility', 'ethos', 'pathos', 'logos'],
  fact_checking: ['true', 'false', 'verify', 'fact check', 'source', 'evidence'],
};

export function detectIntent(input: string): IntentResult {
  const text = input.toLowerCase();
  const scores = Object.entries(intentSignals).map(([intent, signals]) => {
    const matched = signals.filter((s) => text.includes(s));
    return { intent, score: matched.length, matched };
  }).sort((a, b) => b.score - a.score);

  const top = scores[0];
  const secondary = scores.slice(1).filter((s) => s.score > 0).map((s) => s.intent);
  const confidence = top.score >= 3 ? 'high' : top.score >= 1 ? 'medium' : 'low';
  const primaryIntent = top.score > 0 ? top.intent : 'general_analysis';
  const matchedSignals = scores.flatMap((s) => s.matched);

  return { primaryIntent, secondaryIntents: secondary, matchedSignals, confidence };
}
