// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// var countBits = function(n) {
//   Program Me
// };

function countBits(int) {
  return int.toString(2).replace(/0/g, ``).split(``).length
}

console.log(countBits(465484))

// best practice solution below, like mine but without regex
// countBits = n => n.toString(2).split('0').join('').length;
