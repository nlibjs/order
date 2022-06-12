import {has as intervalHas} from '../interval/has';
import type {SubSet, TotalOrder} from '../types';

export const has = <T>(order: TotalOrder<T>, subset: SubSet<T>, value: T): boolean => {
    return subset.some((interval) => intervalHas(order, interval, value));
};
