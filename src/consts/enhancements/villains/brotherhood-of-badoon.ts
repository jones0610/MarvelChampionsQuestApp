import {GalaxysMostWanted as exp} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {BrotherhoodOfBadoon} from "@/consts/encountersets"

export const DrangsSpear = generateAttachmentCard({
	name: "Drang's Spear",
	card: "Drang's Spear",
	requires: exp,
	requiresEncounterSet: BrotherhoodOfBadoon,
  difficulty: 3,
	attaches: 'Drang'
})

export const Blockade = generateSideSchemeCard({
	name: "Blockade",
	card: "Blockade",
	requires: exp,
	requiresEncounterSet: BrotherhoodOfBadoon,
  difficulty: 3,
})

export const Bombardment = generateSideSchemeCard({
	name: "Bombardment",
	card: "Bombardment",
	requires: exp,
	requiresEncounterSet: BrotherhoodOfBadoon,
  difficulty: 3,
})

export const OpressiveArmada = generateSideSchemeCard({
	name: "Opressive Armada",
	card: "Opressive Armada",
	requires: exp,
	requiresEncounterSet: BrotherhoodOfBadoon,
  difficulty: 3,
})

export const SpatialPositioning = generateSideSchemeCard({
	name: "Spatial Positioning",
	card: "Spatial Positioning",
	requires: exp,
	requiresEncounterSet: BrotherhoodOfBadoon,
  difficulty: 3,
})

export const Enhancements = [
  DrangsSpear,
	Blockade,
	Bombardment,
	OpressiveArmada,
	SpatialPositioning,
]
