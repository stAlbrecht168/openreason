---
description: Compile an input and produce an OpenReason-style analysis
argument-hint: [input-file]
allowed-tools: Bash, Read, Write, Grep, Glob
---

Use OpenReason to analyze the provided input file.

Steps:

1. If no file is provided, use `examples/iran-somalia.md`.
2. Run the compiler.
3. Read `compiled_prompt.md`.
4. Produce an analysis following the compiled prompt.
5. Use evidence statuses explicitly.
6. Do not infer motive as fact.

Commands:

```bash
npm run validate
npm test
npm run build
```

Then compile either `$0` or the example file.
