function f(...args) {
let sum = 0;
for (let item of args) {
  if (typeof item === 'number'){
    sum += item;
  } else {
    throw new Error('Argument is not a number');
  }
}
  return sum;
}
console.log(f(1, 2, 3, 4, 5, 6));
exports.f = f;
