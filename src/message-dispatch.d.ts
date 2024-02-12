import { App } from "./app";

export interface MessageEntryPropsT {
    message: string;
}
  
export interface MessageEntryT {
    type: string;
    name: string;
    presence?: string;
    oldName?: string;
    newName?: string;
    sceneName?: string;
    hubName?: string;
    messageType?: string;
    props?: MessageEntryPropsT | string;
    showLineBreak?: boolean;
}

export type ChatCommandCallbackFn = (app: App, args: string[]) => void;
  
export interface MessageDispatch extends EventTarget {
    registerChatCommand(id: string, callback: ChatCommandCallbackFn): void;
    addToPresenceLog(message: MessageEntryT): void;
    log(type: string, props: MessageEntryPropsT): void;
    receive(message: MessageEntryT): void;
    dispatch(command: string): void;
    dispatchCommand(command: string, args: string[]): Promise<void>;
    remountUI(props: any): void;
    exitScene(): void;
}