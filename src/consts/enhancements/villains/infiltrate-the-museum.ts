import {GalaxysMostWanted as exp} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {InfiltrateTheMuseum} from "@/consts/encountersets"

export const BiogramImage = generateAttachmentCard({
	name: "Biogram Image",
	card: "Biogram Image",
	requires: exp,
	requiresEncounterSet: InfiltrateTheMuseum,
  difficulty: 3,
	attaches: 'Collector'
})

export const Enhancements = [
  BiogramImage,
]
