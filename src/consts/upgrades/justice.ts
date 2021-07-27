import {CoreSet,Venom} from "@/consts/expansions";
import {generateCounterCardInPlay, generateUpgradeCard, generateAllyCard} from "@/lib/upgrades";

export const SurveillanceTeam = generateCounterCardInPlay({
	name: 'Trusty Spies',
	card: 'Surveillance Team',
	category: "Justice",
	requires: CoreSet.name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
	pronoun: 'it'
})

export const HeroicIntuition = generateUpgradeCard({
	name: 'Heroic Instincts',
	requires: CoreSet.name,
	card: 'Heroic Intuition',
	article: 'a',
	category: "Justice",
	attached: true
})


// Venom
export const JackFlag = generateAllyCard({
	name: 'Jack Flag',
	card: 'Jack Flag',
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
	category: 'Justice',
})

export const SonicRifle = generateCounterCardInPlay({
	name: 'Sonic Rifle',
	card: 'Sonic Rifle',
	article: '',
	they: 'It',
	pronoun: 'it',
	requires: Venom.name,
	category: 'Justice',
	requiresHero: '',
	extraCounters: {
		1: 0,
		2: 1,
		3: 2,
	}
})

export const Upgrades = [
	SurveillanceTeam,
	HeroicIntuition,
	JackFlag,
	SonicRifle,
]
