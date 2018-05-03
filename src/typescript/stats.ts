/**
 * Statistics functions.
 *
 */

/**
 * http://mathjs.org/docs/reference/functions.html#statistics-functions
 */

import * as mathjs from "mathjs";

 /**
 * Compute the median absolute deviation of an array of numbers.
 * @param nums Array of numbers.
 * @returns Median.
 */
// export function mad(nums: number[]): number {
//     return mathjs.mad(nums);
// }

 /**
 * Compute the mean value of an array of numbers.
 * @param nums Array of numbers.
 * @returns Mean.
 */
export function mean(nums: number[]): number {
    return mathjs.mean(nums);
}

 /**
 * Compute the median value of an array of numbers.
 * @param nums Array of numbers.
 * @returns Median.
 */
export function median(nums: number[]): number {
    return mathjs.median(nums);
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

 /**
 * Compute the mode of an array of numbers.
 * @param nums Array of numbers.
 * @returns Mode.
 */
export function mode(nums: number[]): number {
    return mathjs.mode(nums);
}

 /**
 * Compute the product of an array of numbers.
 * @param nums Array of numbers.
 * @returns Product.
 */
export function product(nums: number[]): number {
    return mathjs.prod(nums);
}

 /**
 * Compute the standard deviation of an array of numbers.
 * @param nums Array of numbers.
 * @returns Standard deviation.
 */
export function std(nums: number[]): number {
    return mathjs.std(nums);
}

 /**
 * Compute the sum of an array of numbers.
 * @param nums Array of numbers.
 * @returns Sum.
 */
export function sum(nums: number[]): number {
    return mathjs.sum(nums);
}

 /**
 * Compute the variance of an array of numbers.
 * @param nums Array of numbers.
 * @returns Variance.
 */
export function variance(nums: number[]): number {
    return mathjs.var(nums);
}
