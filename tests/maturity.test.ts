import { describe, it, expect } from 'vitest';
import { loadFrameworks } from '../src/loader.js';
import { VerificationStatusSchema } from '../src/schema.js';

describe('framework verification_status', () => {
  it('all loaded frameworks have a verification_status field', () => {
    const frameworks = loadFrameworks();
    for (const f of frameworks) {
      expect(f.verification_status).toBeDefined();
    }
  });

  it('all loaded frameworks default to draft status', () => {
    const frameworks = loadFrameworks();
    for (const f of frameworks) {
      expect(f.verification_status).toBe('draft');
    }
  });

  it('VerificationStatusSchema accepts all four levels', () => {
    const levels = ['draft', 'reviewed', 'verified', 'contested'] as const;
    for (const level of levels) {
      expect(VerificationStatusSchema.safeParse(level).success).toBe(true);
    }
  });

  it('VerificationStatusSchema rejects unknown values', () => {
    expect(VerificationStatusSchema.safeParse('unknown').success).toBe(false);
    expect(VerificationStatusSchema.safeParse('').success).toBe(false);
    expect(VerificationStatusSchema.safeParse(null).success).toBe(false);
  });

  it('loaded frameworks have expected IDs', () => {
    const frameworks = loadFrameworks();
    const ids = frameworks.map(f => f.id);
    expect(ids).toContain('logic-walton');
    expect(ids).toContain('discourse-van-dijk');
    expect(ids).toContain('framing-entman');
    expect(ids).toContain('rhetoric-aristotle');
  });
});
