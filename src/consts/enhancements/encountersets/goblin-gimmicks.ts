import {GreenGoblin} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {GoblinGimmicks} from "@/consts/encountersets"

export const GoblinGlider2 = generateAttachmentCard({
	name: 'Goblin Glider',
	card: 'Goblin Glider',
	requires: GreenGoblin,
	requiresEncounterSet: GoblinGimmicks,
  difficulty: 3,
	attaches: 'the enemy with the highest printed hit points and without another Goblin Glider attached'
})

export const PumpkinBombs2 = generateAttachmentCard({
	name: 'Pumpkin Bombs',
	card: 'Pumpkin Bombs',
	requires: GreenGoblin,
	requiresEncounterSet: GoblinGimmicks,
  difficulty: 3,
	attaches: 'the villain'
})

export const Enhancements = [
  GoblinGlider2,
	PumpkinBombs2
]
