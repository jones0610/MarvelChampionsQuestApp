import {generateUpgradeCard, generateExhaustedCardInPlay} from "@/lib/upgrades";
import {Venom as Exp} from "@/consts/expansions";
import {Venom} from "@/consts/heroes";

export const ProjectRebirth = generateUpgradeCard({
	name: 'Project Rebirth 2.0',
	card: 'Project Rebirth 2.0',
	requires: Exp.name,
	requiresHero: Venom.name,
	category: "Heroic",
	article: '',
})

export const MultiGun = generateExhaustedCardInPlay({
	name: 'Multi-Gun',
	card: 'Multi-Gun',
	requires: Exp.name,
	requiresHero: Venom.name,
	category: "Heroic",
	pronoun: 'it',
	article: '',
})

export const SpiderSense = generateUpgradeCard({
	name: 'Spider Sense',
	card: 'Spider Sense',
	requires: Exp.name,
	requiresHero: Venom.name,
	category: "Heroic",
	article: '',
})

export const VenomsPistol = generateExhaustedCardInPlay({
	name: "Venom's Pistol",
	card: "Venom's Pistol",
	requires: Exp.name,
	requiresHero: Venom.name,
	category: "Heroic",
	pronoun: 'it',
	article: '',
})

export const Upgrades = [
	ProjectRebirth,
	MultiGun,
	SpiderSense,
	VenomsPistol,
]
