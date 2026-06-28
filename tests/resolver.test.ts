import { describe, it, expect } from 'vitest';
import { loadFrameworks } from '../src/loader.js';
import { detectIntent } from '../src/router.js';
import { resolveFrameworks } from '../src/resolver.js';

describe('resolveFrameworks', () => {
  it('activates discourse-van-dijk for a group contrast input', () => {
    const input = 'Why are Iranians used as a contrast group against Somalis?';
    const intent = detectIntent(input);
    const frameworks = loadFrameworks();
    const result = resolveFrameworks(intent, frameworks, input);
    const ids = result.activatedFrameworks.map(f => f.id);
    expect(ids).toContain('discourse-van-dijk');
  });

  it('activates logic-walton for a fallacy input', () => {
    const input = 'What logical fallacy is used in this argument about premises and conclusions?';
    const intent = detectIntent(input);
    const frameworks = loadFrameworks();
    const result = resolveFrameworks(intent, frameworks, input);
    const ids = result.activatedFrameworks.map(f => f.id);
    expect(ids).toContain('logic-walton');
  });

  it('activates rhetoric-aristotle for a persuasion input', () => {
    const input = 'Analyse the ethos and pathos in this persuasive speech.';
    const intent = detectIntent(input);
    const frameworks = loadFrameworks();
    const result = resolveFrameworks(intent, frameworks, input);
    const ids = result.activatedFrameworks.map(f => f.id);
    expect(ids).toContain('rhetoric-aristotle');
  });

  it('returns a non-empty fallback when no signal matches', () => {
    const input = 'The sky is blue and the water is cold.';
    const intent = detectIntent(input);
    const frameworks = loadFrameworks();
    const result = resolveFrameworks(intent, frameworks, input);
    expect(result.activatedFrameworks.length).toBeGreaterThan(0);
  });

  it('skippedFrameworks lists frameworks not selected', () => {
    const input = 'What logical fallacy is used here?';
    const intent = detectIntent(input);
    const frameworks = loadFrameworks();
    const result = resolveFrameworks(intent, frameworks, input);
    const activatedIds = new Set(result.activatedFrameworks.map(f => f.id));
    for (const skipped of result.skippedFrameworks) {
      expect(activatedIds.has(skipped.id)).toBe(false);
    }
  });

  it('every skipped framework has a reason string', () => {
    const input = 'Analyse the framing here.';
    const intent = detectIntent(input);
    const frameworks = loadFrameworks();
    const result = resolveFrameworks(intent, frameworks, input);
    for (const skipped of result.skippedFrameworks) {
      expect(typeof skipped.reason).toBe('string');
      expect(skipped.reason.length).toBeGreaterThan(0);
    }
  });
});
