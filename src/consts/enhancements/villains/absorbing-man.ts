import {RiseOfRedSkull as exp} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {AbsorbingMan} from "@/consts/encountersets"

export const BallAndChain2 = generateAttachmentCard({
	name: "Ball and Chain",
	card: "Ball and Chain",
	requires: exp,
	requiresEncounterSet: AbsorbingMan,
  difficulty: 3,
	attaches: 'Absorbing Man'
})

export const Avalanche = generateSideSchemeCard({
	name: "Avalanche!",
	card: "Avalanche!",
	requires: exp,
	requiresEncounterSet: AbsorbingMan,
  difficulty: 3,
})

export const SuperAbsorbingPower = generateSideSchemeCard({
	name: "Super Absorbing Power",
	card: "Super Absorbing Power",
	requires: exp,
	requiresEncounterSet: AbsorbingMan,
  difficulty: 3,
})

export const Enhancements = [
  BallAndChain2,
	Avalanche,
	SuperAbsorbingPower,
]
