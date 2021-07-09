import {Expansion} from "@/types/expansion";
import {Hero} from "@/types/hero";

export type EncounterSet = {
	name: string
	difficulty: number
	boss: boolean
	requires: Expansion
	conflictingHeroes?: string[]
}
