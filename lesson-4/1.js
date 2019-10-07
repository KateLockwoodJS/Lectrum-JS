let dayOfMonth = 18;
const person = {
  salary: 1200,
}
function getSalary() {
  if(dayOfMonth >= 20 && dayOfMonth <= 31 && dayOfMonth>0){
    console.log ('good salary');
  } else {
    console.log ('bad salary');
  }
}
getSalary(person.salary);
exports.person = person;
