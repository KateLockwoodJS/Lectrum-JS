function checkSpam(string, spam) {
  if ((typeof string || tupeof spam) !== 'string') return 'Error message';

const lowerCaseString = string.toLowerCase();
const lowerCaseSpam = spam.toLowerCase();

return lowerCaseString.includes(lowerCaseSpam);
}
checkSpam('pitterXXX@gmail.com', 'xxx');
checkSpam('pitterxxx@gmail.com', 'XXX'); 
exports.checkSpam = checkSpam;
