# Project Charter — OpenReason

**Status:** v0.1.0 proof of concept  
**Primary interface:** Claude Code  
**Repository:** https://github.com/stAlbrecht168/openreason

---

## Purpose

AI systems are increasingly used to analyse political statements, media, arguments, and social phenomena.
Most of the time, the reasoning process is invisible.
A user sees a conclusion but cannot inspect which method was used, which assumptions were made, or which parts of the analysis are direct observations versus interpretations versus guesses.

OpenReason exists to make that reasoning visible.

It does this by:

1. **Routing** any input through a structured intent-detection step
2. **Selecting** documented analytical frameworks that are appropriate for the input
3. **Applying** an evidence-status model that distinguishes observation, inference, interpretation, and hypothesis
4. **Producing** a structured analysis that can be inspected, challenged, and compared

OpenReason is not a fact-checking service.
It is not a political opinion engine.
It is a structured method for making analytical reasoning transparent enough to audit.

---

## The core idea in one paragraph

When a speaker says something like *"I prefer Iranians to Somalis"*, a conventional AI response might immediately explain why this is problematic. OpenReason does something different: it first asks which analytical frameworks apply, then maps what is directly observable (the words used), what can be logically inferred (acceptance of one group does not justify rejection of another), what is a discourse interpretation (a contrast-group structure may be present), and what is only a hypothesis (the function of such a structure is not proven from words alone). The result is a structured report where every claim carries an evidence label — so a reader can see exactly how strong or weak each analytical step is.

---

## Design principles

These principles govern all decisions about what to build and how to build it.

### 1. Transparency over confidence
The goal is not to produce the most confident answer. It is to produce an answer whose reasoning can be inspected.

### 2. Explicit frameworks
Every analytical move should be traceable to a documented framework. Frameworks live in `frameworks/` as readable YAML files with citations, analysis steps, and stated limitations.

### 3. Separation of evidence levels
Observations are not interpretations. Interpretations are not hypotheses. Hypotheses are not facts. The evidence-status model (O1–X1) enforces this separation.

### 4. Scientific humility
No framework is perfect. Every framework has limitations. Those limitations must be visible in the framework file and in any analysis produced.

### 5. Claude Code as primary interface
Users should be able to open this repository in Claude Code and say "Analyse this." They should not need to understand npm, TypeScript, or the pipeline internals. The CLI exists for automation and testing, not for everyday use.

### 6. Honesty about status
Framework files must clearly indicate whether they are implemented, draft, reviewed, or verified against sources. Documentation must not overclaim.

### 7. Non-technical accessibility
The conceptual layer of OpenReason (frameworks, evidence statuses, analytical questions) should be readable and useful to researchers, journalists, and educators who are not software developers.

---

## What is currently implemented

| Component | Status | Notes |
|---|---|---|
| Evidence-status model (O1–X1) | Implemented | Defined in `src/schema.ts` and `CLAUDE.md` |
| Framework schema (YAML) | Implemented | Validated at runtime via Zod; JSON Schema in `schemas/` |
| Intent router | Implemented, draft | Keyword-count heuristic; `fact_checking` removed (was orphaned) |
| Framework resolver | Implemented, draft | Scoring logic with hardcoded fallback; see known limitations |
| Instruction compiler | Implemented | Assembles framework content into structured instructions |
| Analysis packet generator | Implemented, draft | Produces deterministic Markdown scaffold |
| CLI (validate, inspect, compile, analyze) | Implemented | For testing and automation |
| ReasoningEngine API | Implemented | `src/openreason/index.ts`; `ReasoningEngine.analyze(input)` |
| Capability packs | Implemented | Five pack YAML files in `packs/`; capability registry |
| Claude Code interface (CLAUDE.md, slash commands, skill) | Implemented | Primary user interface |
| Walton — Informal Logic | Implemented, draft | Not yet verified against source texts |
| van Dijk — Critical Discourse Analysis | Implemented, draft | Not yet verified against source texts |
| Entman — Framing Analysis | Implemented, draft | Not yet verified against source texts |
| Aristotle — Rhetoric | Implemented, draft | Not yet verified against source texts |
| Verification status tracking | Implemented | `verification_status` field in Zod schema and JSON Schema |
| Test suite | Implemented | 10 test files including consistency and label checks |
| Health check validator | Implemented | `npm run cc:health` — plain-language health report |
| MCP server | Planned only | See `docs/MCP_ARCHITECTURE.md` |

---

## Known limitations of the current implementation

- **Intent router is a keyword counter.** It detects intent by counting how many predefined signal words appear in the input. This is brittle for inputs that use different vocabulary. It will be replaced with a more robust heuristic or LLM-assisted routing in a future version.

- **Framework resolver has a hardcoded fallback.** When no framework scores above zero, it defaults to three specific framework IDs. This means adding new frameworks does not automatically affect the fallback path.

- **The analysis packet engine has one worked example hardcoded.** The Iran/Somalia example has a special-case evidence graph built into the engine. For other inputs, the packet produces a generic scaffold. This is a proof-of-concept limitation.

- **No framework currently lists O1 (direct observation) as a supported evidence status.** This is an inconsistency in the evidence model that will be corrected.

- **All four frameworks are draft-status.** Their concepts have not been formally verified against original cited sources.

---

## What OpenReason is not

- Not an autonomous analysis system. An LLM (currently Claude Code) does the final reasoning; OpenReason structures how that reasoning is conducted.
- Not a truth arbiter. It does not determine whether claims are factually correct.
- Not a political tool. It applies the same analytical standards regardless of who is speaking or about what.
- Not a substitute for expert review. The frameworks are structured tools, not peer-reviewed instruments.
- Not a prompt collection. The framework YAML files are machine-readable analytical specifications, not ad hoc prompt snippets.

---

## Roadmap (summary)

Full detail in `docs/REPOSITORY_REVIEW.md` and `docs/audits/REPOSITORY_AUDIT.md`.

**Immediate (active):**
- Decide whether framework `evidence_statuses` should include O1 universally, or whether O1/O2 are implicit in all frameworks (O1 is used in analyses but absent from framework YAML files)
- Update `docs/GETTING_STARTED.md` to use the technology-regulation example
- Add `npm run cc:health` to the CI workflow
- Fix `CITATION.cff` author format

**Near-term:**
- Add 2–3 more example inputs covering different intent categories
- Establish framework verification workflow
- Improve CI (type-check step, example regression test)

**Medium-term:**
- Add frameworks for additional analytical traditions (e.g., propaganda analysis, scientific framing)
- Implement MCP server for broader platform support
- Expand documentation into a coherent reference guide
