import { Framework, IntentResult, ResolutionResult } from './schema.js';

export function resolveFrameworks(intent: IntentResult, frameworks: Framework[], input: string): ResolutionResult {
  const text = input.toLowerCase();
  const wanted = new Set([intent.primaryIntent, ...intent.secondaryIntents]);

  const scored = frameworks.map((framework) => {
    const intentScore = framework.intents.filter((i) => wanted.has(i)).length * 3;
    const triggerScore = framework.triggers.filter((t) => text.includes(t.toLowerCase())).length;
    const antiScore = framework.anti_triggers.filter((t) => text.includes(t.toLowerCase())).length * -5;
    return { framework, score: intentScore + triggerScore + antiScore };
  }).sort((a, b) => b.score - a.score);

  const activated = scored.filter((s) => s.score > 0).map((s) => s.framework);
  const fallback = frameworks.filter((f) => ['discourse-van-dijk', 'logic-walton', 'framing-entman'].includes(f.id));
  const final = activated.length ? activated : fallback;
  const selectedIds = new Set(final.map((f) => f.id));

  return {
    activatedFrameworks: final,
    skippedFrameworks: frameworks.filter((f) => !selectedIds.has(f.id)).map((f) => ({ id: f.id, reason: 'Not selected by current intent and trigger signals.' }))
  };
}
