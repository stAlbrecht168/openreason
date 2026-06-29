import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { loadFrameworks } from '../src/loader.js';
import { loadPacks } from '../src/openreason/packs.js';

const PROPAGANDA_FRAMEWORKS = ['propaganda-ipa', 'propaganda-jowett-odonnell'];
const FRAMEWORKS_ROOT = 'frameworks';
const PACKS_ROOT = 'packs';

describe('Propaganda Pack', () => {
  const packs = loadPacks(PACKS_ROOT);
  const pack = packs.find(p => p.id === 'propaganda');

  it('propaganda pack exists', () => {
    expect(pack).toBeDefined();
  });

  it('pack covers propaganda_analysis capability', () => {
    expect(pack!.capabilities).toContain('propaganda_analysis');
  });

  it('pack covers social_effect_analysis capability', () => {
    expect(pack!.capabilities).toContain('social_effect_analysis');
  });

  it('pack contains both propaganda frameworks', () => {
    const ids = pack!.frameworks.map(f => f.id);
    for (const id of PROPAGANDA_FRAMEWORKS) {
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
    for (const id of PROPAGANDA_FRAMEWORKS) {
      expect(loadedIds, `no YAML loaded for ${id}`).toContain(id);
    }
  });

  it('both frameworks have companion .md files', () => {
    const expected: Record<string, string> = {
      'propaganda-ipa': path.join(FRAMEWORKS_ROOT, 'propaganda', 'ipa.md'),
      'propaganda-jowett-odonnell': path.join(FRAMEWORKS_ROOT, 'propaganda', 'jowett_odonnell.md'),
    };
    for (const [id, mdPath] of Object.entries(expected)) {
      expect(fs.existsSync(mdPath), `${id} missing .md at ${mdPath}`).toBe(true);
    }
  });
});

describe('Propaganda framework YAML compliance', () => {
  const frameworks = loadFrameworks(FRAMEWORKS_ROOT);
  const propFrameworks = frameworks.filter(f => PROPAGANDA_FRAMEWORKS.includes(f.id));

  it('loaded both propaganda frameworks', () => {
    expect(propFrameworks.length).toBe(2);
  });

  for (const f of propFrameworks) {
    describe(f.id, () => {
      it('has verification_status: draft', () => {
        expect(f.verification_status).toBe('draft');
      });

      it('has non-empty scope', () => {
        expect(f.scope.trim().length).toBeGreaterThan(0);
      });

      it('scope says what framework is NOT for', () => {
        expect(f.scope.toLowerCase()).toMatch(/not appropriate|cannot|does not/);
      });

      it('has propaganda_analysis capability', () => {
        expect(f.capabilities).toContain('propaganda_analysis');
      });

      it('evidence_statuses includes O1, O2, H1', () => {
        expect(f.evidence_statuses).toContain('O1');
        expect(f.evidence_statuses).toContain('O2');
        expect(f.evidence_statuses).toContain('H1');
      });

      it('has at least 4 analysis_steps', () => {
        expect(f.analysis_steps.length).toBeGreaterThanOrEqual(4);
      });

      it('has at least 4 decision_rules', () => {
        expect(f.decision_rules.length).toBeGreaterThanOrEqual(4);
      });

      it('has at least 4 limitations', () => {
        expect(f.limitations.length).toBeGreaterThanOrEqual(4);
      });

      it('limitations state that propaganda classification requires H1', () => {
        const hasIntentLimit = f.limitations.some(l =>
          l.toLowerCase().includes('intent') || l.toLowerCase().includes('h1') || l.toLowerCase().includes('classify')
        );
        expect(hasIntentLimit, `${f.id} should have limitation about intent/classification`).toBe(true);
      });

      it('has at least one reference with title and author', () => {
        expect(f.references.length).toBeGreaterThan(0);
        for (const ref of f.references) {
          expect(ref.title.length).toBeGreaterThan(0);
          expect(ref.author).toBeDefined();
        }
      });
    });
  }
});

describe('Propaganda framework epistemic discipline', () => {
  const frameworks = loadFrameworks(FRAMEWORKS_ROOT);

  it('propaganda-ipa domain is propaganda_analysis', () => {
    const f = frameworks.find(fw => fw.id === 'propaganda-ipa')!;
    expect(f.domain).toBe('propaganda_analysis');
  });

  it('propaganda-jowett-odonnell domain is propaganda_analysis', () => {
    const f = frameworks.find(fw => fw.id === 'propaganda-jowett-odonnell')!;
    expect(f.domain).toBe('propaganda_analysis');
  });

  it('propaganda-ipa decision_rules use R1 (device identification is rhetorical)', () => {
    const f = frameworks.find(fw => fw.id === 'propaganda-ipa')!;
    const r1Rules = f.decision_rules.filter(r => r.includes('[R1]'));
    expect(r1Rules.length, 'IPA rules should be labelled R1').toBeGreaterThan(0);
  });

  it('propaganda-jowett-odonnell decision_rules include H1 for propaganda classification', () => {
    const f = frameworks.find(fw => fw.id === 'propaganda-jowett-odonnell')!;
    const h1Rules = f.decision_rules.filter(r => r.includes('[H1]'));
    expect(h1Rules.length, 'Jowett-ODonnell should have at least one H1 rule for propaganda classification').toBeGreaterThan(0);
  });

  it('propaganda-ipa includes R1 in evidence_statuses', () => {
    const f = frameworks.find(fw => fw.id === 'propaganda-ipa')!;
    expect(f.evidence_statuses).toContain('R1');
  });

  it('propaganda-jowett-odonnell includes D1 and F1 (institutional and framing analysis)', () => {
    const f = frameworks.find(fw => fw.id === 'propaganda-jowett-odonnell')!;
    expect(f.evidence_statuses).toContain('D1');
    expect(f.evidence_statuses).toContain('F1');
  });

  it('propaganda-ipa has all seven devices as core_concepts', () => {
    const f = frameworks.find(fw => fw.id === 'propaganda-ipa')!;
    const devices = ['name calling', 'glittering generalities', 'transfer', 'testimonial', 'plain folks', 'card stacking', 'bandwagon'];
    for (const device of devices) {
      expect(f.core_concepts, `IPA missing device: ${device}`).toContain(device);
    }
  });

  it('propaganda-jowett-odonnell has ten-step analysis as a core concept', () => {
    const f = frameworks.find(fw => fw.id === 'propaganda-jowett-odonnell')!;
    expect(f.core_concepts).toContain('ten-step analysis');
  });

  it('propaganda-jowett-odonnell has definition of propaganda as a core concept', () => {
    const f = frameworks.find(fw => fw.id === 'propaganda-jowett-odonnell')!;
    expect(f.core_concepts).toContain('definition of propaganda');
  });
});

describe('Propaganda companion .md content', () => {
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
    'propaganda-ipa': 'frameworks/propaganda/ipa.md',
    'propaganda-jowett-odonnell': 'frameworks/propaganda/jowett_odonnell.md',
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

    it(`${id}: states verification_status draft`, () => {
      expect(content).toContain('draft');
    });

    it(`${id}: verification record says Not yet verified`, () => {
      expect(content).toContain('Not yet verified');
    });

    it(`${id}: states propaganda classification requires H1`, () => {
      expect(
        content.toLowerCase(),
        `${id} should state that propaganda classification is H1`
      ).toMatch(/h1|hypothesis|intent cannot/);
    });
  }

  it('IPA .md documents all seven devices', () => {
    const content = fs.readFileSync('frameworks/propaganda/ipa.md', 'utf8');
    const devices = ['Name Calling', 'Glittering Generalities', 'Transfer', 'Testimonial', 'Plain Folks', 'Card Stacking', 'Bandwagon'];
    for (const device of devices) {
      expect(content, `IPA .md missing device: ${device}`).toContain(device);
    }
  });

  it('Jowett-ODonnell .md documents the ten-step method', () => {
    const content = fs.readFileSync('frameworks/propaganda/jowett_odonnell.md', 'utf8');
    expect(content).toContain('ten-step');
    expect(content.toLowerCase()).toContain('ideology');
    expect(content.toLowerCase()).toContain('propagandist');
    expect(content.toLowerCase()).toContain('target audience');
  });

  it('Jowett-ODonnell .md states the definition of propaganda', () => {
    const content = fs.readFileSync('frameworks/propaganda/jowett_odonnell.md', 'utf8');
    expect(content).toContain('deliberate');
    expect(content).toContain('systematic');
  });
});
