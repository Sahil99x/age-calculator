const calculateBtn = document.getElementById('calculate');
const output = document.getElementById('output');

calculateBtn.addEventListener('click', () => {
  const birthdate = document.getElementById('birthdate').value;
  const now = new Date();
  const year = now.getFullYear() - new Date(birthdate).getFullYear();
	const month = now.getMonth() - new Date(birthdate).getMonth();
	const day = now.getDate() - new Date(birthdate).getDate();

	if(month<0){
		year--;
		month+=12;
	
	}
	if(day<0){
		month--;
		if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
			day+=31;
		}else if(month === 4 || month === 6 || month === 9 || month === 11){
			day+=30;
		
		}else{
			if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
				day+=29;
			
			}else{
				day+=28;
			}
		}
	}
}
 output.textContent = `Your age is ${age} years ${month} months ${day} days`