import {CoreSet} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {MastersOfEvil} from "@/consts/encountersets"

export const Masters = generateSideSchemeCard({
	name: "Masters of Evil",
	card: "Masters of Evil",
	requires: CoreSet,
  difficulty: 3,
	requiresEncounterSet: MastersOfEvil
})

export const Enhancements = [
  Masters
]
