/**
 * Functions for generating pseudo-random numbers.
 */

/**
 *
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
/**
 * Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
 *
 * @returns A pseudo-random number.
 */
export function num(): number {
    return Math.random();
}

/**
 * Returns a pseudo-random integer number between two numbers.
 *
 * Lower bound number is inclusive and upper bound number is exclusive.
 * @param min Lower inclusive bound of range.
 * @param max Upper inclusive bound of range.
 * @returns A pseudo-random integer number.
 */
export function intMinMax(min: number, max: number): number {
    if (min === undefined) {throw new Error("Invalid arg: min must be defined.");}
    if (max === undefined) {throw new Error("Invalid arg: max must be defined.");}
    const lower = Math.ceil(min);
    const upper = Math.floor(max);
    return Math.floor(Math.random() * (upper - lower)) + lower;
}

/**
 * Returns a pseudo-random floating point number between two numbers.
 *
 * @param min Lower bound of range.
 * @param max Upper bound of range.
 * @returns A pseudo-random floating point number.
 */
export function numMinMax(min: number, max: number): number {
    if (min === undefined) {throw new Error("Invalid arg: min must be defined.");}
    if (max === undefined) {throw new Error("Invalid arg: max must be defined.");}
    return (Math.random() * (max - min)) + min;
}
