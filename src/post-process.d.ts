import { EffectComposer, EffectPass } from "postprocessing";

export interface FxComposer {
    composer?: EffectComposer;
    bloomAndTonemapPass?: EffectPass;
    tonemapOnlyPass?: EffectPass;
}