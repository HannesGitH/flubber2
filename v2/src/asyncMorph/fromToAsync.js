import TweenCalculationWorker from "./morphWorker?worker"; //see L6
export const fromToAsync = (from, to) => {
    const worker = new TweenCalculationWorker('./morphWorker.ts', { type: 'module' }); //no idea if this works in SSR and CSR
    worker.postMessage({ from, to });
    return new Promise((resolve, reject) => {
        worker.onmessage = (e) => {
            const m = e.data;
            if (m.error)
                reject(m.error);
            else if (m.data)
                resolve(m.data);
            else
                reject('flubber: no tween, nothing parsed, but also no error message');
        };
    });
};
