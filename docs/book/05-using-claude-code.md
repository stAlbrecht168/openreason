# Chapter 5: Using Claude Code

## The design decision

OpenReason is a repository — a collection of documented frameworks, evidence rules, examples, and code. To use it effectively, you need to be able to read frameworks, apply the evidence model, and structure an analysis.

None of that requires writing code. But it does require someone or something that can read the repository, apply the frameworks, and produce a structured output.

Claude Code is that interface. The design decision — recorded in the project's architectural decisions — was to make Claude Code the primary user-facing layer. The command-line tools exist for testing and automation. Claude Code is for doing analysis.

This means that if you can describe what you want to analyse in plain language, Claude Code can handle the rest.

---

## What Claude Code knows when you open the repository

When you open Claude Code inside the OpenReason repository, it reads the project's persistent instructions from a file called `CLAUDE.md`. That file contains:

- The full evidence-status model and the rules for using it
- The list of available frameworks and when to apply each one
- The standard report structure every analysis must follow
- The discipline rules: what Claude Code must never do (invent citations, attribute motive, claim to have watched inaccessible media, present D1/F1 findings as facts)
- The framework vocabulary: implemented, draft, planned, verified

You do not need to explain any of this to Claude Code before you start. The instructions are loaded from the repository. This means the analytical discipline is consistent across sessions — it is not something you have to remember or re-specify each time.

---

## How to start an analysis

The simplest way to use OpenReason is to describe what you want in natural language.

**Example:**
```
Analyze this statement using OpenReason:
"Technology will solve climate change. We do not need more regulation."
```

Claude Code will:

1. Read the relevant framework files to understand the available analytical methods
2. Detect the type of analysis most appropriate for the input (argument structure, framing, rhetoric, discourse, or a combination)
3. Select the frameworks whose triggers and intent categories match the input
4. Optionally generate an analysis packet — a structured scaffold — using the command-line tools
5. Produce a final structured analysis in the standard report format, with every claim labelled

You receive a response that separates observations from inferences from interpretations from hypotheses. You can see which frameworks were applied and why. You can ask Claude Code to explain any step.

---

## The standard report structure

Every OpenReason analysis follows the same structure. Claude Code is instructed to produce this structure regardless of how the request is phrased.

**Summary.** One paragraph. What is the material? What analytical lens was applied? What is the key finding?

**Intent and frameworks.** Which analytical intent was detected? Which frameworks were activated, and why each one was chosen?

**Claim map.** Only O1 and O2 items — a factual record of what the text actually says.

**Evidence graph.** The full analytical chain, built upward from the claim map: inferences (L1), then interpretations (D1/R1/F1), then possible effects (C1/S1), then hypotheses (H1). Each step labelled.

**Framework findings.** One section per activated framework, applying that framework's specific questions and decision rules.

**Strongest counterinterpretation.** The most plausible alternative reading of the material. This section is not optional. It prevents the analysis from reading as advocacy.

**Confidence and limitations.** What this analysis can determine, what it cannot, and what would need to be true for the conclusions to be wrong.

---

## Asking for deeper analysis

After an initial analysis, you can ask Claude Code to go deeper in specific directions.

**To focus on one framework:**
```
Go deeper on the framing analysis. Apply Entman's four-part model in full.
```

**To explore a specific concept:**
```
What is the enthymeme in this argument? What premise does the audience need to supply?
```

**To add a new pack:**
```
Can you also apply the Discourse Pack to this text?
```

**To adjust the evidence level:**
```
Which of your findings are interpretations rather than direct inferences?
Can you mark them more carefully?
```

Claude Code will adjust the analysis accordingly, re-applying the frameworks with the scope you specify.

---

## Analysing longer texts

For longer inputs — a speech transcript, an article, a series of statements — you can either paste the text directly or save it to a file in the `examples/` folder.

**Inline (for shorter texts):**
```
Analyze this excerpt using OpenReason:
[paste text here]
```

**From a file:**
```
Analyze examples/my-input.md using OpenReason.
```

For longer texts, Claude Code may focus on the most analytically rich sections rather than attempting a line-by-line analysis of everything. If you want specific sections analysed, say so.

---

## Slash commands

The repository includes named commands for common tasks. You can use these as shortcuts.

| Command | What it does |
|---|---|
| `/openreason-analyze` | Full OpenReason analysis on the material you provide |
| `/openreason-framework` | Create a new framework or improve an existing one |
| `/openreason-audit` | Audit the repository for consistency and completeness |
| `/openreason-test` | Run validation checks on the framework files and tests |

These commands load the relevant instructions and walk through the task systematically.

---

## When Claude Code runs the tools

Claude Code may run command-line tools to support the analysis. If it does, it will say so.

The most common one is the analysis packet generator:
```
npx tsx src/cli.ts analyze examples/my-input.md --out reports/my-analysis.md
```

This generates a structured scaffold — the detected intent, the selected frameworks, and a template for the evidence graph — which Claude Code then uses as a starting point for the final analysis.

You do not need to run this yourself. If Claude Code runs it, it will read the output and incorporate it. If the tools are unavailable (because dependencies are not installed), Claude Code will proceed with the analysis directly using the framework files.

---

## Validation and health checks

To verify that the repository's framework files are valid:

```
Run the OpenReason tests and tell me the results.
```

Or:
```
/openreason-test
```

Claude Code will check that:
- All framework YAML files pass schema validation
- The automated tests pass
- The build succeeds
- The example analysis generates without errors

It will report the results in plain language, not raw terminal output. If anything fails, it will explain what happened and offer to fix it.

---

## What Claude Code will not do

Claude Code is instructed by the repository's `CLAUDE.md` file to follow specific discipline rules. These are not negotiable — they are part of what makes OpenReason different from a standard AI analysis.

Claude Code will not:
- Invent citations or claim that a theory says something it cannot verify
- Present a framing interpretation (F1) or discourse interpretation (D1) as an established fact
- Attribute motive or intent to a speaker based on discourse analysis alone
- State a hypothesis (H1) as though it is a conclusion (L1 or O2)
- Claim to have watched or heard media it cannot access
- Skip the counterinterpretation section
- Present the analysis as a substitute for expert review

If you ask for something that would require one of these steps, Claude Code will explain why it cannot do it and offer what it can do instead.

---

## Using OpenReason for learning

Beyond analysis tasks, you can use Claude Code as a way to learn the framework concepts.

**Ask about specific evidence labels:**
```
What is the difference between D1 and F1?
```

**Ask for an explained example:**
```
Show me how the Aristotle framework applies to a short example.
Walk through ethos, pathos, and logos step by step.
```

**Ask about framework selection:**
```
I have a text about housing policy that uses group comparisons.
Which packs should I activate?
```

**Ask for an explanation of a finding:**
```
You said the argument contains a non sequitur. Explain what that means
in the context of this specific text.
```

Claude Code can function as an analytical tutor as well as an analyst. The frameworks and evidence model are documented in the repository, so its explanations are grounded in documented method, not improvised.

---

*Previous: [Chapter 4 — Writing Frameworks](04-writing-frameworks.md)*
*Next: [Chapter 6 — Verification](06-verification.md)*
