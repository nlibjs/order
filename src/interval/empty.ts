import type {Interval, TotalOrder} from '../types';
import {hasL, hasR} from './has';

export const isNotEmpty = <T>(order: TotalOrder<T>, interval: Interval<T>): boolean => {
    return hasL(order, interval[0], interval[1], interval[2]) && hasR(order, interval[3], interval[2], interval[1]);
};

export const isEmpty = <T>(order: TotalOrder<T>, interval: Interval<T>): boolean => !isNotEmpty(order, interval);
