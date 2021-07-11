import {CoreSet} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {LegionsOfHydra} from "@/consts/encountersets"

export const Legions = generateSideSchemeCard({
	name: "Legions of Hydra",
	card: "Legions of Hydra",
	requires: CoreSet,
  difficulty: 3,
	requiresEncounterSet: LegionsOfHydra
})

export const Enhancements = [
  Legions
]
