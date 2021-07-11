import {GalaxysMostWanted as exp} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {KreeMilitants} from "@/consts/encountersets"

export const KreeCombatArmor = generateAttachmentCard({
	name: "Kree Combat Armor",
	card: "Kree Combat Armor",
	requires: exp,
  difficulty: 3,
	requiresEncounterSet: KreeMilitants,
  attaches: 'the enemy with the highest ATK'
})

export const Enhancements = [
  KreeCombatArmor,
]
