import {GreenGoblin} from "@/consts/expansions";
import {generateSideSchemeCard} from "@/lib/enhancements";
import {MessOfThings} from "@/consts/encountersets"

export const Mess = generateSideSchemeCard({
	name: 'A Mess of Things',
	card: 'A Mess of Things',
	requires: GreenGoblin,
	requiresEncounterSet: MessOfThings,
  difficulty: 3
})

export const Enhancements = [
  Mess,
]
