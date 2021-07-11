import {Kang} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {MasterOfTime} from "@/consts/encountersets"

export const LightOfCenturiesSphere = generateSideSchemeCard({
	name: "Light of Centuries Sphere",
	card: "Light of Centuries Sphere",
	requires: Kang,
  difficulty: 3,
	requiresEncounterSet: MasterOfTime
})

export const Enhancements = [
  LightOfCenturiesSphere,
]
