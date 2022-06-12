import ava from 'ava';
import {exex, exin, inex, inin} from '../interval/shorthand';
import type {SubSet} from '../types';
import {intersect} from './intersect';

const numberAsc = (a: number, b: number) => a - b;

ava('intersect [(1,4],[5,7),(8,10)] [[2,3),(6,9]] → [[2,3),(6,7),(8,9]]', (t) => {
    const subset1: SubSet<number> = [exin(1, 4), inex(5, 7), exex(8, 10)];
    const subset2: SubSet<number> = [inex(2, 3), exex(6, 7), exin(8, 9)];
    const intersection1 = intersect(numberAsc, subset1, subset2);
    const intersection2 = intersect(numberAsc, subset2, subset1);
    const expected: SubSet<number> = [inex(2, 3), exex(6, 7), exin(8, 9)];
    t.deepEqual(intersection1, expected);
    t.deepEqual(intersection2, expected);
});

ava('intersect [(1,4],[5,7),(8,10)] [] → []', (t) => {
    const subset1: SubSet<number> = [exin(1, 4), inex(5, 7), exex(8, 10)];
    const subset2: SubSet<number> = [];
    const intersection1 = intersect(numberAsc, subset1, subset2);
    const intersection2 = intersect(numberAsc, subset2, subset1);
    const expected: SubSet<number> = [];
    t.deepEqual(intersection1, expected);
    t.deepEqual(intersection2, expected);
});

ava('intersect [(1,4],[5,7),(8,10)] [[0,10]] → [(1,4],[5,7),(8,10)]', (t) => {
    const subset1: SubSet<number> = [exin(1, 4), inex(5, 7), exex(8, 10)];
    const subset2: SubSet<number> = [inin(0, 10)];
    const intersection1 = intersect(numberAsc, subset1, subset2);
    const intersection2 = intersect(numberAsc, subset2, subset1);
    const expected: SubSet<number> = [exin(1, 4), inex(5, 7), exex(8, 10)];
    t.deepEqual(intersection1, expected);
    t.deepEqual(intersection2, expected);
});

ava('intersect [(1,4],[5,7),(8,10)] [[3,3]] → [[3,3]]', (t) => {
    const subset1: SubSet<number> = [exin(1, 4), inex(5, 7), exex(8, 10)];
    const subset2: SubSet<number> = [inin(3, 3)];
    const intersection1 = intersect(numberAsc, subset1, subset2);
    const intersection2 = intersect(numberAsc, subset2, subset1);
    const expected: SubSet<number> = [inin(3, 3)];
    t.deepEqual(intersection1, expected);
    t.deepEqual(intersection2, expected);
});
