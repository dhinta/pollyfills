/**
 * Pipe
 * @param {Function[]} fns
 * @returns {Function}
 *
 * Example
 *
 * import {pipe} from pipe
 *
 * pipe(
 *   (a) => a + 1,
 *   (b) => b * 2,
 *   (c) => c / 2
 * )(1)
 *
 * Output => 2
 *
 */

export const pipe =
  (...fns) =>
  (input) =>
    fns.reduce((val, fn) => fn(val), input);
