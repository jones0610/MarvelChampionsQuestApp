import {GreenGoblin} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {RiskyBusiness} from "@/consts/encountersets"

export const CollapsingBridge = generateSideSchemeCard({
	name: "Collapsing Bridge",
	card: "Collapsing Bridge",
	requires: GreenGoblin,
	requiresEncounterSet: RiskyBusiness,
  difficulty: 3
})

export const OscorpManufacturing = generateSideSchemeCard({
	name: "Oscorp Manufacturing",
	card: "Oscorp Manufacturing",
	requires: GreenGoblin,
	requiresEncounterSet: RiskyBusiness,
  difficulty: 3
})

export const Payoff = generateSideSchemeCard({
	name: "Payoff",
	card: "Payoff",
	requires: GreenGoblin,
	requiresEncounterSet: RiskyBusiness,
  difficulty: 3
})

export const Enhancements = [
  CollapsingBridge,
	OscorpManufacturing,
	Payoff,
]
