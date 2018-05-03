/**
 * Rounding functions.
 */

/**
 *
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
/**
 * Returns the value of a number rounded to the nearest integer.
 *
 * @param num Number.
 * @returns The nearest integer.
 *
 * <h3>Example:</h3>
 * <code>
 * num = Math.round(4.5)
 * </code><br/><br/>
 * Expected value of num is 5.
 */
export function nearest(num: number): number {
    if (num === undefined) {throw new Error("Invalid arg: num must be defined.");}
    return Math.round(num);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
/**
 * Rounds a number up to the nearest integer.
 *
 * @param num Number.
 * @returns The smallest integer more than or equal to the specified number.
 *
 * <h3>Example:</h3>
 * <code>
 * num = Math.ceiling(4.3)
 * </code><br/><br/>
 * Expected value of num is 5.
 */
export function ceil(num: number): number {
    if (num === undefined) {throw new Error("Invalid arg: num must be defined.");}
    return Math.ceil(num);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
/**
 * Rounds a number down to the nearest integer.
 *
 * @param num Number.
 * @returns The largest integer less than or equal to the specified number.
 *
 * <h3>Example:</h3>
 * <code>
 * num = Math.floor(4.3)
 * </code><br/><br/>
 * Expected value of num is 4.
 */
export function floor(num: number): number {
    if (num === undefined) {throw new Error("Invalid arg: num must be defined.");}
    return Math.floor(num);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
/**
 * Returns the absolute value of a number.
 *
 * Returns num if num is positive, -num if num is negative and 0 if num=0<br/>
 *
 * @param num Number.
 * @returns The absolute value of the specified number.
 *
 * <h3>Example:</h3>
 * <code>
 * num1 = Math.abs(-1.234)
 * num2 = Math.abs(2.345)<br/>
 * </code><br/><br/>
 * Expected value of num1 is 1.234, and of num2 is 2.345.
 */
export function abs(num: number): number {
    if (num === undefined) {throw new Error("Invalid arg: num must be defined.");}
    return Math.abs(num);
}