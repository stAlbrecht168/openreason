import { EvidenceStatus, EvidenceStatusSchema } from '../schema.js';

export type EvidenceStatusEntry = {
  label: EvidenceStatus;
  name: string;
  meaning: string;
  confidence: 'highest' | 'high' | 'medium' | 'low' | 'lowest';
};

export const EVIDENCE_MODEL: EvidenceStatusEntry[] = [
  { label: 'O1', name: 'Direct observation',      meaning: 'A verbatim quote, visible fact, or something directly stated in the text.', confidence: 'highest' },
  { label: 'O2', name: 'Explicit claim',           meaning: 'A position or assertion the speaker explicitly makes.',                      confidence: 'high'    },
  { label: 'L1', name: 'Logical inference',        meaning: 'Follows from the logical structure of the argument.',                        confidence: 'high'    },
  { label: 'D1', name: 'Discourse interpretation', meaning: 'How groups, relationships, or power are constructed in language.',           confidence: 'medium'  },
  { label: 'R1', name: 'Rhetorical interpretation',meaning: 'How persuasion operates through the text.',                                  confidence: 'medium'  },
  { label: 'F1', name: 'Framing interpretation',   meaning: 'What is defined as the problem, cause, or solution.',                       confidence: 'medium'  },
  { label: 'C1', name: 'Possible cognitive effect', meaning: 'How the text may affect how a reader thinks.',                             confidence: 'low'     },
  { label: 'S1', name: 'Possible social effect',   meaning: 'How the text may affect groups or social dynamics.',                        confidence: 'low'     },
  { label: 'H1', name: 'Hypothesis',               meaning: 'A plausible explanation, not proven by the text alone.',                    confidence: 'low'     },
  { label: 'X1', name: 'Speculation',              meaning: 'Weakly supported; use only if explicitly requested.',                       confidence: 'lowest'  },
];

export const EVIDENCE_LABELS: EvidenceStatus[] = EVIDENCE_MODEL.map(e => e.label);

export function isValidEvidenceStatus(value: unknown): value is EvidenceStatus {
  return EvidenceStatusSchema.safeParse(value).success;
}

export function getEvidenceEntry(label: EvidenceStatus): EvidenceStatusEntry {
  const entry = EVIDENCE_MODEL.find(e => e.label === label);
  if (!entry) throw new Error(`Unknown evidence status: ${label}`);
  return entry;
}
