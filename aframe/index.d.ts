import { Scene, Object3D, Mesh } from "three";

declare module "aframe" {
  interface AElement extends HTMLElement {
    object3D: Object3D;
    object3DMap: {
      mesh: Mesh;
      [name: string]: Object3D;
    };
    getObject3D(name: string): Object3D;
    components: {
      [s: string]: AComponent;
      "player-info": PlayerInfo;
    };
    eid: number;
    isPlaying: boolean;
  }

  type FnTick = (t: number, dt: number) => void;

  interface ASystem {
    init(): void;
    tick: FnTick;
    tock: FnTick;
    remove(): void;
    el: Scene;
  }

  interface AComponent {
    data: any;
    init(): void;
    tick: FnTick;
    tock: FnTick;
    remove(): void;
    el: AElement;
  }

  interface PlayerInfo extends AComponent {
    playerSessionId: string;
  }
  interface Device {
    isMobileVR: Function;
  }
  interface Utils {
    device: Device;
  }
}

export as namespace AFRAME;
