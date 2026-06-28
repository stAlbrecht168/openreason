# Using OpenReason with ChatGPT

OpenReason currently produces `compiled_prompt.md`.

## Basic workflow

1. Run:

```bash
npm run compile:example
```

2. Open `compiled_prompt.md`.
3. Copy its content into ChatGPT.
4. Add the material you want analyzed.
5. Ask ChatGPT to follow the OpenReason output format.

## Suggested message

```text
Use the following OpenReason compiled prompt as your instruction. Analyze the material and label every major conclusion with an evidence status.
```

## Project workflow

For repeated work, create a ChatGPT Project named `OpenReason` and upload:

- `compiled_prompt.md`
- `docs/`
- `frameworks/`
- `examples/`

Then start analyses with:

```text
Use OpenReason. Analyze this material with evidence statuses and a framework/resource map.
```
