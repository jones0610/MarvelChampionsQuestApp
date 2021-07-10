import {CoreSet} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {Klaw1, Klaw2, Klaw3} from "@/consts/villains"



export const SonicConverter = generateAttachmentCard({
	name: 'Sonic Converter',
	card: 'Sonic Converter',
	requires: CoreSet,
	requiresVillain: [Klaw1, Klaw2, Klaw3],
  difficulty: 3
})

export const SolidSoundBody = generateAttachmentCard({
	name: 'Solid Sound Body',
	card: 'Solid Sound Body',
	requires: CoreSet,
	requiresVillain: [Klaw1, Klaw2, Klaw3],
  difficulty: 3
})

export const IllegalArmsFactory = generateSideSchemeCard({
	name: "Illegal Arms Factory",
	card: "Illegal Arms Factory",
	requires: CoreSet,
	requiresVillain: [Klaw1, Klaw2, Klaw3],
  difficulty: 3
})

export const ImmortalKlaw = generateSideSchemeCard({
	name: 'The "Immortal" Klaw',
	card: 'The "Immortal" Klaw',
	requires: CoreSet,
	requiresVillain: [Klaw1, Klaw3],
  difficulty: 3,
})

export const Enhancements = [
  SonicConverter,
	SolidSoundBody,
	IllegalArmsFactory,
	ImmortalKlaw,
]
