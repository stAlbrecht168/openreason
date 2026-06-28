#!/usr/bin/env node
import fs from "node:fs";
import { Command } from "commander";
import { loadFrameworks, validateFrameworks } from "./loader.js";
import { detectIntents } from "./router.js";
import { resolveFrameworks } from "./resolver.js";
import { compilePrompt } from "./compiler.js";

const program = new Command();
program.name("openreason").description("OpenReason TypeScript PoC").version("0.1.0");

program.command("validate")
  .option("--frameworks <dir>", "frameworks directory", "frameworks")
  .action((opts) => {
    const result = validateFrameworks(opts.frameworks);
    if (!result.ok) {
      console.error("Framework validation failed:");
      for (const err of result.errors) console.error(`- ${err}`);
      process.exit(1);
    }
    console.log("All frameworks valid.");
  });

program.command("compile")
  .argument("<file>", "input markdown/text file")
  .option("--frameworks <dir>", "frameworks directory", "frameworks")
  .option("--out <file>", "output compiled prompt file", "compiled_prompt.md")
  .action((file, opts) => {
    const input = fs.readFileSync(file, "utf8");
    const frameworks = loadFrameworks(opts.frameworks);
    const intents = detectIntents(input);
    const selected = resolveFrameworks(frameworks, intents, input);
    const compiled = compilePrompt(input, intents, selected);
    fs.writeFileSync(opts.out, compiled);
    console.log(`Detected intents: ${intents.map((i) => i.name).join(", ")}`);
    console.log(`Loaded frameworks: ${selected.map((f) => f.id).join(", ") || "none"}`);
    console.log(`Wrote ${opts.out}`);
  });

program.parse();
