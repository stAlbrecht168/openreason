import { describe, expect, it } from 'vitest';
import { loadFrameworks } from '../src/loader.js';
import { detectIntent } from '../src/router.js';
import { resolveFrameworks } from '../src/resolver.js';
import { compileInstructions } from '../src/compiler.js';

it('loads framework yaml files', () => {
  const frameworks = loadFrameworks();
  expect(frameworks.length).toBeGreaterThanOrEqual(4);
});

it('compiles instructions with evidence statuses and selected frameworks', () => {
  const input = 'Why are Iranians used as a contrast group against Somalis?';
  const intent = detectIntent(input);
  const frameworks = loadFrameworks();
  const resolved = resolveFrameworks(intent, frameworks, input);
  const prompt = compileInstructions(input, intent, resolved.activatedFrameworks);
  expect(prompt).toContain('Evidence statuses');
  expect(prompt).toContain('discourse-van-dijk');
  expect(prompt).toContain('O1');
  expect(prompt).toContain('H1');
});
