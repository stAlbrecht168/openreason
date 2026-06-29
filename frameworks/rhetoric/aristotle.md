# Aristotle — Rhetoric

**ID:** `rhetoric-aristotle`  
**Domain:** rhetoric  
**Version:** 0.2.0  
**Verification status:** draft  
**Pack:** `framing-rhetoric`  
**Last updated:** 2026-06-29

---

## Purpose

This framework analyses the structure of persuasion through Aristotle's three modes of appeal. *Ethos* concerns how a speaker constructs credibility and trustworthiness. *Pathos* concerns how a text activates emotion in the audience. *Logos* concerns the reasoning offered. The framework also identifies *enthymemes* — arguments with an unstated premise that the audience must supply, a core concept of Aristotle's *Rhetoric* and one of the most analytically productive tools for examining persuasion in everyday communication.

## Scope

**Appropriate for:**
- Political speeches, public addresses, appeals
- Persuasive articles, editorials, manifestos
- Calls to action
- Any text primarily designed to move an audience — to a belief, an emotion, or an action

**Not appropriate for:**
- Purely logical arguments with no persuasive intent (use `logic-walton`)
- Texts primarily about group representation without persuasive structure (use `discourse-van-dijk`)
- Media framing without audience appeal analysis (use `framing-entman`)

**Note:** Ethos, pathos, and logos often co-occur. This framework is frequently activated alongside `logic-walton` (when the argument structure is also important) or `framing-entman` (when the persuasion is about how an issue is framed).

## Capabilities provided

- `rhetoric_analysis` — ethos, pathos, logos, enthymeme identification

## Workflow summary

An analyst applying this framework works through the three appeals in sequence, then addresses the enthymeme.

**Ethos** is assessed by asking: how does the speaker claim authority? This may be through stated credentials, appeals to experience, claims of moderation, or association with trusted figures or values. Ethos can be constructed; it is not the same as actual credibility.

**Pathos** is assessed by asking: what emotional register is activated? Aristotle catalogued many emotions and the conditions under which they arise. In practice, the analyst identifies the dominant emotional register (fear, hope, pride, disgust, resentment, solidarity) and notes how the text activates it.

**Logos** is assessed by asking: what reasoning is offered? This overlaps with the Walton framework's logical analysis, but in the rhetorical context the question is specifically about whether reasoning is being used to persuade — not just whether it is valid.

**Enthymeme** is the most distinctive contribution of this framework. An enthymeme is an argument where one premise is left unstated — the audience is invited to supply it. Identifying the unstated premise reveals what the speaker assumes the audience already believes, which often reveals the ideological common ground the text is trying to activate.

## Evidence mapping

| Status | When used |
|---|---|
| O1 | Verbatim quotes that illustrate the rhetorical appeal |
| O2 | Explicit claims, appeals, or self-characterisations the speaker makes |
| R1 | Rhetorical interpretations: how the text functions as persuasion, what appeals are at work |
| L1 | Logical analysis of the reasoning component (logos) and enthymeme reconstruction |
| H1 | Hypotheses about the speaker's strategic choices or intent |

**Important:** R1 claims describe the structure of persuasion, not its honesty or effectiveness. Finding an emotional appeal does not mean the emotion is manufactured; finding an ethos claim does not mean the credibility is unearned.

## Decision rule rationale

- **Ethos analysis [R1]** — When a speaker appeals to their own character, expertise, or trustworthiness, this is an ethos claim. Aristotle identified ethos as the most potent form of persuasion, because audiences are more likely to believe a speaker they trust. Claims of moderation ("I'm not an extremist") are a specific type of ethos construction worth analysing.
- **Pathos analysis [R1]** — Aristotle's *Rhetoric* Book II catalogues emotions and the conditions under which they arise. In practical analysis, the key question is: what emotion is the text trying to activate, and what techniques does it use? Fear requires an apparent threat; pride requires a flattering identification; resentment requires a perceived injustice.
- **Enthymeme reconstruction [L1]** — An enthymeme is recognised when an argument works only if the audience supplies a missing premise. The analyst reconstructs the premise explicitly. This is classified as L1 (logical inference) because it involves analysing the argument structure, not just the rhetorical surface.
- **Solidarity appeals [R1]** — When a text invites the audience to identify with the speaker ("we", shared values, shared concerns), this is a solidarity-based ethos strategy. It constructs a collective "we" that frames the audience as sharing the speaker's perspective.

## Worked example

*Note: This example has not been verified against source texts. It illustrates the framework's application.*

**Input:** "Technology will solve climate change. We do not need more regulation."

**Application:**
- [O2] Speaker makes two declarative claims stated with high confidence.
- [R1] **Ethos:** The declarative certainty of "will solve" and "do not need" constructs the speaker as someone who has resolved a contested question. This is an ethos claim via confident assertion rather than stated credentials.
- [R1] **Pathos:** The statement operates in an optimistic register. It invites a feeling of confidence and forward momentum rather than urgency or concern. This is a mild pathos appeal — it does not activate fear or resentment.
- [L1] **Logos and enthymeme:** The argument is structured as: [1] technology will solve climate change, therefore [2] regulation is not needed. The inference from [1] to [2] requires the unstated premise: "if technology is sufficient, regulation is redundant" — or more precisely, "technology and regulation are in competition." This premise is not argued; the audience is invited to supply it.
- [H1] A possible but unproven hypothesis: the speaker assumes the audience already shares the view that technology and regulation are alternatives. Whether this is the case cannot be determined from the text alone.

## Limitations

**Describes persuasion structure, not truth.** A text can employ sophisticated rhetorical strategy and still make accurate claims. A poorly constructed appeal can be entirely correct. Rhetoric analysis is orthogonal to fact-checking.

**Does not prove intent.** Finding an emotional appeal does not mean the emotion is manufactured or manipulative. A speaker can be genuinely moved by fear, hope, or pride while also using those emotions rhetorically. Intent requires H1.

**Audience effects are inaccessible.** The framework analyses the text, not its actual effect on audiences. Whether a pathos appeal succeeds depends on the actual audience, context, and prior exposure — none of which the text reveals.

**Ethos is constructed, not observed.** The framework analyses claimed credibility, not actual credibility. A speaker may claim expertise they do not have; a speaker may have expertise they do not mention. The framework can only analyse what the text asserts.

## Known gaps

- The framework does not yet include Aristotle's *topos* (commonplaces) — the shared premises and values that speakers draw on. These are related to the enthymeme concept but more systematic.
- The `decision_rules` cover only four rhetorical patterns. Aristotle's *Rhetoric* Books I–II contain a much richer taxonomy.
- The framework does not yet include Aristotle's distinction between *pisteis* (artistic) and *atechnoi* (non-artistic) proofs.

## References

- Aristotle. *Rhetoric*. Translated editions include: Kennedy, George A. (trans.), *On Rhetoric: A Theory of Civic Discourse*. Oxford University Press, 2007. ISBN: 978-0195324563.

*The primary source is Aristotle's Rhetoric, written c. 335 BCE. Any standard scholarly translation is acceptable. The core framework (ethos, pathos, logos, enthymeme) is in Books I and II. Kennedy's 2007 translation is widely used in contemporary rhetoric scholarship.*

## Verification record

**Date:** Not yet verified  
**Verified by:** Not yet verified  
**Sources consulted:** None  

| Concept | Status |
|---|---|
| ethos | — not yet checked against Aristotle's Rhetoric Books I–II |
| pathos | — not yet checked against Aristotle's Rhetoric Book II |
| logos | — not yet checked against Aristotle's Rhetoric Books I–II |
| audience | — not yet checked |
| enthymeme | — not yet checked; this concept is complex in Aristotle and has been interpreted in multiple ways in the literature |

*Verification requires reading Kennedy's translation of *Rhetoric* Books I–II (approximately 80 pages) and confirming each concept matches the YAML description. The enthymeme concept in particular has a contested scholarly literature; verification should note any discrepancies.*

## Changelog

### 0.2.0 — 2026-06-29
- Added `scope` field with note on co-activation with other frameworks
- Added `capabilities` field
- Added `O1` and `L1` to `evidence_statuses` (`L1` is appropriate for enthymeme reconstruction)
- Added `year`-equivalent information to references
- Expanded `limitations` and `decision_rules`
- Added note about Kennedy (2007) translation
- Created this companion `.md` file

### 0.1.0 — initial
- Initial YAML implementation
