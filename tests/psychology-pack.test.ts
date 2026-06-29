import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { loadFrameworks } from '../src/loader.js';
import { loadPacks } from '../src/openreason/packs.js';

const PSYCHOLOGY_FRAMEWORKS = ['psychology-kahneman-tversky', 'psychology-haidt'];
const FRAMEWORKS_ROOT = 'frameworks';
const PACKS_ROOT = 'packs';

describe('Psychology Pack', () => {
  const packs = loadPacks(PACKS_ROOT);
  const pack = packs.find(p => p.id === 'psychology');

  it('psychology pack exists', () => {
    expect(pack).toBeDefined();
  });

  it('pack covers cognitive_effect_analysis capability', () => {
    expect(pack!.capabilities).toContain('cognitive_effect_analysis');
  });

  it('pack covers social_effect_analysis capability', () => {
    expect(pack!.capabilities).toContain('social_effect_analysis');
  });

  it('pack contains both psychology frameworks', () => {
    const ids = pack!.frameworks.map(f => f.id);
    for (const id of PSYCHOLOGY_FRAMEWORKS) {
      expect(ids, `pack missing: ${id}`).toContain(id);
    }
  });

  it('both frameworks are draft', () => {
    for (const fw of pack!.frameworks) {
      expect(fw.maturity, `${fw.id} should be draft`).toBe('draft');
    }
  });

  it('both frameworks have YAML files', () => {
    const frameworks = loadFrameworks(FRAMEWORKS_ROOT);
    const loadedIds = new Set(frameworks.map(f => f.id));
    for (const id of PSYCHOLOGY_FRAMEWORKS) {
      expect(loadedIds, `no YAML loaded for ${id}`).toContain(id);
    }
  });

  it('both frameworks have companion .md files', () => {
    const expected: Record<string, string> = {
      'psychology-kahneman-tversky': path.join(FRAMEWORKS_ROOT, 'psychology', 'kahneman_tversky.md'),
      'psychology-haidt': path.join(FRAMEWORKS_ROOT, 'psychology', 'haidt.md'),
    };
    for (const [id, mdPath] of Object.entries(expected)) {
      expect(fs.existsSync(mdPath), `${id} missing .md at ${mdPath}`).toBe(true);
    }
  });
});

describe('Psychology framework YAML compliance', () => {
  const frameworks = loadFrameworks(FRAMEWORKS_ROOT);
  const psychFrameworks = frameworks.filter(f => PSYCHOLOGY_FRAMEWORKS.includes(f.id));

  it('loaded both psychology frameworks', () => {
    expect(psychFrameworks.length).toBe(2);
  });

  for (const f of psychFrameworks) {
    describe(f.id, () => {
      it('has verification_status: draft', () => {
        expect(f.verification_status).toBe('draft');
      });

      it('has non-empty scope', () => {
        expect(f.scope.trim().length).toBeGreaterThan(0);
      });

      it('scope mentions what the framework is NOT for', () => {
        expect(
          f.scope.toLowerCase(),
          `${f.id} scope should say what it is not for`
        ).toMatch(/not appropriate|cannot|does not/);
      });

      it('has cognitive_effect_analysis capability', () => {
        expect(
          f.capabilities,
          `${f.id} should have cognitive_effect_analysis`
        ).toContain('cognitive_effect_analysis');
      });

      it('evidence_statuses includes O1, O2, C1, H1', () => {
        expect(f.evidence_statuses).toContain('O1');
        expect(f.evidence_statuses).toContain('O2');
        expect(f.evidence_statuses).toContain('C1');
        expect(f.evidence_statuses).toContain('H1');
      });

      it('does NOT include L1, D1, R1, or F1 (not observation/inference labels)', () => {
        // Psychology frameworks produce C1/H1, not logical inferences or discourse interpretations
        // F1 and L1 would be overclaiming for psychological effect analysis
        expect(f.evidence_statuses).not.toContain('L1');
        expect(f.evidence_statuses).not.toContain('D1');
        expect(f.evidence_statuses).not.toContain('R1');
      });

      it('all decision_rules reference [C1] evidence status', () => {
        const c1Rules = f.decision_rules.filter(r => r.includes('[C1]'));
        expect(
          c1Rules.length,
          `${f.id} has decision_rules not labelled [C1] — psychology rules must be C1`
        ).toBe(f.decision_rules.length);
      });

      it('has at least 3 limitations', () => {
        expect(
          f.limitations.length,
          `${f.id} has fewer than 3 limitations`
        ).toBeGreaterThanOrEqual(3);
      });

      it('limitations mention "does not prove intent"', () => {
        const hasIntentLimit = f.limitations.some(l =>
          l.toLowerCase().includes('intent') || l.toLowerCase().includes('prove')
        );
        expect(hasIntentLimit, `${f.id} should have a limitation about intent`).toBe(true);
      });

      it('has at least one reference with title and author', () => {
        expect(f.references.length).toBeGreaterThan(0);
        for (const ref of f.references) {
          expect(ref.title.length, `${f.id}: empty ref title`).toBeGreaterThan(0);
          expect(ref.author, `${f.id}: missing ref author`).toBeDefined();
        }
      });
    });
  }
});

describe('Psychology framework epistemic discipline', () => {
  const frameworks = loadFrameworks(FRAMEWORKS_ROOT);

  it('kahneman-tversky has WEIRD population caveat in limitations', () => {
    const f = frameworks.find(fw => fw.id === 'psychology-kahneman-tversky')!;
    const hasWEIRD = f.limitations.some(l => l.toLowerCase().includes('weird') || l.toLowerCase().includes('western'));
    expect(hasWEIRD, 'kahneman-tversky should mention WEIRD population limitation').toBe(true);
  });

  it('haidt is flagged as contested in scope', () => {
    const f = frameworks.find(fw => fw.id === 'psychology-haidt')!;
    expect(
      f.scope.toLowerCase(),
      'haidt scope should say the theory is contested'
    ).toContain('contested');
  });

  it('haidt limitations mention the theory is contested', () => {
    const f = frameworks.find(fw => fw.id === 'psychology-haidt')!;
    const hasContested = f.limitations.some(l => l.toLowerCase().includes('contested'));
    expect(hasContested, 'haidt should have a limitation stating the theory is contested').toBe(true);
  });

  it('kahneman-tversky domain is cognitive_bias', () => {
    const f = frameworks.find(fw => fw.id === 'psychology-kahneman-tversky')!;
    expect(f.domain).toBe('cognitive_bias');
  });

  it('haidt domain is moral_psychology', () => {
    const f = frameworks.find(fw => fw.id === 'psychology-haidt')!;
    expect(f.domain).toBe('moral_psychology');
  });
});

describe('Psychology framework differentiation', () => {
  const frameworks = loadFrameworks(FRAMEWORKS_ROOT);

  it('kahneman-tversky has dual-process theory as a core concept', () => {
    const f = frameworks.find(fw => fw.id === 'psychology-kahneman-tversky')!;
    expect(f.core_concepts).toContain('dual-process theory');
  });

  it('kahneman-tversky has loss aversion as a core concept', () => {
    const f = frameworks.find(fw => fw.id === 'psychology-kahneman-tversky')!;
    expect(f.core_concepts).toContain('loss aversion');
  });

  it('haidt has moral foundations as a core concept', () => {
    const f = frameworks.find(fw => fw.id === 'psychology-haidt')!;
    expect(f.core_concepts).toContain('moral foundations');
  });

  it('haidt also covers social_effect_analysis', () => {
    const f = frameworks.find(fw => fw.id === 'psychology-haidt')!;
    expect(f.capabilities).toContain('social_effect_analysis');
  });

  it('haidt includes S1 evidence status (kahneman-tversky does not)', () => {
    const haidt = frameworks.find(fw => fw.id === 'psychology-haidt')!;
    const kt = frameworks.find(fw => fw.id === 'psychology-kahneman-tversky')!;
    expect(haidt.evidence_statuses).toContain('S1');
    expect(kt.evidence_statuses).not.toContain('S1');
  });
});

describe('Psychology companion .md content', () => {
  const requiredSections = [
    '## Purpose',
    '## Scope',
    '## Capabilities provided',
    '## Workflow summary',
    '## Evidence mapping',
    '## Decision rule rationale',
    '## Worked example',
    '## Limitations',
    '## Known gaps',
    '## References',
    '## Verification record',
    '## Changelog',
  ];

  const mdFiles: Record<string, string> = {
    'psychology-kahneman-tversky': 'frameworks/psychology/kahneman_tversky.md',
    'psychology-haidt': 'frameworks/psychology/haidt.md',
  };

  for (const [id, mdPath] of Object.entries(mdFiles)) {
    const content = fs.existsSync(mdPath) ? fs.readFileSync(mdPath, 'utf8') : '';

    it(`${id}: file exists`, () => {
      expect(fs.existsSync(mdPath)).toBe(true);
    });

    for (const section of requiredSections) {
      it(`${id}: has section "${section}"`, () => {
        expect(content, `${id} missing: ${section}`).toContain(section);
      });
    }

    it(`${id}: declares draft status`, () => {
      expect(content).toContain('draft');
    });

    it(`${id}: verification record says Not yet verified`, () => {
      expect(content).toContain('Not yet verified');
    });

    it(`${id}: uses cautious language (may/possible/associated)`, () => {
      const hasCautious = content.includes(' may ') || content.includes('possible') || content.includes('associated');
      expect(hasCautious, `${id} should use cautious language`).toBe(true);
    });
  }

  it('haidt .md states theory is contested', () => {
    const content = fs.readFileSync('frameworks/psychology/haidt.md', 'utf8');
    expect(content.toLowerCase()).toContain('contested');
  });

  it('kahneman-tversky .md mentions WEIRD populations', () => {
    const content = fs.readFileSync('frameworks/psychology/kahneman_tversky.md', 'utf8');
    expect(content.toUpperCase()).toContain('WEIRD');
  });
});
