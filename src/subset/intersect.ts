import {isNotEmpty} from '../interval/empty';
import {hasR} from '../interval/has';
import {intersect as intervalIntersect} from '../interval/intersect';
import type {SubSet, TotalOrder} from '../types';

export const intersect = <T>(order: TotalOrder<T>, subset1: SubSet<T>, subset2: SubSet<T>): SubSet<T> => {
    const result: SubSet<T> = [];
    const intervals2 = subset2.slice();
    for (const interval1 of subset1) {
        while (0 < intervals2.length) {
            const interval2 = intervals2[0];
            if (!hasR(order, interval1[3], interval1[2], interval2[1])) {
                break;
            }
            intervals2.shift();
            const intersection = intervalIntersect(order, interval1, interval2);
            if (isNotEmpty(order, intersection)) {
                result.push(intersection);
                if (hasR(order, interval2[3], interval2[2], interval1[2])) {
                    intervals2.unshift(interval2);
                    break;
                }
            }
        }
    }
    return result;
};
