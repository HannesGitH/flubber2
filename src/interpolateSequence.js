import { interpolate } from "..";
export const interpolateSequence = (paths, options) => {
    if (paths.length < 2) {
        throw new Error("interpolateSequence requires at least two shapes");
    }
    if (options === null || options === void 0 ? void 0 : options.loop) {
        paths = [...paths, paths[0]];
    }
    const interpolators = paths.slice(1).map((path, i) => {
        return interpolate(paths[i], paths[i + 1], options);
    });
    const length = paths.length - 1;
    const interpolator = (t) => {
        const scaledt = t * length;
        let index = Math.floor(scaledt);
        if (index >= length)
            index--;
        const iinterpolator = interpolators[index];
        return iinterpolator(scaledt - index);
    };
    return interpolator;
};
