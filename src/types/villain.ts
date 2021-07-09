import {Expansion} from "@/types/expansion";
import {Hero} from "@/types/hero";

export type Villain = {
	name: string
	difficulty: number
	key: string
	sets: string[],
	noExtraSets?: boolean // Basically only for Wrecking Crew
	requires?: Expansion
	conflictingHeroes?: string[] // Will be necessary for Nebula
}
