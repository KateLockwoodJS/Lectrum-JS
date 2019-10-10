function isEven(a) {
  if (typeof a !== 'number'){
   throw new Error('Error');
} 
else if (a % 2 == 0) return true;
else return false;
}
console.log(isEven(7));
exports.isEven = isEven;
