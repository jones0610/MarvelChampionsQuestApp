import {Enhancement, AttachmentCard, SideSchemeCard} from "@/types/enhancement";

export function generateAttachmentCard (def: AttachmentCard) : Enhancement {
	const attachment = {
		name: def.name,
		card: def.card,
		description () {
			let msg = `<strong>Setup:</strong> Put <strong>${def.card}</strong> into play attached to ${def.attaches}.`
			return msg
		},
		requires: def.requires,
		conflictingVillains: def.conflictingVillains,
    difficulty: def.difficulty,
		requiresEncounterSet: def.requiresEncounterSet
	}
	return attachment
}

export function generateSideSchemeCard (def: SideSchemeCard) : Enhancement {
	const sideScheme = {
		name: def.name,
		card: def.card,
		description () {
			let msg = `<strong>Setup:</strong> Search the encounter deck for the <strong>${def.card}</strong> side scheme and reveal it. Shuffle the encounter deck.`
			return msg
		},
		requires: def.requires,
		conflictingVillains: def.conflictingVillains,
    difficulty: def.difficulty,
		requiresEncounterSet: def.requiresEncounterSet
	}
	return sideScheme
}
