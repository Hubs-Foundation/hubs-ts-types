import { InitialData } from "./media-loader";
import { PrefabNameT } from "./prefabs";

export interface CreateMessageData {
  prefabName: PrefabNameT;
  initialData: InitialData;
}
export type ClientID = string;
export type NetworkID = string;
export type StringID = number;
export interface CreateMessage {
  version: 1;
  networkId: NetworkID;
  prefabName: PrefabNameT;
  initialData: InitialData;
}

export interface CursorBuffer extends Array<any> {
  cursor?: number;
}
export type UpdateMessage = CursorBufferUpdateMessage | StorableUpdateMessage;
export interface UpdateMessageBase {
  nid: NetworkID;
  lastOwnerTime: number;
  timestamp: number;
  owner: ClientID;
}
export interface CursorBufferUpdateMessage extends UpdateMessageBase {
  componentIds: number[];
  data: CursorBuffer;
}
export interface StorableUpdateMessage extends UpdateMessageBase {
  data: any; // todo
}
export type DeleteMessage = NetworkID;
export interface Message {
  fromClientId?: ClientID;
  creates: CreateMessage[];
  updates: UpdateMessage[];
  deletes: DeleteMessage[];
}

export interface StorableMessage extends Message {
  version: 1;
}

export interface FileInfo {
  file_id: string;
  file_access_token: string;
  promotion_token: string;
}

export interface SaveEntityStatePayload {
  root_nid: NetworkID;
  nid: NetworkID;
  message: StorableMessage;
  file?: FileInfo;
}

export interface CreatorChange {
  nid: NetworkID;
  creator: ClientID;
}
