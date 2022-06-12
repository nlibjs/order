import type {Interval, TotalOrder} from '../types';

export const hasL = <T>(order: TotalOrder<T>, leftInclusive: boolean, left: T, value: T): boolean => {
    return !(order(value, left) < 0 || (!leftInclusive && value === left));
};

export const hasR = <T>(order: TotalOrder<T>, rightInclusive: boolean, right: T, value: T): boolean => {
    return !(order(right, value) < 0 || (!rightInclusive && right === value));
};

export const has = <T>(order: TotalOrder<T>, interval: Interval<T>, value: T): boolean => {
    return hasL(order, interval[0], interval[1], value) && hasR(order, interval[3], interval[2], value);
};
