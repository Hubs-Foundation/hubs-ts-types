import { Object3D, Material } from "three";

export function forEachMaterial(
  object3D: Object3D,
  fn: (material: Material) => void
): void;

export function mapMaterials(
  obj: Object3D,
  fn: (mat: Material) => Material | void
): Material[];
