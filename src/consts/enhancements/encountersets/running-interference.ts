import {GreenGoblin} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {RunningInterference} from "@/consts/encountersets"

export const Running = generateSideSchemeCard({
	name: 'Running Interference',
	card: 'Running Interference',
	requires: GreenGoblin,
	requiresEncounterSet: RunningInterference,
  difficulty: 3
})

export const AllTiedUp = generateAttachmentCard({
	name: 'All Tied Up',
	card: 'All Tied Up',
	requires: GreenGoblin,
	requiresEncounterSet: RunningInterference,
  difficulty: 3,
	attaches: 'your identity card',
})

export const MediaCoverage = generateAttachmentCard({
	name: 'Media Coverage',
	card: 'Media Coverage',
	requires: GreenGoblin,
	requiresEncounterSet: RunningInterference,
  difficulty: 3,
	attaches: 'your identity card',
})

export const Enhancements = [
  Running,
]
