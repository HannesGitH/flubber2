import type { Shape, Interpolator, InterpolateOptions } from "../types";
import interpolate from "./interpolate";

interface InterpolateSequenceOptions extends InterpolateOptions {
  loop?: boolean;
}

export const interpolateSequence = (paths: Shape[], options?:InterpolateSequenceOptions): Interpolator => {
    
    if (paths.length < 2) {
        throw new Error("interpolateSequence requires at least two shapes");
    }
    if (options?.loop) {
        paths = [...paths, paths[0]];
    }

    const interpolators = paths.slice(1).map((path, i) => {
        console.log("interpolate", {i, 1: paths[i], 2:path});
        return interpolate(paths[i],paths[i+1],options);
    })
    const length = paths.length-1;
    const interpolator = (t: number) => {
        const scaledt = t * length;
        let index = Math.floor(scaledt);
        if(index >= length) index--;
        const iinterpolator = interpolators[index];
        return iinterpolator(scaledt - index);
    }
    
    return interpolator;
};
