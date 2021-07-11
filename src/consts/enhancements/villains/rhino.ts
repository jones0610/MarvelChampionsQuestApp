import {CoreSet} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {Rhino} from "@/consts/encountersets"

export const ArmoredRhinoSuit = generateAttachmentCard({
	name: 'Armored Rhino Suit',
	card: 'Armored Rhino Suit',
	requires: CoreSet,
	requiresEncounterSet: Rhino,
  difficulty: 3,
	attaches: 'the villain'
})

export const Charge = generateAttachmentCard({
	name: 'Charge',
	card: 'Charge',
	requires: CoreSet,
	requiresEncounterSet: Rhino,
  difficulty: 3,
	attaches: 'the villain'
})

export const EnhancedIvoryHorn = generateAttachmentCard({
	name: 'Enhanced Ivory Horn',
	card: 'Enhanced Ivory Horn',
	requires: CoreSet,
	requiresEncounterSet: Rhino,
  difficulty: 3,
	attaches: 'the villain'
})

export const Breakin = generateSideSchemeCard({
	name: "Breakin' & Takin'",
	card: "Breakin' & Takin'",
	requires: CoreSet,
	requiresEncounterSet: Rhino,
  difficulty: 3
})

export const CrowdControl = generateSideSchemeCard({
	name: "Crowd Control",
	card: "Crowd Control",
	requires: CoreSet,
	requiresEncounterSet: Rhino,
	// article: 'the',
  difficulty: 3
})

export const Enhancements = [
  ArmoredRhinoSuit,
	Charge,
	EnhancedIvoryHorn,
	Breakin,
	CrowdControl
]
