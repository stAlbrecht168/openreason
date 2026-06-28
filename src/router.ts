export type Intent = {
  name: string;
  score: number;
  matched: string[];
};

const INTENT_KEYWORDS: Record<string, string[]> = {
  discourse_analysis: ["gruppe", "gruppen", "minderheit", "iraner", "somalier", "migranten", "muslime", "rassismus", "kontrast", "othering", "diskurs"],
  logical_analysis: ["logik", "argument", "fehlschluss", "fallacy", "schlussfolgerung", "prämisse", "begründung", "rationalwiki"],
  framing_analysis: ["frame", "framing", "narrativ", "problem", "ursache", "lösung", "deutung"],
  rhetoric_analysis: ["rhetorik", "überzeugt", "persuasiv", "strategie", "sprache"],
  cognitive_analysis: ["bias", "heuristik", "psychologisch", "intuition", "gefühl"],
  fact_checking: ["wahr", "falsch", "prüfe", "quelle", "beleg", "fact check"]
};

export function detectIntents(input: string): Intent[] {
  const normalized = input.toLowerCase();
  const intents = Object.entries(INTENT_KEYWORDS).map(([name, keywords]) => {
    const matched = keywords.filter((kw) => normalized.includes(kw));
    return { name, score: matched.length, matched };
  }).filter((intent) => intent.score > 0)
    .sort((a, b) => b.score - a.score);

  if (intents.length === 0) {
    return [{ name: "general_analysis", score: 1, matched: [] }];
  }
  return intents;
}
