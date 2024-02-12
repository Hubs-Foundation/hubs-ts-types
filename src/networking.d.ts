import { IComponent } from "bitecs";
import { HubsWorld } from "./app";
import { EntityID } from "./entity";
import { InitialData } from "./media-loader";
import { PrefabNameT } from "./prefabs";
import { CursorBuffer, } from "./networking-types";

export interface StoredComponent {
    version: number;
    data: any;
  }
  
  export interface NetworkSchema {
    componentName: string;
    serialize: (
      world: HubsWorld,
      eid: EntityID,
      data: CursorBuffer,
      isFullSync: boolean,
      writeToShadow: boolean
    ) => boolean;
    deserialize: (world: HubsWorld, eid: EntityID, data: CursorBuffer) => void;
    serializeForStorage?: (eid: EntityID) => StoredComponent;
    deserializeFromStorage?: (eid: EntityID, storedComponent: StoredComponent) => void;
  }
  export type NetworkSchemaT = NetworkSchema;

export interface SerDeT {
    serialize: (
        world: HubsWorld,
        eid: EntityID,
        data: CursorBuffer,
        isFullSync: boolean,
        writeToShadow: boolean
    ) => boolean;
    deserialize: (world: HubsWorld, eid: EntityID, data: CursorBuffer) => void;
}

export type MigrationFn = (storedComponent: StoredComponent) => StoredComponent;
export type ApplyFn = (eid: EntityID, storedComponent: StoredComponent) => boolean;
export type DeserializeFromStorageFn = (eid: EntityID, original: StoredComponent) => void;

export function createNetworkedEntity(world: HubsWorld, prefabName: PrefabNameT, initialData: InitialData): EntityID;
export function defineNetworkSchema(component: IComponent): SerDeT;
export function deserializerWithMigrations(migrations: Map<number, MigrationFn>, apply: ApplyFn): DeserializeFromStorageFn;
export function read(prop: any, eid: EntityID): any;
export function write(prop: any, eid: EntityID, value: any): void;
