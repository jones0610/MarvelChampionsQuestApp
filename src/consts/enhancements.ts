import {Enhancements as rhino} from "@/consts/enhancements/rhino";
import {Enhancement, EnhancementCategory} from "@/types/enhancement";


function addEnhancements (enhancements : Enhancement[]) {
	enhancements.forEach((enhancement) => {
		EnhancementsMap[enhancement.name] = enhancement
	})
}

export const EnhancementsMap : Record<string, Enhancement> = {}

addUpgrades(rhino)

export const EnhancementsList = Object.keys(EnhancementsMap).map(key => {
	return EnhancementsMap[key]
}).sort((a,b) => {
	return a.name < b.name ? -1 : 1
})
