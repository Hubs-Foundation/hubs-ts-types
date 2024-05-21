import { EffectComposer, EffectPass } from "postprocessing";

export interface FxComposer {
  composer?: EffectComposer;
  bloomAndTonemapPass?: EffectPass;
  tonemapOnlyPass?: EffectPass;
}

export enum PostProcessOrderE {
  AfterScene = 0,
  AfterBloom = 1,
  AfterUI = 2,
  AfterAA = 3,
}
