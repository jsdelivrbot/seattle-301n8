var originalArray = [3, 4, 5, 1, 10];

var sorted = originalArray.sort(function(a, b) {
  return a - b;
});

console.log(originalArray);
console.log(sorted);
