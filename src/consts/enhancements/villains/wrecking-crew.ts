import {WreckingCrew as exp} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {WreckingCrew} from "@/consts/encountersets"

export const MagicCrowbar = generateAttachmentCard({
	name: "Magic Crowbar",
	card: "Magic Crowbar",
	requires: exp,
	requiresEncounterSet: WreckingCrew,
  difficulty: 3,
	attaches: 'Wrecker'
})

export const WreckersCommand = generateAttachmentCard({
	name: "Wrecker's Command",
	card: "Wrecker's Command",
	requires: exp,
	requiresEncounterSet: WreckingCrew,
  difficulty: 3,
	attaches: 'Wrecker'
})

export const BallAndChain = generateAttachmentCard({
	name: "Ball and Chain",
	card: "Ball and Chain",
	requires: exp,
	requiresEncounterSet: WreckingCrew,
  difficulty: 3,
	attaches: 'Thunderball'
})

export const RadioactiveBuildup = generateAttachmentCard({
	name: "Radioactive Buildup",
	card: "Radioactive Buildup",
	requires: exp,
	requiresEncounterSet: WreckingCrew,
  difficulty: 3,
	attaches: 'Thunderball'
})

export const DistractingTaunts = generateAttachmentCard({
	name: "Distracting Taunts",
	card: "Distracting Taunts",
	requires: exp,
	requiresEncounterSet: WreckingCrew,
  difficulty: 3,
	attaches: 'Piledriver'
})

export const BulldozersHelmet = generateAttachmentCard({
	name: "Bulldozer's Helmet",
	card: "Bulldozer's Helmet",
	requires: exp,
	requiresEncounterSet: WreckingCrew,
  difficulty: 3,
	attaches: 'Bulldozer'
})

export const RammingSpeed = generateAttachmentCard({
	name: "Ramming Speed",
	card: "Ramming Speed",
	requires: exp,
	requiresEncounterSet: WreckingCrew,
  difficulty: 3,
	attaches: 'Bulldozer'
})

export const Enhancements = [
  MagicCrowbar,
	WreckersCommand,
	BallAndChain,
	RadioactiveBuildup,
	DistractingTaunts,
	BulldozersHelmet,
	RammingSpeed,
]
