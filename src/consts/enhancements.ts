import {Enhancements as rhino} from "@/consts/enhancements/villains/rhino";
import {Enhancements as klaw} from "@/consts/enhancements/villains/klaw";
import {Enhancements as ultron} from "@/consts/enhancements/villains/ultron";
import {Enhancements as risky_business} from "@/consts/enhancements/villains/risky-business";
import {Enhancements as mutagen_formula} from "@/consts/enhancements/villains/mutagen-formula";
import {Enhancements as wrecking_crew} from "@/consts/enhancements/villains/wrecking-crew";
import {Enhancements as crossbones} from "@/consts/enhancements/villains/crossbones";
import {Enhancements as absorbing_man} from "@/consts/enhancements/villains/absorbing-man";
import {Enhancements as taskmaster} from "@/consts/enhancements/villains/taskmaster";
import {Enhancements as zola} from "@/consts/enhancements/villains/zola";
import {Enhancements as red_skull} from "@/consts/enhancements/villains/red-skull";
import {Enhancements as kang} from "@/consts/enhancements/villains/kang";
import {Enhancements as brotherhood_of_badoon} from "@/consts/enhancements/villains/brotherhood-of-badoon";
import {Enhancements as infiltrate_the_museum} from "@/consts/enhancements/villains/infiltrate-the-museum";
import {Enhancements as escape_the_museum} from "@/consts/enhancements/villains/escape-the-museum";
import {Enhancements as nebula} from "@/consts/enhancements/villains/nebula";
import {Enhancements as ronan_the_accuser} from "@/consts/enhancements/villains/ronan-the-accuser";

import {Enhancements as bomb_scare} from "@/consts/enhancements/encountersets/bomb-scare";
import {Enhancements as masters_of_evil} from "@/consts/enhancements/encountersets/masters-of-evil";
import {Enhancements as under_attack} from "@/consts/enhancements/encountersets/under-attack";
import {Enhancements as legions_of_hydra} from "@/consts/enhancements/encountersets/legions-of-hydra";
import {Enhancements as the_doomsday_chair} from "@/consts/enhancements/encountersets/the-doomsday-chair";
import {Enhancements as goblin_gimmicks} from "@/consts/enhancements/encountersets/goblin-gimmicks";
import {Enhancements as a_mess_of_things} from "@/consts/enhancements/encountersets/a-mess-of-things";
import {Enhancements as power_drain} from "@/consts/enhancements/encountersets/power-drain";
import {Enhancements as running_interference} from "@/consts/enhancements/encountersets/running-interference";
import {Enhancements as hydra_assault} from "@/consts/enhancements/encountersets/hydra-assault";
import {Enhancements as hydra_patrol} from "@/consts/enhancements/encountersets/hydra-patrol";
import {Enhancements as weapon_master} from "@/consts/enhancements/encountersets/weapon-master";
import {Enhancements as temporal} from "@/consts/enhancements/encountersets/temporal";
import {Enhancements as master_of_time} from "@/consts/enhancements/encountersets/master-of-time";
import {Enhancements as anachronauts} from "@/consts/enhancements/encountersets/anachronauts";
import {Enhancements as band_of_badoon} from "@/consts/enhancements/encountersets/band-of-badoon";
import {Enhancements as menagerie_medley} from "@/consts/enhancements/encountersets/menagerie-medley";
import {Enhancements as space_pirates} from "@/consts/enhancements/encountersets/space-pirates";
import {Enhancements as kree_militants} from "@/consts/enhancements/encountersets/kree-militants";

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
addEnhancements(risky_business)
addEnhancements(mutagen_formula)
addEnhancements(wrecking_crew)
addEnhancements(crossbones)
addEnhancements(absorbing_man)
addEnhancements(taskmaster)
addEnhancements(zola)
addEnhancements(red_skull)
addEnhancements(kang)
addEnhancements(brotherhood_of_badoon)
addEnhancements(infiltrate_the_museum)
addEnhancements(escape_the_museum)
addEnhancements(nebula)
addEnhancements(ronan_the_accuser)

addEnhancements(bomb_scare)
addEnhancements(masters_of_evil)
addEnhancements(under_attack)
addEnhancements(legions_of_hydra)
addEnhancements(the_doomsday_chair)
addEnhancements(goblin_gimmicks)
addEnhancements(a_mess_of_things)
addEnhancements(power_drain)
addEnhancements(running_interference)
addEnhancements(hydra_assault)
addEnhancements(hydra_patrol)
addEnhancements(weapon_master)
addEnhancements(temporal)
addEnhancements(master_of_time)
addEnhancements(anachronauts)
addEnhancements(band_of_badoon)
addEnhancements(menagerie_medley)
addEnhancements(space_pirates)
addEnhancements(kree_militants)

export const EnhancementsList = Object.keys(EnhancementsMap).map(key => {
	return EnhancementsMap[key]
}).sort((a,b) => {
	return a.name < b.name ? -1 : 1
})

export const randomEnhancement = () : Enhancement => {
	return randomItem(EnhancementsList)
}
