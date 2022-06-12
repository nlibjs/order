import ava from 'ava';
import {isEmpty} from './empty';
import {intersect} from './intersect';
import {exex, exin, inin} from './shorthand';

const numberAsc = (a: number, b: number) => a - b;

ava('intersect (3,6) (1,2) → (3,2) (empty)', (t) => {
    const interval1 = exex(3, 6);
    const interval2 = exex(1, 2);
    const intersection1 = intersect(numberAsc, interval1, interval2);
    const intersection2 = intersect(numberAsc, interval2, interval1);
    const expected = exex(3, 2);
    t.is(isEmpty(numberAsc, intersection1), true);
    t.deepEqual(intersection1, expected);
    t.deepEqual(intersection2, expected);
});

ava('intersect (3,6) [1,2] → (3,2] (empty)', (t) => {
    const interval1 = exex(3, 6);
    const interval2 = inin(1, 2);
    const intersection1 = intersect(numberAsc, interval1, interval2);
    const intersection2 = intersect(numberAsc, interval2, interval1);
    const expected = exin(3, 2);
    t.is(isEmpty(numberAsc, intersection1), true);
    t.deepEqual(intersection1, expected);
    t.deepEqual(intersection2, expected);
});

ava('intersect (3,6) [1,5] → (3,5]', (t) => {
    const interval1 = exex(3, 6);
    const interval2 = inin(1, 5);
    const intersection1 = intersect(numberAsc, interval1, interval2);
    const intersection2 = intersect(numberAsc, interval2, interval1);
    const expected = exin(3, 5);
    t.is(isEmpty(numberAsc, intersection1), false);
    t.deepEqual(intersection1, expected);
    t.deepEqual(intersection2, expected);
});

ava('intersect (3,6) (4,5] → (4,5]', (t) => {
    const interval1 = exex(3, 6);
    const interval2 = exin(4, 5);
    const intersection1 = intersect(numberAsc, interval1, interval2);
    const intersection2 = intersect(numberAsc, interval2, interval1);
    const expected = exin(4, 5);
    t.is(isEmpty(numberAsc, intersection1), false);
    t.deepEqual(intersection1, expected);
    t.deepEqual(intersection2, expected);
});

ava('intersect (3,6) (4,6] → (4,6)', (t) => {
    const interval1 = exex(3, 6);
    const interval2 = exin(4, 6);
    const intersection1 = intersect(numberAsc, interval1, interval2);
    const intersection2 = intersect(numberAsc, interval2, interval1);
    const expected = exex(4, 6);
    t.is(isEmpty(numberAsc, intersection1), false);
    t.deepEqual(intersection1, expected);
    t.deepEqual(intersection2, expected);
});
