function truncate(string, maxLength) {
  if (typeof string !== 'string' || typeof maxLength !== 'number') return 'Error message';
return string.substring(0, maxLength - 3) + '...';
}
truncate('Вот, что мне хотелось бы сказать на эту тему:', 21);
exports.truncate = truncate;
