import {RiseOfRedSkull as exp} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {Zola} from "@/consts/encountersets"
import {Zola2} from "@/consts/villains"

export const DefensiveProgramming = generateAttachmentCard({
	name: "Defensive Programming",
	card: "Defensive Programming",
	requires: exp,
	requiresEncounterSet: Zola,
  difficulty: 3,
	attaches: 'the minion with the most remaining hit points without another copy of Defensive Programming attached'
})

export const PainInhibitors = generateAttachmentCard({
	name: "Pain Inhibitors",
	card: "Pain Inhibitors",
	requires: exp,
	requiresEncounterSet: Zola,
  difficulty: 3,
	attaches: 'the minion with the most remaining hit points without another copy of Pain Inhibitors attached'
})

export const NeurologicalImplants = generateAttachmentCard({
	name: "Neurological Implants",
	card: "Neurological Implants",
	requires: exp,
	requiresEncounterSet: Zola,
  difficulty: 3,
	attaches: 'the minion with the most remaining hit points without another copy of Neurological Implants attached'
})

export const TestSubjects = generateSideSchemeCard({
	name: "Test Subjects",
	card: "Test Subjects",
	requires: exp,
	requiresEncounterSet: Zola,
  difficulty: 3,
	conflictingVillains: [Zola2],
})

export const ZolasExperiments = generateSideSchemeCard({
	name: "Zola's Experiments",
	card: "Zola's Experiments",
	requires: exp,
	requiresEncounterSet: Zola,
  difficulty: 3,
})

export const Enhancements = [
  DefensiveProgramming,
	PainInhibitors,
	NeurologicalImplants,
	TestSubjects,
	ZolasExperiments,
]
