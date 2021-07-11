import {Kang as exp} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {Kang} from "@/consts/encountersets"

export const TemporalShield = generateAttachmentCard({
	name: 'Temporal Shield',
	card: 'Temporal Shield',
	requires: exp,
	requiresEncounterSet: Kang,
  difficulty: 3,
	attaches: 'Kang'
})

export const FutureWeapon = generateAttachmentCard({
	name: 'Future Weapon',
	card: 'Future Weapon',
	requires: exp,
	requiresEncounterSet: Kang,
  difficulty: 3,
	attaches: 'Kang'
})

export const FrozenInTime = generateAttachmentCard({
	name: 'Frozen in Time',
	card: 'Frozen in Time',
	requires: exp,
	requiresEncounterSet: Kang,
  difficulty: 3,
	attaches: 'your identity'
})

export const KangsDominion = generateSideSchemeCard({
	name: "Kang's Dominion",
	card: "Kang's Dominion",
	requires: exp,
	requiresEncounterSet: Kang,
  difficulty: 3,
})

export const PinnedDown = generateSideSchemeCard({
	name: "Pinned Down",
	card: "Pinned Down",
	requires: exp,
	requiresEncounterSet: Kang,
  difficulty: 3,
})

export const Rampage = generateSideSchemeCard({
	name: "Rampage",
	card: "Rampage",
	requires: exp,
	requiresEncounterSet: Kang,
  difficulty: 3,
})

export const Enhancements = [
  TemporalShield,
	FutureWeapon,
	FrozenInTime,
	KangsDominion,
	PinnedDown,
	Rampage,
]
