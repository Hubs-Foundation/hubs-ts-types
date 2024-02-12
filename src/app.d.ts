import { IWorld } from "bitecs";
import { Scene, Object3D, Material, PositionalAudio, Audio, AudioListener } from "three";
import type { ASystem, AComponent, AScene, ElOrEid } from "aframe";
import { AEntity, Networked, Object3DTag, Owned } from "./component";
import { HubChannel } from "./hub-channel";
import { SceneEntryManager } from "./entry-manager";
import { MessageDispatch } from "./message-dispatch";
import { Store } from "./store";
import { MediaSearchStore } from "./media-search-store";
import { FxComposer } from "./post-process";
import { SourceType, AudioSettings } from "./audio";
import { SystemKeyT } from "./systems";

declare global {
    interface Window {
      $O: (eid: number) => Object3D | undefined;
      APP: App;
    }
    const APP: App;
  }

export interface HubDescription {
    hub_id: string;
    user_data?: any;
}

export interface HubsWorld extends IWorld {
    scene: Scene;
    nameToComponent: {
      object3d: typeof Object3DTag;
      networked: typeof Networked;
      owned: typeof Owned;
      AEntity: typeof AEntity;
    };
    ignoredNids: Set<number>;
    deletedNids: Set<number>;
    nid2eid: Map<number, number>;
    eid2obj: Map<number, Object3D>;
    eid2mat: Map<number, Material>;
    time: { delta: number; elapsed: number; tick: number };
  }

export interface App {
    world: HubsWorld;
    scene?: AScene;
    hub?: HubDescription;
    hubChannel?: HubChannel;
    // addons: AddonSystemsT;
    entryManager?: SceneEntryManager;
    messageDispatch?: MessageDispatch;
    fx: FxComposer;
    store: Store;
    audioListener: AudioListener;
    audios: Map<ElOrEid, PositionalAudio | Audio>;
    sourceType: Map<ElOrEid, SourceType>;
    audioOverrides: Map<ElOrEid, Partial<AudioSettings>>;
    zoneOverrides: Map<ElOrEid, Partial<AudioSettings>>;
    gainMultipliers: Map<ElOrEid, number>;
    supplementaryAttenuation: Map<ElOrEid, number>;
    clippingState: Set<ElOrEid>;
    mutedState: Set<ElOrEid>;
    linkedMutedState: Set<ElOrEid>;
    isAudioPaused: Set<ElOrEid>;
    audioDebugPanelOverrides: Map<SourceType, Partial<AudioSettings>>;
    sceneAudioDefaults: Map<SourceType, Partial<AudioSettings>>;
    moderatorAudioSource: Set<ElOrEid>;
    str2sid: Map<string | null, number>;
    sid2str: Map<number, string | null>;
    nextSid: number;
    componentRegistry: { [key: string]: AComponent[] };
    mediaSearchStore: MediaSearchStore;
  
    getSid(str: string): number;
    getString(sid: number): string | null| undefined;
    getSystem(id: SystemKeyT): ASystem;
  
    RENDER_ORDER: {
      HUD_BACKGROUND: number,
      HUD_ICONS: number,
      CURSOR: number
    };
  }
