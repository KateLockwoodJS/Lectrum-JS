let testArray = ['a', 'b', 'c', 'd'];

function testFunction(element, index, arraRef) {
  console.log(`${index}:`, element, arraRef);
}

function forEach(arr, callback) {
  if(!Array.isArray(arr) || typeof callback !== 'function') {
    throw new Error('Bad arguments')
  }
  for (let index = 0; index < arr.length; index++) {
    callback(arr[index], index, arr)
  }
}

forEach(testArray, testFunction);
exports.forEach = forEach;
