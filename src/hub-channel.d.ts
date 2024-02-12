import { ClientID } from "./networking-types";
import { Store } from "./store";

export interface EntryTimingFlagsT {
    isNewDaily: boolean;
    isNewMonthly: boolean;
    isNewDayWindow: boolean;
    isNewMonthWindow: boolean
  }

export interface HubChannel extends EventTarget {
    store: Store;
    hubId: string;
    presence: any;
    channel: any;
    token: any;
    fetchPermissionsTimeout: NodeJS.Timeout | undefined;
    _signedIn: boolean;
    _permissions: {};
    _blockedSessionIds: Set<string>;
    get signedIn(): boolean;
    can(permission: string): boolean;
    userCan(clientId: ClientID, permission: string): boolean;
    canOrWillIfCreator(permission: string): boolean;
    canEnterRoom(hub: any): boolean;
    migrateToSocket(socket: any, params: any): Promise<void>;
    migrateToHub(hubId: string): Promise<DataView>;
    setPermissionsFromToken(token: string): void;
    sendEnteringEvent(): Promise<void>
    sendEnteringCancelledEvent(): Promise<void>
    sendEnteredEvent(): Promise<void>;
    beginStreaming(): void;
    endStreaming(): void
    beginRecording(): void
    endRecording(): void;
    raiseHand(): void;
    lowerHand(): void;
    beginTyping(): void;
    endTyping(): void;
    getEntryTimingFlags(): EntryTimingFlagsT;
    sendObjectSpawnedEvent(objectType: string): void;
    sendProfileUpdate(): void;
    updateScene(url: string): "unauthorized" | undefined;
    updateHub(settings: any): "unauthorized" | undefined;
    closeHub(): "unauthorized" | undefined;
    fetchInvite(): Promise<void>;
    revokeInvite(hubInviteId: string): Promise<void>;
    subscribe(subscription: any): void;
    allowNAFTraffic(allow: boolean): void;
    unsubscribe(subscription: any): Promise<void>;
    sendMessage(body: string, type: string): void;
    _getCreatorAssignmentToken(): string;
    signIn(token: string): Promise<void>;
    signOut(): Promise<void>;
    getHost(): Promise<void>;
    getTwitterOAuthURL(): Promise<string>;
    discordBridges(): any[any];
    pin(id: string, gltfNode: string, fileId: string, fileAccessToken: string, promotionToken: string): Promise<void>;
    unpin(id: string, fileId: string): void;
    fetchPermissions(): Promise<any>;
    mute(sessionId: string): void;
    addOwner(sessionId: string): void;
    removeOwner(sessionId: string): void;
    hide(sessionId: string): void;
    unhide(sessionId: string): void;
    isHidden(sessionId: string): boolean;
    kick(sessionId: string): Promise<void>;
    requestSupport(): void;
    favorite(): void;
    unfavorite(): void;
    disconnect(): void;
  }