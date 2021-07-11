import {GalaxysMostWanted as exp} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {RonanTheAccuser} from "@/consts/encountersets"

export const UniversalWeapon = generateAttachmentCard({
	name: "Universal Weapon",
	card: "Universal Weapon",
	requires: exp,
	requiresEncounterSet: RonanTheAccuser,
  difficulty: 3,
	attaches: 'Ronan The Accuser'
})

export const Fanaticism = generateAttachmentCard({
	name: "Fanaticism",
	card: "Fanaticism",
	requires: exp,
	requiresEncounterSet: RonanTheAccuser,
  difficulty: 3,
	attaches: 'Ronan The Accuser'
})

export const CutThePower = generateSideSchemeCard({
	name: "Cut the Power",
	card: "Cut the Power",
	requires: exp,
	requiresEncounterSet: RonanTheAccuser,
  difficulty: 3,
})

export const PincerManeuver = generateSideSchemeCard({
	name: "Pincer Maneuver",
	card: "Pincer Maneuver",
	requires: exp,
	requiresEncounterSet: RonanTheAccuser,
  difficulty: 3,
})

export const SuperiorTactics = generateSideSchemeCard({
	name: "Superior Tactics",
	card: "Superior Tactics",
	requires: exp,
	requiresEncounterSet: RonanTheAccuser,
  difficulty: 3,
})

export const Enhancements = [
  UniversalWeapon,
	Fanaticism,
	CutThePower,
	PincerManeuver,
	SuperiorTactics,
]
