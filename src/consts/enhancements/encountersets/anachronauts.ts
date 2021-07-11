import {Kang} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {Anachronauts} from "@/consts/encountersets"

export const Anach = generateSideSchemeCard({
	name: "The Anachronauts",
	card: "The Anachronauts",
	requires: Kang,
  difficulty: 3,
	requiresEncounterSet: Anachronauts
})

export const Enhancements = [
  Anach
]
