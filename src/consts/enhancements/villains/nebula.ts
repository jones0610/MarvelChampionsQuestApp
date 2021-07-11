import {GalaxysMostWanted as exp} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {Nebula} from "@/consts/encountersets"

export const CutthroatAmbition = generateAttachmentCard({
	name: "Cutthroat Ambition",
	card: "Cutthroat Ambition",
	requires: exp,
	requiresEncounterSet: Nebula,
  difficulty: 3,
	attaches: 'Nebula'
})

export const EvasiveManeuvering = generateAttachmentCard({
	name: "Evasive Maneuvering",
	card: "Evasive Maneuvering",
	requires: exp,
	requiresEncounterSet: Nebula,
  difficulty: 3,
	attaches: 'Nebula'
})

export const UnyieldingPersistence = generateAttachmentCard({
	name: "Unyielding Persistence",
	card: "Unyielding Persistence",
	requires: exp,
	requiresEncounterSet: Nebula,
  difficulty: 3,
	attaches: 'Nebula'
})

export const WeaponMastery = generateAttachmentCard({
	name: "Weapon Mastery",
	card: "Weapon Mastery",
	requires: exp,
	requiresEncounterSet: Nebula,
  difficulty: 3,
	attaches: 'Nebula'
})

export const WideStance = generateAttachmentCard({
	name: "Wide Stance",
	card: "Wide Stance",
	requires: exp,
	requiresEncounterSet: Nebula,
  difficulty: 3,
	attaches: 'Nebula'
})

export const LethalIntent = generateSideSchemeCard({
	name: "Lethal Intent",
	card: "Lethal Intent",
	requires: exp,
	requiresEncounterSet: Nebula,
  difficulty: 3,
})

export const Enhancements = [
  CutthroatAmbition,
	EvasiveManeuvering,
	UnyieldingPersistence,
	WeaponMastery,
	WideStance,
	LethalIntent,
]
