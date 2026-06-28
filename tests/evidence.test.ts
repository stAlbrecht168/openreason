import { describe, it, expect } from 'vitest';
import {
  EVIDENCE_MODEL,
  EVIDENCE_LABELS,
  isValidEvidenceStatus,
  getEvidenceEntry,
} from '../src/openreason/evidence.js';

describe('EVIDENCE_MODEL', () => {
  it('contains exactly 10 entries', () => {
    expect(EVIDENCE_MODEL).toHaveLength(10);
  });

  it('starts with O1 and ends with X1', () => {
    expect(EVIDENCE_MODEL[0].label).toBe('O1');
    expect(EVIDENCE_MODEL[9].label).toBe('X1');
  });

  it('every entry has a non-empty name and meaning', () => {
    for (const entry of EVIDENCE_MODEL) {
      expect(entry.name.length).toBeGreaterThan(0);
      expect(entry.meaning.length).toBeGreaterThan(0);
    }
  });

  it('every entry has a valid confidence level', () => {
    const levels = new Set(['highest', 'high', 'medium', 'low', 'lowest']);
    for (const entry of EVIDENCE_MODEL) {
      expect(levels.has(entry.confidence)).toBe(true);
    }
  });
});

describe('EVIDENCE_LABELS', () => {
  it('is the ordered list of labels', () => {
    expect(EVIDENCE_LABELS).toEqual(['O1','O2','L1','D1','R1','F1','C1','S1','H1','X1']);
  });
});

describe('isValidEvidenceStatus', () => {
  it('accepts all ten valid labels', () => {
    for (const label of EVIDENCE_LABELS) {
      expect(isValidEvidenceStatus(label)).toBe(true);
    }
  });

  it('rejects invalid labels', () => {
    expect(isValidEvidenceStatus('O3')).toBe(false);
    expect(isValidEvidenceStatus('H2')).toBe(false);
    expect(isValidEvidenceStatus('')).toBe(false);
    expect(isValidEvidenceStatus(null)).toBe(false);
    expect(isValidEvidenceStatus(1)).toBe(false);
  });
});

describe('getEvidenceEntry', () => {
  it('returns the correct entry for O1', () => {
    const entry = getEvidenceEntry('O1');
    expect(entry.label).toBe('O1');
    expect(entry.confidence).toBe('highest');
  });

  it('returns the correct entry for H1', () => {
    const entry = getEvidenceEntry('H1');
    expect(entry.label).toBe('H1');
    expect(entry.confidence).toBe('low');
  });
});
