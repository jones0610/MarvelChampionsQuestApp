import {RiseOfRedSkull} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {WeaponMaster} from "@/consts/encountersets"

export const CombatKnife = generateAttachmentCard({
	name: 'Combat Knife',
	card: 'Combat Knife',
	requires: RiseOfRedSkull,
	requiresEncounterSet: WeaponMaster,
  difficulty: 3,
	attaches: 'the villain',
})

export const HydraSidearm = generateAttachmentCard({
	name: 'Hydra Sidearm',
	card: 'Hydra Sidearm',
	requires: RiseOfRedSkull,
	requiresEncounterSet: WeaponMaster,
  difficulty: 3,
	attaches: 'the villain',
})

export const Enhancements = [
  CombatKnife,
  HydraSidearm,
]
