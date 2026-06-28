import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { Framework, FrameworkSchema } from "./schema.js";

function walk(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    if (entry.isFile() && (entry.name.endsWith(".yaml") || entry.name.endsWith(".yml"))) return [full];
    return [];
  });
}

export function loadFrameworks(root = "frameworks"): Framework[] {
  const files = walk(root);
  return files.map((file) => {
    const parsed = yaml.load(fs.readFileSync(file, "utf8"));
    const result = FrameworkSchema.safeParse(parsed);
    if (!result.success) {
      throw new Error(`Invalid framework ${file}: ${result.error.message}`);
    }
    return result.data;
  });
}

export function validateFrameworks(root = "frameworks"): { ok: boolean; errors: string[] } {
  const files = walk(root);
  const errors: string[] = [];
  for (const file of files) {
    try {
      const parsed = yaml.load(fs.readFileSync(file, "utf8"));
      const result = FrameworkSchema.safeParse(parsed);
      if (!result.success) errors.push(`${file}: ${result.error.message}`);
    } catch (err) {
      errors.push(`${file}: ${(err as Error).message}`);
    }
  }
  return { ok: errors.length === 0, errors };
}
