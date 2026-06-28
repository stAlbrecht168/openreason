# /openreason-use

Use OpenReason on the provided material.

Steps:

1. Read `CLAUDE.md`.
2. If needed, run `npm install`.
3. Run `npm run cc:smoke` to verify the repository.
4. Put the material into a temporary Markdown file if it is not already in the repo.
5. Run `npx tsx src/cli.ts analyze <input> --out reports/<name>.md`.
6. Read the generated report packet.
7. Produce a final analysis using evidence statuses.

Do not ask the user to run npm commands manually unless the environment blocks tool execution.
