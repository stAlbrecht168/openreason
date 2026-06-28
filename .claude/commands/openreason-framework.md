# /openreason-framework

Create a new analytical framework, or improve an existing one.

**Input:** $ARGUMENTS — a framework name, a theory, a proposed improvement, or empty.

---

## Step 1 — Load context

Read:
- `.claude/skills/openreason/SKILL.md`
- `docs/FRAMEWORK_AUTHORING.md`
- `docs/VERIFICATION.md`
- `schemas/framework.schema.json`
- The most similar existing framework YAML for format reference.

---

## Step 2 — Determine mode

**If $ARGUMENTS names an existing framework** (e.g., "improve walton", "fix van dijk limitations"):
→ Read the current YAML file and proceed to **Improve mode** (Step 6).

**If $ARGUMENTS names a new theory or is empty:**
→ Proceed to **Create mode** (Step 3).

---

## Step 3 — Create mode: gather requirements

If the user has not provided enough detail, ask these questions one at a time
(do not ask them all at once):

1. **Theory**: What theoretical tradition or author does this framework come from?
   What is the primary source (book, paper, or article title and author)?

2. **Purpose**: What kind of analytical question is this framework designed to answer?
   Give an example of an input where it would be the right choice.

3. **Scope**: What does this framework analyse well?
   What is outside its scope?

4. **Core concepts**: What are the 3–6 most important concepts from this tradition
   that the framework will operationalise?

5. **Decision rules**: What should Claude Code do when it detects specific patterns
   in an input? (e.g., "IF the speaker claims authority THEN analyse ethos")

6. **Limitations**: What can this framework not determine?
   What would a critic of this tradition say?

---

## Step 4 — Create mode: draft the YAML file

Based on the gathered requirements, create a YAML file at:
`frameworks/<domain>/<id>.yaml`

Where:
- `<domain>` is a short category folder (e.g., `logic`, `discourse`, `framing`, `rhetoric`, `propaganda`, `cognitive`)
- `<id>` follows the pattern `<domain>-<author-surname>` (e.g., `propaganda-ellul`)

The file must include all required fields:

```yaml
id: <domain>-<surname>
name: <Full Author Name> — <Theory Name>
version: 0.1.0
domain: <domain_string>
purpose: >
  One or two sentences describing what this framework analyses.
intents:
  - <intent_1>
  - <intent_2>
triggers:
  - <keyword_1>
  - <keyword_2>
anti_triggers:
  - <what_should_not_activate_this>
core_concepts:
  - <concept_1>
  - <concept_2>
evidence_statuses:
  - O1
  - O2
  - <status_appropriate_to_domain>
  - H1
analysis_steps:
  - <step_1>
  - <step_2>
decision_rules:
  - IF <pattern> THEN <action>
  - IF <pattern> THEN <action>
analysis_questions:
  - <question_1>
  - <question_2>
output_fields:
  - <field_1>
  - <field_2>
limitations:
  - <limitation_1>
  - <limitation_2>
references:
  - title: <Book or Paper Title>
    author: <Author Name>
    note: >
      <Why this source was used and what it contributes>
```

**Required**: `O1` and `H1` must always appear in `evidence_statuses`.
**Required**: At least two `limitations`.
**Required**: At least one `references` entry with a real title and author.

---

## Step 5 — Create mode: validate and test

Run validation:
```bash
npx tsx src/cli.ts validate
```

If validation fails, fix the YAML and re-run before proceeding.

Add at least one test to `tests/` that checks the new framework is loaded
and that its primary intent is detected correctly for a representative input.

Example test pattern (adapt to the new framework):
```typescript
it('detects [intent] for [framework] prompts', () => {
  const intent = detectIntent('[representative input phrase]');
  expect(intent.primaryIntent).toBe('[intent_name]');
});
```

Run tests:
```bash
npm test
```

---

## Step 6 — Improve mode: make the change

Read the current YAML file.
Understand what the user wants to change and why.

Make only the requested changes. Do not restructure the file unnecessarily.

After the change:
1. Run `npx tsx src/cli.ts validate`
2. Run `npm test`
3. Explain what changed, what is better, and what remains uncertain.

---

## Step 7 — Declare maturity level

All new frameworks must be declared **draft** in your summary.
Do not claim a framework is `reviewed` or `verified` unless:
- `reviewed`: you have checked the concepts against a secondary source in this conversation
- `verified`: you have checked the concepts against the cited original source in this conversation

Use this language in your response:

> **Framework status: draft**
> The concepts in this framework have not been verified against the original cited sources.
> Before relying on this framework for analysis, a contributor should check [specific claims]
> against [specific source].

---

## Step 8 — Summary to user

Tell the user:
- What file was created or changed
- What the framework is designed to analyse
- What evidence statuses it uses
- What its declared maturity level is
- What its key limitations are
- What would be needed to move it from `draft` to `reviewed` or `verified`
