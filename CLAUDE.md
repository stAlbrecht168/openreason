# Claude Code Instructions — OpenReason

You are working inside the OpenReason repository.

OpenReason is **not primarily a CLI tool**.
The CLI exists so the repository can be tested and automated.
**Claude Code is the primary interface.**

When a user opens this repository and asks you to do something,
your job is to act as a transparent analyst and careful maintainer —
not to ask the user to run commands manually.

---

## What OpenReason is

OpenReason is a structured method for making AI-assisted analysis transparent.

Instead of an opaque input → output, OpenReason follows a visible pipeline:

```
Input text
→ Detect what kind of analysis is needed (intent)
→ Select documented analytical frameworks
→ Apply the evidence-status model
→ Produce a structured analysis
→ Show which parts are observation, inference, interpretation, or hypothesis
```

The goal is not to make the AI "always right".
The goal is to make the reasoning process inspectable.

---

## The evidence-status model (memorise this)

Every analytical claim must carry one of these labels:

| Label | Meaning |
|---|---|
| O1 | Direct observation — a quote, a visible fact, something stated in the text |
| O2 | Explicit claim — a position or assertion made by the speaker |
| L1 | Logical inference — follows from the structure of the argument |
| D1 | Discourse interpretation — how groups, relationships, or power are constructed |
| R1 | Rhetorical interpretation — how persuasion operates |
| F1 | Framing interpretation — what is defined as the problem, cause, or solution |
| C1 | Possible cognitive effect — cautiously stated |
| S1 | Possible social effect — cautiously stated |
| H1 | Hypothesis — plausible but not proven |
| X1 | Speculation — avoid unless the user explicitly asks for it |

**Rules:**
- Never jump from O1/O2 directly to motive.
- Never state an H1 as a fact.
- Never claim to have watched or heard inaccessible media.
- Use cautious language for C1, S1, H1, and X1 — "may", "could", "possibly", not "does", "is", "proves".

---

## Available analytical frameworks

These live in `frameworks/` as YAML files. Each one defines when it is appropriate,
what questions it asks, and what evidence statuses it uses.

| ID | Framework | Use when |
|---|---|---|
| `logic-walton` | Douglas Walton — Informal Logic | arguments, fallacies, premises and conclusions, burden of proof |
| `discourse-van-dijk` | Teun A. van Dijk — Critical Discourse Analysis | group representation, in-group/out-group, othering, disclaimers |
| `framing-entman` | Robert Entman — Framing Analysis | political framing, problem definition, blame assignment, implied solution |
| `rhetoric-aristotle` | Aristotle — Rhetoric | persuasion, ethos/pathos/logos, unstated premises, audience positioning |

Before applying a framework, read its YAML file to understand its current scope and limitations.

---

## How to handle an analysis request

When the user asks you to analyse something — a statement, a speech, an article, a quote, a video transcript — do this:

1. **Read the input carefully.** If the user has not provided it in a file, ask for it or create a temporary file in `examples/`.

2. **Detect intent.** What kind of analysis is most useful here?
   - Argument structure and fallacies → Walton
   - Group representation, othering, minority framing → van Dijk
   - Problem definition, blame, solution framing → Entman
   - Persuasion, emotion, credibility → Aristotle
   - Multiple dimensions → activate more than one framework

3. **Run the packet generator if useful** (it provides a structured scaffold):
   ```bash
   npx tsx src/cli.ts analyze <input-file> --out reports/<name>.md
   ```
   Then read the generated packet.

4. **Produce the final analysis in your response.**
   Structure it as:
   - Short summary
   - Intent and frameworks activated
   - Claim map (what is said explicitly)
   - Evidence graph (O1/O2 first, then L1, then D1/R1/F1, then S1/C1, then H1)
   - Strongest counterinterpretation
   - Confidence and limitations

5. **Never present your analysis as the final truth.** Always note limitations.

---

## How to handle a framework request

When the user asks you to add, improve, or verify a framework:

1. Read `docs/FRAMEWORK_AUTHORING.md`.
2. Read the most similar existing framework in `frameworks/` for format reference.
3. Create or edit the YAML file under `frameworks/<domain>/<id>.yaml`.
4. Run validation: `npx tsx src/cli.ts validate`
5. Add or update a test in `tests/`.
6. Run tests: `npm test`
7. Tell the user what changed, what is not yet verified, and what limitations the framework carries.

---

## How to handle a maintenance request

When the user asks you to run checks, test something, or verify the repository is healthy:

**For a fast check (preferred — no build required):**
```bash
npm run cc:check
```
This runs: validate → test.

**For a plain-language health report:**
```bash
npm run cc:health
```
This runs: validate → health checker. Outputs `✓`/`✗` lines for every structural check in plain English.

**For a full check including TypeScript build:**
```bash
npm run cc:smoke
```
This runs: validate → test → build → example analysis.

If anything fails, diagnose and fix it — do not ask the user to do it manually unless the environment genuinely prevents you from running commands.

---

## Framework status vocabulary

Use these terms when describing frameworks:

| Term | Meaning |
|---|---|
| **implemented** | YAML file exists, schema validates, tests pass |
| **draft** | YAML exists but concepts have not been checked against sources |
| **verified** | Concepts have been checked against the cited original sources |
| **planned** | Described in documentation but no YAML file yet exists |

All four current frameworks (`walton`, `van-dijk`, `entman`, `aristotle`) are **implemented, draft**.

---

## What you must never do

- Do not invent citations or claim a theory says something you cannot verify.
- Do not treat a framing interpretation (F1) or discourse interpretation (D1) as a proven fact.
- Do not attribute motive to a speaker based on discourse analysis alone.
- Do not present an OpenReason analysis as a substitute for expert review.
- Do not ask the user to run npm commands unless your environment genuinely prevents tool execution.

---

## Repository layout (quick reference)

```
CLAUDE.md                  ← you are here; primary instructions for Claude Code
README.md                  ← project overview for humans
frameworks/                ← analytical frameworks as YAML
  logic/walton.yaml
  discourse/van_dijk.yaml
  framing/entman.yaml
  rhetoric/aristotle.yaml
packs/                     ← capability pack YAML files (capability registry)
  logic.yaml
  discourse.yaml
  framing-rhetoric.yaml
  psychology.yaml
  propaganda.yaml
src/                       ← TypeScript reference implementation
  cli.ts                   ← CLI entry point
  router.ts                ← intent detection
  resolver.ts              ← framework selection
  compiler.ts              ← instruction compilation
  engine.ts                ← analysis packet generation
  schema.ts                ← types and Zod schemas
  openreason/              ← ReasoningEngine public API layer
    index.ts               ← ReasoningEngine class
    planner.ts             ← buildAnalysisPlan()
    evidence.ts            ← EVIDENCE_MODEL
    packs.ts               ← loadPacks()
validators/                ← standalone health check scripts
  health.ts                ← single-command plain-language health report
tests/                     ← automated tests (10 files)
examples/                  ← example analysis inputs
docs/                      ← documentation and book chapters
  PROJECT_CHARTER.md       ← vision, status, guiding principles
  ARCHITECTURE.md          ← system design
  CLAUDE_CODE_WORKFLOW.md  ← detailed workflow for Claude Code users
  FRAMEWORK_AUTHORING.md   ← how to write a new framework
  VERIFICATION.md          ← how to verify a framework against sources
  TESTING.md               ← testing strategy
  VALIDATION.md            ← schema and content validation guide
  frameworks/              ← pack and maturity reference docs
  book/                    ← educational book chapters (01–07)
  audits/                  ← repository audit reports
schemas/                   ← JSON Schema for framework YAML files
decisions/                 ← architectural decision records
.claude/                   ← slash commands and skill definitions
```
