export enum COLLISION_LAYERS {
    ALL = -1,
    NONE = 0,
    INTERACTABLES = 1 << 0,
    ENVIRONMENT = 1 << 1,
    AVATAR = 1 << 2,
    HANDS = 1 << 3,
    MEDIA_FRAMES = 1 << 4,
    // @TODO we should split these "sets" off into something other than COLLISION_LAYERS or at least name
    // them differently to indicate they are a combination of multiple bits
    DEFAULT_INTERACTABLE = INTERACTABLES | ENVIRONMENT | AVATAR | HANDS | MEDIA_FRAMES,
    UNOWNED_INTERACTABLE = INTERACTABLES | HANDS | MEDIA_FRAMES,
    DEFAULT_SPAWNER = INTERACTABLES | HANDS
}
  
export enum Shape {
    BOX = 0,
    CYLINDER,
    SPHERE,
    CAPSULE,
    CONE,
    HULL,
    HACD,
    VHACD,
    MESH,
    HEIGHTFIELD
}
  
export enum Fit {
    ALL = 0,
    MANUAL
}

export enum Type {
    STATIC = 0,
    DYNAMIC,
    KINEMATIC
} 

export enum ActivationState {
    ACTIVE_TAG = 0,
    ISLAND_SLEEPING = 1,
    WANTS_DEACTIVATION = 2,
    DISABLE_DEACTIVATION = 3,
    DISABLE_SIMULATION = 4
}

export interface RigidBodyParams {
    type: Type;
    mass: number;
    gravity: [number, number, number];
    linearDamping: number;
    angularDamping: number;
    linearSleepingThreshold: number;
    angularSleepingThreshold: number;
    angularFactor: [number, number, number];
    activationState: ActivationState;
    emitCollisionEvents: boolean;
    disableCollision: boolean;
    collisionGroup: number;
    collisionMask: number;
    scaleAutoUpdate: boolean;
  }
  