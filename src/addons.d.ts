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

export interface SoundDefT {
  id: number;
  url: string;
}

export type AddonIdT = string;
export type AddonNameT = string;
export type AddonDescriptionT = string;
export type AddonOnReadyFn = (app: App, config?: JSON) => void;

export interface InternalAddonConfigT {
  name: AddonNameT;
  description?: AddonDescriptionT;
  onReady?: AddonOnReadyFn;
  system?: SystemConfigT | SystemConfigT[];
  inflator?: InflatorConfigT | InflatorConfigT[];
  prefab?: PrefabConfigT | PrefabConfigT[];
  networkSchema?: NetworkSchemaConfigT | NetworkSchemaConfigT[];
  chatCommand?: ChatCommandConfigT | ChatCommandConfigT[];
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
