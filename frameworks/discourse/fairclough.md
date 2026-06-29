# Norman Fairclough — Critical Discourse Analysis

**ID:** `discourse-fairclough`  
**Domain:** critical_discourse_analysis  
**Version:** 0.1.0  
**Verification status:** draft  
**Pack:** `discourse`  
**Last updated:** 2026-06-29

---

## Purpose

This framework analyses discourse as a form of social practice. Where van Dijk focuses on group representation and ideological polarisation, Fairclough's model asks a broader question: how do texts reproduce or challenge the social structures in which they are embedded? The framework's central contribution is its attention to intertextuality — how texts draw on and transform prior texts, genres, and conventions — and its three-dimensional analytical structure: every text analysis requires attention to the text itself, the discursive practices surrounding it, and the social practices it is part of.

## Scope

**Appropriate for:**
- Media texts, policy documents, and institutional communication
- Contexts where genre mixing or intertextual borrowing is analytically relevant
- Situations where the analyst wants to understand how discourse reproduces or challenges social structures
- Political communication in institutional settings
- Analysis of how organisational language naturalises power relations

**Not appropriate for:**
- Short informal arguments where intertextuality is not relevant (use `logic-walton`)
- Texts where group representation analysis is the primary need without institutional or genre context (use `discourse-van-dijk`)
- Factual lookups or purely descriptive texts

**Important note:** Fairclough's three-dimensional model requires analysis at all three levels — text, discursive practice, and social practice. An analysis that only examines the text-level features (vocabulary, grammar) without considering how the text is produced, distributed, and socially embedded is partial and produces weaker findings.

## Capabilities provided

- `discourse_analysis` — how language constructs and is shaped by social practice
- `group_representation_analysis` — how social actors are positioned in institutional discourse
- `social_effect_analysis` — how discursive practices relate to social change

## Workflow summary

Fairclough's three-dimensional model works outward from the text.

**Level 1 — Text:** The analyst examines linguistic features: vocabulary choices, grammatical structures (particularly passivisation and nominalisation, which can erase agency), text organisation, and coherence devices.

**Level 2 — Discursive practice:** The analyst asks how the text was produced (who wrote it, in what institutional context), how it is distributed (what channels, to what audiences), and how it is consumed (how readers are expected to engage with it). Crucially, this level includes *intertextuality* — what prior texts, genres, or conventions the text draws on. A policy document that borrows the vocabulary of business management is doing intertextual work; a news article that adopts the conventions of advertising is mixing genres.

**Level 3 — Social practice:** The analyst considers what social practice this discursive practice is part of. Does the text contribute to reproducing or challenging existing power relations? Is it part of a hegemonic discourse — one that presents a particular social arrangement as natural or inevitable?

## Evidence mapping

| Status | When used |
|---|---|
| O1 | Verbatim quotes — specific vocabulary, grammatical constructions, text features |
| O2 | Explicit claims or positions the text advances |
| D1 | Discourse interpretations at all three levels: text features, intertextual links, genre analysis, power relations |
| S1 | Possible social effects: how this discursive practice may relate to social reproduction or change |
| H1 | Hypotheses about communicative intent or strategic discourse use |

## Decision rule rationale

- **Intertextual link identification [D1]** — Fairclough (1992) argues that no text is created in isolation; all texts draw on prior texts and conventions. Identifying these links reveals how a text borrows authority, naturalises assumptions, or challenges norms. The intertextual link must be named: which prior text or genre is being drawn on, and what effect does this produce?
- **Passivisation and agentlessness [D1]** — Grammatical passivisation ("jobs were lost") conceals the agent of the action and thus the social actor responsible. Fairclough (1995) treats this as one of the most analytically significant text-level features. The finding is always D1 because it requires interpretive work to identify what the agentlessness is doing.
- **Intertextual authority [D1]** — When a text borrows the vocabulary, conventions, or explicit reference to an institutional document to claim authority, this is an intertextual authority claim. Its function is to transfer legitimacy from the referenced source to the current claim.
- **Hegemonic function [D1]** — When a discursive practice presents a particular social arrangement as natural, inevitable, or common sense, it is performing hegemonic work in Gramsci's sense, which Fairclough explicitly adopts. Identifying this is a D1 interpretation requiring evidence from both text-level and social-level analysis.
- **Genre mixing [D1]** — When a text combines conventions from different genres (e.g., the vocabulary of marketing in a healthcare document), it achieves effects that neither genre alone would. Fairclough (1992, 1995) treats genre mixing as a site of discursive change.

## Worked example

*Note: This example has not been verified against source texts. It illustrates the framework's application.*

**Input:** "Our new austerity measures represent an investment in the nation's long-term prosperity. We must all share the burden of responsible management."

**Application:**
- [O1] Vocabulary: "investment," "prosperity," "burden," "responsible management."
- [D1] **Intertextuality (economic/business genre):** The vocabulary of business management ("investment," "responsible management") is imported into political discourse. This borrows legitimacy from economic rationality discourse and positions the policies as technically necessary rather than politically chosen.
- [D1] **Passivisation and agentlessness:** "We must all share the burden" constructs a collective "we" that erases the differential impact of the measures on different social groups. The distribution of costs is presented as shared, not politically allocated.
- [D1] **Hegemonic function:** Framing cuts as an "investment" naturalises a particular economic view (that reduced public spending produces long-term growth). This is a contested empirical and ideological position presented as self-evident.
- [S1] This type of vocabulary borrowing from economic discourse into political communication may make it harder for audiences to engage with political alternatives, since the terms of debate are framed in technical rather than normative language.
- [H1] Whether this framing reflects the speaker's genuine world view or a deliberate rhetorical strategy cannot be determined from the text alone.

## Limitations

**Three dimensions are required.** Analysing text-level features alone (vocabulary, grammar) without the discursive and social practice levels produces incomplete findings. The model is specifically designed for multi-level analysis.

**Intertextuality depends on analyst knowledge.** Identifying what texts and genres a text draws on requires the analyst to know the relevant intertextual field. An analyst unfamiliar with business management discourse would miss the borrowings in the example above.

**Discourse-social change relationship is difficult to establish.** The claim that a discursive practice contributes to social change (or maintenance) is an S1/H1-level finding, not an observation. Single texts rarely decisively demonstrate this; longitudinal or corpus analysis provides stronger grounds.

**Does not prove intent.** Finding a hegemonic function or an intertextual authority claim does not establish that the communicator chose these features deliberately. Many discursive conventions are absorbed unconsciously.

**Academic context.** Fairclough's framework emerged in the tradition of critical social theory (drawing on Foucault, Gramsci, Halliday). Analysts applying it in settings that expect political neutrality should be aware of its critical theoretical orientation.

## Known gaps

- The `analysis_steps` do not yet include Hallidayan systemic functional linguistics as a text analysis tool, which is central to Fairclough's text-level analysis.
- The `decision_rules` do not yet cover nominalisations (turning processes into things: "the decision was made" → "the decision") as a form of agentlessness, which Fairclough addresses extensively.
- The framework does not yet include Fairclough's later work on "new capitalism" discourse (Fairclough, 2000, 2006).
- The relationship between Fairclough's approach and van Dijk's is not yet mapped — there is conceptual overlap and some incompatibility.

## References

- Fairclough, Norman. *Discourse and Social Change*. Polity Press, 1992. ISBN: 978-0745612348.
- Fairclough, Norman. *Critical Discourse Analysis: The Critical Study of Language*. Longman, 1995. Second edition: Routledge, 2010. ISBN: 978-0582219809 (1st ed.).

*Publication details are from publicly available bibliographic records. Publisher and ISBN should be verified before formal academic citation.*

## Verification record

**Date:** Not yet verified  
**Verified by:** Not yet verified  
**Sources consulted:** None  

| Concept | Status |
|---|---|
| three-dimensional model | — not yet checked against Fairclough (1992) |
| intertextuality | — not yet checked; central concept, priority for verification |
| genre | — not yet checked against Fairclough (1992, 1995) |
| discursive practice | — not yet checked |
| social practice | — not yet checked |
| hegemony | — not yet checked; Fairclough draws on Gramsci — source and interpretation need verification |

*Priority for verification: the three-dimensional model first (Fairclough 1992, chapter 4), then intertextuality (chapter 5). The hegemony concept requires checking both Fairclough's formulation and the Gramscian source he draws on.*

## Changelog

### 0.1.0 — 2026-06-29
- Initial implementation
- All fields populated per FRAMEWORK_SPECIFICATION.md v1.0
- Companion `.md` created with full sections
- Note added about three-level requirement and analyst knowledge dependency
