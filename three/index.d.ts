import { AElement } from "aframe";
import { WebGLRenderer, Scene, Camera, Geometry } from "three";

declare module "three" {
  interface Object3D {
    matrixNeedsUpdate: boolean;
    childrenNeedMatrixWorldUpdate: boolean;
    eid?: number;
    el?: AElement;
    updateMatrices: (
      forceLocalUpdate?: boolean,
      forceWorldUpdate?: boolean,
      skipParents?: boolean
    ) => void;
  }
  type GeometryGroup = { start: number; count: number; materialIndex: number };
  interface Material {
    eid?: number;
    onBeforeRender: (
      renderer: WebGLRenderer,
      scene: Scene,
      camera: Camera,
      geometry: Geometry,
      obj: Object3D,
      group: GeometryGroup
    ) => void;
  }

  interface Texture {
    eid?: number;
  }
  interface Mesh {
    reflectionProbeMode: "static" | "dynamic" | false;
  }
  interface AnimationAction {
    eid?: number;
  }
  interface Vector3 {
    near: Function;
  }
}
