import {CoreSet} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {Ultron} from "@/consts/encountersets"

export const ProgramTransmitter = generateAttachmentCard({
	name: 'Program Transmitter',
	card: 'Program Transmitter',
	requires: CoreSet,
	requiresEncounterSet: Ultron,
  difficulty: 3,
	attaches: 'Ultron'
})

export const UpgradedDrones = generateAttachmentCard({
	name: 'Upgraded Drones',
	card: 'Upgraded Drones',
	requires: CoreSet,
	requiresEncounterSet: Ultron,
  difficulty: 3,
	attaches: 'the Ultron Drones environment'
})

export const DroneFactory = generateSideSchemeCard({
	name: "Drone Factory",
	card: "Drone Factory",
	requires: CoreSet,
	requiresEncounterSet: Ultron,
  difficulty: 3
})

export const InvasiveAI = generateSideSchemeCard({
	name: 'Invasive AI',
	card: 'Invasive AI',
	requires: CoreSet,
	requiresEncounterSet: Ultron,
  difficulty: 3,
})

export const UltronsImperative = generateSideSchemeCard({
	name: "Ultron's Imperative",
	card: "Ultron's Imperative",
	requires: CoreSet,
	requiresEncounterSet: Ultron,
  difficulty: 3,
})

export const Enhancements = [
  ProgramTransmitter,
	UpgradedDrones,
	DroneFactory,
	InvasiveAI,
	UltronsImperative,
]
