/**
 * Checks if the given argument is empty.
 *
 * An argument is considered empty if:
 * - It is an array with no elements.
 * - It is `null` or `undefined`.
 *
 * @param {*} arg - The value to check.
 * @returns {boolean} `true` if the value is empty, otherwise `false`.
 */
function isEmpty(arg) {
    if (Array.isArray(arg) && arg.length == 0) {
        return true;
    } else if (arg == null || arg == undefined) {
        return true;
    } else {
        return false;
    }
}


/**
 * Compares two values for strict equality.
 *
 * @param {*} a - The first value to compare.
 * @param {*} b - The second value to compare.
 * @returns {boolean} `true` if the values are equal, otherwise `false`.
 */
function isEQ(a, b) {
    return Object.is(a, b);
  }
  

  /**
 * Checks if `b` is within the valid range (0 to `a`, inclusive).
 *
 * @param {number} a - The upper limit.
 * @param {number} b - The value to check.
 * @returns {boolean} `true` if `b` is between 0 and `a` (inclusive), otherwise `false`.
 */
function isInclusive(a, b) {
    return b >= 0 && b <= a;
  }

module.exports = {isEmpty, isEQ, isInclusive}