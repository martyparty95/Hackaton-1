// easy

/**
 * Reverse an array
 *
 * @param {array} array the array to be reversed
 * @returns {array} a new reversed copy of the array
 */
const reverse = (array) => {
  const reversed = [];

  for (let index = array.length - 1; index >= 0; index--) {
    reversed.push(array[index]);
  }

  return reversed;
};

const fill = (array, value, start = 0, end = array.length) => {
  const array = [1, 2, 3];

const filled = utils.fill(array, 'a');
const filledInRange = utils.fill([4, 6, 8, 10], '*', 1, 3);

console.log(filled); // Output: ['a', 'a', 'a']
console.log(filledInRange); // Output: [4, '*', '*', 10]
console.log(array); // Output: [1, 2, 3] (original array is not changed)
const fill = (array, value, start = 0, end = array.length) => {
  const filledArray = [...array]; // Create a shallow copy of the original array to avoid modifying it directly

  for (let i = start; i < end; i++) {
    filledArray[i] = value;
  }

  return filledArray;
};

};

// medium

const join = (array, separator = ',') => {
  // TODO
};

const indexOf = (array, element) => {
  // TODO
};

// hard

const filter = (array, predicate) => {
  // TODO
};

const zip = (...arrays) => {
  // TODO
};

export { reverse, fill, join, indexOf, filter, zip };
