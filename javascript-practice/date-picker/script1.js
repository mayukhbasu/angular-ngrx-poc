const dateContainer = document.getElementById('dates');
const startDay = new Date(2023, 9, 1).getDay();
const numberOfDays = 31;
for(let i = 0; i < startDay; i++) {
  const emptyDaysInCalender = document.createElement('span');
  dateContainer.appendChild(emptyDaysInCalender);
}

for(let i = 1; i <= numberOfDays; i++) {
  const dateForMonth = document.createElement('span');
  dateForMonth.textContent = i;
  dateContainer.appendChild(dateForMonth);
}