import { describe, expect, it } from "vitest";
import { detectIntents } from "../src/router.js";

describe("detectIntents", () => {
  it("detects discourse and logic for group contrast prompt", () => {
    const intents = detectIntents("Warum werden Iraner als Kontrastgruppe benutzt? Ist das logisch ein Fehlschluss?");
    expect(intents.map((i) => i.name)).toContain("discourse_analysis");
    expect(intents.map((i) => i.name)).toContain("logical_analysis");
  });
});
