# /openreason-analyze

Analyse the provided material using the OpenReason method.

**Input:** $ARGUMENTS

---

## Step 1 — Load the skill

Read `.claude/skills/openreason/SKILL.md` before proceeding.
All evidence rules, framework logic, and report format are defined there.

---

## Step 2 — Obtain the material

**If $ARGUMENTS is a file path (e.g., `examples/technology-regulation.md`):**
Note the path — you will pass it directly to the engine.

**If $ARGUMENTS contains text or a quote:**
Write it to `examples/working-input.md`.

**If $ARGUMENTS is empty:**
Ask the user:
> Please paste the text, quote, transcript, or file path you'd like me to analyse.

---

## Step 3 — Run ReasoningEngine

If `node_modules/.bin/tsx` exists, run:
```bash
npx tsx src/cli.ts run <input-file>
```

This writes two files to `reports/<input-name>/`:
- `scaffold.md` — structured report with evidence reference, framework questions, and `[FILL: ...]` sections
- `plan.json` — detected intent, activated frameworks, evidence model

Read both files. `scaffold.md` is the document you will complete.
`plan.json` tells you which frameworks are active and what evidence statuses they support.

If the CLI is unavailable, proceed to Step 4 using the framework YAML files directly.

---

## Step 4 — Read the activated framework YAML files

For each framework listed in `plan.json`, read its YAML file:
- `frameworks/logic/walton.yaml`
- `frameworks/discourse/van_dijk.yaml`
- `frameworks/framing/entman.yaml`
- `frameworks/rhetoric/aristotle.yaml`

Apply the framework's `decision_rules` and `analysis_questions` when completing the scaffold.

---

## Step 5 — Complete the scaffold and write the final analysis

Replace every `[FILL: ...]` section in the scaffold with actual analytical content.
Write the completed analysis in your response.

Required structure:
1. **Summary** — one paragraph, key finding stated
2. **Intent and frameworks** — what was detected and why each framework applies
3. **Claim map** — O1/O2 only, what is directly stated
4. **Evidence graph** — chain: O1/O2 → L1 → D1/R1/F1 → C1/S1 → H1
5. **Framework findings** — apply each framework's questions and decision rules
6. **Strongest counterinterpretation** — required, no exceptions
7. **Confidence and limitations** — what the analysis cannot determine

Every claim must carry its evidence label.
No motive assertions without `[H1]`.

---

## Step 6 — Offer follow-up

After the analysis, offer:
> If you'd like me to focus more deeply on one framework, apply an additional framework, or explore the counterinterpretation further, just say so.
