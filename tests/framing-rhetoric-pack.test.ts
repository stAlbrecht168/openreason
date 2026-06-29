import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { loadFrameworks } from '../src/loader.js';
import { loadPacks } from '../src/openreason/packs.js';

const FRAMING_RHETORIC_FRAMEWORKS = [
  'framing-entman',
  'framing-lakoff',
  'rhetoric-aristotle',
  'rhetoric-perelman',
];
const FRAMEWORKS_ROOT = 'frameworks';
const PACKS_ROOT = 'packs';

describe('Framing-Rhetoric Pack', () => {
  const packs = loadPacks(PACKS_ROOT);
  const pack = packs.find(p => p.id === 'framing-rhetoric');

  it('framing-rhetoric pack exists', () => {
    expect(pack).toBeDefined();
  });

  it('pack covers framing_analysis capability', () => {
    expect(pack!.capabilities).toContain('framing_analysis');
  });

  it('pack covers rhetoric_analysis capability', () => {
    expect(pack!.capabilities).toContain('rhetoric_analysis');
  });

  it('pack contains all four frameworks', () => {
    const ids = pack!.frameworks.map(f => f.id);
    for (const id of FRAMING_RHETORIC_FRAMEWORKS) {
      expect(ids, `pack missing: ${id}`).toContain(id);
    }
  });

  it('all four frameworks are draft', () => {
    for (const fw of pack!.frameworks) {
      expect(fw.maturity, `${fw.id} should be draft`).toBe('draft');
    }
  });

  it('all four frameworks have YAML files', () => {
    const frameworks = loadFrameworks(FRAMEWORKS_ROOT);
    const loadedIds = new Set(frameworks.map(f => f.id));
    for (const id of FRAMING_RHETORIC_FRAMEWORKS) {
      expect(loadedIds, `no YAML loaded for ${id}`).toContain(id);
    }
  });

  it('all four frameworks have companion .md files', () => {
    const paths: Record<string, string> = {
      'framing-entman': path.join(FRAMEWORKS_ROOT, 'framing', 'entman.md'),
      'framing-lakoff': path.join(FRAMEWORKS_ROOT, 'framing', 'lakoff.md'),
      'rhetoric-aristotle': path.join(FRAMEWORKS_ROOT, 'rhetoric', 'aristotle.md'),
      'rhetoric-perelman': path.join(FRAMEWORKS_ROOT, 'rhetoric', 'perelman.md'),
    };
    for (const [id, mdPath] of Object.entries(paths)) {
      expect(fs.existsSync(mdPath), `${id} missing .md at ${mdPath}`).toBe(true);
    }
  });
});

describe('Framing-Rhetoric framework YAML compliance', () => {
  const frameworks = loadFrameworks(FRAMEWORKS_ROOT);
  const packFrameworks = frameworks.filter(f => FRAMING_RHETORIC_FRAMEWORKS.includes(f.id));

  it('loaded all four frameworks', () => {
    expect(packFrameworks.length).toBe(4);
  });

  for (const f of packFrameworks) {
    describe(f.id, () => {
      it('has verification_status: draft', () => {
        expect(f.verification_status).toBe('draft');
      });

      it('has non-empty scope', () => {
        expect(f.scope.trim().length).toBeGreaterThan(0);
      });

      it('has at least one framing or rhetoric capability', () => {
        const hasPackCap = f.capabilities.some(c =>
          c === 'framing_analysis' || c === 'rhetoric_analysis'
        );
        expect(hasPackCap, `${f.id} has no framing/rhetoric capability`).toBe(true);
      });

      it('evidence_statuses includes O1, O2, H1', () => {
        expect(f.evidence_statuses).toContain('O1');
        expect(f.evidence_statuses).toContain('O2');
        expect(f.evidence_statuses).toContain('H1');
      });

      it('has at least 4 analysis_steps', () => {
        expect(f.analysis_steps.length, `${f.id} has fewer than 4 steps`).toBeGreaterThanOrEqual(4);
      });

      it('has at least 4 decision_rules', () => {
        expect(f.decision_rules.length, `${f.id} has fewer than 4 rules`).toBeGreaterThanOrEqual(4);
      });

      it('has at least 4 analysis_questions', () => {
        expect(f.analysis_questions.length, `${f.id} has fewer than 4 questions`).toBeGreaterThanOrEqual(4);
      });

      it('has at least 3 limitations', () => {
        expect(f.limitations.length, `${f.id} has fewer than 3 limitations`).toBeGreaterThanOrEqual(3);
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

describe('Framing frameworks use F1 evidence status', () => {
  const frameworks = loadFrameworks(FRAMEWORKS_ROOT);

  it('framing-entman includes F1 in evidence_statuses', () => {
    const f = frameworks.find(fw => fw.id === 'framing-entman')!;
    expect(f.evidence_statuses).toContain('F1');
  });

  it('framing-lakoff includes F1 in evidence_statuses', () => {
    const f = frameworks.find(fw => fw.id === 'framing-lakoff')!;
    expect(f.evidence_statuses).toContain('F1');
  });

  it('framing-entman decision_rules reference [F1]', () => {
    const f = frameworks.find(fw => fw.id === 'framing-entman')!;
    const f1Rules = f.decision_rules.filter(r => r.includes('[F1]'));
    expect(f1Rules.length).toBeGreaterThan(0);
  });

  it('framing-lakoff decision_rules reference [F1]', () => {
    const f = frameworks.find(fw => fw.id === 'framing-lakoff')!;
    const f1Rules = f.decision_rules.filter(r => r.includes('[F1]'));
    expect(f1Rules.length).toBeGreaterThan(0);
  });
});

describe('Rhetoric frameworks use R1 evidence status', () => {
  const frameworks = loadFrameworks(FRAMEWORKS_ROOT);

  it('rhetoric-aristotle includes R1 in evidence_statuses', () => {
    const f = frameworks.find(fw => fw.id === 'rhetoric-aristotle')!;
    expect(f.evidence_statuses).toContain('R1');
  });

  it('rhetoric-perelman includes R1 in evidence_statuses', () => {
    const f = frameworks.find(fw => fw.id === 'rhetoric-perelman')!;
    expect(f.evidence_statuses).toContain('R1');
  });

  it('rhetoric-aristotle decision_rules reference [R1]', () => {
    const f = frameworks.find(fw => fw.id === 'rhetoric-aristotle')!;
    const r1Rules = f.decision_rules.filter(r => r.includes('[R1]'));
    expect(r1Rules.length).toBeGreaterThan(0);
  });

  it('rhetoric-perelman decision_rules reference [R1]', () => {
    const f = frameworks.find(fw => fw.id === 'rhetoric-perelman')!;
    const r1Rules = f.decision_rules.filter(r => r.includes('[R1]'));
    expect(r1Rules.length).toBeGreaterThan(0);
  });
});

describe('Framework differentiation', () => {
  const frameworks = loadFrameworks(FRAMEWORKS_ROOT);

  it('Entman has problem_definition as an output field', () => {
    const f = frameworks.find(fw => fw.id === 'framing-entman')!;
    expect(f.output_fields).toContain('problem_definition');
  });

  it('Lakoff has conceptual metaphors as an output field', () => {
    const f = frameworks.find(fw => fw.id === 'framing-lakoff')!;
    expect(f.output_fields).toContain('conceptual_metaphors');
  });

  it('Aristotle has enthymeme as a core concept', () => {
    const f = frameworks.find(fw => fw.id === 'rhetoric-aristotle')!;
    expect(f.core_concepts).toContain('enthymeme');
  });

  it('Perelman has dissociation as a core concept', () => {
    const f = frameworks.find(fw => fw.id === 'rhetoric-perelman')!;
    expect(f.core_concepts).toContain('dissociation');
  });

  it('Perelman has universal audience as a core concept', () => {
    const f = frameworks.find(fw => fw.id === 'rhetoric-perelman')!;
    expect(f.core_concepts).toContain('universal audience');
  });

  it('Lakoff has conceptual metaphor as a core concept', () => {
    const f = frameworks.find(fw => fw.id === 'framing-lakoff')!;
    expect(f.core_concepts).toContain('conceptual metaphor');
  });

  it('Lakoff includes C1 for cognitive effects', () => {
    const f = frameworks.find(fw => fw.id === 'framing-lakoff')!;
    expect(f.evidence_statuses).toContain('C1');
  });

  it('Perelman covers both framing_analysis and rhetoric_analysis capabilities', () => {
    const f = frameworks.find(fw => fw.id === 'rhetoric-perelman')!;
    expect(f.capabilities).toContain('rhetoric_analysis');
    expect(f.capabilities).toContain('framing_analysis');
  });
});

describe('Complementarity example', () => {
  it('complementarity example file exists', () => {
    expect(fs.existsSync('examples/political-speech-framing.md')).toBe(true);
  });

  it('complementarity example mentions all four frameworks by name', () => {
    const content = fs.readFileSync('examples/political-speech-framing.md', 'utf8');
    expect(content).toContain('Entman');
    expect(content).toContain('Lakoff');
    expect(content).toContain('Aristotle');
    expect(content).toContain('Perelman');
  });

  it('complementarity example uses evidence labels', () => {
    const content = fs.readFileSync('examples/political-speech-framing.md', 'utf8');
    expect(content).toContain('[F1]');
    expect(content).toContain('[R1]');
    expect(content).toContain('[H1]');
  });

  it('complementarity example has a section explaining what each framework uniquely provides', () => {
    const content = fs.readFileSync('examples/political-speech-framing.md', 'utf8');
    expect(content).toContain('uniquely provides');
  });
});

describe('Companion .md section completeness', () => {
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
    'framing-entman': 'frameworks/framing/entman.md',
    'framing-lakoff': 'frameworks/framing/lakoff.md',
    'rhetoric-aristotle': 'frameworks/rhetoric/aristotle.md',
    'rhetoric-perelman': 'frameworks/rhetoric/perelman.md',
  };

  for (const [id, mdPath] of Object.entries(mdFiles)) {
    const content = fs.existsSync(mdPath) ? fs.readFileSync(mdPath, 'utf8') : '';

    it(`${id}: file exists`, () => {
      expect(fs.existsSync(mdPath)).toBe(true);
    });

    for (const section of requiredSections) {
      it(`${id}: has section "${section}"`, () => {
        expect(content, `${id} missing section: ${section}`).toContain(section);
      });
    }

    it(`${id}: declares draft status`, () => {
      expect(content).toContain('draft');
    });

    it(`${id}: verification record says Not yet verified`, () => {
      expect(content).toContain('Not yet verified');
    });
  }
});
