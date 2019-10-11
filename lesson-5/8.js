function f(arr) {
  if(!Array.isArray(arr)|| arr.length === 0) {
    throw new Error('Bad argument');
  }
let tmp = arr.splice(0, 1);
console.log(tmp[0]);
if (arr.length) {
  f(arr);
  }
}
let arr = [1, 2, 3];

f(arr);
exports.f = f;
