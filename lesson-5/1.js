function f(num){
if (typeof num !== 'number') return 'Error message'
return (num * num * num);
}
console.log(f(2));
exports.f = f;
