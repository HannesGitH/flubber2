// import TweenCalculationWorker from "./morphWorker?worker"; //see L6
import type {TweenInputMessage, TweenResultMessage, Shape, Interpolator} from './interface';


const fromToAsync = (from:Shape, to:Shape):Promise<Interpolator> => {
    const worker = new Worker('./morphWorker', {type: 'module'});//no idea if this works in SSR and CSR
    worker.postMessage({from, to} as TweenInputMessage);
    return new Promise((resolve, reject) => {
        worker.onmessage = (e:MessageEvent<TweenResultMessage>) => {
            const m = e.data;
            if (m.error) reject(m.error);
            else if (m.data) resolve(m.data);
            else reject('flubber: no tween, nothing parsed, but also no error message');
        }
    });
}

export default {fromToAsync};