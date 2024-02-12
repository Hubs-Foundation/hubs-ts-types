import { IComponent } from "bitecs";
import { App } from "./app";
import { InflatorConfigT } from "./component";
import { ChatCommandCallbackFn } from "./message-dispatch";
import { NetworkSchemaT } from "./networking";
import { PrefabDefinitionT, PrefabNameT } from "./prefabs";

export enum SystemOrderE {
    Setup = 0,
    PrePhysics = 100,
    PostPhysics = 200,
    MatricesUpdate = 300,
    BeforeRender = 400,
    Render = 500,
    AfterRender = 600,
    PostProcessing = 700,
    TearDown = 800
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
    order: number 
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

export interface AddonConfigT {
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
  
export function registerAddon(name: string, cb: AddonConfigT): void;