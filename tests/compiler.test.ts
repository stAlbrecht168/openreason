import { describe, expect, it } from "vitest";
import { compilePrompt } from "../src/compiler.js";
import { detectIntents } from "../src/router.js";
import { loadFrameworks } from "../src/loader.js";
import { resolveFrameworks } from "../src/resolver.js";

describe("compiler", () => {
  it("compiles prompt with selected frameworks", () => {
    const input = "Iraner als Kontrastgruppe gegen Somalier: Fehlschluss und Diskursanalyse";
    const frameworks = loadFrameworks("frameworks");
    const intents = detectIntents(input);
    const selected = resolveFrameworks(frameworks, intents, input);
    const prompt = compilePrompt(input, intents, selected);
    expect(prompt).toContain("OpenReason Compiled Prompt");
    expect(prompt).toContain("van-dijk-discourse");
    expect(prompt).toContain("walton-informal-logic");
  });
});
