import { z } from "zod";

export const EvidenceStatusSchema = z.enum([
  "O1", "O2", "L1", "D1", "R1", "F1", "C1", "S1", "H1", "X1"
]);

export const FrameworkSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  version: z.string().min(1),
  domain: z.string().min(1),
  purpose: z.string().min(1),
  intents: z.array(z.string()).min(1),
  triggers: z.array(z.string()).default([]),
  anti_triggers: z.array(z.string()).default([]),
  evidence_statuses: z.array(EvidenceStatusSchema).min(1),
  concepts: z.array(z.string()).min(1),
  workflow: z.array(z.string()).min(1),
  decision_rules: z.array(z.string()).min(1),
  analysis_questions: z.array(z.string()).min(1),
  output_fields: z.array(z.string()).min(1),
  limitations: z.array(z.string()).min(1),
  references: z.array(z.object({
    title: z.string().min(1),
    author: z.string().optional(),
    concept: z.string().optional(),
    note: z.string().optional()
  })).min(1)
});

export type EvidenceStatus = z.infer<typeof EvidenceStatusSchema>;
export type Framework = z.infer<typeof FrameworkSchema>;
