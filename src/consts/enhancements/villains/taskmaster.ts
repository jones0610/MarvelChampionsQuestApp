import {RiseOfRedSkull as exp} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {Taskmaster} from "@/consts/encountersets"

export const TaskmastersSword = generateAttachmentCard({
	name: "Taskmaster's Sword",
	card: "Taskmaster's Sword",
	requires: exp,
	requiresEncounterSet: Taskmaster,
  difficulty: 3,
	attaches: 'Taskmaster'
})

export const TaskmastersShield = generateAttachmentCard({
	name: "Taskmaster's Shield",
	card: "Taskmaster's Shield",
	requires: exp,
	requiresEncounterSet: Taskmaster,
  difficulty: 3,
	attaches: 'Taskmaster'
})

export const PhotographicReflexes = generateAttachmentCard({
	name: "Photographic Reflexes",
	card: "Photographic Reflexes",
	requires: exp,
	requiresEncounterSet: Taskmaster,
  difficulty: 3,
	attaches: 'Taskmaster'
})

export const TaskmastersTrainingCamp = generateSideSchemeCard({
	name: "Taskmaster's Training Camp",
	card: "Taskmaster's Training Camp",
	requires: exp,
	requiresEncounterSet: Taskmaster,
  difficulty: 3,
})

export const Enhancements = [
  TaskmastersSword,
	TaskmastersShield,
	PhotographicReflexes,
	TaskmastersTrainingCamp
]
