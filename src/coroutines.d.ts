export type Coroutine = () => IteratorResult<undefined, any>;
export type CoroutineGeneratorT = Generator<Promise<any> | CancelablePromise<any>, any, any>;
export function coroutine(gen: CoroutineGeneratorT, rollbacks?: RollbackFunction[]): IteratorResult<undefined, any>;
export function crNextFrame(): Promise<void>;

export type RollbackFunction = () => void;
export type ClearFunction = () => void;
export type JobStartCallback = (
    clearRollbacks: ClearFunction,
    abortSignal: AbortSignal
) => Generator<Promise<any> | CancelablePromise<any>, any, any>;
export interface Job {
    coroutine?: Coroutine;
    startCallback: JobStartCallback;
    abortController: AbortController;
    rollbacks: RollbackFunction[];
}
export const $rollbackSymbol: symbol;
export class CancelablePromise<T> {
    promise: Promise<T>;
    rollback: RollbackFunction;
    $rollback: symbol;
    constructor(promise: Promise<T>, rollback: RollbackFunction);
}
export class JobRunner<T> {
    add(key: T, startCallback: JobStartCallback): void;
    has(key: T): boolean;
    stop(key: T): boolean;
    tick(): void;
}
