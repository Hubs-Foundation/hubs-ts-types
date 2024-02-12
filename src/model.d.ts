import { Material, Object3D, Scene } from "three";

export type UpdateMaterialsFn = (material: Material) => Material;
export function updateMaterials(object3D: Object3D, fn: UpdateMaterialsFn): void;

export interface GLTFModelT {
    animations: Animation[],
    scene: Scene
  }
  
  export type JSONPreprocessorFn = ( json: JSON ) => any
  
  export interface LoadModelResultT { 
    scene: Object3D
  }
  
  export function loadModel(src: string, contentType?: string | null, useCache?: boolean, jsonPreprocessor?: JSONPreprocessorFn): Promise<LoadModelResultT>;
  export function cloneModelFromCache(src: string): LoadModelResultT;