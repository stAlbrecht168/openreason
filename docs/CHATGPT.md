# Using OpenReason with ChatGPT

ChatGPT cannot directly run the local TypeScript project unless it is connected to an external tool or you use the API.

## Practical options

### Option 1: Custom GPT

Use the files in `custom-gpt/` to create a Custom GPT. Upload the framework files and documentation as knowledge.

### Option 2: ChatGPT Project

Create a project called OpenReason and upload:

- `README.md`
- `CLAUDE.md` adapted as project instructions
- files under `frameworks/`
- `docs/`
- example analyses

### Option 3: API integration later

A future provider package can call the OpenAI API directly.

## Best current workflow

Use Claude Code for repository development and ChatGPT for comparing outputs manually.
