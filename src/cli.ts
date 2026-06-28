#!/usr/bin/env node
import { Command } from 'commander';
import fs from 'node:fs';
import path from 'node:path';
import { validateFrameworks, loadFrameworks } from './loader.js';
import { detectIntent } from './router.js';
import { resolveFrameworks } from './resolver.js';
import { compileInstructions } from './compiler.js';
import { createAnalysisPacket, writeAnalysisPacket } from './engine.js';

const program = new Command();
program.name('openreason').description('Transparent reasoning framework reference implementation').version('0.1.0');

program.command('validate').description('Validate all framework YAML files').action(() => {
  const ids = validateFrameworks();
  console.log(`Validated ${ids.length} framework(s): ${ids.join(', ')}`);
});

program.command('inspect').argument('<input>', 'input markdown/text file').description('Detect intent and selected frameworks').action((inputPath) => {
  const input = fs.readFileSync(inputPath, 'utf8');
  const intent = detectIntent(input);
  const frameworks = loadFrameworks();
  const resolution = resolveFrameworks(intent, frameworks, input);
  console.log(JSON.stringify({ intent, frameworks: resolution.activatedFrameworks.map((f) => f.id) }, null, 2));
});

program.command('compile').argument('<input>', 'input markdown/text file').option('--out <file>', 'output file', 'compiled_prompt.md').description('Compile selected frameworks into OpenReason instructions').action((inputPath, options) => {
  const input = fs.readFileSync(inputPath, 'utf8');
  const intent = detectIntent(input);
  const frameworks = loadFrameworks();
  const resolution = resolveFrameworks(intent, frameworks, input);
  const compiled = compileInstructions(input, intent, resolution.activatedFrameworks);
  fs.writeFileSync(options.out, compiled, 'utf8');
  console.log(`Wrote ${options.out}`);
});

program.command('analyze').argument('<input>', 'input markdown/text file').option('--out <file>', 'output report', 'reports/report.md').description('Create an OpenReason analysis packet/report scaffold').action((inputPath, options) => {
  const packet = createAnalysisPacket(inputPath);
  writeAnalysisPacket(packet, options.out);
  console.log(`Wrote ${options.out}`);
});

program.command('init-report-dir').description('Create reports directory').action(() => {
  fs.mkdirSync(path.resolve('reports'), { recursive: true });
  console.log('Created reports/');
});

program.parse(process.argv);
