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
 *
 * <h3>Example:</h3>
 * <code>
 * num = Math.pow(2,3)
 * </code><br/><br/>
 * Expected value of num is 8.
 */
export function pow(base: number, exponent: number): number {
    if (base === undefined) {throw new Error("Invalid arg: base must be defined.");}
    if (exponent === undefined) {throw new Error("Invalid arg: exponent must be defined.");}
    return Math.pow(base, exponent);
}

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
export function round(num: number): number {
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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
/**
 * Returns the largest number in a array of numbers.
 *
 * @param nums Array of numbers.
 * @returns The largest number in specified array of numbers.
 *
 * <h3>Example:</h3>
 * <code>
 * array = [8,9,6,1,3]<br/>
 * num = Math.max(array)
 * </code><br/><br/>
 * </code>
 * Expected value of num is 9.
 */
export function max(nums: number[]): number {
    if (nums === undefined) {throw new Error("Invalid arg: nums must be defined.");}
    return Math.max(...nums);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
/**
 * Returns the smallest number in a array of numbers.
 *
 * @param nums Array of numbers.
 * @returns The smallest number in specified array of numbers.
 *
 * <h3>Example:</h3>
 * <code>
 * nums = [8,9,6,1,3]<br/>
 * num = Math.min(nums)
 * </code><br/><br/>
 * Expected value of num is 1.
 */
export function min(nums: number[]): number {
    if (nums === undefined) {throw new Error("Invalid arg: nums must be defined.");}
    return Math.min(...nums);
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
