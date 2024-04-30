export enum MEDIA_FRAME_FLAGS {
  ACTIVE = 1 << 0,
  SNAP_TO_CENTER = 1 << 1,
  LOCKED = 1 << 2,
}

export enum MediaType {
  MODEL = 1 << 0,
  IMAGE = 1 << 1,
  VIDEO = 1 << 2,
  PDF = 1 << 3,
  HTML = 1 << 4,
  AUDIO = 1 << 5,
  OBJECT = 1 << 6,
  ALL = MediaType.MODEL |
    MediaType.IMAGE |
    MediaType.VIDEO |
    MediaType.PDF |
    MediaType.HTML |
    MediaType.AUDIO |
    MediaType.OBJECT,
  ALL_2D = MediaType.IMAGE | MediaType.VIDEO | MediaType.PDF | MediaType.HTML,
}

export enum MediaTypes {
  all = MediaType.ALL,
  "all-2d" = MediaType.ALL_2D,
  model = MediaType.MODEL | MediaType.OBJECT,
  image = MediaType.IMAGE,
  video = MediaType.VIDEO,
  pdf = MediaType.PDF,
}
