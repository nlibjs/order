import type {Interval} from '../types';

export const inin = <T>(left: T, right: T): Interval<T> => [true, left, right, true];
export const inex = <T>(left: T, right: T): Interval<T> => [true, left, right, false];
export const exin = <T>(left: T, right: T): Interval<T> => [false, left, right, true];
export const exex = <T>(left: T, right: T): Interval<T> => [false, left, right, false];
