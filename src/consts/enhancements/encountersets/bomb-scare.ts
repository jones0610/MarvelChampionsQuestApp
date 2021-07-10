import {CoreSet} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {BombScare} from "@/consts/encountersets"

export const Scare = generateSideSchemeCard({
	name: "Bomb Scare",
	card: "Bomb Scare",
	requires: CoreSet,
  difficulty: 3,
	requiresEncounterSet: [BombScare]
})

export const Enhancements = [
  Scare
]
