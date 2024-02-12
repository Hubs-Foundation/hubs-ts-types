import { MessageDescriptor } from "formatjs";

export type SignInPredicateFn = () => void;
export type SignInActionFn = () => void;
export type SignInErrorFn = (e: Error) => void;
export type PerformConditionalSignInFn = (predicate: SignInPredicateFn, action: SignInActionFn, message: MessageDescriptor, error: SignInErrorFn) => void;
export interface SceneEntryManager {
  performConditionalSignIn: PerformConditionalSignInFn;
  exitScene(): void;
}