import { HubsWorld } from "./app";
import { EntityID } from "./entity";

export const MediaVideoData: Map<EntityID, HTMLVideoElement>;

export enum VIDEO_FLAGS {
  CONTROLS = 1 << 0,
  AUTO_PLAY = 1 << 1,
  LOOP = 1 << 2,
  PAUSED = 1 << 3,
}

export function updateVideoSrc(
  world: HubsWorld,
  eid: EntityID,
  src: string,
  video: HTMLVideoElement
): void;

export const enum ProjectionMode {
  FLAT = 0,
  SPHERE_EQUIRECTANGULAR = 1,
}

export const enum ProjectionModeName {
  FLAT = "flat",
  SPHERE_EQUIRECTANGULAR = "360-equirectangular",
}

export function getProjectionFromProjectionName(
  projectionName: ProjectionModeName
): ProjectionMode;

export function getProjectionNameFromProjection(
  projection: ProjectionMode
): ProjectionModeName;
