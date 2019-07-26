/**
 * Custom function to pass to text-mask module to create my own number format
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
