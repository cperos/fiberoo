function fib() {
  const fib0 = 0;
  const fib1 = 1;
  const arr = [];
  arr[0] = fib0;
  arr[1] = fib1;
  for (let i = 2; i < 50; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

console.log(fib());

const arr = [1, 4, 5, 6];

function numsToStrings(arr1) {
  return _.map(arr1, function (num) { return num.toString(); });
}

console.log(numsToStrings(arr));

function numEvenNums(arr2) {
  const evens = _.filter(arr2, function (num) { return num % 2 === 0; });
  return evens.length;
}

console.log(numEvenNums(arr));
