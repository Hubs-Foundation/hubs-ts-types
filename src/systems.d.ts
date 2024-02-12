import type { ASystem, AScene } from "aframe";
import { Color, Matrix4, Mesh, Texture, Vector3 } from "three";
import { InputBindingsT, InputDeviceE, InputPathsE } from "./input";
import { EntityID } from "./entity";
import { RigidBodyParams } from "./physics";
import { Sky } from "./sky";

export interface HubsSystems extends ASystem {
    physicsSystem: PhysicsSystem;
    soundEffectsSystem: SoundEffectsSystem;
    characterController: CharacterControllerSystem;
    environmentSystem: EnvironmentSystem;
    userinput: UserInputSystem;
  }

export type CoreSystemKeyT = keyof AScene["systems"];
export type HubsSystemKeyT = keyof HubsSystems;
export type SystemKeyT = CoreSystemKeyT | HubsSystemKeyT;

export enum SystemsE {
    PhysicsSystem = "physicsSystem",
    SoundEffectsSystem = "soundEffectsSystem",
    CharacterControllerSystem = "characterController",
    EnvironmentSystem = "environmentSystem",
    UserInputSystem = "userinput"
  }

export interface InputPathT {
  type: InputPathsE,
  value: string
}

export interface UserInputSystem extends ASystem {
  get(path: string): any;
  registerPaths(path: InputPathT[]): void;
  registerBindings(device: InputDeviceE, bindings: InputBindingsT): void;
}

export interface PhysicsSystem {
  updateRigidBody(eid: EntityID, options: Partial<RigidBodyParams>): void;
}

export interface SoundEffectsSystem {
  registerSound(url: string): Promise<{id: number, url: string}>;
}

export interface CharacterControllerSystem {
    travelByWaypoint(inMat4: Matrix4, snapToNavMesh: boolean, willMaintainInitialOrientation: boolean): void;
    findPOVPositionAboveNavMesh(startPOVPosition: Vector3, desiredPOVPosition: Vector3, outPOVPosition: Vector3, shouldRecomputeGroupAndNode: boolean): Vector3;
}

export enum ToneMappingOptionsE {
  None = "NoToneMapping",
  Linear = "LinearToneMapping",
  Reinhard = "ReinhardToneMapping",
  Cineon = "CineonToneMapping",
  ACESFilmic = "ACESFilmicToneMapping",
  CustomToneMapping = "CustomToneMapping",
  LUTToneMapping = "LUTToneMapping"
}

export enum OutputEncodingOptions {
  LinearEncoding = "LinearEncoding",
  sRGBEncoding = "sRGBEncoding",
  GBEEncoding = "GBEEncoding",
  GBM7Encoding = "GBM7Encoding",
  GBDEncoding = "GBDEncoding",
  BasicDepthPacking = "BasicDepthPacking",
  GBADepthPacking = "GBADepthPacking"
}

export enum FogType {
  Linear = "linear",
  Exponential = "exponential"
}

export interface EnvironmentSettingsT {
  toneMapping: ToneMappingOptionsE,
  outputEncoding: OutputEncodingOptions,
  toneMappingExposure: number,
  physicallyCorrectLights: boolean,
  envMapTexture: Texture | null | undefined,

  skybox: Sky | null | undefined,
  backgroundTexture: Texture | null | undefined,
  backgroundColor: Color,

  fogType: FogType | null | undefined,
  fogColor: Color,
  fogDensity: number,
  fogFar: number,
  fogNear: number,

  enableHDRPipeline: boolean | undefined,
  enableBloom: boolean,
  bloom: {
    threshold: number,
    intensity: number,
    radius: number,
    smoothing: number
  } | undefined
}

export interface EnvironmentSystem {
  applyEnvSettings(settings: EnvironmentSettingsT): void;
}

export enum FLOATY_OBJECT_FLAGS {
    MODIFY_GRAVITY_ON_RELEASE = 1 << 0,
    REDUCE_ANGULAR_FLOAT = 1 << 1,
    UNTHROWABLE = 1 << 2,
    HELIUM_WHEN_LARGE = 1 << 3
}