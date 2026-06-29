# Ruth Wodak — Discourse-Historical Approach

**ID:** `discourse-wodak`  
**Domain:** critical_discourse_analysis  
**Version:** 0.1.0  
**Verification status:** draft  
**Pack:** `discourse`  
**Last updated:** 2026-06-29

---

## Purpose

This framework provides tools for analysing discriminatory and prejudiced language in political and institutional contexts using Wodak's Discourse-Historical Approach (DHA). Its distinctive contribution is threefold: it identifies specific discursive strategies through which social actors are constructed and marginalised (nomination, predication, argumentation, perspectivisation, intensification/mitigation); it introduces the concept of *topoi* — argumentative commonplaces drawn from shared cultural assumptions to justify exclusion; and it attends explicitly to the historical dimension, asking how current discourse patterns draw on and transform historically established frameworks.

## Scope

**Appropriate for:**
- Political speeches, parliamentary debate, campaign materials
- Institutional communications where discrimination or exclusion is relevant
- Media texts about national identity, immigration, or minority groups
- Contexts where understanding the historical development of a discourse adds analytical value
- Analysis of how shared cultural premises (topoi) are used to legitimate prejudice

**Not appropriate for:**
- Texts where discrimination is not a primary concern (use `discourse-van-dijk` or `discourse-fairclough`)
- Short logical arguments (use `logic-walton`)
- Texts without a political, institutional, or historical dimension

## Capabilities provided

- `discourse_analysis` — discursive strategy identification
- `group_representation_analysis` — how social actors are constructed and positioned
- `social_effect_analysis` — possible effects of discriminatory discourse patterns

## Workflow summary

The DHA proceeds in two preparatory steps before analysis: establishing context, then assembling relevant prior discourse.

**Context establishment:** The analyst identifies the historical and political context in which the text was produced. Who produced it, for whom, in what setting? What political or social events preceded it? What discourse traditions is it entering into?

**Discursive strategy analysis:** The analyst works through Wodak's five strategy types:

1. **Nomination** — How are social actors named and categorised? Are groups referred to by their proper names, by derogatory terms, by metonymies (e.g., "the boat people"), or by objectifying constructions?

2. **Predication** — What qualities, characteristics, or actions are attributed to social actors? Are these presented as natural or inherent rather than situational?

3. **Argumentation** — What topoi — argumentative commonplaces — are used to justify claims? A *topos* is a culturally shared premise that makes an inference seem natural. For example, the "topos of burden" argues that immigration creates an unsustainable burden; the "topos of threat" argues that a group poses a danger. Topoi draw on shared cultural assumptions and do not require explicit argument.

4. **Perspectivisation** — From whose perspective is the situation framed? Whose interests are presented as universal, and whose as particular?

5. **Intensification and mitigation** — How are claims strengthened (hyperbole, repetition) or softened (euphemism, hedging)? Mitigation is analytically important because it can make a discriminatory claim harder to challenge.

## Evidence mapping

| Status | When used |
|---|---|
| O1 | Verbatim quotes — specific words, phrases, and constructions used |
| O2 | Explicit claims or assertions the speaker makes |
| D1 | Discourse strategy findings: nomination, predication, topoi identification, perspectivisation, intensification/mitigation |
| S1 | Possible social effects: patterns the discrimination literature associates with these strategies |
| H1 | Hypotheses about intent or the broader communicative function |

## Decision rule rationale

- **Nomination strategies [D1]** — How social actors are named shapes how they are perceived. Reisigl & Wodak (2001) systematically analyse nomination as the primary site where dehumanisation enters discourse — through objectification, metonymy, or categorisation that denies individual complexity.
- **Predication strategies [D1]** — Attributing negative qualities to a group as natural or inherent (rather than situational or contested) is a core mechanism of discriminatory discourse. The strategy is identified when the attribution is presented as fact rather than claim.
- **Topos identification [D1]** — Topoi are the argumentative infrastructure of prejudice. They work by drawing on shared cultural premises so that discrimination appears to follow logically from accepted values. Identifying the specific topos (burden, threat, tradition, utility) names the cultural resource being activated. Wodak et al. (1999) provide extensive lists of topoi used in national identity discourse.
- **Perspectivisation [D1]** — When one perspective is presented as neutral, universal, or natural, while others are presented as particular or ideological, the text is doing perspectivising work. Identifying whose perspective dominates and whose is suppressed is a D1 finding.
- **Mitigation identification [D1]** — Softening language ("concerns about," "in some cases") can make discriminatory claims more difficult to challenge. Identifying mitigation and naming its function is a D1 finding grounded in textual evidence.
- **Recontextualisation [D1]** — When discourse patterns from one context appear in another, or when historical discourse frames return in contemporary communication, this is recontextualisation. It is only identifiable by an analyst with historical knowledge of the relevant discourse tradition.

## Worked example

*Note: This example has not been verified against source texts. It illustrates the framework's application.*

**Input:** "We are a nation of traditions. Our culture has been built over centuries. We must protect it from those who do not share our values."

**Application:**
- [O2] Speaker claims the nation has traditions and a culture built over centuries.
- [O2] Speaker asserts these must be "protected" from unspecified others.
- [D1] **Nomination:** "Those who do not share our values" is a nomination that constructs an out-group by negation — they are defined by what they lack, not what they are.
- [D1] **Topos of tradition:** The argument draws on the topos that longstanding cultural practices deserve preservation and that challenges to tradition are threats. This topos does not require explicit argument — it activates a widely shared cultural premise.
- [D1] **Perspectivisation:** "Our culture," "our values" constructs a homogeneous in-group and universalises its perspective. The "we" is presented as the unmarked majority; the out-group is defined as the deviation.
- [D1] **Predication:** The out-group is predicated through absence — they do not share values — rather than through explicit negative qualities. This is a mitigation strategy: the exclusion is framed as value difference rather than rejection.
- [S1] This type of discourse pattern — topos of tradition plus nomination by negation — has been associated in the literature with the rhetorical infrastructure of exclusionary nationalism.
- [H1] Whether the speaker is drawing consciously on this rhetorical tradition or expressing a genuinely held belief cannot be determined from the text alone.

## Limitations

**Requires contextual and historical knowledge.** The DHA cannot be fully applied without knowledge of the historical and political context in which the text was produced. An analyst unfamiliar with the relevant political tradition will miss significant findings, particularly in topos identification and recontextualisation.

**Topos identification is interpretive.** Identifying a topos requires the analyst to know the shared cultural premises that the text is activating. This is D1-level interpretation, not observation. Two analysts with different cultural backgrounds may identify different topoi.

**Historical dimension requires more than a single text.** The DHA's historical dimension is most powerful when applied to a corpus of texts over time, not a single text. Single-text application can describe current discourse but cannot trace historical development.

**Primarily political and institutional.** The DHA was developed for political and parliamentary discourse. Application to informal, everyday, or literary language requires adaptation and should be noted as such.

**Does not prove intent.** Finding nomination or predication strategies does not establish that discrimination was intended. These patterns can be absorbed from surrounding discourse without conscious choice.

## Known gaps

- The `analysis_steps` do not yet include the full DHA procedure as Wodak and colleagues describe it, which includes corpus compilation and triangulation across multiple texts.
- The `decision_rules` cover five of the five main strategy types but the topos taxonomy is not yet enumerated. Wodak et al. (1999) list dozens of topoi; this framework includes the concept but not the taxonomy.
- The framework does not yet cover Wodak's later work on the politics of fear and right-wing populism (Wodak, 2015).

## References

- Wodak, Ruth, Rudolf de Cillia, Martin Reisigl, and Karin Liebhart. *The Discursive Construction of National Identity*. Edinburgh University Press, 1999. Second edition: 2009. ISBN: 978-0748641871 (2nd ed.).
- Reisigl, Martin and Ruth Wodak. *Discourse and Discrimination: Rhetorics of Racism and Antisemitism*. Routledge, 2001. ISBN: 978-0415231695.

*Publication details are from publicly available bibliographic records. Publisher and ISBN should be verified before formal academic citation.*

## Verification record

**Date:** Not yet verified  
**Verified by:** Not yet verified  
**Sources consulted:** None  

| Concept | Status |
|---|---|
| discursive strategies | — not yet checked against Reisigl & Wodak (2001) |
| topoi | — not yet checked against Wodak et al. (1999) |
| recontextualisation | — not yet checked |
| nomination | — not yet checked against Reisigl & Wodak (2001) |
| predication | — not yet checked against Reisigl & Wodak (2001) |
| historical dimension | — not yet checked |

*Priority for verification: discursive strategies (Reisigl & Wodak 2001, chapter 2–3) and topoi (Wodak et al. 1999, chapter 2). These are the two most central and operationally specific contributions of the DHA.*

## Changelog

### 0.1.0 — 2026-06-29
- Initial implementation
- All fields populated per FRAMEWORK_SPECIFICATION.md v1.0
- Companion `.md` created with full sections
- Five-strategy workflow documented; topos taxonomy gap explicitly noted
