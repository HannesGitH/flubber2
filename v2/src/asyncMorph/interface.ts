import type { Shape } from '../../types';

export type { Shape } from '../../types';

export type Interpolator = (t: number) => string;

export interface TweenResultMessage {
	error?: string;
	data?: Interpolator;
}

export interface TweenInputMessage {
	from: Shape;
	to: Shape;
}
