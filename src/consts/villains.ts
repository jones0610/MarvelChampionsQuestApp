import {Villain} from "@/types/villain";
import * as Enc from "@/consts/encountersets";
import {ExpansionsMap} from "@/consts/expansions";
import * as Exp from "@/consts/expansions";
import {DF_BASE, DF_STEP_LARGE, DF_STEP_MED, DF_STEP_SMALL} from "@/consts/difficulty";

// BASE GAME

export const Rhino1 : Villain = {
	name: 'Rhino (I)',
	key: 'rhino1',
	difficulty: DF_BASE,
	sets: [Enc.Rhino.name],
	requires: Exp.CoreSet
}

export const Rhino2 : Villain = {
	name: 'Rhino (II)',
	key: 'rhino2',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [Enc.Rhino.name],
	requires: Exp.CoreSet
}

export const Rhino3 : Villain = {
	name: 'Rhino (III)',
	key: 'rhino3',
	difficulty: DF_BASE + 2*DF_STEP_MED,
	sets: [Enc.Rhino.name],
	requires: Exp.CoreSet
}

export const Klaw1 : Villain = {
	name: 'Klaw (I)',
	key: 'klaw1',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [Enc.Klaw.name],
	requires: Exp.CoreSet
}

export const Klaw2 : Villain = {
	name: 'Klaw (II)',
	key: 'klaw2',
	difficulty: DF_BASE + 2*DF_STEP_MED,
	sets: [Enc.Klaw.name],
	requires: Exp.CoreSet
}

export const Klaw3 : Villain = {
	name: 'Klaw (III)',
	key: 'klaw3',
	difficulty: DF_BASE + 3*DF_STEP_MED,
	sets: [Enc.Klaw.name],
	requires: Exp.CoreSet
}

export const Ultron1 : Villain = {
	name: 'Ultron (I)',
	difficulty: DF_BASE + DF_STEP_LARGE,
	key: 'ultron1',
	sets: [Enc.Ultron.name],
	requires: Exp.CoreSet
}

export const Ultron2 : Villain = {
	name: 'Ultron (II)',
	difficulty: DF_BASE + DF_STEP_LARGE + DF_STEP_MED,
	key: 'ultron2',
	sets: [Enc.Ultron.name],
	requires: Exp.CoreSet
}

export const Ultron3 : Villain = {
	name: 'Ultron (III)',
	difficulty: DF_BASE + DF_STEP_LARGE + 2*DF_STEP_MED,
	key: 'ultron3',
	sets: [Enc.Ultron.name],
	requires: Exp.CoreSet
}

// VILLAIN PACKS
export const WreckingCrewA : Villain = {
	name: 'Wrecking Crew (A)',
	key: 'WreckingCrewA',
	difficulty: DF_BASE ,
	sets: [Enc.WreckingCrew.name],
	noExtraSets: true,
	requires: Exp.WreckingCrew
}

export const WreckingCrewB : Villain = {
	name: 'Wrecking Crew (B)',
	key: 'WreckingCrewB',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [Enc.WreckingCrew.name],
	noExtraSets: true,
	requires: Exp.WreckingCrew
}

export const GreenGoblin1 : Villain = {
	name: 'Green Goblin (I)',
	key: 'GreenGoblin1',
	difficulty: DF_BASE,
	sets: [Enc.MutagenFormula.name],
	requires: Exp.GreenGoblin
}

export const GreenGoblin2 : Villain = {
	name: 'Green Goblin (II)',
	key: 'GreenGoblin2',
	difficulty: DF_BASE + DF_STEP_LARGE,
	sets: [Enc.MutagenFormula.name],
	requires: Exp.GreenGoblin
}

export const GreenGoblin3 : Villain = {
	name: 'Green Goblin (III)',
	key: 'GreenGoblin3',
	difficulty: DF_BASE + 2*DF_STEP_LARGE,
	sets: [Enc.MutagenFormula.name],
	requires: Exp.GreenGoblin
}

export const NormanOsborn1 : Villain = {
	name: 'Norman Osborn (I)',
	key: 'NormanOsborn1',
	difficulty: DF_BASE,
	sets: [Enc.RiskyBusiness.name],
	requires: Exp.GreenGoblin
}

export const NormanOsborn2 : Villain = {
	name: 'Norman Osborn (II)',
	key: 'NormanOsborn2',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [Enc.RiskyBusiness.name],
	requires: Exp.GreenGoblin
}

export const NormanOsborn3 : Villain = {
	name: 'Norman Osborn (III)',
	key: 'NormanOsborn3',
	difficulty: DF_BASE + 2*DF_STEP_MED,
	sets: [Enc.RiskyBusiness.name],
	requires: Exp.GreenGoblin
}

export const KangA : Villain = {
	name: 'The Once and Future Kang (Standard)',
	key: 'KangA',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [Enc.Kang.name],
	requires: Exp.Kang
}

export const KangB : Villain = {
	name: 'The Once and Future Kang (Expert)',
	key: 'KangB',
	difficulty: DF_BASE + 2*DF_STEP_MED,
	sets: [Enc.Kang.name],
	requires: Exp.Kang
}

// THE RISE OF RED SKULL
export const Crossbones1 : Villain = {
	name: 'Crossbones (I)',
	key: 'Crossbones1',
	difficulty: DF_BASE,
	sets: [Enc.Crossbones.name],
	requires: Exp.RiseOfRedSkull
}

export const Crossbones2 : Villain = {
	name: 'Crossbones (II)',
	key: 'Crossbones2',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [Enc.Crossbones.name],
	requires: Exp.RiseOfRedSkull
}

export const Crossbones3 : Villain = {
	name: 'Crossbones (III)',
	key: 'Crossbones3',
	difficulty: DF_BASE + 2*DF_STEP_MED,
	sets: [Enc.Crossbones.name],
	requires: Exp.RiseOfRedSkull
}

export const AbsorbingMan1 : Villain = {
	name: 'Absorbing Man (I)',
	key: 'AbsorbingMan1',
	difficulty: DF_BASE,
	sets: [Enc.AbsorbingMan.name],
	requires: Exp.RiseOfRedSkull
}

export const AbsorbingMan2 : Villain = {
	name: 'Absorbing Man (II)',
	key: 'AbsorbingMan2',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [Enc.AbsorbingMan.name],
	requires: Exp.RiseOfRedSkull
}

export const AbsorbingMan3 : Villain = {
	name: 'Absorbing Man (III)',
	key: 'AbsorbingMan3',
	difficulty: DF_BASE + 2*DF_STEP_MED,
	sets: [Enc.AbsorbingMan.name],
	requires: Exp.RiseOfRedSkull
}

export const Taskmaster1 : Villain = {
	name: 'Taskmaster (I)',
	key: 'Taskmaster1',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [Enc.Taskmaster.name],
	requires: Exp.RiseOfRedSkull
}

export const Taskmaster2 : Villain = {
	name: 'Taskmaster (II)',
	key: 'Taskmaster2',
	difficulty: DF_BASE + 2*DF_STEP_MED,
	sets: [Enc.Taskmaster.name],
	requires: Exp.RiseOfRedSkull
}

export const Taskmaster3 : Villain = {
	name: 'Taskmaster (III)',
	key: 'Taskmaster3',
	difficulty: DF_BASE + 3*DF_STEP_MED,
	sets: [Enc.Taskmaster.name],
	requires: Exp.RiseOfRedSkull
}

export const Zola1 : Villain = {
	name: 'Zola (I)',
	key: 'Zola1',
	difficulty: DF_BASE + DF_STEP_LARGE,
	sets: [Enc.Zola.name],
	requires: Exp.RiseOfRedSkull
}

export const Zola2 : Villain = {
	name: 'Zola (II)',
	key: 'Zola2',
	difficulty: DF_BASE + DF_STEP_LARGE + DF_STEP_MED,
	sets: [Enc.Zola.name],
	requires: Exp.RiseOfRedSkull
}

export const Zola3 : Villain = {
	name: 'Zola (III)',
	key: 'Zola3',
	difficulty: DF_BASE + DF_STEP_LARGE + 2*DF_STEP_MED,
	sets: [Enc.Zola.name],
	requires: Exp.RiseOfRedSkull
}

export const RedSkull1 : Villain = {
	name: 'Red Skull (I)',
	key: 'RedSkull1',
	difficulty: DF_BASE + DF_STEP_LARGE,
	sets: [Enc.RedSkull.name],
	requires: Exp.RiseOfRedSkull
}

export const RedSkull2 : Villain = {
	name: 'Red Skull (II)',
	key: 'RedSkull2',
	difficulty: DF_BASE + DF_STEP_LARGE + DF_STEP_MED,
	sets: [Enc.RedSkull.name],
	requires: Exp.RiseOfRedSkull
}

export const RedSkull3 : Villain = {
	name: 'Red Skull (III)',
	key: 'RedSkull3',
	difficulty: DF_BASE + DF_STEP_LARGE + 2*DF_STEP_MED,
	sets: [Enc.RedSkull.name],
	requires: Exp.RiseOfRedSkull
}

// GALAXY'S MOST WANTED
export const Drang1 : Villain = {
	name: 'Drang (I)',
	key: 'Drang1',
	difficulty: DF_BASE,
	sets: [Enc.BrotherhoodOfBadoon.name],
	requires: Exp.GalaxysMostWanted
}

export const Drang2 : Villain = {
	name: 'Drang (II)',
	key: 'Drang2',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [Enc.BrotherhoodOfBadoon.name],
	requires: Exp.GalaxysMostWanted
}

export const Drang3 : Villain = {
	name: 'Drang (III)',
	key: 'Drang3',
	difficulty: DF_BASE + 2*DF_STEP_MED,
	sets: [Enc.BrotherhoodOfBadoon.name],
	requires: Exp.GalaxysMostWanted
}

export const Collector1 : Villain = {
	name: 'Collector (I)',
	key: 'Collector1',
	difficulty: DF_BASE + DF_STEP_LARGE,
	sets: [Enc.InfiltrateTheMuseum.name],
	requires: Exp.GalaxysMostWanted
}

export const Collector2 : Villain = {
	name: 'Collector (II)',
	key: 'Collector2',
	difficulty: DF_BASE + DF_STEP_LARGE + DF_STEP_MED,
	sets: [Enc.InfiltrateTheMuseum.name],
	requires: Exp.GalaxysMostWanted
}

export const Collector3 : Villain = {
	name: 'Collector (III)',
	key: 'Collector3',
	difficulty: DF_BASE + DF_STEP_LARGE + 2*DF_STEP_MED,
	sets: [Enc.InfiltrateTheMuseum.name],
	requires: Exp.GalaxysMostWanted
}

export const CollectorA1 : Villain = {
	name: 'Collector (A1)',
	key: 'CollectorA1',
	difficulty: DF_BASE + 2*DF_STEP_MED,
	sets: [Enc.EscapeTheMuseum.name],
	requires: Exp.GalaxysMostWanted
}

export const CollectorB1 : Villain = {
	name: 'Collector (B1)',
	key: 'CollectorB1',
	difficulty: DF_BASE + 3*DF_STEP_MED,
	sets: [Enc.EscapeTheMuseum.name],
	requires: Exp.GalaxysMostWanted
}

export const Nebula1 : Villain = {
	name: 'Nebula (I)',
	key: 'Nebula1',
	difficulty: DF_BASE + DF_STEP_LARGE + DF_STEP_MED,
	sets: [Enc.Nebula.name],
	requires: Exp.GalaxysMostWanted
}

export const Nebula2 : Villain = {
	name: 'Nebula (II)',
	key: 'Nebula2',
	difficulty: DF_BASE + DF_STEP_LARGE + 2*DF_STEP_MED,
	sets: [Enc.Nebula.name],
	requires: Exp.GalaxysMostWanted
}

export const Nebula3 : Villain = {
	name: 'Nebula (III)',
	key: 'Nebula3',
	difficulty: DF_BASE + DF_STEP_LARGE + 3*DF_STEP_MED,
	sets: [Enc.Nebula.name],
	requires: Exp.GalaxysMostWanted
}

export const Ronan1 : Villain = {
	name: 'Ronan (I)',
	key: 'Ronan1',
	difficulty: DF_BASE + DF_STEP_LARGE + DF_STEP_MED,
	sets: [Enc.RonanTheAccuser.name],
	requires: Exp.GalaxysMostWanted
}

export const Ronan2 : Villain = {
	name: 'Ronan (II)',
	key: 'Ronan2',
	difficulty: DF_BASE + DF_STEP_LARGE + 2*DF_STEP_MED,
	sets: [Enc.RonanTheAccuser.name],
	requires: Exp.GalaxysMostWanted
}

export const Ronan3 : Villain = {
	name: 'Ronan (III)',
	key: 'Ronan3',
	difficulty: DF_BASE + DF_STEP_LARGE + 3*DF_STEP_MED,
	sets: [Enc.RonanTheAccuser.name],
	requires: Exp.GalaxysMostWanted
}

export const VillainsMap : Record<string, Villain> = {
	[Rhino1.name]: Rhino1,
	[Rhino2.name]: Rhino2,
	[Rhino3.name]: Rhino3,
	[Klaw1.name]: Klaw1,
	[Klaw2.name]: Klaw2,
	[Klaw3.name]: Klaw3,
	[Ultron1.name]: Ultron1,
	[Ultron2.name]: Ultron2,
	[Ultron3.name]: Ultron3,
	[WreckingCrewA.name]: WreckingCrewA,
	[WreckingCrewB.name]: WreckingCrewB,
	[GreenGoblin1.name]: GreenGoblin1,
	[GreenGoblin2.name]: GreenGoblin2,
	[GreenGoblin3.name]: GreenGoblin3,
	[NormanOsborn1.name]: NormanOsborn1,
	[NormanOsborn2.name]: NormanOsborn2,
	[NormanOsborn3.name]: NormanOsborn3,
	[KangA.name]: KangA,
	[KangB.name]: KangB,
	[Crossbones1.name]: Crossbones1,
	[Crossbones2.name]: Crossbones2,
	[Crossbones3.name]: Crossbones3,
	[Taskmaster1.name]: Taskmaster1,
	[Taskmaster2.name]: Taskmaster2,
	[Taskmaster3.name]: Taskmaster3,
	[Zola1.name]: Zola1,
	[Zola2.name]: Zola2,
	[Zola3.name]: Zola3,
	[RedSkull1.name]: RedSkull1,
	[RedSkull2.name]: RedSkull2,
	[RedSkull3.name]: RedSkull3,
	[Drang1.name]: Drang1,
	[Drang2.name]: Drang2,
	[Drang3.name]: Drang3,
	[Collector1.name]: Collector1,
	[Collector2.name]: Collector2,
	[Collector3.name]: Collector3,
	[CollectorA1.name]: CollectorA1,
	[CollectorB1.name]: CollectorB1,
	[Nebula1.name]: Nebula1,
	[Nebula2.name]: Nebula2,
	[Nebula3.name]: Nebula3,
	[Ronan1.name]: Ronan1,
	[Ronan2.name]: Ronan2,
	[Ronan3.name]: Ronan3,
}

export const VillainsList = Object.keys(VillainsMap).map(key => VillainsMap[key]).sort((a,b) => {
	return a.name < b.name ? -1 : 1
})
