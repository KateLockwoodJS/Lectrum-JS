function upperCaseFirst(argument) {
if (typeof argument !== 'string') return 'Argument is not a string';
    return argument.charAt(0).toUpperCase() + argument.slice(1);
}
upperCaseFirst('pitter');
upperCaseFirst('');
exports.upperCaseFirst = upperCaseFirst;
