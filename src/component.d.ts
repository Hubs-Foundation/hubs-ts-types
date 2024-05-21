import { Component, ComponentType, IComponent } from "bitecs";
import { HubsWorld } from "../index";
import { EntityDef, EntityID } from "./entity";
import { Object3D, Material, Texture } from "three";
import * as bitecs from "bitecs";

export const $isStringType: symbol;

export function addObject3DComponent(
  world: HubsWorld,
  eid: number,
  obj: Object3D
): EntityID;

export function addMaterialComponent(
  world: HubsWorld,
  eid: number,
  mat: Material
): EntityID;

export function renderAsEntity(
  world: HubsWorld,
  entityDef: EntityDef
): EntityID;

export function createDefaultInflator(
  C: Component,
  defaults: ComponentDataT
): InflatorFn;

export function inflateComponents(
  world: HubsWorld,
  eid: EntityID,
  inflatedEntity: ComponentDataT,
  indexToEntityMap: Map<number, EntityID>
): Promise<void>;

export interface ComponentDataT {
  [key: string]: any;
}

export interface InflatorFn {
  (world: HubsWorld, eid: EntityID, componentProps?: ComponentDataT): EntityID;
}

export interface InflatorParamT {
  id: string;
  inflator: InflatorFn;
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
}>;
export const NetworkedTransform: ComponentType<{
  position: ["f32", 3];
  rotation: ["f32", 4];
  scale: ["f32", 3];
}>;
export const AEntity: Component;
export const Owned: Component;
export const AvatarPOVNode: Component;
export const Held: Component;
export const GLTFModel: Component;
export const Deletable: Component;
export const Deleting: Component;
export const HoveredHandLeft: Component;
export const HoveredHandRight: Component;
export const HoveredRemoteLeft: Component;
export const HoveredRemoteRight: Component;
export const SingleActionButton: Component;
export const CursorRaycastable: Component;
export const RemoteHoverTarget: Component;
export const MaterialTag: Component;
export const TextureTag: Component;
export const MediaLoader: ComponentType<{
  src: "ui32";
  flags: "ui8";
  fileId: "ui32";
  count: "ui8";
  mediaRef: "eid";
}>;
export const MediaLoaded: Component;
export const MediaVideo: ComponentType<{
  ratio: "f32";
  flags: "ui8";
  projection: "ui8";
  lastUpdate: "ui32";
}>;
export const NetworkedVideo: ComponentType<{
  src: "ui8";
  time: "f32";
  flags: "ui8";
  projection: "ui8";
}>;
export const MediaVideoUpdated: Component;
export const MediaVideoUpdateSrcEvent: Component;
export const MediaFrame: ComponentType<{
  capturedNid: "ui32";
  scale: ["f32", 3];
  mediaType: "ui8";
  bounds: ["f32", 3];
  align: ["ui8", 3];
  guide: "eid";
  preview: "eid";
  previewingNid: "eid";
  flags: "ui8";
}>;
export const NetworkedMediaFrame: ComponentType<{
  capturedNid: "ui32";
  scale: ["f32", 3];
  flags: "ui8";
  mediaType: "ui8";
}>;
export const TextTag: Component;
export const NetworkedText: ComponentType<{
  text: "ui8";
  anchorX: "ui8";
  anchorY: "ui8";
  color: "ui32";
  curveRadius: "f32";
  direction: "ui8";
  fillOpacity: "f32";
  fontUrl: "ui8";
  fontSize: "f32";
  letterSpacing: "f32";
  lineHeight: "ui8";
  textAlign: "ui8";
  outlineWidth: "ui8";
  outlineColor: "ui32";
  outlineBlur: "ui8";
  outlineOffsetX: "ui8";
  outlineOffsetY: "ui8";
  outlineOpacity: "f32";
  strokeWidth: "ui8";
  strokeColor: "ui32";
  strokeOpacity: "ui32";
  textIndent: "ui32";
  whiteSpace: "ui8";
  overflowWrap: "ui8";
  opacity: "f32";
  side: "ui8";
  maxWidth: "f32";
}>;
export const LocalAvatar: Component;
export const RemoteAvatar: Component;
export const Rigidbody: ComponentType<{
  bodyId: "ui16";
  mass: "f32";
  gravity: ["f32", 3];
  linearDamping: "f32";
  angularDamping: "f32";
  linearSleepingThreshold: "f32";
  angularSleepingThreshold: "f32";
  angularFactor: ["f32", 3];
  type: "ui8";
  activationState: "ui8";
  collisionFilterGroup: "ui32";
  collisionFilterMask: "ui32";
  flags: "ui8";
  prevType: "ui8";
}>;
export const NetworkedRigidBody: ComponentType<{
  prevType: "ui8";
}>;
export const Interacted: Component;
export const SceneLoader: ComponentType<{
  src: "ui32";
}>;
export const PhysicsShape: ComponentType<{
  bodyId: "ui16";
  shapeId: "ui16";
  type: "ui8";
  fit: "ui8";
  halfExtents: ["f32", 3];
  minHalfExtent: "f32";
  maxHalfExtent: "f32";
  sphereRadius: "f32";
  cylinderAxis: "ui8";
  margin: "f32";
  offset: ["f32", 3];
  orientation: ["f32", 4];
  heightfieldDistance: "f32";
  flags: "ui8";
}>;

export interface BitComponentsT {
  [key: string]: IComponent;
}
export const bitComponents: BitComponentsT;
export const MediaRoot: Component;
export const SceneRoot: Component;
