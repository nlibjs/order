import type {Interval, TotalOrder} from '../types';
import {hasL, hasR} from './has';

export const intersect = <T>(order: TotalOrder<T>, interval1: Interval<T>, interval2: Interval<T>): Interval<T> => {
    const left = hasL(order, interval1[0], interval1[1], interval2[1]) ? interval2 : interval1;
    const right = hasR(order, interval1[3], interval1[2], interval2[2]) ? interval2 : interval1;
    return [left[0], left[1], right[2], right[3]];
};
