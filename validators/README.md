# Validators — OpenReason

This directory contains standalone scripts for project health checking.

These scripts are designed for Claude Code to run as single-command health checks. They produce plain-language output that describes what passed, what failed, and why — without requiring knowledge of the test framework.

---

## `health.ts`

The primary health check script. Runs all structural validations and reports results in plain language.

```bash
npm run cc:health
```

Or directly:

```bash
npx tsx validators/health.ts
```

### What it checks

| Check group | What it validates |
|---|---|
| Frameworks | Schema validation, required fields, limitations, references, H1 in evidence_statuses |
| Packs | Schema validation, required IDs, capability coverage |
| Consistency | Draft entries have YAML files; planned entries don't; every YAML is pack-referenced |
| Examples | Valid evidence labels in analysis files; O1/O2 and H1 present |
| README | Acknowledges draft status; references all frameworks; doesn't overclaim verification |

### Output format

```
── OpenReason Health Check ─────────────────────────────────

  ✓  frameworks: loaded 4 framework(s)
  ✓  frameworks: all four expected framework IDs present
  ✓  packs: loaded 5 pack(s)
  ✓  consistency: all draft/implemented pack entries have YAML files
  ...

── 18 passed, 0 failed ────────────────────────────────
```

If any check fails:

```
── OpenReason Health Check ─────────────────────────────────

  ✓  frameworks: loaded 4 framework(s)
  ✗  consistency: planned entries lack YAML files
       pack "logic" → "logic-walton" is marked planned but has a YAML file

── 17 passed, 1 failed ────────────────────────────────
```

Exit code is 0 on all pass, 1 if any check fails.

---

## When to use validators vs. tests

| Use this | When you want |
|---|---|
| `npm test` | Full vitest suite with structured output for CI |
| `npm run cc:check` | Fast check: validate + test (no build required) |
| `npm run cc:health` | Plain-language health report for Claude Code |
| `npm run cc:smoke` | Full check including build and example analysis |

---

## Adding a new validator

Add a function to `health.ts` that returns `CheckResult[]`, then call it from the `run()` function's `allChecks` array. Use `pass(label)` for passing checks and `fail(label, detail)` for failures. The `detail` message should explain specifically what to fix.

Do not add new dependencies to this script — it imports only from the existing source modules.
