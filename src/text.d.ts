import { Side } from "three";

export type NumberOrNormalT = number | "normal";
export type NumberOrPctT = number | `${number}%`;

export type TextParams = {
  value: string;
  anchorX?: "left" | "center" | "right";
  anchorY?:
    | "top"
    | "top-baseline"
    | "top-cap"
    | "top-ex"
    | "middle"
    | "bottom-baseline"
    | "bottom";
  clipRect?: [number, number, number, number] | null;
  color?: string;
  curveRadius?: number;
  depthOffset?: number;
  direction?: "auto" | "ltr" | "rtl";
  fillOpacity?: number;
  fontUrl?: string | null;
  fontSize?: number;
  glyphGeometryDetail?: number;
  gpuAccelerateSDF?: boolean;
  letterSpacing?: number;
  lineHeight?: NumberOrNormalT;
  maxWidth?: number;
  opacity?: number;
  outlineBlur?: NumberOrPctT;
  outlineColor?: string;
  outlineOffsetX?: NumberOrPctT;
  outlineOffsetY?: NumberOrPctT;
  outlineOpacity?: number;
  outlineWidth?: NumberOrPctT;
  overflowWrap?: "normal" | "break-word";
  sdfGlyphSize?: number | null;
  side?: "front" | "back" | "double";
  strokeColor?: string;
  strokeOpacity?: number;
  strokeWidth?: NumberOrPctT;
  textAlign?: "left" | "right" | "center" | "justify";
  textIndent?: number;
  whiteSpace?: "normal" | "nowrap";
};

export enum TextAlignE {
  LEFT = 1 << 0,
  RIGHT = 1 << 1,
  CENTER = 1 << 2,
  JUSTIFY = 1 << 2,
}

export enum TextAnchorXE {
  LEFT = 1 << 0,
  CENTER = 1 << 1,
  RIGHT = 1 << 2,
}

export enum TextAnchorXE {
  TOP = 1 << 0,
  TOP_BASELINE = 1 << 1,
  TOP_CAP = 1 << 2,
  TOP_EX = 1 << 3,
  MIDDLE = 1 << 4,
  BOTTOM_BASELINE = 1 << 5,
  BOTTOM = 1 << 6,
}

export enum TextWhiteSpaceE {
  NORMAL = 1 << 0,
  NO_WRAP = 1 << 1,
}

export enum TextOverflowWrapE {
  NORMAL = 1 << 0,
  BREAK_WORD = 1 << 1,
}

export enum TextSideE {
  FRONT = 1 << 0,
  BACK = 1 << 1,
  DOUBLE = 1 << 2,
}

export enum TextDirectionE {
  AUTO = 1 << 0,
  LTR = 1 << 1,
  RTL = 1 << 2,
}

export function cast(params: Required<TextParams>): Required<TextParams>;
export function sideToThree(side: "front" | "back" | "double"): Side;
export function threeToSide(side: Side): "front" | "back" | "double";
export function textAlignToFlag(textAlign: string): TextAlignE;
export function anchorXToFlag(anchorX: string): TextAnchorXE;
export function anchorYToFlag(anchorY: string): TextAnchorXE;
export function numberOrStringToString(value: number | string): number;
export function whiteSpaceToFlag(whiteSpace: string): TextWhiteSpaceE;
export function overflowWrapToFlag(overflowWrap: string): TextOverflowWrapE;
export function sideToFlag(side: string): TextSideE;
export function directionToFlag(direction: string): TextDirectionE;
