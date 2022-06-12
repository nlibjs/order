import ava from 'ava';
import {has, hasL, hasR} from './has';
import {exin} from './shorthand';
import {toString} from './toString';

const numberAsc = (a: number, b: number) => a - b;
ava('0 isn\'t in (1,+Infinify)', (t) => {
    t.is(hasL(numberAsc, false, 1, 0), false);
});
ava('1 isn\'t in (1,+Infinify)', (t) => {
    t.is(hasL(numberAsc, false, 1, 1), false);
});
ava('2 is in (1,+Infinify)', (t) => {
    t.is(hasL(numberAsc, false, 1, 2), true);
});
ava('0 isn\'t in [1,+Infinify)', (t) => {
    t.is(hasL(numberAsc, true, 1, 0), false);
});
ava('1 is in [1,+Infinify)', (t) => {
    t.is(hasL(numberAsc, true, 1, 1), true);
});
ava('2 is in [1,+Infinify)', (t) => {
    t.is(hasL(numberAsc, true, 1, 2), true);
});
ava('3 is in (-Infinity,4)', (t) => {
    t.is(hasR(numberAsc, false, 4, 3), true);
});
ava('4 isn\'t in (-Infinity,4)', (t) => {
    t.is(hasR(numberAsc, false, 4, 4), false);
});
ava('5 isn\'t in (-Infinity,4)', (t) => {
    t.is(hasR(numberAsc, false, 4, 5), false);
});
ava('3 is in (-Infinity,4]', (t) => {
    t.is(hasR(numberAsc, true, 4, 3), true);
});
ava('4 is in (-Infinity,4]', (t) => {
    t.is(hasR(numberAsc, true, 4, 4), true);
});
ava('5 isn\'t in (-Infinity,4]', (t) => {
    t.is(hasR(numberAsc, true, 4, 5), false);
});
{
    const interval = exin(1, 4);
    const cases = new Map<number, boolean>();
    cases.set(1, false);
    cases.set(2, true);
    cases.set(3, true);
    cases.set(4, true);
    cases.set(5, false);
    for (const [value, expected] of cases) {
        ava(`${value} ${expected ? 'is in' : 'isn\'t in'} ${toString(interval)}`, (t) => {
            t.is(has(numberAsc, interval, value), expected);
        });
    }
}
