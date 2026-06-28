import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import { Pack, PackSchema } from '../schema.js';

function walk(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    if (entry.isFile() && (entry.name.endsWith('.yaml') || entry.name.endsWith('.yml'))) return [full];
    return [];
  });
}

export function loadPacks(root = 'packs'): Pack[] {
  if (!fs.existsSync(root)) return [];
  return walk(root).map((file) => {
    const raw = fs.readFileSync(file, 'utf8');
    const parsed = yaml.load(raw);
    const result = PackSchema.safeParse(parsed);
    if (!result.success) {
      const issues = result.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('\n');
      throw new Error(`Invalid pack ${file}:\n${issues}`);
    }
    return result.data;
  });
}

export function validatePacks(root = 'packs'): string[] {
  const packs = loadPacks(root);
  return packs.map((p) => p.id);
}
