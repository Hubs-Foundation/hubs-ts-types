import { WebGLRenderTarget, WebGLRenderer, LightProbe, Object3D } from "three";

export class Sky extends Object3D {
    constructor();
  
    get turbidity(): number;
  
    set turbidity(value: number)
  
    get rayleigh(): number;
  
    set rayleigh(value: number);
  
    get luminance(): number;
  
    set luminance(value: number);
  
    get mieCoefficient(): number;
  
    set mieCoefficient(value: number);
  
    get mieDirectionalG(): number;
  
    set mieDirectionalG(value: number);
  
    get inclination(): number;
  
    set inclination(value: number);
  
    get azimuth(): number;
  
    set azimuth(value);
  
    get distance(): number;
  
    set distance(value: number);
  
    updateSunPosition(): void;
  
    generateEnvironmentMap(renderer: WebGLRenderer): WebGLRenderTarget;
  
    generateLightProbe(renderer: WebGLRenderer): LightProbe;
  
    copy(source: Sky, recursive?: boolean): this;
}