import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { loadFrameworks } from '../src/loader.js';
import { loadPacks } from '../src/openreason/packs.js';

const LOGIC_FRAMEWORKS = ['logic-walton', 'logic-toulmin', 'logic-weston', 'logic-damer'];
const FRAMEWORKS_ROOT = 'frameworks';
const PACKS_ROOT = 'packs';

describe('Logic Pack', () => {
  const packs = loadPacks(PACKS_ROOT);
  const logicPack = packs.find(p => p.id === 'logic');

  it('logic pack exists', () => {
    expect(logicPack).toBeDefined();
  });

  it('logic pack covers argument_analysis capability', () => {
    expect(logicPack!.capabilities).toContain('argument_analysis');
  });

  it('logic pack covers fallacy_detection capability', () => {
    expect(logicPack!.capabilities).toContain('fallacy_detection');
  });

  it('logic pack contains all four logic frameworks', () => {
    const ids = logicPack!.frameworks.map(f => f.id);
    for (const id of LOGIC_FRAMEWORKS) {
      expect(ids, `logic pack missing framework: ${id}`).toContain(id);
    }
  });

  it('all four logic frameworks are draft (not planned or verified)', () => {
    for (const fw of logicPack!.frameworks) {
      expect(
        fw.maturity,
        `${fw.id} should be draft, got ${fw.maturity}`
      ).toBe('draft');
    }
  });

  it('all four logic frameworks have YAML files', () => {
    const frameworks = loadFrameworks(FRAMEWORKS_ROOT);
    const loadedIds = new Set(frameworks.map(f => f.id));
    for (const id of LOGIC_FRAMEWORKS) {
      expect(loadedIds, `no YAML file loaded for ${id}`).toContain(id);
    }
  });

  it('all four logic frameworks have companion .md files', () => {
    // Map framework id to expected file path
    const expectedPaths: Record<string, string> = {
      'logic-walton': path.join(FRAMEWORKS_ROOT, 'logic', 'walton.md'),
      'logic-toulmin': path.join(FRAMEWORKS_ROOT, 'logic', 'toulmin.md'),
      'logic-weston': path.join(FRAMEWORKS_ROOT, 'logic', 'weston.md'),
      'logic-damer': path.join(FRAMEWORKS_ROOT, 'logic', 'damer.md'),
    };
    for (const [id, mdPath] of Object.entries(expectedPaths)) {
      expect(fs.existsSync(mdPath), `${id} missing companion .md at ${mdPath}`).toBe(true);
    }
  });
});

describe('Logic framework YAML compliance', () => {
  const frameworks = loadFrameworks(FRAMEWORKS_ROOT);
  const logicFrameworks = frameworks.filter(f => LOGIC_FRAMEWORKS.includes(f.id));

  it('loaded all four logic frameworks', () => {
    expect(logicFrameworks.length).toBe(4);
  });

  for (const f of logicFrameworks) {
    describe(f.id, () => {
      it('has verification_status: draft', () => {
        expect(f.verification_status).toBe('draft');
      });

      it('has non-empty scope', () => {
        expect(f.scope.trim().length).toBeGreaterThan(0);
      });

      it('has capabilities including argument_analysis or fallacy_detection', () => {
        const hasLogicCap = f.capabilities.some(c =>
          c === 'argument_analysis' || c === 'fallacy_detection'
        );
        expect(hasLogicCap, `${f.id} has no logic capabilities`).toBe(true);
      });

      it('evidence_statuses includes O1, O2, L1, H1', () => {
        expect(f.evidence_statuses).toContain('O1');
        expect(f.evidence_statuses).toContain('O2');
        expect(f.evidence_statuses).toContain('L1');
        expect(f.evidence_statuses).toContain('H1');
      });

      it('has at least 5 analysis_steps', () => {
        expect(
          f.analysis_steps.length,
          `${f.id} has fewer than 5 analysis steps`
        ).toBeGreaterThanOrEqual(5);
      });

      it('has at least 4 decision_rules', () => {
        expect(
          f.decision_rules.length,
          `${f.id} has fewer than 4 decision rules`
        ).toBeGreaterThanOrEqual(4);
      });

      it('all decision_rules reference [L1] evidence status', () => {
        const rules = f.decision_rules.filter(r => r.includes('[L1]'));
        expect(
          rules.length,
          `${f.id} has decision_rules that do not reference [L1]`
        ).toBe(f.decision_rules.length);
      });

      it('has at least 5 analysis_questions', () => {
        expect(
          f.analysis_questions.length,
          `${f.id} has fewer than 5 analysis questions`
        ).toBeGreaterThanOrEqual(5);
      });

      it('has at least 4 substantive limitations', () => {
        expect(
          f.limitations.length,
          `${f.id} has fewer than 4 limitations`
        ).toBeGreaterThanOrEqual(4);
      });

      it('has at least one reference with title and author', () => {
        expect(f.references.length).toBeGreaterThan(0);
        for (const ref of f.references) {
          expect(ref.title.length, `${f.id}: reference missing title`).toBeGreaterThan(0);
          expect(ref.author, `${f.id}: reference missing author`).toBeDefined();
          expect(ref.author!.length, `${f.id}: reference has empty author`).toBeGreaterThan(0);
        }
      });

      it('intents include logical_analysis', () => {
        expect(
          f.intents,
          `${f.id} does not include logical_analysis intent`
        ).toContain('logical_analysis');
      });
    });
  }
});

describe('Logic framework differentiation', () => {
  const frameworks = loadFrameworks(FRAMEWORKS_ROOT);
  const logicFrameworks = frameworks.filter(f => LOGIC_FRAMEWORKS.includes(f.id));

  it('walton and toulmin have different core_concepts', () => {
    const walton = logicFrameworks.find(f => f.id === 'logic-walton')!;
    const toulmin = logicFrameworks.find(f => f.id === 'logic-toulmin')!;
    const waltonConcepts = new Set(walton.core_concepts);
    const toulminConcepts = new Set(toulmin.core_concepts);
    // They should share some concepts but not be identical
    const different = [...toulminConcepts].some(c => !waltonConcepts.has(c));
    expect(different, 'Walton and Toulmin should have distinct core concepts').toBe(true);
  });

  it('toulmin has warrant as a core_concept', () => {
    const toulmin = logicFrameworks.find(f => f.id === 'logic-toulmin')!;
    expect(toulmin.core_concepts).toContain('warrant');
  });

  it('damer has informal fallacies as a core_concept', () => {
    const damer = logicFrameworks.find(f => f.id === 'logic-damer')!;
    expect(damer.core_concepts).toContain('informal fallacies');
  });

  it('damer has fallacy_detection as primary capability', () => {
    const damer = logicFrameworks.find(f => f.id === 'logic-damer')!;
    expect(damer.capabilities).toContain('fallacy_detection');
  });

  it('weston has fewer analysis_steps than walton (simpler framework)', () => {
    const walton = logicFrameworks.find(f => f.id === 'logic-walton')!;
    const weston = logicFrameworks.find(f => f.id === 'logic-weston')!;
    // Weston is intentionally the simplest; it should have fewer steps
    expect(weston.analysis_steps.length).toBeLessThanOrEqual(walton.analysis_steps.length);
  });

  it('all four frameworks have distinct ids', () => {
    const ids = logicFrameworks.map(f => f.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(4);
  });
});

describe('Logic pack companion .md content', () => {
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
    'logic-walton': 'frameworks/logic/walton.md',
    'logic-toulmin': 'frameworks/logic/toulmin.md',
    'logic-weston': 'frameworks/logic/weston.md',
    'logic-damer': 'frameworks/logic/damer.md',
  };

  for (const [id, mdPath] of Object.entries(mdFiles)) {
    describe(`${id} companion .md`, () => {
      const content = fs.existsSync(mdPath) ? fs.readFileSync(mdPath, 'utf8') : '';

      it('file exists and is non-empty', () => {
        expect(fs.existsSync(mdPath)).toBe(true);
        expect(content.length).toBeGreaterThan(0);
      });

      for (const section of requiredSections) {
        it(`contains section: ${section}`, () => {
          expect(
            content,
            `${id} companion .md is missing section: ${section}`
          ).toContain(section);
        });
      }

      it('declares verification_status: draft', () => {
        expect(
          content,
          `${id} companion .md does not declare draft verification status`
        ).toContain('draft');
      });

      it('contains Not yet verified in verification record', () => {
        expect(
          content,
          `${id} companion .md verification record does not say Not yet verified`
        ).toContain('Not yet verified');
      });
    });
  }
});
