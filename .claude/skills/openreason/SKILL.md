# OpenReason Skill

Load this skill whenever the user asks to analyse arguments, rhetoric, discourse,
framing, political statements, media excerpts, or group-based comparisons —
and whenever a `/openreason-*` command is invoked.

---

## What OpenReason is

OpenReason is a structured analytical method. It makes AI-assisted reasoning
transparent by:

1. Detecting what kind of analysis is needed
2. Selecting documented analytical frameworks
3. Labelling every analytical claim with an evidence status
4. Producing a structured report that separates observation from interpretation from hypothesis

The user sees reasoning they can inspect, not just a conclusion to accept.

---

## The evidence-status model

Memorise this table. Every analytical claim in a report **must** carry one of these labels.

| Label | Name | Meaning | Confidence |
|---|---|---|---|
| O1 | Direct observation | A verbatim quote, a visible fact, something stated in the text | Highest |
| O2 | Explicit claim | A position or assertion the speaker makes | High |
| L1 | Logical inference | Follows from the logical structure of the argument | Medium-high |
| D1 | Discourse interpretation | How groups, relationships, or power are constructed in language | Medium |
| R1 | Rhetorical interpretation | How persuasion operates through the text | Medium |
| F1 | Framing interpretation | What is defined as the problem, cause, or solution | Medium |
| C1 | Possible cognitive effect | How the text may affect how a reader thinks | Low — state cautiously |
| S1 | Possible social effect | How the text may affect groups or social dynamics | Low — state cautiously |
| H1 | Hypothesis | A plausible explanation, not proven by the text alone | Low — mark explicitly |
| X1 | Speculation | Weakly supported; use only if explicitly requested | Lowest — usually avoid |

### Hard rules for evidence statuses

- **Build upward**: O1/O2 items are the foundation. L1 follows from O1/O2. D1/R1/F1 follow from O1/O2 and L1. C1/S1/H1 follow from the full picture.
- **Never jump**: Do not move from O1/O2 directly to H1 without the chain. Do not present D1 as O2.
- **Language discipline**:
  - O1/O2/L1: declarative — "the speaker says", "this implies"
  - D1/R1/F1: interpretive — "this functions as", "this may construct"
  - C1/S1/H1: cautious — "may", "could", "possibly", never "does" or "proves"
  - X1: explicitly labelled as speculation when used at all
- **Motive**: Never state motive as fact. The farthest you can go is [H1] — a hypothesis about possible function, explicitly marked as unproven.
- **Inaccessible media**: Never claim to have watched or heard video/audio you cannot access. Analyse transcripts or summaries only.

---

## Analytical frameworks

Read the relevant YAML file in `frameworks/` before applying a framework.
The summaries below are working memory; the YAML files are authoritative.

### `logic-walton` — Douglas Walton, Informal Logic

**Use when**: the input contains an argument — a claim supported by premises,
a conclusion drawn from evidence, a fallacy allegation, a burden-of-proof dispute.

**Core questions**:
- What is the conclusion?
- What premises support it?
- Do the premises actually lead to the conclusion?
- What assumptions are unstated?
- Is the burden of proof met?
- Is an analogy, generalisation, or authority appeal being used appropriately?

**Evidence statuses**: O2, L1, H1

**Characteristic findings**: non sequitur, hasty generalisation, unsupported authority appeal,
hidden premise, unmet burden of proof

**Limitation**: Does not verify empirical facts. Needs specific quotes or claims to work well.

---

### `discourse-van-dijk` — Teun A. van Dijk, Critical Discourse Analysis

**Use when**: the input involves groups — who is included, excluded, normalised,
problematised, praised, or blamed. Also when there is an "us vs. them" structure,
a minority comparison, a disclaimer ("I'm not against X, but..."), or an othering move.

**Core questions**:
- Who is presented as "us" and who as "them"?
- Which group is normalised or accepted? Which is problematised or rejected?
- Is one group used as a contrast group to make another appear less acceptable?
- Are disclaimers present that perform positive self-presentation while enabling negative other-presentation?
- What is emphasised or omitted?

**Evidence statuses**: O2, D1, S1, H1

**Key concepts**: ideological square, positive self-presentation, negative other-presentation,
strategic exception, contrastive othering, respectability hierarchy, deindividualisation

**Limitation**: Does not prove speaker intent. Discourse analysis describes structure, not motive.

---

### `framing-entman` — Robert Entman, Framing Analysis

**Use when**: the input defines a problem, assigns blame, makes a moral evaluation,
or implies a solution — especially in political or media contexts.

**Entman's four framing functions** (apply all four):
1. **Problem definition** — What is presented as the issue or threat?
2. **Causal interpretation** — Who or what is blamed?
3. **Moral evaluation** — What implicit judgement is made?
4. **Treatment recommendation** — What solution becomes thinkable or natural?

**Core questions**:
- What is made salient and what is omitted?
- Is cause assigned to culture, religion, nationality, or group membership?
- Is exclusion, restriction, or hierarchy implied as a solution?

**Evidence statuses**: O2, F1, S1, H1

**Limitation**: Framing analysis does not determine factual accuracy. Frame effects are context-dependent.

---

### `rhetoric-aristotle` — Aristotle, Rhetoric

**Use when**: the input is persuasive in intent — a speech, an appeal, a call to action,
or a text that uses credibility, emotion, or reasoning to move an audience.

**The three appeals** (apply all three):
- **Ethos** — How does the speaker establish credibility or authority?
- **Pathos** — What emotion is activated? Fear, pride, disgust, resentment, solidarity?
- **Logos** — What reasoning is offered? Is it valid?

**Enthymeme**: An argument where one premise is unstated. Identify what the audience
must silently assume for the argument to work.

**Core questions**:
- How does the speaker position themselves as trustworthy?
- What emotional register does the text operate in?
- What must the audience already believe for this argument to land?

**Evidence statuses**: O2, R1, L1, H1

**Limitation**: Describes persuasion structure, not factual truth. Does not prove intent.

---

## Framework selection guide

| Primary signal in input | Lead framework | Add |
|---|---|---|
| Explicit argument, fallacy, burden of proof | Walton | — |
| Group comparison, othering, minorities | van Dijk | Entman if problem/solution framing present |
| Political framing, problem/blame/solution | Entman | van Dijk if groups are involved |
| Persuasive speech, emotional appeal, credibility | Aristotle | Walton if a logical argument is embedded |
| All of the above / complex political rhetoric | van Dijk + Entman + Aristotle | + Walton for logical claims |
| Unclear or general | van Dijk + Walton | — |

When in doubt, activate more than one. Explain why each was chosen.

---

## Standard report format

Every analysis produced by OpenReason must follow this structure.
Sections may be short if the material is simple; none may be omitted.

```
## OpenReason Analysis

### Summary
One paragraph. What is the material? What analytical lens was applied? One sentence on the key finding.

### Intent and frameworks
- Detected intent: [discourse_analysis | logical_analysis | framing_analysis | rhetoric_analysis | general_analysis]
- Frameworks activated: [list with one-line reason each]

### Claim map
What is said explicitly? List O1/O2 items only.
- [O1] Direct quotes or directly observable facts
- [O2] Explicit positions or assertions the speaker makes

### Evidence graph
The analytical chain, built upward from O1/O2.
- [O2] ...
- [L1] Because ..., it follows that ...
- [D1/R1/F1] This functions as / constructs / frames ...
- [S1/C1] This may ... (cautious language)
- [H1] A possible but unproven explanation is ...

### Framework findings
One subsection per activated framework.
Apply that framework's specific questions and decision rules.

### Strongest counterinterpretation
What is the most plausible alternative reading? What would need to be true for the
main interpretation to be wrong? State this fairly and without dismissing it.

### Confidence and limitations
What can this analysis not determine? What evidence is missing?
What would strengthen or weaken the interpretation?
```

---

## Framework maturity levels

Use these terms consistently when discussing or documenting frameworks.

| Level | Meaning |
|---|---|
| **reference** | Described in documentation; no YAML file exists yet |
| **draft** | YAML file exists and validates; concepts not yet checked against cited sources |
| **reviewed** | Concepts checked against a secondary summary or expert commentary |
| **verified** | Concepts checked against the cited original sources |
| **contested** | Known disagreement between the YAML content and the source tradition |

All four current frameworks are **draft**.

---

## What this skill must never do

- Invent citations. If you cannot verify a claim about a theory, say "I am not certain this is correct" and recommend checking the source.
- State motive as fact. The maximum epistemic level for motive is [H1].
- Present D1/R1/F1 as proven. These are interpretations, not observations.
- Claim to have heard or watched inaccessible media.
- Skip the counterinterpretation section.
- Use [X1] unless the user explicitly asks for speculative analysis.
- Present an OpenReason analysis as a substitute for expert review.

---

## Files to read before applying frameworks

Always available in this repository:

```
frameworks/logic/walton.yaml
frameworks/discourse/van_dijk.yaml
frameworks/framing/entman.yaml
frameworks/rhetoric/aristotle.yaml
CLAUDE.md
docs/PROJECT_CHARTER.md
```

For framework authoring or audit work, also read:

```
docs/FRAMEWORK_AUTHORING.md
docs/VERIFICATION.md
docs/ARCHITECTURE.md
schemas/framework.schema.json
```
