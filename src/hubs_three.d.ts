import { AElement } from "aframe";
import { WebGLRenderer, Scene, Camera,  BufferGeometry } from "three";

declare module "three" {
  interface Object3D {
    matrixNeedsUpdate: boolean;
    childrenNeedMatrixWorldUpdate: boolean;
    eid?: number;
    el?: AElement;
    updateMatrices: (forceLocalUpdate?: boolean, forceWorldUpdate?: boolean, skipParents?: boolean) => void;
  }
  interface GeometryGroup { start: number; count: number; materialIndex: number }
  interface Material {
    eid?: number;
    onBeforeRender: (
      renderer: WebGLRenderer,
      scene: Scene,
      camera: Camera,
      geometry: BufferGeometry,
      obj: Object3D,
      group: GeometryGroup
    ) => void;
  }
  interface Mesh {
    reflectionProbeMode: "static" | "dynamic" | false;
  }

  interface Vector3 {
    near(pos: Vector3, distance: number): boolean;
  }
}

export {}
