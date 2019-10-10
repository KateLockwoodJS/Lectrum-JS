function f(a) {
  if (typeof a !== 'number' || a > 7 || a < 1){
   throw new Error('Error');
} 
else if (a == 1) return('Воскресенье');
else if (a == 2) return('Понедельник');
else if (a == 3) return('Вторник');
else if (a == 4) return('Среда');
else if (a == 5) return('Четверг');
else if (a == 6) return('Пятница');
else if (a == 7) return('Суббота');
}
console.log(f(6));
exports.f = f;
