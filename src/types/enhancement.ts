import {Expansion} from "@/types/expansion";
import {Villain} from "@/types/villain";
import {EncounterSet} from "@/types/encounterset";

export type AttachmentCard = {
	card: string,
	requires: Expansion,
	name: string
	article?: string
	requiresEncounterSet?: EncounterSet
	conflictingVillains?: Villain[]
	difficulty: number
	attaches: string
}

export type SideSchemeCard = {
	card: string,
	requires: Expansion,
	name: string
	article?: string
	conflictingVillains?: Villain[]
	requiresEncounterSet?: EncounterSet
	difficulty: number
}

export interface Enhancement {
	name: string
	card: string
	description: () => any
	requires: Expansion
	conflictingVillains?: Villain[]
	requiresEncounterSet?: EncounterSet
	difficulty: number
}
