import {GalaxysMostWanted as exp} from "@/consts/expansions";
import {generateAttachmentCard, generateSideSchemeCard} from "@/lib/enhancements";
import {SpacePirates} from "@/consts/encountersets"

export const SoundTheAlarms = generateSideSchemeCard({
	name: "Sound the Alarms",
	card: "Sound the Alarms",
	requires: exp,
  difficulty: 3,
	requiresEncounterSet: SpacePirates,
})

export const Enhancements = [
  SoundTheAlarms
]
