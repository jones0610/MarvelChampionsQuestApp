import {RiseOfRedSkull} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {HydraPatrol} from "@/consts/encountersets"

export const Patrol = generateSideSchemeCard({
	name: "Hydra Patrol",
	card: "Hydra Patrol",
	requires: RiseOfRedSkull,
  difficulty: 3,
	requiresEncounterSet: HydraPatrol
})

export const Enhancements = [
  Patrol
]
