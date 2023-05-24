const calculateBtn = document.getElementById('calculateage');
const output = document.getElementById('output');

calculateBtn.addEventListener('click', ageCalculator)
function ageCalculator() {
  let birthdate = document.getElementById('birthdate').value;
  let now = new Date();
  let year = now.getFullYear() - new Date(birthdate).getFullYear();
  let month = now.getMonth() - new Date(birthdate).getMonth();
  let day = now.getDate() - new Date(birthdate).getDate();

  if (day < 0) {
    month--;
    if (month === 2) {
      const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
      day += isLeapYear ? 29 : 28;
    } else if ([4, 6, 9, 11].includes(month)) {
      day += 30;
    } else {
      day += 31;
    }
  }

  if (month < 0) {
    month += 12;
    year--;
  }

  output.innerText = `Your age is ${year} years ${month} months ${day} days`;
	
};