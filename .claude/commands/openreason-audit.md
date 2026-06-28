# /openreason-audit

Audit the OpenReason repository for internal consistency.

Write the results to `docs/audits/REPOSITORY_AUDIT.md`.

---

## Step 1 — Load context

Read these files before starting:
- `.claude/skills/openreason/SKILL.md`
- `docs/PROJECT_CHARTER.md`
- `docs/ARCHITECTURE.md`
- `CLAUDE.md`
- `schemas/framework.schema.json`

---

## Step 2 — Run automated checks (if CLI is available)

If `node_modules/.bin/tsx` exists:
```bash
npm run validate
npm test
```
Record whether each passed or failed. If a command fails, capture the error message verbatim.

If the CLI is unavailable, note "CLI unavailable — automated checks skipped" and proceed to manual checks.

---

## Step 3 — Framework audit

For each YAML file in `frameworks/`:

1. **Schema compliance** — Does it contain all required fields? (`id`, `name`, `version`, `domain`, `purpose`, `intents`, `triggers`, `anti_triggers`, `core_concepts`, `evidence_statuses`, `analysis_steps`, `decision_rules`, `analysis_questions`, `output_fields`, `limitations`, `references`)
2. **Evidence status consistency** — Does `evidence_statuses` include only valid values (O1–X1)? Does it include O1? Note: O1 is currently absent from all four frameworks — flag this.
3. **Intent coverage** — Do the `intents` listed in this framework match intent categories that the router in `src/router.ts` can detect?
4. **Trigger relevance** — Are the `triggers` words that would plausibly appear in inputs requiring this framework?
5. **Reference quality** — Does each entry in `references` name an actual author and title? Are they specific enough to locate?
6. **Limitations present** — Does `limitations` contain at least one substantive limitation?
7. **Maturity status** — Is there a `verification_status` field? If not, note it as `draft` (untracked).

---

## Step 4 — Documentation audit

Check each of these files exists and contains what it claims to:

| File | Check |
|---|---|
| `CLAUDE.md` | Describes Claude Code as primary interface; contains evidence model; contains framework table; contains refusal rules |
| `README.md` | Describes what OpenReason is; describes the evidence model; has a worked example |
| `docs/PROJECT_CHARTER.md` | Contains implementation status table; contains known limitations; contains roadmap |
| `docs/ARCHITECTURE.md` | Describes all three layers; names Claude Code as Layer 3; lists all CLI commands |
| `docs/CLAUDE_CODE_WORKFLOW.md` | Contains at least 4 user scenarios; explains report format |
| `docs/FRAMEWORK_AUTHORING.md` | Lists all required YAML fields |
| `docs/VERIFICATION.md` | Defines verification levels |

For each file, note: present / present but outdated / missing.

---

## Step 5 — Code/documentation consistency checks

1. **Framework IDs in docs vs. files** — Does every framework mentioned by ID in `CLAUDE.md`, `docs/ARCHITECTURE.md`, or `docs/PROJECT_CHARTER.md` have a corresponding YAML file?
2. **CLI commands in docs vs. `package.json`** — Do all `npm run` commands referenced in documentation exist in `package.json`?
3. **Schema sync** — Read `src/schema.ts` and `schemas/framework.schema.json`. Do they agree on which fields are required? Note any divergence.
4. **Test coverage** — Read `tests/`. What does each test cover? What is not tested? (List: router, resolver, loader, compiler, engine — tested or not.)
5. **Router intent coverage** — List all intents in `src/router.ts`. For each intent, does at least one framework have that intent in its `intents` array? If not, flag it as an orphaned intent that will silently fall back to default frameworks.

---

## Step 6 — Examples audit

1. How many files are in `examples/`?
2. Is there at least one example that exercises each of the four frameworks?
3. Is there a committed example output in `reports/` or elsewhere?

---

## Step 7 — Write the audit document

Create `docs/audits/` if it does not exist, then write `docs/audits/REPOSITORY_AUDIT.md`.

Use this structure exactly:

```markdown
# Repository Audit — OpenReason

**Date:** [today's date]
**Auditor:** Claude Code (automated + manual inspection)
**Repository state:** [current git commit short hash if obtainable, otherwise "unknown"]

---

## Automated checks

[pass/fail/skipped for each npm command]

---

## Framework audit

### [framework id]
[table or list of check → pass/fail/note]

---

## Documentation audit

[table: file | status | notes]

---

## Consistency checks

[numbered list of findings, one per check in Step 5]

---

## Examples audit

[findings]

---

## Summary

### Passing
[bullet list]

### Needs attention
[bullet list with specific file:issue format]

### Critical gaps
[bullet list — things that would mislead a user or break the workflow]

---

## Recommended next actions

[numbered list, highest priority first, each with a one-line rationale]
```

---

## Tone and accuracy rules

- Report what you find, not what you expect.
- If you cannot determine something (e.g., because a file is absent), say so explicitly.
- Do not invent passing results for checks you did not run.
- Distinguish between "missing" (file does not exist), "incomplete" (exists but lacks required content), and "inconsistent" (exists but contradicts another source).
