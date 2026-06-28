# /openreason-analyze

Analyse the provided material using the OpenReason method.

**Input:** $ARGUMENTS

---

## Step 1 — Load the skill

Read `.claude/skills/openreason/SKILL.md` before proceeding.
All evidence rules, framework logic, and report format are defined there.

---

## Step 2 — Obtain the material

**If $ARGUMENTS contains text or a quote:**
Create a temporary file at `examples/working-input.md` with the content.

**If $ARGUMENTS is a file path:**
Read that file directly.

**If $ARGUMENTS is empty:**
Ask the user:
> Please paste the text, quote, transcript, or summary you'd like me to analyse.
Then create `examples/working-input.md` with their response.

---

## Step 3 — Run the packet generator (if the CLI is available)

If `node_modules/.bin/tsx` exists, run:
```bash
npx tsx src/cli.ts analyze examples/working-input.md --out reports/working-analysis.md
```
Then read `reports/working-analysis.md`.

This produces a deterministic scaffold — use it as a reference, not as the final analysis.
If the CLI is unavailable, skip this step and proceed directly to Step 4.

---

## Step 4 — Detect intent

Read the material and determine which kind of analysis is most useful:

- Does it contain an argument, fallacy, or burden-of-proof question? → `logical_analysis`
- Does it compare groups, other minorities, or use disclaimers? → `discourse_analysis`
- Does it define a problem, assign blame, or imply a solution? → `framing_analysis`
- Does it make emotional or credibility appeals? → `rhetoric_analysis`
- Multiple signals? → activate multiple frameworks.

---

## Step 5 — Select frameworks and read their YAML files

For each framework you plan to apply, read its YAML file:
- `frameworks/logic/walton.yaml`
- `frameworks/discourse/van_dijk.yaml`
- `frameworks/framing/entman.yaml`
- `frameworks/rhetoric/aristotle.yaml`

Confirm the framework's triggers and anti-triggers before applying it.

---

## Step 6 — Produce the analysis

Write the analysis directly in your response using the standard report format
from the skill:

1. Summary
2. Intent and frameworks activated
3. Claim map (O1/O2 only)
4. Evidence graph (chain upward from O1/O2 through L1/D1/R1/F1 to S1/C1/H1)
5. Framework findings (one subsection per active framework)
6. Strongest counterinterpretation
7. Confidence and limitations

Every claim must carry its evidence label.
No motive assertions without [H1].
No skipping the counterinterpretation.

---

## Step 7 — Offer follow-up

After the analysis, offer:
> If you'd like me to focus more deeply on one framework, apply an additional framework, or explore the counterinterpretation further, just say so.
