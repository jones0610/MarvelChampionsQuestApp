import {CoreSet} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {UnderAttack} from "@/consts/encountersets"

export const Under = generateSideSchemeCard({
	name: "Under Attack",
	card: "Under Attack",
	requires: CoreSet,
  difficulty: 3,
	requiresEncounterSet: UnderAttack
})

export const VibraniumArmor = generateAttachmentCard({
	name: 'Vibranium Armor',
	card: 'Vibranium Armor',
	requires: CoreSet,
	requiresEncounterSet: UnderAttack,
  difficulty: 3,
	attaches: 'the villain'
})

export const ConcussionBlasters = generateAttachmentCard({
	name: 'Concussion Blasters',
	card: 'Concussion Blasters',
	requires: CoreSet,
	requiresEncounterSet: UnderAttack,
  difficulty: 3,
	attaches: 'the villain'
})

export const Enhancements = [
  Under,
	VibraniumArmor,
	ConcussionBlasters
]
