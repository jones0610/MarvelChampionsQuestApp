import {Kang} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {Temporal} from "@/consts/encountersets"

export const TimePortal = generateSideSchemeCard({
	name: "Time Portal",
	card: "Time Portal",
	requires: Kang,
  difficulty: 3,
	requiresEncounterSet: Temporal
})

export const Enhancements = [
  TimePortal
]
