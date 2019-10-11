function f(arr) {
  if(!Array.isArray(arr)|| arr.length === 0) {
    throw new Error('Bad argument');
  }
let tmp = arr.splice(0, 1);
console.log(tmp[0]);
if (arr.lenght) {
  f(arr);
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

f(arr);
exports.f = f;
