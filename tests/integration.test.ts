import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import { ReasoningEngine } from '../src/openreason/index.js';
import { EVIDENCE_LABELS } from '../src/openreason/evidence.js';

const EXAMPLE_FILE = 'examples/technology-regulation.md';

describe('end-to-end: technology-regulation example', () => {
  it('example file exists and is non-empty', () => {
    expect(fs.existsSync(EXAMPLE_FILE)).toBe(true);
    expect(fs.readFileSync(EXAMPLE_FILE, 'utf8').length).toBeGreaterThan(0);
  });

  describe('ReasoningEngine.analyzeFile', () => {
    const engine = new ReasoningEngine();
    const result = engine.analyzeFile(EXAMPLE_FILE);

    it('returns a plan and reportScaffold', () => {
      expect(result.plan).toBeDefined();
      expect(result.reportScaffold).toBeDefined();
    });

    it('plan input matches file content', () => {
      const fileContent = fs.readFileSync(EXAMPLE_FILE, 'utf8');
      expect(result.plan.input).toBe(fileContent);
    });

    it('activates at least one framework', () => {
      expect(result.plan.frameworks.length).toBeGreaterThan(0);
    });

    it('activates logic-walton (input contains argument-related content)', () => {
      const ids = result.plan.frameworks.map(f => f.id);
      expect(ids).toContain('logic-walton');
    });

    it('activates framing-entman (input concerns problem definition)', () => {
      const ids = result.plan.frameworks.map(f => f.id);
      expect(ids).toContain('framing-entman');
    });

    it('evidenceModel is the canonical set', () => {
      expect(result.plan.evidenceModel).toEqual(EVIDENCE_LABELS);
    });

    it('intent has a non-empty primaryIntent', () => {
      expect(result.plan.intent.primaryIntent.length).toBeGreaterThan(0);
    });

    it('plan instructions are non-empty and contain evidence status descriptions', () => {
      expect(result.plan.instructions).toContain('Evidence statuses');
      expect(result.plan.instructions).toContain('O1');
      expect(result.plan.instructions).toContain('H1');
    });
  });

  describe('reportScaffold structure', () => {
    const engine = new ReasoningEngine();
    const { reportScaffold } = engine.analyzeFile(EXAMPLE_FILE);

    it('contains all required section headings', () => {
      expect(reportScaffold).toContain('## Summary');
      expect(reportScaffold).toContain('## Intent and frameworks activated');
      expect(reportScaffold).toContain('## Claim map');
      expect(reportScaffold).toContain('## Evidence graph');
      expect(reportScaffold).toContain('## Framework findings');
      expect(reportScaffold).toContain('## Strongest counterinterpretation');
      expect(reportScaffold).toContain('## Confidence and limitations');
    });

    it('contains the evidence reference table', () => {
      expect(reportScaffold).toContain('## Evidence reference');
      expect(reportScaffold).toContain('`O1`');
      expect(reportScaffold).toContain('`H1`');
    });

    it('contains [FILL: ...] markers for Claude Code to complete', () => {
      expect(reportScaffold).toContain('[FILL:');
    });

    it('does not expose internal compiler concepts ("compileInstructions", "AnalysisPacket")', () => {
      expect(reportScaffold).not.toContain('compileInstructions');
      expect(reportScaffold).not.toContain('AnalysisPacket');
      expect(reportScaffold).not.toContain('compiledInstructions');
    });

    it('lists activated frameworks in the scaffold', () => {
      const engine2 = new ReasoningEngine();
      const result2 = engine2.analyzeFile(EXAMPLE_FILE);
      for (const f of result2.plan.frameworks) {
        expect(reportScaffold).toContain(f.id);
      }
    });

    it('includes verification_status for each framework', () => {
      expect(reportScaffold).toContain('draft');
    });
  });

  describe('CLI run command output shape', () => {
    it('analyzeFile returns plan.json-serialisable data', () => {
      const engine = new ReasoningEngine();
      const result = engine.analyzeFile(EXAMPLE_FILE);
      const planJson = JSON.stringify({
        intent: result.plan.intent,
        frameworks: result.plan.frameworks.map(f => ({
          id: f.id,
          name: f.name,
          verification_status: f.verification_status,
          evidence_statuses: f.evidence_statuses,
        })),
        evidenceModel: result.plan.evidenceModel,
      });
      expect(() => JSON.parse(planJson)).not.toThrow();
      const parsed = JSON.parse(planJson);
      expect(parsed.intent.primaryIntent).toBeDefined();
      expect(parsed.frameworks.length).toBeGreaterThan(0);
      expect(parsed.evidenceModel).toEqual(EVIDENCE_LABELS);
    });
  });
});
