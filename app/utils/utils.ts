/**
 * Use this file for useful functions that can be reused
 *
 * @function numberOfDigits => return  number : gets the number fo digits in a number
 * */

export function numberOfDigits(numb: number) {
  return Math.max(Math.floor(Math.log10(Math.abs(numb))), 0) + 1;
}
