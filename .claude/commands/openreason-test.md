# /openreason-test

Run the OpenReason health checks and report the results in plain language.

---

## Step 1 — Check whether dependencies are installed

```bash
ls node_modules/.bin/tsx 2>/dev/null && echo "ready" || echo "missing"
```

**If missing:**
```bash
npm install
```
If `npm install` fails, report:
> Dependencies could not be installed. The automated checks cannot run.
> Manual checks will follow.

Then skip to Step 6.

---

## Step 2 — Validate framework YAML files

```bash
npx tsx src/cli.ts validate
```

**If it passes:** Note "Framework validation: PASSED — all YAML files are valid."

**If it fails:** Read the error output. Identify which file failed and why.
Report in plain language, e.g.:
> Framework validation: FAILED
> `frameworks/discourse/van_dijk.yaml` is missing the required field `output_fields`.

---

## Step 3 — Run the test suite

```bash
npm test
```

**If it passes:** Note "Tests: PASSED — all tests passed."

**If it fails:** Read the error output. For each failing test, explain:
- Which test failed (by name)
- What it was checking
- What the actual result was vs. what was expected
- Whether this looks like a code change broke something, or a test that was already wrong

Do not paste raw stack traces. Summarise the failure in one or two sentences per test.

---

## Step 4 — Run the build

```bash
npm run build
```

**If it passes:** Note "TypeScript build: PASSED."

**If it fails:** Identify which file has the type error and what the error is.
Report in plain language, e.g.:
> TypeScript build: FAILED
> `src/engine.ts` line 33: Type 'string | undefined' is not assignable to type 'string'.
> This means a value that might be undefined is being used where a string is required.

---

## Step 5 — Run the example analysis

```bash
npx tsx src/cli.ts analyze examples/iran-somalia.md --out reports/smoke-test.md
```

**If it passes:** Note "Example analysis: PASSED — report written to reports/smoke-test.md."

**If it fails:** Report what went wrong.

---

## Step 6 — Manual framework check (always run)

Read each file in `frameworks/` and check:
- Does it have an `id`, `name`, `version`, `domain`, and `purpose`?
- Does it have at least one `limitation`?
- Does it have at least one `references` entry with a title and author?

Report any framework that is missing these basics.

---

## Step 7 — Summary

Write a clear summary in this format:

```
## OpenReason Health Check

| Check | Result |
|---|---|
| Framework validation | PASSED / FAILED / SKIPPED |
| Tests | PASSED / FAILED / SKIPPED |
| TypeScript build | PASSED / FAILED / SKIPPED |
| Example analysis | PASSED / FAILED / SKIPPED |
| Manual framework check | PASSED / issues found |

[If anything failed or needs attention, list it here with one-sentence explanations.]

[If everything passed, write one sentence confirming the repository is healthy.]
```

---

## What to do if something fails

- **Framework validation fails**: The YAML file has a schema error. Read the error, open the file, and fix the missing or invalid field. Then re-run validation.
- **A test fails**: Read the test code and the error. If the test logic is wrong, fix the test. If the source code broke the test, fix the source code. Do not delete tests to make them pass.
- **TypeScript build fails**: Fix the type error in the source file. Do not use `as any` to suppress it.
- **Example analysis fails**: Check whether `examples/iran-somalia.md` exists and whether `src/engine.ts` can run without error.
