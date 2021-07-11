import {GreenGoblin} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {PowerDrain} from "@/consts/encountersets"

export const Power = generateSideSchemeCard({
	name: 'Power Drain',
	card: 'Power Drain',
	requires: GreenGoblin,
	requiresEncounterSet: PowerDrain,
  difficulty: 3
})

export const Enhancements = [
  Power,
]
