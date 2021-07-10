import {CoreSet} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {Ultron1,Ultron2,Ultron3} from "@/consts/villains"



export const ProgramTransmitter = generateAttachmentCard({
	name: 'Program Transmitter',
	card: 'Program Transmitter',
	requires: CoreSet,
	requiresVillain: [Ultron1,Ultron2,Ultron3],
  difficulty: 3
})

export const UpgradedDrones = generateAttachmentCard({
	name: 'Upgraded Drones',
	card: 'Upgraded Drones',
	requires: CoreSet,
	requiresVillain: [Ultron1,Ultron2,Ultron3],
  difficulty: 3
	// Attaches to environment
})

export const DroneFactory = generateSideSchemeCard({
	name: "Drone Factory",
	card: "Drone Factory",
	requires: CoreSet,
	requiresVillain: [Ultron1,Ultron2,Ultron3],
  difficulty: 3
})

export const InvasiveAI = generateSideSchemeCard({
	name: 'Invasive AI',
	card: 'Invasive AI',
	requires: CoreSet,
	requiresVillain: [Ultron1,Ultron2,Ultron3],
  difficulty: 3,
})

export const UltronsImperative = generateSideSchemeCard({
	name: "Ultron's Imperative",
	card: "Ultron's Imperative",
	requires: CoreSet,
	requiresVillain: [Ultron1,Ultron2,Ultron3],
  difficulty: 3,
})

export const Enhancements = [
  ProgramTransmitter,
	UpgradedDrones,
	DroneFactory,
	InvasiveAI,
	UltronsImperative,
]
