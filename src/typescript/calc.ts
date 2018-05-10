/**
 * General math functions.
 */

/**
 *
 */

/**
 * Returns a number representing the given base taken to the power of the given exponent.
 *
 * @param base Base number.
 * @param exponent Power of exponent.
 * @returns Number representing the given base taken to the power of the given exponent.
 * @example num = Math.pow(2,3)
 * 
 * Expected value of num is 8.
 */
export function pow(base: number, exponent: number): number {
    if (base === undefined) {throw new Error("Invalid arg: base must be defined.");}
    if (exponent === undefined) {throw new Error("Invalid arg: exponent must be defined.");}
    return Math.pow(base, exponent);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
/**
 * Returns the square root of a number.
 *
 * @param num Number.
 * @returns The square root.
 */
export function sqrt(num: number): number {
    if (num === undefined) {throw new Error("Invalid arg: nums must be defined.");}
    return Math.sqrt(num);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log
/**
 * Returns  the natural logarithm (base e) of a number.
 *
 * @param num Number.
 * @returns The natural logarithm (base e).
 */
export function log(num: number): number {
    if (num === undefined) {throw new Error("Invalid arg: nums must be defined.");}
    return Math.log(num);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log10
/**
 * Returns the logarithm (base 10) of a number.
 *
 * @param num Number.
 * @returns The logarithm (base 10).
 */
export function log10(num: number): number {
    if (num === undefined) {throw new Error("Invalid arg: nums must be defined.");}
    return Math.log10(num);
}
