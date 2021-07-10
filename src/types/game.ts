import {Villain} from "@/types/villain";
import {EncounterSet} from "@/types/encounterset";
import {Challenge} from "@/types/challenge";
import {UpgradeCategory} from "@/types/upgrade";
import {Enhancement} from "@/types/enhancement";

type GameStatus = 'next' | 'active' | 'won' | 'lost'

export type Game = {
	number: number
	villain: Villain
	encounterSets: EncounterSet[]
	enhancements: Enhancement[]
	difficulty: number,
	heroLevel: number
	challenges: Challenge[]
	status: GameStatus
	id: string,
	rewardTypes: UpgradeCategory[]
}
