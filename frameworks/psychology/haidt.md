# Jonathan Haidt — Moral Foundations Theory

**ID:** `psychology-haidt`  
**Domain:** moral_psychology  
**Version:** 0.1.0  
**Verification status:** draft  
**Pack:** `psychology`  
**Last updated:** 2026-06-29

---

## Purpose

This framework identifies which moral foundations — care/harm, fairness/cheating, loyalty/betrayal, authority/subversion, sanctity/degradation, and liberty/oppression — a text appeals to. Its analytical value is in explaining *why a communication resonates with some audiences and not others*: audiences that hold certain foundations prominently will find appeals to those foundations more compelling. All findings are possible patterns or hypotheses about audience resonance, not claims about the psychological states of real readers.

## Scope

**Appropriate for:**
- Political communication and moral rhetoric where the moral vocabulary is analytically important
- Texts that explicitly appeal to loyalty, purity, authority, care, fairness, or liberty
- Analysis of why a message may resonate with some audiences more than others

**Not appropriate for:**
- Establishing that any specific person holds specific moral foundations
- Cross-cultural analysis without substantial qualification
- Replacing discourse or framing analysis
- Any claim presented as established psychological fact

**This is the most contested framework in OpenReason.** Moral Foundations Theory has significant methodological critics within moral psychology. The six foundations are not empirically established as separable, universal, or exhaustive. This framework uses MFT as an analytical vocabulary for identifying moral appeals in text — it does not endorse MFT as a complete or accurate theory of moral psychology. Every finding must be stated as a possible pattern (`C1`) or hypothesis (`H1`).

## Capabilities provided

- `cognitive_effect_analysis` — identifying moral vocabulary and the foundations it plausibly activates
- `social_effect_analysis` — possible resonance with audiences who hold certain foundations prominently

## Workflow summary

**The six foundations.** Haidt and Graham (2007) propose that human moral psychology is structured around six foundation pairs (virtue/vice):

1. **Care / Harm** — concern for the vulnerable; condemnation of those who cause suffering
2. **Fairness / Cheating** — equal treatment; procedural justice; indignation at those who cheat
3. **Loyalty / Betrayal** — group solidarity; in-group protection; condemnation of betrayal
4. **Authority / Subversion** — deference to legitimate hierarchy and tradition; respect for institutions
5. **Sanctity / Degradation** — purity; disgust at violation of sacred things, bodies, or values
6. **Liberty / Oppression** — freedom from domination; resistance to coercion

**Analytical procedure.** The analyst reads the text and identifies explicit moral vocabulary. Vocabulary is then mapped to the foundation it most plausibly activates. The analyst notes which foundations are present and which are absent — the absence of care/harm appeals in a text that emphasises loyalty and authority, for example, is itself an analytical finding about the intended audience.

**Audience resonance hypothesis.** The potentially useful — and potentially contestable — move in MFT analysis is the hypothesis that the combination of foundations activated maps onto patterns of audience resonance. Haidt's research suggests different political orientations systematically emphasise different foundations. This step is always `H1` — a hypothesis, not an observation.

**What this framework cannot do.** It cannot establish that any real audience actually holds the foundations the text appeals to. It cannot verify that the foundations as defined by Haidt are psychologically real. It identifies the moral vocabulary in a text and notes what foundations that vocabulary is associated with in Haidt's taxonomy.

## Evidence mapping

| Status | When used |
|---|---|
| O1 | Verbatim quotes — the specific moral vocabulary as used |
| O2 | Explicit moral claims the text states |
| C1 | Possible cognitive effects: moral vocabulary associated with specific foundations in Haidt's taxonomy |
| S1 | Possible social effects: resonance patterns associated with audiences that hold certain foundations prominently |
| H1 | Hypotheses about intended audience, communicative strategy, or political alignment |

**Discipline note:** The step from "this text uses loyalty vocabulary" (O1) to "this text activates loyalty foundation in readers" (C1) is the epistemic boundary. The C1 finding is a possible effect, not an observation. The step from "this appeals to loyalty and authority" (C1) to "this was designed for audiences with a conservative moral profile" (H1) is a further step that requires explicit hypothesis labelling.

## Decision rule rationale

Each decision rule maps vocabulary to a foundation. The mapping is Haidt's, and the rules are labelled `[C1]` because they identify possible effects, not established activations.

- **Care/harm [C1]** — Language emphasising protection of the vulnerable, suffering, and condemnation of those who cause harm activates the care/harm foundation. This is present across political orientations but is more central to some.
- **Fairness/cheating [C1]** — Language of equal treatment, procedural justice, and indignation at those who break rules or "cheat the system" activates this foundation. Both procedural and substantive fairness concepts can activate it.
- **Loyalty/betrayal [C1]** — In-group solidarity language, military/team metaphors, condemnation of traitors or those who "don't stand with us." Group identity is foregrounded over individual autonomy.
- **Authority/subversion [C1]** — Deference to tradition, institutions, and legitimate hierarchy. Language emphasising order, respect for authority figures, and condemnation of those who undermine established structures.
- **Sanctity/degradation [C1]** — Purity and contamination language; disgust vocabulary; elevation and sacredness. Can be used in religious, cultural, or secular-nationalist contexts.
- **Liberty/oppression [C1]** — Freedom from domination, resistance to coercion, condemnation of those who restrict individual autonomy. Can be activated by both libertarian and progressive communication.

## Worked example

*Note: This example has not been verified against source texts. It is illustrative. It deliberately uses a text activating multiple foundations.*

**Input:** "Our soldiers protect our way of life while politicians betray them. The elites who benefit from the current system are corrupt and parasitic. We must purify our institutions before they are destroyed."

**Application:**
- [O1] Key vocabulary: "soldiers," "protect," "betray," "corrupt," "parasitic," "purify," "destroyed."
- [C1] **Loyalty/betrayal:** "betray" and "our soldiers" activate the loyalty/betrayal foundation — there is an in-group (soldiers, us) and a betrayer (politicians). Research associates this vocabulary with the loyalty foundation.
- [C1] **Authority/subversion:** "elites who benefit from the current system" inverts the authority foundation — the speaker presents existing authority as corrupt rather than legitimate. The implied restoration of proper authority is the treatment recommendation.
- [C1] **Sanctity/degradation:** "parasitic," "purify" and "destroyed" are purity/contamination vocabulary. The degradation frame positions the current situation as corrupted; purification is the implied solution. Disgust vocabulary (parasitic) is associated with the sanctity foundation.
- [C1] **Care/harm is notably absent** — the text does not appeal to protecting the vulnerable. This absence may suggest an intended audience that does not primarily prioritise the care foundation.
- [S1] Communication combining loyalty, authority-subversion, and sanctity-degradation foundations has been associated in the literature with nationalist-populist political communication. This is a pattern association, not a causal claim.
- [H1] Whether these foundation appeals are the result of deliberate strategy or conventional political vocabulary cannot be determined from the text alone.

## Limitations

**The theory is contested.** This is the most important limitation and must be stated in any analysis that uses this framework. Critics of Moral Foundations Theory (e.g., Gray & Schein, 2012) argue that the foundations are not empirically separable, that a single dimension of "morality" explains most variance, and that the six-foundation model may be more culturally constructed than universal. Use the framework as an analytical vocabulary for identifying moral appeals — not as verified psychological science.

**Developed primarily in the US.** The research base for MFT is heavily weighted toward US samples. Haidt's ideological mapping (which foundations are emphasised by different political orientations) has not replicated consistently in other countries. Cross-cultural application requires significant qualification.

**Vocabulary identification is not foundation activation.** Finding loyalty vocabulary in a text does not establish that the loyalty foundation was activated in any real reader. This is the epistemic boundary the C1 label is designed to mark.

**Ideological sensitivity.** MFT's mapping of foundations to political orientations means that applying it can introduce the analyst's own perspective into the analysis. The finding that a text "appeals primarily to conservative foundations" carries normative implications that need to be acknowledged and carefully hedged.

**Social effect claims require extreme caution.** S1 findings about audience resonance are hypotheses about pattern associations, not observations. They must be stated as "this type of appeal has been associated with..." not "this text will resonate with..."

## Known gaps

- The framework does not yet address Haidt's distinction between moral foundations and moral matrices (the full configuration of how foundations are weighted by different cultural groups).
- The `decision_rules` do not yet cover situations where the same vocabulary could activate multiple foundations simultaneously.
- The relationship between this framework and van Dijk's discourse strategies is not yet mapped — both may identify similar textual features from different theoretical angles.
- The academic debate about MFT (Gray & Schein critique, and subsequent responses) is not yet represented in the framework.

## References

- Haidt, Jonathan, and Jesse Graham. "When Morality Opposes Justice: Conservatives Have Moral Intuitions that Liberals May Not Recognise." *Social Justice Research*, 20(1), 2007, pp. 98–116.
- Haidt, Jonathan. *The Righteous Mind: Why Good People Are Divided by Politics and Religion*. Pantheon Books, 2012. ISBN: 978-0307377906.

*Note: The 2007 journal article is the appropriate primary source for verification. The 2012 book is more accessible but is a general-audience work and includes normative content beyond the empirical research. Publication details from publicly available bibliographic records.*

## Verification record

**Date:** Not yet verified  
**Verified by:** Not yet verified  
**Sources consulted:** None  

| Concept | Status |
|---|---|
| moral foundations | — not yet checked against Haidt & Graham (2007) |
| care and harm | — not yet checked |
| fairness and cheating | — not yet checked |
| loyalty and betrayal | — not yet checked |
| authority and subversion | — not yet checked |
| sanctity and degradation | — not yet checked |
| liberty and oppression | — not yet checked; added in later work by Haidt, source unclear |

*Priority: read Haidt & Graham (2007) to confirm the original six foundations and their definitions. Note that "liberty/oppression" was added after the original 2007 paper — its source should be identified.*

*Recommended: also read Gray & Schein (2012) "Moral typecasting: Divergent perceptions of moral agents and moral patients" to understand the principal critique of MFT before verification.*

## Changelog

### 0.1.0 — 2026-06-29
- Initial implementation
- All fields populated per FRAMEWORK_SPECIFICATION.md v1.0
- Contested-theory scope note added — required for any use of this framework
- C1/S1/H1 discipline requirements documented
- Specific critic (Gray & Schein) noted in known gaps
