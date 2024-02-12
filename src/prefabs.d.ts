import { ComponentDataT } from "./component";
import { EntityDef } from "./entity";

export type Permission =
  | "spawn_camera"
  | "spawn_and_move_media"
  | "update_hub"
  | "pin_objects"
  | "spawn_emoji"
  | "amplify_audio"
  | "fly"
  | "voice_chat"
  | "spawn_drawing"
  | "tweet"
  | "kick_users"
  | "mute_users";

export enum PermissionE {
  SPAWN_CAMERA = "spawn_camera",
  SPAWN_AND_MOVE_MEDIA = "spawn_and_move_media",
  UPDATE_HUB = "update_hub",
  PIN_OBJECTS = "pin_objects",
  SPAWN_EMOJI = "spawn_emoji",
  AMPLIFY_AUDIO = "amplify_audio",
  FLY = "fly",
  VOICE_CHAT = "voice_chat",
  SPAWN_DRAWING = "spawn_drawing",
  TWEET = "tweet",
  KICK_USERS = "kick_users",
  MUTE_USERS = "mute_users"
}

export type PrefabTemplateFn = (params: ComponentDataT) => EntityDef;

export interface PrefabDefinitionT {
  permission: PermissionE;
  template: PrefabTemplateFn;
}

export type PrefabNameT = string;

export type PermissionT = Permission;