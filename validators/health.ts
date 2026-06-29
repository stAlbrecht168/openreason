#!/usr/bin/env tsx
/**
 * OpenReason project health check.
 *
 * Runs all structural validations and reports results in plain language.
 * Exits 0 if everything passes, 1 if any check fails.
 *
 * Usage:
 *   npx tsx validators/health.ts
 *
 * Claude Code can run this as the single-command project health check.
 */

import fs from 'node:fs';
import path from 'node:path';
import { loadFrameworks } from '../src/loader.js';
import { loadPacks } from '../src/openreason/packs.js';
import { EVIDENCE_LABELS } from '../src/openreason/evidence.js';

// ── types ────────────────────────────────────────────────────────────────────

type CheckResult = { label: string; pass: boolean; detail?: string };

// ── helpers ──────────────────────────────────────────────────────────────────

function pass(label: string): CheckResult { return { label, pass: true }; }
function fail(label: string, detail: string): CheckResult { return { label, pass: false, detail }; }

function findFiles(root: string, suffix: string): string[] {
  if (!fs.existsSync(root)) return [];
  return fs.readdirSync(root)
    .filter(n => n.endsWith(suffix))
    .map(n => path.join(root, n));
}

function extractEvidenceLabels(content: string): string[] {
  return (content.match(/\[[A-Z]\d\]/g) ?? []).map(m => m.slice(1, -1));
}

// ── checks ───────────────────────────────────────────────────────────────────

function checkFrameworks(): CheckResult[] {
  const results: CheckResult[] = [];

  let frameworks;
  try {
    frameworks = loadFrameworks('frameworks');
  } catch (e: any) {
    return [fail('frameworks: schema validation', e.message)];
  }

  results.push(pass(`frameworks: loaded ${frameworks.length} framework(s)`));

  const expectedIds = ['logic-walton', 'discourse-van-dijk', 'framing-entman', 'rhetoric-aristotle'];
  const actualIds = new Set(frameworks.map(f => f.id));
  const missingExpected = expectedIds.filter(id => !actualIds.has(id));
  if (missingExpected.length > 0) {
    results.push(fail('frameworks: expected IDs present', `Missing: ${missingExpected.join(', ')}`));
  } else {
    results.push(pass('frameworks: all four expected framework IDs present'));
  }

  for (const f of frameworks) {
    if (!f.scope || f.scope.trim().length === 0) {
      results.push(fail(`framework "${f.id}": scope`, 'scope field is missing or empty'));
    }
    if (!f.capabilities || f.capabilities.length === 0) {
      results.push(fail(`framework "${f.id}": capabilities`, 'capabilities field is missing or empty'));
    }
    if (f.limitations.length === 0) {
      results.push(fail(`framework "${f.id}": limitations`, 'No limitations listed'));
    }
    if (f.references.length === 0 || f.references.some(r => !r.title)) {
      results.push(fail(`framework "${f.id}": references`, 'Missing or empty reference title'));
    }
    if (!f.evidence_statuses.includes('O1')) {
      results.push(fail(`framework "${f.id}": evidence_statuses`, 'O1 is missing from evidence_statuses'));
    }
    if (!f.evidence_statuses.includes('H1')) {
      results.push(fail(`framework "${f.id}": evidence_statuses`, 'H1 is missing from evidence_statuses'));
    }
    if (f.decision_rules.length === 0) {
      results.push(fail(`framework "${f.id}": decision_rules`, 'No decision rules listed'));
    }
    if (f.analysis_questions.length === 0) {
      results.push(fail(`framework "${f.id}": analysis_questions`, 'No analysis questions listed'));
    }
  }

  const draftCount = frameworks.filter(f => f.verification_status === 'draft').length;
  const verifiedCount = frameworks.filter(f => f.verification_status === 'verified').length;
  const reviewedCount = frameworks.filter(f => f.verification_status === 'reviewed').length;
  results.push(pass(
    `frameworks: verification status — ${draftCount} draft, ${reviewedCount} reviewed, ${verifiedCount} verified`
  ));

  return results;
}

function checkPacks(): CheckResult[] {
  const results: CheckResult[] = [];

  let packs;
  try {
    packs = loadPacks('packs');
  } catch (e: any) {
    return [fail('packs: schema validation', e.message)];
  }

  results.push(pass(`packs: loaded ${packs.length} pack(s)`));

  const expectedPackIds = ['logic', 'discourse', 'framing-rhetoric', 'psychology', 'propaganda'];
  const actualPackIds = new Set(packs.map(p => p.id));
  const missingPacks = expectedPackIds.filter(id => !actualPackIds.has(id));
  if (missingPacks.length > 0) {
    results.push(fail('packs: expected IDs present', `Missing: ${missingPacks.join(', ')}`));
  } else {
    results.push(pass('packs: all five expected pack IDs present'));
  }

  const requiredCapabilities = [
    'argument_analysis', 'fallacy_detection', 'discourse_analysis',
    'group_representation_analysis', 'framing_analysis', 'rhetoric_analysis',
    'cognitive_effect_analysis', 'social_effect_analysis', 'propaganda_analysis',
  ];
  const coveredCapabilities = new Set(packs.flatMap(p => p.capabilities));
  const missingCaps = requiredCapabilities.filter(c => !coveredCapabilities.has(c));
  if (missingCaps.length > 0) {
    results.push(fail('packs: capability coverage', `Missing capabilities: ${missingCaps.join(', ')}`));
  } else {
    results.push(pass('packs: all nine required capabilities are covered'));
  }

  return results;
}

function checkPackFrameworkConsistency(): CheckResult[] {
  const results: CheckResult[] = [];

  let frameworks;
  let packs;
  try {
    frameworks = loadFrameworks('frameworks');
    packs = loadPacks('packs');
  } catch (e: any) {
    return [fail('consistency: load error', (e as Error).message)];
  }

  const implementedIds = new Set(frameworks.map(f => f.id));

  // Draft entries must have a YAML file
  const draftWithoutYaml: string[] = [];
  for (const pack of packs) {
    for (const fw of pack.frameworks) {
      if ((fw.maturity === 'draft' || fw.maturity === 'implemented') && !implementedIds.has(fw.id)) {
        draftWithoutYaml.push(`pack "${pack.id}" → "${fw.id}" (${fw.maturity}) has no YAML`);
      }
    }
  }
  if (draftWithoutYaml.length > 0) {
    results.push(fail('consistency: draft entries have YAML files', draftWithoutYaml.join('; ')));
  } else {
    results.push(pass('consistency: all draft/implemented pack entries have YAML files'));
  }

  // Planned entries must NOT have a YAML file
  const plannedWithYaml: string[] = [];
  for (const pack of packs) {
    for (const fw of pack.frameworks) {
      if (fw.maturity === 'planned' && implementedIds.has(fw.id)) {
        plannedWithYaml.push(`pack "${pack.id}" → "${fw.id}" is marked planned but has a YAML file`);
      }
    }
  }
  if (plannedWithYaml.length > 0) {
    results.push(fail('consistency: planned entries lack YAML files', plannedWithYaml.join('; ')));
  } else {
    results.push(pass('consistency: no planned entries have unexpected YAML files'));
  }

  // Every framework YAML is referenced in at least one pack
  const referencedIds = new Set(packs.flatMap(p => p.frameworks.map(fw => fw.id)));
  const unreferenced = frameworks.filter(f => !referencedIds.has(f.id)).map(f => f.id);
  if (unreferenced.length > 0) {
    results.push(fail('consistency: all framework YAMLs referenced in packs', `Unreferenced: ${unreferenced.join(', ')}`));
  } else {
    results.push(pass('consistency: every framework YAML is referenced in at least one pack'));
  }

  return results;
}

function checkExamples(): CheckResult[] {
  const results: CheckResult[] = [];
  const validLabels = new Set(EVIDENCE_LABELS);
  const files = findFiles('examples', '.analysis.md');

  if (files.length === 0) {
    results.push(fail('examples: analysis files exist', 'No *.analysis.md files found in examples/'));
    return results;
  }

  results.push(pass(`examples: found ${files.length} analysis file(s)`));

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const labels = extractEvidenceLabels(content);
    const basename = path.basename(file);

    if (labels.length === 0) {
      results.push(fail(`example "${basename}": has evidence labels`, 'No evidence labels found'));
      continue;
    }

    const invalid = labels.filter(l => !validLabels.has(l as any));
    if (invalid.length > 0) {
      results.push(fail(
        `example "${basename}": valid labels only`,
        `Invalid label(s): ${[...new Set(invalid)].join(', ')}`
      ));
    } else {
      results.push(pass(`example "${basename}": all ${labels.length} evidence labels are valid`));
    }

    const hasObservation = labels.some(l => l === 'O1' || l === 'O2');
    if (!hasObservation) {
      results.push(fail(`example "${basename}": has observation anchor`, 'No O1 or O2 labels found'));
    }

    const hasH1 = labels.includes('H1');
    if (!hasH1) {
      results.push(fail(`example "${basename}": has H1 hypothesis`, 'No H1 label found'));
    }
  }

  return results;
}

function checkReadme(): CheckResult[] {
  const results: CheckResult[] = [];

  if (!fs.existsSync('README.md')) {
    return [fail('readme: file exists', 'README.md not found')];
  }

  const readme = fs.readFileSync('README.md', 'utf8');

  const acknowledgesDraft = readme.toLowerCase().includes('draft');
  if (!acknowledgesDraft) {
    results.push(fail('readme: acknowledges draft status', 'README does not mention "draft" — frameworks are all draft'));
  } else {
    results.push(pass('readme: acknowledges draft framework status'));
  }

  let frameworks;
  try {
    frameworks = loadFrameworks('frameworks');
  } catch {
    return results;
  }

  for (const f of frameworks) {
    const mentioned = readme.toLowerCase().includes(f.id.toLowerCase())
      || readme.toLowerCase().includes(f.name.split('—')[0].trim().toLowerCase());
    if (!mentioned) {
      results.push(fail(`readme: mentions framework "${f.id}"`, 'Framework not referenced in README'));
    }
  }

  // Check that README doesn't claim verification for unverified frameworks
  const verifiedFrameworks = frameworks.filter(f => f.verification_status === 'verified');
  if (verifiedFrameworks.length === 0) {
    const claimsVerified = /\b(walton|van.?dijk|entman|aristotle)\b.*\bverified\b/i.test(readme);
    if (claimsVerified) {
      results.push(fail(
        'readme: verification claims are accurate',
        'README appears to claim a framework is verified, but no framework has verification_status: verified'
      ));
    } else {
      results.push(pass('readme: does not overclaim framework verification'));
    }
  }

  return results;
}

// ── router/framework intent alignment ────────────────────────────────────────

function checkRouterIntentCoverage(): CheckResult[] {
  const results: CheckResult[] = [];

  // Read router source and extract intent names from the intentSignals object
  const routerPath = path.join('src', 'router.ts');
  if (!fs.existsSync(routerPath)) {
    return [fail('router: source file exists', `${routerPath} not found`)];
  }

  const routerSource = fs.readFileSync(routerPath, 'utf8');
  // Extract keys from the intentSignals record
  const intentMatches = [...routerSource.matchAll(/^\s{2}(\w+):/gm)];
  const routerIntents = intentMatches.map(m => m[1]).filter(name => name !== 'type');

  if (routerIntents.length === 0) {
    return [fail('router: intent signals found', 'Could not parse intent names from src/router.ts')];
  }

  results.push(pass(`router: detected ${routerIntents.length} intent(s): ${routerIntents.join(', ')}`));

  let frameworks;
  try {
    frameworks = loadFrameworks('frameworks');
  } catch {
    return results;
  }

  const frameworkIntents = new Set(frameworks.flatMap(f => f.intents));
  const orphaned = routerIntents.filter(intent =>
    intent !== 'general_analysis' && !frameworkIntents.has(intent)
  );

  if (orphaned.length > 0) {
    results.push(fail(
      'router: all intents have at least one framework',
      `Orphaned intent(s) — routed to fallback silently: ${orphaned.join(', ')}`
    ));
  } else {
    results.push(pass('router: every router intent is handled by at least one framework'));
  }

  return results;
}

// ── main ─────────────────────────────────────────────────────────────────────

function run() {
  const allChecks: CheckResult[] = [
    ...checkFrameworks(),
    ...checkPacks(),
    ...checkPackFrameworkConsistency(),
    ...checkRouterIntentCoverage(),
    ...checkExamples(),
    ...checkReadme(),
  ];

  const passing = allChecks.filter(c => c.pass);
  const failing = allChecks.filter(c => !c.pass);

  console.log('\n── OpenReason Health Check ─────────────────────────────────\n');

  for (const c of passing) {
    console.log(`  ✓  ${c.label}`);
  }

  if (failing.length > 0) {
    console.log('');
    for (const c of failing) {
      console.log(`  ✗  ${c.label}`);
      if (c.detail) console.log(`       ${c.detail}`);
    }
  }

  console.log(`\n── ${passing.length} passed, ${failing.length} failed ────────────────────────────────\n`);

  if (failing.length > 0) {
    process.exit(1);
  }
}

run();
