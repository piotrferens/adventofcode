const input = require('./input')

const resultingFrequency = input.reduce((acc, val) => acc + val, 0)

const foundFrequencies = {
  0: 1
}

let sum = 0
let reachedTwice = 0

for (let i = 0; ; i++) {
  sum += input[i % input.length]
  if (foundFrequencies[sum]) {
    reachedTwice = sum
    foundFrequencies[sum] = 2
    break
  } else {
    foundFrequencies[sum] = 1
  }
}

console.log({ resultingFrequency, reachedTwice })
