import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import { loadFrameworks } from '../src/loader.js';

const README_PATH = 'README.md';

describe('README maturity claims', () => {
  const readme = fs.readFileSync(README_PATH, 'utf8');
  const frameworks = loadFrameworks();

  it('README exists and is non-empty', () => {
    expect(readme.length).toBeGreaterThan(0);
  });

  it('README references each implemented framework by ID', () => {
    for (const f of frameworks) {
      // Framework IDs should appear somewhere in the README
      const idVariants = [
        f.id,                          // e.g. logic-walton
        f.id.replace('logic-', ''),    // e.g. walton
        f.name.split('—')[0].trim(),   // e.g. "Douglas Walton"
      ];
      const mentioned = idVariants.some(v =>
        readme.toLowerCase().includes(v.toLowerCase())
      );
      expect(
        mentioned,
        `README does not mention framework "${f.id}" (tried: ${idVariants.join(', ')})`
      ).toBe(true);
    }
  });

  it('README does not claim any framework is "verified"', () => {
    // None of the four frameworks are verified yet.
    // If this test fails, it means either a framework was verified
    // (update this test!) or the README incorrectly claims verification.
    const verifiedFrameworkIds = frameworks
      .filter(f => f.verification_status === 'verified')
      .map(f => f.id);

    if (verifiedFrameworkIds.length === 0) {
      // Good: no frameworks verified yet; README should not claim otherwise
      const claimsVerified = /walton.*verified|van.dijk.*verified|entman.*verified|aristotle.*verified/i.test(readme);
      expect(
        claimsVerified,
        'README claims a framework is "verified" but no framework YAML has verification_status: verified'
      ).toBe(false);
    } else {
      // If frameworks are verified, this test becomes a reminder to update README
      console.info(`Verified frameworks: ${verifiedFrameworkIds.join(', ')} — ensure README reflects this`);
    }
  });

  it('README states that all four frameworks are draft', () => {
    // The README should acknowledge the draft status of all current frameworks.
    // This is a documentation honesty check.
    const acknowledgesDraft = readme.toLowerCase().includes('draft');
    expect(
      acknowledgesDraft,
      'README does not mention "draft" — it should acknowledge that all frameworks are draft status'
    ).toBe(true);
  });

  it('README pack table lists the same framework counts as actual packs', () => {
    // The README has a pack table — it should match the actual pack files
    // We verify that the number of rows mentioning "draft" or "planned" in
    // the framework column is consistent with what we find in the YAML files.
    // This is a soft consistency check, not a strict parse of markdown.
    const draftCount = frameworks.filter(f => f.verification_status === 'draft').length;
    // README should mention the word "draft" at least as many times as there are draft frameworks
    const draftMentions = (readme.match(/\bdraft\b/gi) ?? []).length;
    expect(
      draftMentions,
      `README mentions "draft" ${draftMentions} times but there are ${draftCount} draft frameworks`
    ).toBeGreaterThanOrEqual(draftCount);
  });
});
