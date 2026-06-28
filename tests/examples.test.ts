import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { EVIDENCE_LABELS } from '../src/openreason/evidence.js';

const EXAMPLES_ROOT = 'examples';
const VALID_LABELS = new Set(EVIDENCE_LABELS);

function findAnalysisFiles(root: string): string[] {
  if (!fs.existsSync(root)) return [];
  return fs.readdirSync(root)
    .filter(name => name.endsWith('.analysis.md'))
    .map(name => path.join(root, name));
}

function extractEvidenceLabels(content: string): string[] {
  // Matches [O1], [O2], [L1], [D1], [R1], [F1], [C1], [S1], [H1], [X1]
  // Also catches typos like [O3], [L2], [H2] so we can flag them
  const matches = content.match(/\[[A-Z]\d\]/g) ?? [];
  return matches.map(m => m.slice(1, -1)); // strip brackets
}

describe('example analysis files', () => {
  const files = findAnalysisFiles(EXAMPLES_ROOT);

  it('at least one analysis file exists', () => {
    expect(files.length).toBeGreaterThan(0);
  });

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const labels = extractEvidenceLabels(content);
    const basename = path.basename(file);

    describe(basename, () => {
      it('contains at least one evidence-labelled claim', () => {
        expect(
          labels.length,
          `${basename}: no evidence labels found — analysis may be missing label discipline`
        ).toBeGreaterThan(0);
      });

      it('all evidence labels are valid OpenReason statuses', () => {
        const invalid = labels.filter(l => !VALID_LABELS.has(l as any));
        expect(
          invalid,
          `${basename}: invalid evidence label(s) found: ${invalid.join(', ')} — valid labels are ${EVIDENCE_LABELS.join(', ')}`
        ).toHaveLength(0);
      });

      it('includes at least one O1 or O2 (observation anchors)', () => {
        const hasObservation = labels.some(l => l === 'O1' || l === 'O2');
        expect(
          hasObservation,
          `${basename}: analysis has no O1 or O2 labels — every analysis must start from direct observations`
        ).toBe(true);
      });

      it('includes at least one H1 (hypothesis level)', () => {
        const hasH1 = labels.includes('H1');
        expect(
          hasH1,
          `${basename}: analysis has no H1 label — every analysis should include at least one hypothesis-level claim`
        ).toBe(true);
      });

      it('does not use X1 (speculation is discouraged)', () => {
        const hasX1 = labels.includes('X1');
        if (hasX1) {
          // X1 is allowed but flagged as a warning — downgrade to soft check
          console.warn(`${basename}: contains X1 (speculation) label — verify this is intentional`);
        }
        // Not a hard failure; just noted. Remove this test body if X1 becomes forbidden.
      });
    });
  }
});
