function isPositive(a) {
  if (typeof a !== 'number'){
   throw new Error('Error');
} 
else if (a >= 0) return true;
else if (a < 0) return false;
}
console.log(isPositive(-3));
exports.isPositive = isPositive;
