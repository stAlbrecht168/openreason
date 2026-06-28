# Chapter 4: Writing Frameworks

## What this chapter is for

This chapter is for anyone who wants to add a new framework to OpenReason, improve an existing one, or simply understand what makes a framework good or poor. You do not need to be a developer. The framework format is a structured document — closer to a research protocol than to code.

The most valuable contributions to OpenReason are not code changes. They are careful, documented analytical methods grounded in scholarly sources.

---

## What a framework is trying to do

Before writing a single field of a framework, it is worth being clear about what the framework is for.

A framework is a reusable analytical method derived from a documented theoretical tradition. It is designed to be applied consistently — so that two different analysts applying the same framework to the same text will ask the same questions, apply the same decision rules, and reach comparable conclusions.

This is the standard a framework is held to. Not: *does this sound plausible?* But: *is this grounded in a recognised analytical tradition, is it documented carefully enough to be applied consistently, and are its limitations stated honestly?*

A framework is not:
- A summary of an author's intellectual biography
- A collection of interesting insights from multiple traditions
- A personal analytical preference
- A prompt you have found useful

A framework is a disciplined, documented method. That discipline is what makes it checkable.

---

## The fields every framework must include

### `id`

A unique identifier for the framework. Follow the pattern `domain-surname`: `logic-walton`, `discourse-van-dijk`, `framing-entman`, `rhetoric-aristotle`.

### `name`

The full, readable name of the framework and the tradition it represents. Example: *Douglas Walton — Informal Logic*.

### `version`

Start at `0.1.0`. Increment when the framework's content changes significantly.

### `domain`

The broad analytical domain. Examples: `informal_logic`, `critical_discourse_analysis`, `framing_analysis`, `rhetoric`.

### `purpose`

One or two sentences explaining what analytical question this framework is designed to answer. This should be specific enough that someone can determine whether the framework is the right tool for their input.

*Good:* "Analyse everyday arguments by identifying claims, premises, conclusions, burden of proof, and critical questions."

*Too vague:* "Help understand how people communicate."

### `verification_status`

Set to `draft` when creating a new framework. Change to `reviewed` or `verified` only after doing the actual verification work described in chapter 6. Never set this to anything other than `draft` before verification.

### `intents`

A list of the analytical intent categories this framework is designed for. Current intent categories include `logical_analysis`, `discourse_analysis`, `framing_analysis`, `rhetoric_analysis`. If you are creating a framework for a new intent, that intent must also be added to the routing system.

### `triggers`

Words or phrases that appear in inputs where this framework is likely to be relevant. These are the signals the intent detection system uses. Choose them carefully: triggers that are too broad will activate the framework for inputs it does not fit; triggers that are too narrow will miss cases where it would help.

### `anti_triggers`

Words or phrases that indicate this framework should *not* be activated, even if other triggers are present. Example: a framework for discourse analysis should not activate for inputs that are clearly technical or mathematical.

### `core_concepts`

The 3–6 most important concepts from this analytical tradition that the framework operationalises. These should be the concepts a knowledgeable reader of the source tradition would recognise. Do not include concepts from adjacent traditions, even if they seem related.

### `evidence_statuses`

The evidence status labels this framework produces. A logic framework produces L1 inferences and H1 hypotheses. A discourse framework produces D1 discourse interpretations. A framing framework produces F1 framing interpretations.

**Important:** Every framework should include O1 and O2 (because every analysis begins with what is in the text) and H1 (because every analysis must have a level for uncertain conclusions). Interpretation-level statuses (D1, R1, F1) belong only in frameworks that are specifically designed to produce that kind of interpretation.

### `analysis_steps`

A sequence of steps an analyst would follow when applying this framework. These should be concrete enough to follow without having read the source texts. They should reflect the actual methodology of the analytical tradition, not a generic analytical process.

*Good step:* "Identify the explicit claim. Identify premises and conclusion. Reconstruct hidden assumptions. Ask critical questions."

*Too generic:* "Read the text carefully. Think about what the author is saying."

### `decision_rules`

Conditional rules that specify what to do when specific patterns appear. These are the most important part of the framework for producing consistent results.

*Good rule:* "IF one minority group is praised while another is implicitly rejected, THEN check for strategic exception and contrastive othering."

*Too vague:* "IF the text is about groups, consider discourse effects."

Decision rules must be grounded in the source tradition. Do not write rules that seem analytically useful but are not traceable to the cited sources.

### `analysis_questions`

The questions an analyst should ask when applying this framework. These should be the questions that practitioners of this analytical tradition actually ask. For van Dijk: *Who is presented as "us"? Who as "them"?* For Aristotle: *How does the speaker build credibility? What emotion is activated?*

### `output_fields`

The named outputs this framework produces — the categories that will appear in the analysis report. For Aristotle: `ethos`, `pathos`, `logos`, `enthymeme`. For Entman: `problem_definition`, `causal_interpretation`, `moral_evaluation`, `treatment_recommendation`.

### `limitations`

At least two, and preferably more. These must be genuine limitations that a knowledgeable critic of the tradition would recognise.

*Good limitation:* "Does not prove speaker intent. Discourse analysis describes structure, not motive."

*Not a real limitation:* "May not apply to all texts." (This is so general as to be useless.)

Limitations are not warnings to protect the project from criticism. They are essential analytical information that any user of the framework must know.

### `references`

At least one entry, with a real title and author. The references should be specific enough to locate and read. Prefer primary sources over secondary summaries. If you are using a secondary source (a textbook, a review article), say so.

---

## The discipline of staying in your tradition

The hardest part of writing a good framework is staying within the analytical tradition you are drawing on.

It is tempting to add a concept from a related tradition because it seems to belong. It is tempting to sharpen a decision rule with an insight from a different scholarly framework. It is tempting to include a concept that the analytical community uses informally but that is not well-established in the source tradition.

Resist all of these.

A framework grounded in van Dijk should contain concepts that van Dijk actually developed or explicitly endorsed. If you want to add a concept from Fairclough, write a Fairclough framework. If you want to add a concept that belongs to both traditions, be explicit about the source and verify it in both.

This discipline exists because frameworks are held accountable to their sources. If a decision rule is attributed to Walton but does not reflect what Walton argued, the framework misleads every analysis that uses it. Keeping frameworks within their stated traditions is how the accountability is maintained.

---

## The first draft is only a start

When you create a framework, you are producing a first draft. That is fine — the project labels it honestly as `draft`. But the work is not done.

A draft framework needs to be verified: its concepts checked against the sources it cites, its decision rules tested against real examples, its limitations reviewed for completeness. Chapter 6 describes how this works.

No framework should be treated as settled until it has been reviewed or verified by someone with knowledge of the source tradition. The maturity label is the honesty mechanism that makes this visible.

---

## Common mistakes to avoid

**Writing a biography instead of a method.** A framework that says "van Dijk is a professor at the University of Amsterdam who has written extensively on discourse and power" is not useful. The framework should say what questions to ask and what decision rules to follow.

**Blending traditions without acknowledgement.** A framework that combines van Dijk's group representation concepts with Fairclough's intertextuality analysis should either be clearly labelled as synthetic or split into two separate frameworks.

**Overconfident decision rules.** A rule like "IF a speaker praises one group while criticising another, THEN this is racism" is far too strong. The framework cannot establish motive or establish the presence of prejudice from structure alone. Rules must stay within what the framework can actually determine.

**Incomplete limitations.** If the only limitation you list is "this framework may not apply in all contexts," the limitations section is not doing its job. State the specific things this framework cannot determine: intent, factual accuracy, causal effects, etc.

**Evidence statuses that don't match the tradition.** A framing framework that claims to produce L1 (logical inference) is blurring categories. Framing analysis produces F1 (framing interpretation). If your framework is also doing logical analysis, consider whether it should be two frameworks or one.

---

## Getting help from Claude Code

If you want to create a new framework, you can work with Claude Code:

```
/openreason-framework [name of the theory or tradition]
```

Claude Code will ask you for the details — purpose, source, key concepts, limitations, references — and help you draft the framework file. It will then validate the file and flag any missing fields.

The output will be a draft framework. You are still responsible for verifying it against the source.

---

*Previous: [Chapter 3 — Framework Packs](03-framework-packs.md)*
*Next: [Chapter 5 — Using Claude Code](05-using-claude-code.md)*
