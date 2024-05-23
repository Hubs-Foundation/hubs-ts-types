import { LoadingManager, Texture, TextureLoader } from "three";

export class HubsTextureLoader extends TextureLoader {
  constructor(manager?: LoadingManager);

  load(
    url: string,
    onLoad?: (texture: Texture) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (event: ErrorEvent) => void
  ): Texture;

  loadAsync(
    url: string,
    onProgress?: (event: ProgressEvent) => void
  ): Promise<Texture>;
}
