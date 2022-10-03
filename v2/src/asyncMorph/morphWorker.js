import { interpolate } from '../../..';
onmessage = (e) => {
    const { from, to, } = e.data;
    try {
        const interpolator = interpolate(from, to);
        postMessage({ data: interpolator });
    }
    catch (error) {
        postMessage({ error });
    }
};
