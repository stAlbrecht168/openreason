import { describe, it, expect } from 'vitest';
import { loadPacks, validatePacks } from '../src/openreason/packs.js';
import { MaturityLevelSchema } from '../src/schema.js';

describe('loadPacks', () => {
  it('loads all five packs', () => {
    const packs = loadPacks();
    expect(packs.length).toBe(5);
  });

  it('every pack has a non-empty id', () => {
    const packs = loadPacks();
    for (const pack of packs) {
      expect(typeof pack.id).toBe('string');
      expect(pack.id.length).toBeGreaterThan(0);
    }
  });

  it('every pack has at least one capability', () => {
    const packs = loadPacks();
    for (const pack of packs) {
      expect(pack.capabilities.length).toBeGreaterThan(0);
    }
  });

  it('every pack has at least one framework entry', () => {
    const packs = loadPacks();
    for (const pack of packs) {
      expect(pack.frameworks.length).toBeGreaterThan(0);
    }
  });

  it('every framework entry has a valid maturity level', () => {
    const packs = loadPacks();
    for (const pack of packs) {
      for (const fw of pack.frameworks) {
        expect(MaturityLevelSchema.safeParse(fw.maturity).success).toBe(true);
      }
    }
  });

  it('every pack has a non-empty description', () => {
    const packs = loadPacks();
    for (const pack of packs) {
      expect(pack.description.trim().length).toBeGreaterThan(0);
    }
  });
});

describe('expected pack ids', () => {
  it('contains logic pack', () => {
    const ids = loadPacks().map(p => p.id);
    expect(ids).toContain('logic');
  });

  it('contains discourse pack', () => {
    const ids = loadPacks().map(p => p.id);
    expect(ids).toContain('discourse');
  });

  it('contains framing-rhetoric pack', () => {
    const ids = loadPacks().map(p => p.id);
    expect(ids).toContain('framing-rhetoric');
  });

  it('contains psychology pack', () => {
    const ids = loadPacks().map(p => p.id);
    expect(ids).toContain('psychology');
  });

  it('contains propaganda pack', () => {
    const ids = loadPacks().map(p => p.id);
    expect(ids).toContain('propaganda');
  });
});

describe('capability coverage', () => {
  it('argument_analysis is covered', () => {
    const packs = loadPacks();
    const covered = packs.flatMap(p => p.capabilities);
    expect(covered).toContain('argument_analysis');
  });

  it('fallacy_detection is covered', () => {
    const packs = loadPacks();
    const covered = packs.flatMap(p => p.capabilities);
    expect(covered).toContain('fallacy_detection');
  });

  it('discourse_analysis is covered', () => {
    const packs = loadPacks();
    const covered = packs.flatMap(p => p.capabilities);
    expect(covered).toContain('discourse_analysis');
  });

  it('framing_analysis is covered', () => {
    const packs = loadPacks();
    const covered = packs.flatMap(p => p.capabilities);
    expect(covered).toContain('framing_analysis');
  });

  it('rhetoric_analysis is covered', () => {
    const packs = loadPacks();
    const covered = packs.flatMap(p => p.capabilities);
    expect(covered).toContain('rhetoric_analysis');
  });

  it('propaganda_analysis is covered', () => {
    const packs = loadPacks();
    const covered = packs.flatMap(p => p.capabilities);
    expect(covered).toContain('propaganda_analysis');
  });

  it('cognitive_effect_analysis is covered', () => {
    const packs = loadPacks();
    const covered = packs.flatMap(p => p.capabilities);
    expect(covered).toContain('cognitive_effect_analysis');
  });

  it('social_effect_analysis is covered by at least two packs', () => {
    const packs = loadPacks();
    const covering = packs.filter(p => p.capabilities.includes('social_effect_analysis'));
    expect(covering.length).toBeGreaterThanOrEqual(2);
  });
});

describe('validatePacks', () => {
  it('returns the ids of all valid packs', () => {
    const ids = validatePacks();
    expect(ids.length).toBe(5);
    expect(ids).toContain('logic');
    expect(ids).toContain('propaganda');
  });
});

describe('MaturityLevelSchema', () => {
  it('accepts implemented', () => {
    expect(MaturityLevelSchema.safeParse('implemented').success).toBe(true);
  });

  it('accepts draft', () => {
    expect(MaturityLevelSchema.safeParse('draft').success).toBe(true);
  });

  it('accepts planned', () => {
    expect(MaturityLevelSchema.safeParse('planned').success).toBe(true);
  });

  it('accepts reference', () => {
    expect(MaturityLevelSchema.safeParse('reference').success).toBe(true);
  });

  it('rejects unknown values', () => {
    expect(MaturityLevelSchema.safeParse('unknown').success).toBe(false);
    expect(MaturityLevelSchema.safeParse('').success).toBe(false);
  });
});
