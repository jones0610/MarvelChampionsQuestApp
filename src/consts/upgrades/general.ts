import {CoreSet, Venom} from "@/consts/expansions";
import {generateExhaustedCardInPlay, levelUpMessageIncrease, generateAllyCard, generateUpgradeCard, generateCounterCardInPlay} from "@/lib/upgrades";
import {Upgrade, UpgradeCategory} from "@/types/upgrade";

export const Helicarrier = generateExhaustedCardInPlay({
	name: 'Pilot\'s License',
	card: 'Helicarrier',
	requires: CoreSet.name,
	pronoun: 'it',
	category: 'General'
})

export const AvengersMansion = generateExhaustedCardInPlay({
	name: 'Mansion Deed',
	card: 'Avenger\'s Mansion',
	requires: CoreSet.name,
	pronoun: 'it',
	category: 'General',
	maxLevel: 1,
	article: 'an'
})

export const AlwaysPrepared : Upgrade = {
	name: `Always Prepared`,
	description () {
		const num = this.level + 1
		const prefix = num == 1 ? '' : num.toString() + ' '
		return `You get an extra ${prefix}mulligan${num > 1 ? 's': ''} at the start of each game.`
	},
	requires: null,
	levelUpMessage () {
		return levelUpMessageIncrease(this.level+1, this.level+2, 'mulligan')
	},
	level: 1,
	maxLevel: 3,
	category: 'General' as UpgradeCategory
}

export const StarkGadget = {
	name: 'Stark Gadgets',
	numCards (level: number) {
		return 1+level
	},
	description () {
		return `At the start of your first turn, draw ${this.numCards(this.level)} cards.`
	},
	levelUpMessage () {
		return levelUpMessageIncrease(this.numCards(this.level), this.numCards(this.level+1), 'card')
	},
	requires: null,
	level: 1,
	maxLevel: 3,
	category: 'General' as UpgradeCategory
}
/*

export const HeroicConditioning = {
	name: `Heroic Conditioning`,
	numHitPoints (level: number) {
		return 2 + (level * 3)
	},
	description () {
		return `You get +${this.numHitPoints(this.level)} maximum hit points.`
	},
	requires: null,
	levelUpMessage () {
		return levelUpMessageIncrease(this.numHitPoints(this.level), this.numHitPoints(this.level+1), 'hit point')
	},
	level: 1,
	category: 'General' as UpgradeCategory
	// TODO: Add a function that will actually change the startingHP value of the player
	//  maybe some kind of whenChosen() hook? and a whenLeveled() hook?
}
*/

export const KnowYourEnemy = {
	name: `Know Your Enemy`,
	numCards (level: number) {
		return 2 + (level)
	},
	description () {
		const cards = this.numCards(this.level)
		return `<strong>Setup:</strong> Look at the top ${cards} cards of the encounter deck. You may put any number on the bottom or top of the deck in any order.`
	},
	requires: null,
	levelUpMessage () {
		return levelUpMessageIncrease(this.numCards(this.level), this.numCards(this.level+1), 'card')
	},
	level: 1,
	maxLevel: 3,
	category: 'General' as UpgradeCategory
}



// Venom
export const StarLord = generateAllyCard({
	name: 'Star Lord',
	card: 'Star Lord',
	levels: [{
		damage: 2,
		exhausted: true,
	}, {
		damage: 1,
		exhausted: true
	}, {
		damage: 0,
		exhausted: false,
	}],
	requires: Venom.name,
	requiresHero: '',
	pronoun: 'him',
	category: 'General',
})

export const SideHolster = generateUpgradeCard({
	name: 'Side Holster',
	requires: Venom.name,
	card: 'Side Holster',
	article: 'a',
	category: "General",
})

export const PlasmaPistol = generateCounterCardInPlay({
	name: 'Plasma Pistol',
	card: 'Plasma Pistol',
	article: '',
	they: 'It',
	pronoun: 'it',
	requires: Venom.name,
	category: 'General',
	requiresHero: '',
	extraCounters: {
		1: 0,
		2: 1,
		3: 2,
	}
})

export const CrewQuarters = generateExhaustedCardInPlay({
	name: 'Crew Quarters',
	card: 'Crew Quarters',
	requires: Venom.name,
	pronoun: 'it',
	category: 'General',
	article: 'an'
})


export const Upgrades = [
	KnowYourEnemy,
	Helicarrier,
	AvengersMansion,
	StarkGadget,
	AlwaysPrepared,
	StarLord,
	SideHolster,
	PlasmaPistol,
	CrewQuarters,]
