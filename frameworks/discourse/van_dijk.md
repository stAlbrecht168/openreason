# Teun A. van Dijk — Critical Discourse Analysis

**ID:** `discourse-van-dijk`  
**Domain:** critical_discourse_analysis  
**Version:** 0.2.0  
**Verification status:** draft  
**Pack:** `discourse`  
**Last updated:** 2026-06-29

---

## Purpose

This framework analyses how language constructs social groups and power relations. Rather than asking what is said, it asks how language *represents* groups — who is positioned as normal, who as problematic, who as threatening. It operationalises van Dijk's concepts of the *ideological square* (emphasise in-group positives and out-group negatives; de-emphasise in-group negatives and out-group positives) and related strategies like disclaimers, strategic exceptions, and group hierarchies.

## Scope

**Appropriate for:**
- Texts explicitly or implicitly comparing social groups
- Political language about migration, ethnicity, nationality, or religion
- Texts with "we/they" structures or in-group/out-group dynamics
- Texts using disclaimers ("I'm not against X, but...")
- Texts that rank or conditionally accept minority groups

**Not appropriate for:**
- Texts with no group representation dimension
- Purely logical arguments without social content (use `logic-walton`)
- Media framing analysis where group construction is absent (use `framing-entman`)

**Activation note:** This framework is most analytically powerful on texts with explicit group othering or comparison. On texts where group construction is mild or implicit, all findings should be stated at D1 level with explicit acknowledgement of the reduced intensity.

## Capabilities provided

- `discourse_analysis` — how language constructs social reality
- `group_representation_analysis` — how groups are positioned and represented
- `social_effect_analysis` — possible social-level effects of representational patterns

## Workflow summary

An analyst applying this framework begins by identifying all social groups present in the text — both explicitly named and implied. They then map each group along two axes: represented positively or negatively, and as in-group or out-group. Van Dijk's *ideological square* predicts that speakers tend to emphasise in-group virtues, de-emphasise in-group problems, emphasise out-group problems, and de-emphasise out-group virtues.

The analyst then looks for specific discourse strategies: disclaimers (which acknowledge one position before undermining it), strategic exceptions (praising one group as a way of problematising another), deindividualisation (attributing group traits to all members), and respectability hierarchies (accepting groups only under conditions).

All findings are interpretations (D1), not observations. Social effects are possible patterns (S1), not proven outcomes. Motive is never established; it may be noted as a hypothesis (H1) if the text structure suggests it.

## Evidence mapping

| Status | When used |
|---|---|
| O1 | Verbatim quotes — the actual words used about each group |
| O2 | Explicit claims or statements the speaker makes about groups |
| D1 | Discourse interpretations: how language constructs in-group/out-group, strategies identified |
| S1 | Possible social effects: patterns the literature associates with this type of representation |
| H1 | Hypotheses about speaker intent or the broader communicative function |

**Important:** D1 claims require explicit textual support. Do not state D1 findings about a text that does not contain the relevant patterns. If group representation is mild, say so.

## Decision rule rationale

- **Strategic exception [D1]** — Praising one minority while rejecting another is a documented discourse strategy that allows a speaker to claim non-prejudice while still excluding. Van Dijk (2005) analyses this extensively in political discourse about immigration.
- **Disclaimer structure [D1]** — "I am not against X, but..." is a classic disclaimer: the positive assertion ("not against X") performs positive self-presentation, while "but" introduces the negative claim. The positive half is often cosmetic. Van Dijk (2008) treats disclaimers as a key site of ideological conflict.
- **Deindividualisation [D1]** — Attributing group-level traits to all members without individual variation is a form of negative other-presentation. It enables generalisations that could not survive scrutiny if applied to individuals.
- **Respectability hierarchy [D1]** — Conditional acceptance ("I'm fine with X as long as they...") constructs a hierarchy where some groups must earn acceptance. This is different from universal standards that apply to all groups equally.
- **Selective salience [D1]** — What is emphasised and what is omitted from a description of a group shapes the implicit picture. Noting what is absent is as important as noting what is present.

## Worked example

*Note: This example has not been verified against source texts. It illustrates the framework's application.*

**Input:** "Unlike Somalis, Iranians integrate well and contribute to society."

**Application:**
- [O2] Speaker explicitly distinguishes Iranians (positive) from Somalis (negative).
- [D1] This is a classic strategic exception structure: one group is praised in a way that positions another group negatively. The praise of Iranians functions as a contrast that implies Somalis do not integrate or contribute.
- [D1] "Integrate well and contribute" are conditionally positive terms — they define what integration means and set the terms for which groups are acceptable. This constructs a respectability hierarchy.
- [S1] This type of framing may contribute to what van Dijk calls "minority splitting" — dividing minority communities by ranking them, which may reduce solidarity.
- [H1] A possible but unproven hypothesis: the strategic exception may provide plausible deniability against accusations of generalised prejudice. This is a plausible interpretation of the discourse structure, but it cannot be established as the speaker's intention from the text alone.

## Limitations

**Does not prove intent.** Finding a disclaimer or a strategic exception does not prove the speaker is acting in bad faith. These discourse patterns can occur in speakers with a full range of intentions. Motive requires H1.

**Strongest on explicit group othering.** When groups are named and compared explicitly, this framework has strong analytical purchase. When group construction is implicit, vague, or mild, findings are weaker and should be stated with more caution.

**Should not replace fact-checking.** The framework describes how groups are represented, not whether the representations are accurate. A negative representation of a group may or may not correspond to real-world facts. Factual accuracy is outside this framework's scope.

**Social effect claims are patterns, not proven.** S1 findings describe patterns the research literature associates with certain representational strategies. They are not claims that this specific text caused a specific social outcome.

## Known gaps

- The `core_concepts` list uses "denial of prejudice" in some versions. The YAML currently uses "denial of prejudice" but van Dijk's more precise term is "positive self-presentation with respect to outgroup rejection." This needs verification.
- The `decision_rules` do not yet cover intertextual references or the role of genre conventions in shaping group representation — both important in van Dijk's later work.
- The `analysis_questions` do not yet include questions about presuppositions (what the text takes for granted about groups).

## References

- van Dijk, Teun A. *Discourse and Power*. Palgrave Macmillan, 2008. ISBN: 978-0230203556.
- van Dijk, Teun A. *Racism and Discourse in Spain and Latin America*. John Benjamins, 2005. ISBN: 978-9027227003.

*Publication details are based on publicly available bibliographic records. Publisher and ISBN should be verified before citing in formal academic work.*

## Verification record

**Date:** Not yet verified  
**Verified by:** Not yet verified  
**Sources consulted:** None  

| Concept | Status |
|---|---|
| positive self-presentation | — not yet checked against van Dijk (2008) |
| negative other-presentation | — not yet checked against van Dijk (2008) |
| ideological square | — not yet checked against van Dijk (2008) |
| polarization | — not yet checked |
| disclaimers | — not yet checked against van Dijk (2005) |
| denial of prejudice | — not yet checked; term accuracy uncertain |
| group hierarchy | — not yet checked |

*Verification requires reading van Dijk (2008) chapters 2–4 and van Dijk (2005) chapters 1 and 3, and confirming each concept name and description matches the source.*

## Changelog

### 0.2.0 — 2026-06-29
- Added `scope` field with explicit activation note about reduced intensity on mild group construction
- Added `capabilities` field
- Added `O1` to `evidence_statuses`
- Changed "denial of racism" to "denial of prejudice" (more accurate to the tradition; still needs verification)
- Added `disclaimer_structure` to `output_fields`
- Added `year` to references
- Expanded `limitations` with detail on social effect claims
- Created this companion `.md` file

### 0.1.0 — initial
- Initial YAML implementation
