import { EventTarget } from "event-target-shim";

export interface MediaSearchStore extends EventTarget {
    setHistory(history: History): void;
}