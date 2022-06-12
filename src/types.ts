/**
 * Defines total order on T.
 * - If a < b then return a negative number.
 * - If a = b then return 0.
 * - If a > b then return a positive number.
 */
export type TotalOrder<T> = (a: T, b: T) => number;

/**
 * `[LInclusive, L, R, RInclusive]`
 * - `[false, 1, 4, true]` means (1,4].
 * - `[false, 2, 2, false]` means an empty interval (2, 2).
 * - L and R can be R < L on your `Order<T>`, but such interval is empty.
 */
export type Interval<T> = [boolean, T, T, boolean];

export type SubSet<T> = Array<Interval<T>>;
