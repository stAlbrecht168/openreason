import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import { Framework, FrameworkSchema } from './schema.js';

function walk(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    if (entry.isFile() && (entry.name.endsWith('.yaml') || entry.name.endsWith('.yml'))) return [full];
    return [];
  });
}

export function loadFrameworks(root = 'frameworks'): Framework[] {
  if (!fs.existsSync(root)) return [];
  return walk(root).map((file) => {
    const raw = fs.readFileSync(file, 'utf8');
    const parsed = yaml.load(raw);
    const result = FrameworkSchema.safeParse(parsed);
    if (!result.success) {
      const issues = result.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('\n');
      throw new Error(`Invalid framework ${file}:\n${issues}`);
    }
    return result.data;
  });
}

export function validateFrameworks(root = 'frameworks'): string[] {
  const frameworks = loadFrameworks(root);
  return frameworks.map((f) => f.id);
}
