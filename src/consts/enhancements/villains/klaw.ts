import {CoreSet} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {Klaw} from "@/consts/encountersets"
import {Klaw2} from "@/consts/villains"

export const SonicConverter = generateAttachmentCard({
	name: 'Sonic Converter',
	card: 'Sonic Converter',
	requires: CoreSet,
	requiresEncounterSet: Klaw,
  difficulty: 3,
	attaches: 'the villain'
})

export const SolidSoundBody = generateAttachmentCard({
	name: 'Solid Sound Body',
	card: 'Solid Sound Body',
	requires: CoreSet,
	requiresEncounterSet: Klaw,
  difficulty: 3,
	attaches: 'the villain'
})

export const IllegalArmsFactory = generateSideSchemeCard({
	name: "Illegal Arms Factory",
	card: "Illegal Arms Factory",
	requires: CoreSet,
	requiresEncounterSet: Klaw,
  difficulty: 3
})

export const ImmortalKlaw = generateSideSchemeCard({
	name: 'The "Immortal" Klaw',
	card: 'The "Immortal" Klaw',
	requires: CoreSet,
	requiresEncounterSet: Klaw,
	conflictingVillains: [Klaw2],
  difficulty: 3,
})

export const Enhancements = [
  SonicConverter,
	SolidSoundBody,
	IllegalArmsFactory,
	ImmortalKlaw,
]
