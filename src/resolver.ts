import { Framework } from "./schema.js";
import { Intent } from "./router.js";

export function resolveFrameworks(frameworks: Framework[], intents: Intent[], input: string): Framework[] {
  const normalized = input.toLowerCase();
  const intentNames = new Set(intents.map((i) => i.name));

  const scored = frameworks.map((fw) => {
    let score = 0;
    for (const intent of fw.intents) if (intentNames.has(intent)) score += 5;
    for (const trigger of fw.triggers) if (normalized.includes(trigger.toLowerCase())) score += 2;
    for (const anti of fw.anti_triggers) if (normalized.includes(anti.toLowerCase())) score -= 10;
    return { fw, score };
  }).filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, 4).map((item) => item.fw);
}
