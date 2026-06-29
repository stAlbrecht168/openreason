# Chapter 3: Framework Packs

## A framework is not a theory summary

When someone teaches a course on persuasion, they might explain what Aristotle meant by *ethos*, *pathos*, and *logos*. That explanation is a summary of a theory. It tells you what the theory says.

A framework in OpenReason is something different. It is not a description of what Aristotle argued. It is a structured analytical tool derived from what Aristotle argued — specifying when to use it, what questions it asks, what decision rules it applies, and what it cannot do.

The difference matters. A theory summary tells you what someone believed. A framework tells you how to use those ideas in a specific analytical task, and how to know when you are using them correctly.

---

## What a framework contains

Every OpenReason framework is documented in a structured file. The file answers these questions:

**When should this framework be used?**
Every framework has *triggers* — patterns in the input that suggest it is relevant — and *intents* — the types of analytical question it is designed to answer. This prevents a framework from being applied to every text regardless of fit.

**What does it ask?**
The *analysis questions* are the core of the framework. They are the questions an analyst would ask when applying this tradition. For Aristotle: *What emotion is activated? How does the speaker construct credibility? What must the audience assume for the argument to work?*

**What rules does it apply?**
The *decision rules* specify what to do when certain patterns appear. For van Dijk: *if one group is praised while another is implicitly rejected, check for contrastive othering.*

**What evidence statuses does it produce?**
Different frameworks licence different types of claim. Walton (informal logic) produces L1 inferences and H1 hypotheses. Van Dijk produces D1 discourse interpretations and S1 social-effect observations. A framework that generates F1 (framing) claims will not generate the same kinds of conclusions as one that generates R1 (rhetorical) claims.

**What are its limitations?**
Every framework has things it cannot do. Walton's informal logic does not verify empirical facts. Aristotle's rhetoric describes persuasion structure but does not establish whether the persuasion is successful or honest. These limitations are stated explicitly in the framework file — not as disclaimers, but as essential information for using the framework correctly.

**Where did it come from?**
Every framework lists references: the books, papers, or primary sources it is derived from. These are specific enough to look up and verify.

---

## The fifteen frameworks currently available

OpenReason v0.2.0 includes fifteen frameworks across five packs. All fifteen are **draft** status — their files exist and validate, but their concepts have not yet been formally verified against the original cited sources.

The four foundational frameworks (Walton, van Dijk, Entman, Aristotle) are described in detail below. The eleven additional frameworks follow the same structure; their companion `.md` files contain the full documentation.

### Douglas Walton — Informal Logic

**What it analyses:** The structure of everyday arguments — claims, premises, conclusions, and the logical relationships between them.

**Use it when:** the text contains an argument — when someone is trying to establish a conclusion by offering reasons. Fallacy detection, burden-of-proof analysis, and identification of hidden premises all fall within this framework's scope.

**Key questions it asks:**
- What is the conclusion?
- What premises are offered?
- Does the conclusion follow from the premises?
- What assumptions are unstated but necessary?
- Is the burden of proof met?

**What it cannot do:** It does not verify whether the empirical content of the premises is true. It analyses argument *structure*, not argument *content*.

---

### Teun A. van Dijk — Critical Discourse Analysis

**What it analyses:** How language constructs social reality — particularly how groups are represented, how power relations are implied, and how ideological positions are reproduced in text.

**Use it when:** the text involves groups, categories of people, or social relationships. When a speaker positions one group as acceptable and another as problematic. When pronouns ("we," "they") are doing social work. When a text may be reinforcing or challenging power structures.

**Key questions it asks:**
- Who is presented as "us" and who as "them"?
- Which group is normalised and which is problematised?
- Are disclaimers present (e.g., "I'm not against X, but...")?
- What is emphasised, and what is omitted?

**What it cannot do:** It does not prove speaker intent. Discourse analysis describes how language functions; it does not establish why the speaker used it that way. This framework is most powerful when the text contains explicit group comparisons or othering moves; it has less to say about texts that do not involve those patterns.

---

### Robert Entman — Framing Analysis

**What it analyses:** How communication defines a problem, assigns cause, makes a moral evaluation, and implies a solution. Framing shapes which responses to a situation appear natural or appropriate.

**Use it when:** the text is about a problem, issue, or event — and you want to understand how the choice of framing shapes the available responses. Political communication, media analysis, and policy advocacy are primary domains.

**Key questions it asks:**
- What is defined as the problem?
- Who or what is blamed?
- What moral evaluation is implied?
- What solution becomes thinkable — and what is foreclosed?
- What is omitted from the frame?

**What it cannot do:** Framing analysis does not determine whether the frame is accurate. A frame can be analytically identifiable and also descriptively correct. The framework describes how communication is structured, not whether the underlying claims are true.

---

### Aristotle — Rhetoric

**What it analyses:** The structure of persuasion — how speakers build credibility, what emotions they activate, what reasoning they offer, and what the audience must supply for the argument to work.

**Use it when:** the text is persuasive in intent — a speech, an appeal, a polemic, an advertisement, a political address. Also useful when a text contains an enthymeme (an argument with an unstated premise that the audience must supply).

**Key questions it asks:**
- How does the speaker establish credibility (*ethos*)?
- What emotional register does the text operate in (*pathos*)?
- What reasoning is offered, and is it valid (*logos*)?
- What must the audience already believe for this argument to land (the *enthymeme*)?

**What it cannot do:** Rhetoric analysis describes persuasion structure, not truth. A text can use sophisticated rhetoric while making accurate claims. It can use poor rhetoric while making false ones. The framework does not adjudicate accuracy.

---

## Packs: organising frameworks around capabilities

A **pack** is a named group of capabilities — types of analysis — together with the frameworks that provide them.

Think of it this way. If you want to know whether a text contains informal fallacies, you need *argument analysis* and *fallacy detection* capabilities. The Logic Pack provides those capabilities, currently through the Walton framework. In future versions, it may also draw on Toulmin or Damer.

The pack is the capability layer. The framework is the method layer. Keeping these separate means you can describe what a pack *can do* even when some of the frameworks that would provide it are not yet implemented.

---

## The five packs

### Logic Pack

**Capabilities:** `argument_analysis`, `fallacy_detection`

Covers the structure of arguments: whether conclusions follow from premises, whether assumptions are stated, whether the burden of proof is addressed. Available draft frameworks: Walton, Toulmin, Weston, Damer.

---

### Discourse Pack

**Capabilities:** `discourse_analysis`, `group_representation_analysis`, `social_effect_analysis`

Covers how language constructs social reality, group representation, and ideological positions. Available draft frameworks: van Dijk, Fairclough, Wodak.

---

### Framing/Rhetoric Pack

**Capabilities:** `framing_analysis`, `rhetoric_analysis`

Covers problem framing, causal attribution, moral evaluation, and persuasion structure. Available draft frameworks: Entman, Aristotle, Lakoff, Perelman.

---

### Psychology Pack

**Capabilities:** `cognitive_effect_analysis`, `social_effect_analysis`

Covers patterns associated with cognitive and social effects of communication. Available draft frameworks: Kahneman/Tversky (dual-process theory, cognitive biases) and Haidt (Moral Foundations Theory).

When the Psychology Pack is activated, all observations must be at the C1 (possible cognitive effect) or H1 (hypothesis) level. Haidt's Moral Foundations Theory is additionally contested within moral psychology and must not be presented as established science.

---

### Propaganda Pack

**Capabilities:** `propaganda_analysis`, `social_effect_analysis`

Covers systematic persuasion techniques associated with propaganda. Available draft frameworks: Institute for Propaganda Analysis (seven devices) and Jowett & O'Donnell (definition and ten-step analysis method).

A note on this pack: identifying propaganda techniques in a text is itself an interpretive act. The pack provides tools for recognising patterns documented in the literature; classifying a communication as propaganda is always an H1 finding — propaganda is defined by communicator intent, which cannot be directly observed from a text.

---

## Maturity levels

Every framework in every pack has a maturity level. This is one of OpenReason's core transparency mechanisms: you can always see how much to trust the analytical method being applied.

| Level | What it means |
|---|---|
| **draft** | The framework file exists and validates; its concepts have not been verified against the cited sources |
| **planned** | The framework is documented but no file exists yet |
| **reviewed** | The concepts have been checked against secondary sources |
| **verified** | The concepts have been checked against the original cited sources |

All four currently implemented frameworks are **draft**. This means:

- They can be used in analysis
- Their findings should be treated with appropriate caution
- Contributors are actively needed to move them toward *reviewed* and *verified*

Chapter 6 explains how verification works.

---

## Why frameworks are not enough on their own

A framework tells you what questions to ask and what decision rules to apply. But frameworks are only as reliable as their grounding in the analytical traditions they represent.

If a decision rule in the Walton framework misrepresents what Walton actually argued — perhaps oversimplifying a concept, or applying it too broadly — then any analysis using that rule will carry a systematic error. The analysis might look rigorous because it cites a framework, while actually resting on a misreading of the source.

This is why maturity levels and verification matter so much. The framework file is not a shortcut to expertise. It is a starting structure that needs to be checked, refined, and held accountable to the sources it claims to represent.

---

*Previous: [Chapter 2 — The Evidence Model](02-evidence-model.md)*
*Next: [Chapter 4 — Writing Frameworks](04-writing-frameworks.md)*
