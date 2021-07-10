import {CoreSet} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {Rhino1, Rhino2, Rhino3} from "@/consts/villains"



export const ArmoredRhinoSuit = generateAttachmentCard({
	name: 'Armored Rhino Suit',
	card: 'Armored Rhino Suit',
	requires: CoreSet,
	requiresVillain: [Rhino1,Rhino2,Rhino3],
	article: 'an',
  difficulty: 3
})

export const Charge = generateAttachmentCard({
	name: 'Charge',
	card: 'Charge',
	requires: CoreSet,
	requiresVillain: [Rhino1,Rhino2,Rhino3],
  difficulty: 3
})

export const EnhancedIvoryHorn = generateAttachmentCard({
	name: 'Enhanced Ivory Horn',
	card: 'Enhanced Ivory Horn',
	requires: CoreSet,
	requiresVillain: [Rhino1,Rhino2,Rhino3],
  difficulty: 3
})

export const Breakin = generateSideSchemeCard({
	name: "Breakin' & Takin'",
	card: "Breakin' & Takin'",
	requires: CoreSet,
	requiresVillain: [Rhino1,Rhino2,Rhino3],
	// article: 'the',
  difficulty: 3
})

export const CrowdControl = generateSideSchemeCard({
	name: "Crowd Control",
	card: "Crowd Control",
	requires: CoreSet,
	requiresVillain: [Rhino1,Rhino2,Rhino3],
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
