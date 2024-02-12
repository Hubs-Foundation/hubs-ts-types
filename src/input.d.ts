import { Camera, Matrix4, Quaternion, Vector2, Vector3 } from "three";

export enum InputSetsE {
    global = "global",
    inputFocused = "inputFocused",
    rightCursorHoveringOnPen = "rightCursorHoveringOnPen",
    rightCursorHoveringOnCamera = "rightCursorHoveringOnCamera",
    rightCursorHoveringOnInteractable = "rightCursorHoveringOnInteractable",
    rightCursorHoveringOnUI = "rightCursorHoveringOnUI",
    rightCursorHoveringOnVideo = "rightCursorHoveringOnVideo",
    rightCursorHoveringOnNothing = "rightCursorHoveringOnNothing",
    rightCursorHoldingPen = "rightCursorHoldingPen",
    rightCursorHoldingCamera = "rightCursorHoldingCamera",
    rightCursorHoldingInteractable = "rightCursorHoldingInteractable",
    rightCursorHoldingUI = "rightCursorHoldingUI",
    rightCursorHoldingNothing = "rightCursorHoldingNothing",
    leftCursorHoveringOnPen = "leftCursorHoveringOnPen",
    leftCursorHoveringOnCamera = "leftCursorHoveringOnCamera",
    leftCursorHoveringOnInteractable = "leftCursorHoveringOnInteractable",
    leftCursorHoveringOnUI = "leftCursorHoveringOnUI",
    leftCursorHoveringOnVideo = "leftCursorHoveringOnVideo",
    leftCursorHoveringOnNothing = "leftCursorHoveringOnNothing",
    leftCursorHoldingPen = "leftCursorHoldingPen",
    leftCursorHoldingCamera = "leftCursorHoldingCamera",
    leftCursorHoldingInteractable = "leftCursorHoldingInteractable",
    leftCursorHoldingUI = "leftCursorHoldingUI",
    leftCursorHoldingNothing = "leftCursorHoldingNothing",
    rightHandTeleporting = "rightHandTeleporting",
    rightHandHoveringOnPen = "rightHandHoveringOnPen",
    rightHandHoveringOnCamera = "rightHandHoveringOnCamera",
    rightHandHoveringOnInteractable = "rightHandHoveringOnInteractable",
    rightHandHoveringOnNothing = "rightHandHoveringOnNothing",
    rightHandHoldingPen = "rightHandHoldingPen",
    rightHandHoldingCamera = "rightHandHoldingCamera",
    rightHandHoldingInteractable = "rightHandHoldingInteractable",
    leftHandTeleporting = "leftHandTeleporting",
    leftHandHoveringOnPen = "leftHandHoveringOnPen",
    leftHandHoveringOnCamera = "leftHandHoveringOnCamera",
    leftHandHoveringOnInteractable = "leftHandHoveringOnInteractable",
    leftHandHoldingPen = "leftHandHoldingPen",
    leftHandHoldingCamera = "leftHandHoldingCamera",
    leftHandHoldingInteractable = "leftHandHoldingInteractable",
    leftHandHoveringOnNothing = "leftHandHoveringOnNothing",
    debugUserInput = "debugUserInput",
    inspecting = "inspecting",
}

export interface InputPoseT {
    position: Vector3;
    direction: Vector3;
    orientation: Quaternion;
    fromOriginAndDirection: (origin: Vector3, direction: Vector3) => InputPoseT;
    fromCameraProjection: (camera: Camera, normalizedX: number, normalizedY: number) => InputPoseT;
    copy: (pose: InputPoseT) => void;
}
export interface InputGenerationsT {
    [key: string]: number;
}
export interface InputValueT {
    [key: string]: any;
}
export interface InputFrameT {
    generation: number;
    values: InputValueT[];
    generations: InputGenerationsT[];
    get: (path: string) => InputValueT;
    setValueType: (path: string, value: number) => void;
    setVector2: (path: string, a: Vector2, b: Vector2) => void;
    setPose: (path: string, pose: any) => void;
    setMatrix4: (path: string, mat4: Matrix4) => void;
}
export type InputXFormT = (frame: InputFrameT, src: InputValueT, dest: InputValueT, state: any) => void;
export interface InputXFormsT {
    noop: () => void;
    copy: InputXFormT;
    scale: (scalar: number) => void;
    scaleExp: (scalar: number, exp: number) => void;
    deadzone: (deadzoneSize: number) => void;
    split_vec2: InputXFormT;
    compose_vec2: InputXFormT;
    negate: InputXFormT;
    copyIfFalse: InputXFormT;
    copyIfTrue: InputXFormT;
    copyVec2IfTrue: InputXFormT;
    zeroIfDefined: InputXFormT;
    true: InputXFormT;
    rising: InputXFormT;
    clickAndHold: InputXFormT;
    falling: InputXFormT;
    vec2Zero: InputXFormT;
    poseFromCameraProjection: () => void;
    vec2dpad: (deadzoneRadius: number, invertX: boolean, invertY: boolean) => void;
    always: (constValue: InputValueT) => void;
    wasd_to_vec2: InputXFormT;
    add_vec2: InputXFormT;
    max_vec2: InputXFormT;
    normalize_vec2: InputXFormT;
    all: InputXFormT;
    any: InputXFormT;
    touch_axis_scroll: InputXFormT;
    diff_vec2: InputXFormT;
    invert_vec2_if_preference: (preference: string) => void;
}
export const xforms: InputXFormsT;

export interface InputBindingT {
    src: InputValueT;
    dest: InputValueT;
    xform: InputXFormT;
    priority?: number;
}
export type InputBindingsT = {
    [key in InputSetsE]?: InputBindingT[];
}

export enum InputDeviceE {
    Cardboard,
    Daydream,
    Gamepad,
    KeyboardMouse,
    OculusGo,
    OculusTouch,
    TouchScreen,
    Vive,
    WebXR,
    WindowsMixedReality,
    XboxController,
    GearVR,
    ViveCosmos,
    ViveFocusPlus,
    ViveWand,
    ValveIndex
}

export interface InputPathValueT {
    [key: string]: any;
}
export enum InputPathsE {
    noop = "noop",
    actions = "actions",
    haptics =  "haptics",
    device = "device"
}
export interface InputPathsT {
    noop: string;
    actions: InputPathValueT;
    haptics: InputPathValueT;
    device: InputPathValueT;
}
export const paths: InputPathsT;
