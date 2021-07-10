import {Enhancements as rhino} from "@/consts/enhancements/villains/rhino";
import {Enhancements as klaw} from "@/consts/enhancements/villains/klaw";
import {Enhancements as ultron} from "@/consts/enhancements/villains/ultron";

import {Enhancements as bomb_scare} from "@/consts/enhancements/encountersets/bomb-scare";
import {Enhancement} from "@/types/enhancement";
import {randomItem} from "@/lib/random";


function addEnhancements (enhancements : Enhancement[]) {
	enhancements.forEach((enhancement) => {
		EnhancementsMap[enhancement.name] = enhancement
	})
}

export const EnhancementsMap : Record<string, Enhancement> = {}

addEnhancements(rhino)
addEnhancements(klaw)
addEnhancements(ultron)

addEnhancements(bomb_scare)

export const EnhancementsList = Object.keys(EnhancementsMap).map(key => {
	return EnhancementsMap[key]
}).sort((a,b) => {
	return a.name < b.name ? -1 : 1
})

export const randomEnhancement = () : Enhancement => {
	return randomItem(EnhancementsList)
}
