// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

const testArrayOne = [1, 2, 2, 3]
const testArrayTwo = [2, 4]
const testArrayThree = []

function arrayDiff(arrayOne, arrayTwo) {
  let returnArray = arrayOne
  for (let i = 0; i < arrayTwo.length; i++) {
    if (returnArray.includes(arrayTwo[i])) {
      returnArray.splice(returnArray.indexOf(arrayTwo[i]), 1)
    }
  }
  return returnArray
}
