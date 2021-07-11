import {RiseOfRedSkull as exp} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {RedSkull} from "@/consts/encountersets"

export const RedSkullsLuger = generateAttachmentCard({
	name: "Red Skull's Luger",
	card: "Red Skull's Luger",
	requires: exp,
	requiresEncounterSet: RedSkull,
  difficulty: 3,
	attaches: 'Red Skull'
})

export const RedSkullsRightHook = generateAttachmentCard({
	name: "Red Skull's Right Hook",
	card: "Red Skull's Right Hook",
	requires: exp,
	requiresEncounterSet: RedSkull,
  difficulty: 3,
	attaches: 'Red Skull'
})

export const MasterStrategist = generateAttachmentCard({
	name: "Master Strategist",
	card: "Master Strategist",
	requires: exp,
	requiresEncounterSet: RedSkull,
  difficulty: 3,
	attaches: 'Red Skull'
})

export const TwistedReality = generateAttachmentCard({
	name: "Twisted Reality",
	card: "Twisted Reality",
	requires: exp,
	requiresEncounterSet: RedSkull,
  difficulty: 3,
	attaches: 'a side scheme'
})

export const Enhancements = [
  RedSkullsLuger,
	RedSkullsRightHook,
	MasterStrategist,
	TwistedReality,
]
