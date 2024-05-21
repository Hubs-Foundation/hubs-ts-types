import { IComponent } from "bitecs";
import { App, HubsWorld } from "./app";
import { InflatorConfigT } from "./component";
import { ChatCommandCallbackFn } from "./message-dispatch";
import { NetworkSchemaT } from "./networking";
import { PrefabDefinitionT, PrefabNameT } from "./prefabs";
import {
  GLTFLoaderPlugin,
  GLTFParser,
} from "three/examples/jsm/loaders/GLTFLoader";
import { Object3D } from "three";
import { EntityID } from "./entity";
import { React } from "react";
import { PREFERENCE_LIST_ITEM_TYPE } from "./preferences";
import { Pass } from "postprocessing";
import { PostProcessOrderE } from "./post-process";

export enum SystemOrderE {
  Setup = 0,
  PrePhysics = 100,
  PostPhysics = 200,
  BeforeMatricesUpdate = 300,
  BeforeRender = 400,
  AfterRender = 500,
}
export interface SystemT {
  (app: App): void;
}

export interface PrefabConfigT {
  id: PrefabNameT;
  config: PrefabDefinitionT;
}

export interface NetworkSchemaConfigT {
  component: IComponent;
  schema: NetworkSchemaT;
}
export interface SystemConfigT {
  system: SystemT;
  order: number;
}

export interface ChatCommandConfigT {
  id: string;
  command: ChatCommandCallbackFn;
}

export type PreferenceDefConfigT = {
  type: "string" | "number" | "bool" | "object";
  default: string | number | boolean | object | undefined;
};

export type PreferenceSelectT = {
  value: string | number;
  text: string;
};

export type PreferenceRangeT = {
  min: number;
  max: number;
  step: number;
  digits: number;
};

export type PreferenceUIConfigT =
  | {
      prefType: PREFERENCE_LIST_ITEM_TYPE.CHECK_BOX;
      description: string;
      promptForRefresh?: boolean;
      hidden?: () => boolean;
      disableIfFalse?: string;
    }
  | {
      prefType: PREFERENCE_LIST_ITEM_TYPE.NUMBER_WITH_RANGE;
      description: string;
      promptForRefresh?: boolean;
      hidden?: () => boolean;
      disableIfFalse?: string;
      min: number;
      max: number;
      step: number;
      digits: number;
    }
  | {
      prefType: PREFERENCE_LIST_ITEM_TYPE.SELECT;
      description: string;
      promptForRefresh?: boolean;
      hidden?: () => boolean;
      disableIfFalse?: string;
      options?: PreferenceSelectT[];
    }
  | {
      prefType: PREFERENCE_LIST_ITEM_TYPE.MAP_COUNT;
      description: string;
      promptForRefresh?: boolean;
      hidden?: () => boolean;
      disableIfFalse?: string;
      defaultValue?: number;
      text?: string;
    };

export type PreferenceConfigT = {
  [key: string]: {
    prefDefinition: PreferenceDefConfigT;
    prefConfig: PreferenceUIConfigT;
  };
};

export interface SoundDefT {
  id: number;
  url: string;
}

export type AddonIdT = string;
export type AddonNameT = string;
export type AddonDescriptionT = string;
export type AddonOnLoadedFn = () => void;
export type AddonOnReadyFn = (app: App, config?: JSON) => void;

export interface InternalAddonConfigT {
  name: AddonNameT;
  description?: AddonDescriptionT;
  onLoaded?: AddonOnLoadedFn;
  onReady?: AddonOnReadyFn;
  system?: SystemConfigT | SystemConfigT[];
  inflator?: InflatorConfigT | InflatorConfigT[];
  prefab?: PrefabConfigT | PrefabConfigT[];
  networkSchema?: NetworkSchemaConfigT | NetworkSchemaConfigT[];
  chatCommand?: ChatCommandConfigT | ChatCommandConfigT[];
  preference?: PreferenceConfigT | PreferenceConfigT[];
  enabled?: boolean;
  config?: JSON | undefined;
}
type AddonConfigT = Omit<InternalAddonConfigT, "enabled" | "config">;

export function registerAddon(name: string, cb: AddonConfigT): void;

export type GLTFLinkResolverFn = (
  world: HubsWorld,
  model: Object3D,
  rootEid: EntityID,
  idx2eid: Map<number, EntityID>
) => void;
export type GLTFParserCallbackFn = (parser: GLTFParser) => GLTFLoaderPlugin;
export function registerGLTFLoaderPlugin(callback: GLTFParserCallbackFn): void;
export function registerGLTFLinkResolver(resolver: GLTFLinkResolverFn): void;
export function registerECSSidebarSection(
  section: (world: HubsWorld, selectedObj: Object3D) => React.JSX.Element
): void;
export function registerPreference(
  preference: PreferenceConfigT | PreferenceConfigT[]
): void;
export function registerPass(
  app: App,
  pass: Pass | Pass[],
  order: PostProcessOrderE
): void;
export function unregisterPass(app: App, pass: Pass | Pass[]): void;
