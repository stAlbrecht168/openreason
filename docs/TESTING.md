# Testing Guide — OpenReason

This document explains the testing strategy, what is covered, and how to run tests.

---

## Quick reference

| Command | When to use it |
|---|---|
| `npm run cc:health` | Claude Code's primary health check — plain-language report |
| `npm run cc:check` | Fast check without a build — validate + test |
| `npm test` | Full vitest test suite |
| `npm run validate` | Framework YAML schema validation only |
| `npm run cc:smoke` | Full check including TypeScript build and example analysis |

---

## What is tested

### Structural integrity (schema validation)

The `npm run validate` command loads every YAML file in `frameworks/` through the Zod schema. If any required field is missing, any field has the wrong type, or any enum value is invalid, validation fails with a specific error message pointing to the file and field.

Framework schema is defined in `src/schema.ts`. The equivalent JSON Schema is in `schemas/framework.schema.json`.

### Evidence model (tests/evidence.test.ts)

- The canonical evidence model contains exactly 10 labels in the correct order
- All labels are valid enum values
- `isValidEvidenceStatus()` correctly distinguishes valid from invalid labels
- `getEvidenceEntry()` returns correct metadata

### Framework maturity (tests/maturity.test.ts)

- `VerificationStatusSchema` accepts all four valid levels
- All loaded frameworks default to `draft` when `verification_status` is absent
- The four expected framework IDs are present

### Pack structure (tests/packs.test.ts)

- All five packs load and validate
- All nine capability names are covered
- `MaturityLevelSchema` correctly validates

### Pack/framework consistency (tests/consistency.test.ts)

This is the most important cross-document check:

- Pack entries with maturity `draft` or `implemented` must have a corresponding YAML file in `frameworks/`
- Pack entries with maturity `planned` must NOT have a corresponding YAML file
- Every framework YAML file must be referenced in at least one pack
- Required framework fields are substantive: at least one limitation, at least one reference with a title, `H1` in evidence_statuses

This test catches the most common maintenance drift: adding a framework YAML without updating the pack, or marking a planned framework as planned after writing the YAML.

### Example analysis files (tests/examples.test.ts)

Analysis files in `examples/*.analysis.md` demonstrate OpenReason in use. These tests ensure:

- At least one analysis file exists
- All evidence label brackets (e.g., `[O2]`, `[L1]`) contain valid status codes
- No typos like `[O3]`, `[L2]`, `[H2]` exist in examples
- Every analysis file is grounded in observations (at least one O1 or O2)
- Every analysis file includes at least one hypothesis-level claim (H1)

### README accuracy (tests/readme.test.ts)

- README acknowledges draft status of frameworks
- README references all implemented frameworks
- README does not claim frameworks are "verified" unless a YAML actually is

### Reasoning engine (tests/engine.test.ts, tests/resolver.test.ts, tests/router.test.ts)

- Intent detection works for common input types
- Framework activation is correct for discourse, logic, and rhetoric inputs
- `ReasoningEngine.analyze()` returns the expected output shape
- Report scaffold contains all required section headings

---

## Test philosophy

Tests here serve three purposes:

1. **Regression prevention** — if a change breaks existing behaviour, a test fails
2. **Contract enforcement** — consistency checks catch documentation drift that code alone cannot
3. **Self-documenting specification** — reading tests tells you what the system is supposed to do

All tests produce descriptive failure messages. A test that says `AssertionError: expected 0 to be > 0` is not useful; a test that says `pack "logic" lists "logic-walton" as draft but no framework YAML was found` is.

---

## What is not tested

| Gap | Why |
|---|---|
| The final LLM analysis output | Claude Code generates this; it is not deterministic and cannot be unit-tested |
| Framework content accuracy | This requires human verification against sources — see `docs/VALIDATION.md` |
| Router accuracy on novel inputs | The router is a heuristic; edge cases are tracked as known limitations |
| CI build on the deployed analysis | `cc:smoke` covers this; it requires a working `node_modules` |

---

## Running tests in CI

The GitHub Actions workflow (`.github/workflows/ci.yml`) runs:

```
npm ci
npm run validate
npm test
npm run build
```

Tests run on every push and pull request. A PR that makes any test fail cannot be merged.

---

## Adding tests

1. Create `tests/<name>.test.ts`
2. Import from `../src/` using `.js` extensions (ES module requirement)
3. Use `describe()` and `it()` from vitest
4. Write descriptive failure messages as the second argument to `expect()`
5. Run `npm test` to check the new tests pass
6. Document the new test file in `tests/README.md`
