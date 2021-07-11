import {RiseOfRedSkull as exp} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {Crossbones} from "@/consts/encountersets"

export const MachineGun = generateAttachmentCard({
	name: "Crossbones' Machine Gun",
	card: "Crossbones' Machine Gun",
	requires: exp,
	requiresEncounterSet: Crossbones,
  difficulty: 3,
	attaches: 'Crossbones'
})

export const Armor = generateAttachmentCard({
	name: "Crossbones' Armor",
	card: "Crossbones' Armor",
	requires: exp,
	requiresEncounterSet: Crossbones,
  difficulty: 3,
	attaches: 'Crossbones'
})

export const Assault = generateSideSchemeCard({
	name: "Crossbones' Assault",
	card: "Crossbones' Assault",
	requires: exp,
	requiresEncounterSet: Crossbones,
  difficulty: 3,
})

export const CorneredStaff = generateSideSchemeCard({
	name: "Cornered Staff",
	card: "Cornered Staff",
	requires: exp,
	requiresEncounterSet: Crossbones,
  difficulty: 3,
})

export const Enhancements = [
  MachineGun,
	Armor,
	Assault,
	CorneredStaff,
]
