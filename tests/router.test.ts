import { describe, expect, it } from 'vitest';
import { detectIntent } from '../src/router.js';

it('detects discourse analysis for group contrast prompts', () => {
  const intent = detectIntent('Why are Iranians used as a contrast group against Somalis?');
  expect(intent.primaryIntent).toBe('discourse_analysis');
  expect(intent.confidence).not.toBe('low');
});

it('detects logical analysis for fallacy prompts', () => {
  const intent = detectIntent('What logical fallacy is in this argument?');
  expect(intent.primaryIntent).toBe('logical_analysis');
});
