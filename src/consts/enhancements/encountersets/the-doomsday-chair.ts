import {CoreSet} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {TheDoomsdayChair} from "@/consts/encountersets"

export const Doomsday = generateSideSchemeCard({
	name: "The Doomsday Chair",
	card: "The Doomsday Chair",
	requires: CoreSet,
  difficulty: 3,
	requiresEncounterSet: TheDoomsdayChair
})

export const Enhancements = [
  Doomsday
]
