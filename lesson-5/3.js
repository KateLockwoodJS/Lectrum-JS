function f(a, b, c) {
  if (typeof a !== 'number' || b !== 'number' || c !== 'number'){
   throw new Error('Argument is not a number');
} 
else {
   return ((a - b) / c);
  }
}
console.log(f(9, 2, 1));
exports.f = f;
