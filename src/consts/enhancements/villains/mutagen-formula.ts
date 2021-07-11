import {GreenGoblin} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {MutagenFormula} from "@/consts/encountersets"

export const GoblinGlider = generateAttachmentCard({
	name: 'Goblin Glider',
	card: 'Goblin Glider',
	requires: GreenGoblin,
	requiresEncounterSet: MutagenFormula,
  difficulty: 3,
	attaches: 'the enemy with the highest printed hit points and without another Goblin Glider attached'
})

export const Hysteria = generateAttachmentCard({
	name: 'Hysteria',
	card: 'Hysteria',
	requires: GreenGoblin,
	requiresEncounterSet: MutagenFormula,
  difficulty: 3,
	attaches: 'Green Goblin'
})

export const PumpkinBombs = generateAttachmentCard({
	name: 'Pumpkin Bombs',
	card: 'Pumpkin Bombs',
	requires: GreenGoblin,
	requiresEncounterSet: MutagenFormula,
  difficulty: 3,
	attaches: 'the villain'
})

export const GoblinReinforcements = generateSideSchemeCard({
	name: "Goblin Reinforcements",
	card: "Goblin Reinforcements",
	requires: GreenGoblin,
	requiresEncounterSet: MutagenFormula,
  difficulty: 3
})

export const GoblinNation = generateSideSchemeCard({
	name: "Goblin Nation",
	card: "Goblin Nation",
	requires: GreenGoblin,
	requiresEncounterSet: MutagenFormula,
  difficulty: 3
})

export const Overrun = generateSideSchemeCard({
	name: "Overrun",
	card: "Overrun",
	requires: GreenGoblin,
	requiresEncounterSet: MutagenFormula,
  difficulty: 3
})

export const Enhancements = [
  GoblinGlider,
	Hysteria,
	PumpkinBombs,
	GoblinReinforcements,
	GoblinNation,
	Overrun,
]
