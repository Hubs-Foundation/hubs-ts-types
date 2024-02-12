export enum SourceType {
    MEDIA_VIDEO = 0,
    AVATAR_AUDIO_SOURCE = 1,
    SFX = 2,
    AUDIO_TARGET = 3,
    AUDIO_ZONE = 4
}
  
export enum AudioType {
    Stereo = "stereo",
    PannerNode = "pannernode"
}
  
export enum DistanceModelType {
    Linear = "linear",
    Inverse = "inverse",
    Exponential = "exponential"
}
  
export enum PanningModelType {
    HRTF = "HRTF",
    EqualPower = "equalpower"
}
  
export interface AudioSettings {
    audioType: AudioType;
    distanceModel: DistanceModelType;
    panningModel: PanningModelType;
    rolloffFactor: number;
    refDistance: number;
    maxDistance: number;
    coneInnerAngle: number;
    coneOuterAngle: number;
    coneOuterGain: number;
    gain: number;
}