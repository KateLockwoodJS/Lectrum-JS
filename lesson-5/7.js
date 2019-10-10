function getDivisorsCnt(n){
  if (typeof n !== 'number' || n < 1){
   throw new Error('Error');
} 
       var divisors = [];
       mod = n;
       while (mod > 0){
         if(n % mod === 0){
           divisors.push(mod);
         }
         mod--;
       }
       return divisors;
}
console.log(getDivisorsCnt(12));
exports.getDivisorsCnt = getDivisorsCnt;
