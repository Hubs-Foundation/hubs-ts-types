import { AElement } from "aframe";
import { EventTarget } from "event-target-shim";

export interface Store extends EventTarget {
  _signOutOnExpiredAuthToken(): void;
  initProfile(): Promise<void>;
  resetToRandomDefaultAvatar(): Promise<void>;
  get state(): any;
  get credentialsAccountId(): any;
  resetConfirmedBroadcastedRooms(): void;
  resetTipActivityFlags(): void;
  bumpEntryCount(): void;
  enqueueOnLoadAction(action: string, args: []): void;
  executeOnLoadActions(sceneEl: AElement): void;
  clearOnLoadActions(): void;
  clearStoredArray(key: string): void;
  update(newState: {}, mergeOpts?: {}): {};
  getEmbedTokenForHub(hub: any): void;
  get schema(): any;
  addEventListener(key: string, callback: () => void): void;
  removeEventListener(key: string, callback: () => void): void;
}

export function getStore(): Store;
