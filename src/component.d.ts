import { Component, ComponentType } from "bitecs";
import { HubsWorld } from "../index";
import { EntityDef, EntityID } from "./entity";
import { Object3D } from "three";

export const $isStringType: symbol;

export interface ComponentDataT {
  [key: string]: any;
}

export interface InflatorT {
  (world: HubsWorld, eid: EntityID, componentProps?: ComponentDataT): EntityID;
}

export interface InflatorParamT {
  id: string;
  inflator: InflatorT;
}

export interface InflatorConfigT {
  common?: InflatorParamT;
  jsx?: InflatorParamT;
  gltf?: InflatorParamT;
}

export const Object3DTag: Component;
export const Networked: ComponentType<{
  id: "ui32";
  creator: "ui32";
  owner: "ui32";
  lastOwnerTime: "ui32";
  timestamp: "ui32";
}>
export const AEntity: Component;
export const Owned: Component;
export const AvatarPOVNode: Component;
export const Held: Component;
export const GLTFModel: Component;
export const HoveredHandLeft: Component;
export const HoveredHandRight: Component;
export const HoveredRemoteLeft: Component;
export const HoveredRemoteRight: Component;

export function addObject3DComponent(world: HubsWorld, eid: number, obj: Object3D): EntityID;
export function renderAsEntity(world: HubsWorld, entityDef: EntityDef): EntityID;