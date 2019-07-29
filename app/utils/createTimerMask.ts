/**
 * Custom function to pass to text-mask module to create my own number format
 *
 * @const emptyString string convenience variable that is an empty string
 * @const digitRegExp RegExp convenience variable that returns digits
 * @const nonDigitRegExp RegExp convenience variable that returns non-digits
 *
 * @var numberSeparator string character to place between number, default is ":"
 * @var numberGroupLimit number number of characters to have between separators
 *
 * @function convertToMask(strNumver: string): => string
 *  takes a string and converts any digits to "/\d/"
 * @function addNumberSeparator(n: number, numberSeparatorSymbol: string
 *  Adds the numberSeparator every 2 characters see
 *  @link http://stackoverflow.com/a/10899795/604296
 * @function numberMask(rawValue: string)
 *  This is the main function
 *  If the value is empty we simply return an empty string
 *  If the value is less than the numberGroupLimit value plus 1, we return
 *  the value after passing it through convertToMask
 *  Otherwise, we split the rawValue into chunks, strip any non-digit characters,
 *  pass it through convertToMask and return the resulting string.
 * */

const emptyString: string = '';
const digitRegExp: RegExp = /\d/;
const nonDigitsRegExp: RegExp = /\D+/g;

export default function createTimerMask({
  numberSeparator = ':',
  numberGroupLimit = 2
} = {}): (rawValue: string) => string[] {
  // Here we'd check options
  // const numberSeparatorSymbolLength = numberSeparator && numberSeparator.length || 0;

  function numberMask(rawValue: string = emptyString) {
    let integer, fraction, mask;
    const indices = [];
    const rawValueLength = rawValue.length;
    // Handle an empty input
    if (rawValue === emptyString) {
      return [emptyString];
    }
    // If it's smaller than the limit, we return just an array
    if (rawValueLength < numberGroupLimit + 1) {
      return convertToMask(rawValue);
    }
    // Check to see if there are any separators
    // and how many there are
    let idx = rawValue.indexOf(numberSeparator);
    while (idx != -1) {
      indices.push(idx);
      idx = rawValue.indexOf(numberSeparator, idx + 1);
    }
    // Strip it
    integer = rawValue.replace(nonDigitsRegExp, emptyString);
    // limit it to 6 characters
    if (integer.length > 6) {
      integer = integer.substring(0, 6);
    }
    // add separators
    if (indices.length > 2) {
      // first we separate the beginning digits
      fraction = integer.substring(integer.length - 6);
      // then we remove them from the string
      integer = integer.replace(fraction, emptyString);
      // add the separators
      fraction = addNumberSeparator(fraction, numberSeparator);
      // glue it back together
      integer = integer + fraction;
    } else {
      integer = addNumberSeparator(integer, numberSeparator);
    }
    // Convert it
    mask = convertToMask(integer);
    // Return it
    return mask;
  }

  numberMask.instanceOf = 'createTimerMask';

  return numberMask;
}

function convertToMask(strNumber) {
  return strNumber
    .split(emptyString)
    .map(char => (digitRegExp.test(char) ? digitRegExp : char));
}

// http://stackoverflow.com/a/10899795/604296
function addNumberSeparator(n, numberSeparatorSymbol) {
  return n.replace(/\B(?=(\d{2})+(?!\d))/g, numberSeparatorSymbol);
}
