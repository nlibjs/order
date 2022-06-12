import type {Interval} from '../types';

export const toString = <T>(interval: Interval<T>) => {
    return `${interval[0] ? '[' : '('}${interval[1]},${interval[2]}${interval[3] ? ']' : ')'}`;
};
