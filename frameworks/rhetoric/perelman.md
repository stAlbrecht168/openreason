# Chaïm Perelman and Lucie Olbrechts-Tyteca — The New Rhetoric

**ID:** `rhetoric-perelman`  
**Domain:** rhetoric  
**Version:** 0.1.0  
**Verification status:** draft  
**Pack:** `framing-rhetoric`  
**Last updated:** 2026-06-29

---

## Purpose

This framework analyses argumentation from the perspective of what makes an argument persuasive to an audience — particularly in contexts where formal logic is insufficient because the subject matter is values, policy, or practical reason rather than mathematical truth. Perelman and Olbrechts-Tyteca's *New Rhetoric* (1958/1969) provides a systematic taxonomy of argumentation schemes, two foundational concepts that Aristotle does not develop fully (the *universal audience* and *dissociation*), and attention to *presence* — how the selective foregrounding of considerations shapes argument force.

## Scope

**Appropriate for:**
- Complex argumentation about values, ethics, and policy
- Philosophical and ethical reasoning
- Texts where the specific type of argument scheme matters beyond ethos/pathos/logos
- Arguments that establish value hierarchies or make contested value claims seem reasonable
- Texts directed at broad audiences with varying prior commitments

**Not appropriate for:**
- Short emotional appeals where Aristotle's categories are sufficient
- Texts where the structural four-part frame is the primary concern (use `framing-entman`)
- Purely logical validity assessment (use `logic-walton`)

**Key distinction from Aristotle:** Aristotle classifies the three modes of appeal and the enthymeme. Perelman provides a more systematic taxonomy of argument types — especially quasi-logical arguments and value-based schemes — and introduces the universal audience concept and dissociation. These are the contributions that go beyond what Aristotle provides.

## Capabilities provided

- `rhetoric_analysis` — argumentation scheme identification, universal audience, presence, dissociation
- `framing_analysis` — dissociation and value hierarchy analysis contribute to framing

## Workflow summary

**The universal audience.** Perelman argues that what distinguishes rhetoric from propaganda is the appeal to a *universal audience* — an idealized, rational audience whose assent would count as genuinely reasonable agreement. A speaker who appeals only to their partisan base is not using rhetoric in this sense; a speaker who makes claims they believe any rational person should accept is. Assessing whether an argument's claims are calibrated to a universal or a particular audience is the first analytical move.

**Presence.** Before examining what arguments are made, Perelman asks what is made present — what the argument brings to the foreground of attention. Some considerations are emphasised through repetition, vivid description, or structural placement; others are left in the background. This is logically prior to argument scheme analysis: an argument cannot work if the audience is not attending to the considerations it invokes.

**Argumentation schemes.** Perelman's taxonomy is extensive. For practical analysis, the most common types are:

- *Quasi-logical arguments* — arguments structured to appear logically necessary (like a formal deduction or mathematical calculation) without being formally valid. Examples: appeals that invoke justice as requiring identical treatment of identical cases; arguments that move from part-to-whole proportionality. These work by borrowing the prestige of formal reasoning for non-formal claims.
- *Arguments based on reality*: argument by *example* (treating a case as representative of a pattern), argument by *analogy* (asserting that two cases are relevantly similar), and argument by *authority* (deferring to a legitimate source on a value claim).
- *Dissociation* — splitting a concept into a valued pair/reality (the "real" or ideal version) and a devalued appearance/mere version. Classic example: "true freedom" (the valued ideal) vs. "licence" (the devalued counterfeit). Dissociation insulates the valued concept from objections by attributing them to the devalued version.

**Value hierarchies.** Political and moral arguments often rest on implicit hierarchies: justice over efficiency, individual rights over collective welfare, or vice versa. Identifying which hierarchies are assumed helps explain why the argument is persuasive to some audiences and not others.

## Evidence mapping

| Status | When used |
|---|---|
| O1 | Verbatim quotes — specific vocabulary and argument structures as stated |
| O2 | Explicit claims, analogies, or authority appeals the text states |
| R1 | Argumentation scheme identification; audience analysis; presence analysis; dissociation |
| F1 | Value hierarchy and dissociation findings that relate to how issues are framed |
| L1 | Quasi-logical argument analysis where the logical structure is being assessed |
| H1 | Hypotheses about communicative strategy or intent |

## Decision rule rationale

- **Quasi-logical argument [R1]** — When an argument mimics the structure of formal logic or mathematics without being formally valid, it gains persuasive force from the prestige of formal reasoning. Perelman (1969, Part II) provides numerous examples. Identifying the quasi-logical structure reveals the borrowed legitimacy.
- **Argument by example [R1]** — A single case treated as representative carries rhetorical force it would not have if the case were acknowledged as exceptional. Perelman (1969, §79) distinguishes this from scientific induction; the question is whether the example is representative, and who decides.
- **Argument by analogy [R1]** — Analogies assert relevant similarity between two cases. Their rhetorical force is independent of whether the similarity holds; identifying the analogy and assessing relevance is the analytical task.
- **Argument from authority [R1]** — Appeals to authoritative sources on value questions derive from the audience's existing trust; identifying whether the authority is legitimate in this domain is a key finding.
- **Dissociation [R1]** — When a concept is split into a valued and devalued version, objections to the concept can be redirected to the devalued version. Dissociation insulates the speaker from criticism. Identifying the dissociation reveals how the argument protects itself.
- **Presence [R1]** — What is foregrounded shapes what arguments can work. Identifying what the text makes present — and what it leaves in the background — is prior to scheme analysis.

## Worked example

*Note: This example has not been verified against source texts. It illustrates the framework's application.*

**Input:** "True equality means treating everyone by the same rules, not giving special advantages to some groups. Real freedom means the freedom to succeed through your own efforts."

**Application:**
- [O2] Speaker asserts a definition of equality and a definition of freedom.
- [R1] **Dissociation (equality):** "True equality" (valued) is distinguished from "special advantages" (devalued). This dissociation means that any equality policy that involves differential treatment can be categorised as the devalued version, insulating the speaker's concept of equality from the obvious objection that identical treatment of unequal starting positions produces unequal outcomes.
- [R1] **Dissociation (freedom):** "Real freedom" (valued) is distinguished from dependence on external support (implied devalued). The dissociation frames policies that provide external support as not contributing to "real" freedom.
- [R1] **Quasi-logical argument (justice):** The argument invokes a principle of justice (same rules for everyone) as if it were a logically necessary consequence of equality. The formal structure is borrowed from the equal treatment principle in formal logic, but applied to a contested normative domain where equal treatment of unequal circumstances is itself contestable.
- [F1] The dissociations establish value hierarchies: individual effort over collective support; procedural equality over substantive equality. These hierarchies constrain the solution space for policy arguments.
- [H1] Whether these dissociations reflect a genuine philosophical commitment or a rhetorical strategy to foreclose policy options cannot be determined from the text alone.

## Complementarity with other frameworks

- **Aristotle** — Use Aristotle to identify the three modes of appeal in a text; use Perelman to identify the specific argumentation scheme type (quasi-logical? argument from analogy?) and to analyse dissociation and the universal audience claim. Together they provide a full rhetorical analysis.
- **Entman** — Perelman's dissociation analysis complements Entman's framing analysis: dissociation often performs the work of redefining what the problem is and what solution is thinkable. The valued/devalued split can be mapped onto Entman's problem definition and treatment recommendation functions.
- **Lakoff** — Lakoff identifies the conceptual metaphor and cognitive frame; Perelman identifies the specific argumentation scheme that makes the frame's claims seem reasonable. Together they explain both why a frame works cognitively and how its argument is constructed rhetorically.

## Limitations

**Taxonomy scope is partial.** Perelman and Olbrechts-Tyteca describe over 70 argumentation scheme types across 500+ pages. This framework covers the most analytically productive types; a full application requires reading the source.

**Universal audience is a theoretical ideal.** Claiming that an argument appeals to a universal audience is an interpretive judgement, not an observation. The concept is useful analytically but should not be stated as if it refers to an actual audience.

**Argumentation scheme identification is interpretive.** The same argument may plausibly be classified under more than one scheme. The identification is an R1 finding, not an O2 observation.

**Does not determine factual accuracy.** A compelling argument by analogy may rest on a false or misleading comparison. The framework analyses argumentative structure, not empirical truth.

**Philosophical tradition.** The New Rhetoric is a work of philosophical argumentation theory, addressed primarily to lawyers, philosophers, and rhetoric scholars. Its analytical procedures are designed for formal or semi-formal argumentation contexts; application to informal political communication requires interpretive adaptation.

## Known gaps

- The framework does not yet cover Perelman's treatment of *loci* (common premises that audiences share and that arguments draw on), which parallels Wodak's topos concept.
- The full dissociation taxonomy (pair/reality, appearance/reality, theory/practice, individual/universal) is not yet operationalised in the decision rules.
- The relationship between Perelman's argumentation schemes and Walton's argument schemes is not yet mapped; there is significant conceptual overlap.

## References

- Perelman, Chaïm, and Lucie Olbrechts-Tyteca. *The New Rhetoric: A Treatise on Argumentation*. University of Notre Dame Press, 1969. Translated by John Wilkinson and Purcell Weaver. ISBN: 978-0268001452.
- Perelman, Chaïm. *The Realm of Rhetoric*. University of Notre Dame Press, 1982. Originally published as *L'Empire Rhétorique*, 1977. ISBN: 978-0268016036.

*Publication details from publicly available bibliographic records. Publisher and ISBN should be verified before formal academic citation.*

## Verification record

**Date:** Not yet verified  
**Verified by:** Not yet verified  
**Sources consulted:** None  

| Concept | Status |
|---|---|
| universal audience | — not yet checked against Perelman & Olbrechts-Tyteca (1969) |
| presence | — not yet checked |
| dissociation | — not yet checked; this is a distinctive Perelmanean contribution |
| quasi-logical arguments | — not yet checked against (1969) Part II |
| argument from analogy | — not yet checked |
| argument from authority | — not yet checked |
| value hierarchies | — not yet checked |

*Priority: universal audience and dissociation (The New Rhetoric, Part I, chapters 3–4) — these are the concepts most distinctive to Perelman that do not appear in Aristotle.*

## Changelog

### 0.1.0 — 2026-06-29
- Initial implementation
- All fields populated per FRAMEWORK_SPECIFICATION.md v1.0
- Complementarity section added explaining relationship with Aristotle, Entman, and Lakoff
- Note added about taxonomy scope limitation
