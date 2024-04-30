import { Vector3, AnimationMixer } from "three";
import { EntityID } from "./entity";

export type Value = Vector3 | number;
export type AnimationProperty = [start: Value, end: Value];
export type EasingFunction = (t: number) => number;
export type AnimationCallback<T> = (values: T[]) => void;

export interface AnimationConfig {
  properties: AnimationProperty[];
  durationMS: number;
  easing: EasingFunction;
  fn: AnimationCallback<Value>;
}

export const MixerAnimatableData: Map<EntityID, AnimationMixer>;

export function easeOutQuadratic(t: number): number;
export function elasticOut(t: number): number;

export function animate(
  config: AnimationConfig
): Generator<Promise<void>, void, unknown>;
