import { Component } from "bitecs";
import { HubsWorld } from "./app";
import { ComponentDataT } from "./component";
import { ArrayVec3 } from "./types";
import { HubChannel } from "./hub-channel";

export type EntityID = number;

export interface Ref {
  current: number | null;
}

export interface Attrs {
  position?: ArrayVec3;
  rotation?: ArrayVec3;
  scale?: ArrayVec3;
  visible?: boolean;
  name?: string;
  layers?: number;
  ref?: Ref;
}

export interface EntityDef {
  components: ComponentDataT;
  attrs: Attrs;
  children: EntityDef[];
  ref?: Ref;
}

export type ComponentFn =
  | string
  | ((attrs: Attrs & ComponentDataT, children?: EntityDef[]) => EntityDef);

export function createElementEntity(
  tag: "entity" | ComponentFn,
  attrs: Attrs & ComponentDataT,
  ...children: EntityDef[]
): EntityDef;

declare global {
  namespace createElementEntity.JSX {
    interface IntrinsicElements {
      entity: ComponentDataT &
        Attrs & {
          children?: IntrinsicElements[];
        };
    }

    interface ElementChildrenAttribute {
      children: {};
    }
  }
}

export function anyEntityWith(world: HubsWorld, component: Component): EntityID;
export function findAncestorEntity(
  world: HubsWorld,
  eid: number,
  predicate: (eid: number, world: HubsWorld) => boolean
): EntityID | undefined;
export function findAncestorWithComponent(
  world: HubsWorld,
  component: Component,
  eid: number
): EntityID | undefined;
export function findAncestorsWithComponent(
  world: HubsWorld,
  component: Component,
  eid: number
): EntityID[];
export function findAncestorWithComponents(
  world: HubsWorld,
  components: Component[],
  eid: number
): EntityID | undefined;
export function findAncestorWithAnyComponent(
  world: HubsWorld,
  components: Component[],
  eid: number
): EntityID | undefined;
export function findChildWithComponent(
  world: HubsWorld,
  component: Component,
  eid: number
): EntityID | undefined;

export function deleteTheDeletableAncestor(
  world: HubsWorld,
  eid: EntityID
): void;
export function setPinned(
  hubChannel: HubChannel,
  world: HubsWorld,
  eid: EntityID,
  shouldPin: boolean
): Promise<void>;
