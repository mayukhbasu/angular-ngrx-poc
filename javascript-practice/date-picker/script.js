const datesContainer = document.getElementById('dates');
const startDay = new Date(2023, 9, 1).getDay();
const daysInMonth = 31;

for(let i = 0; i < startDay; i++) {
  const emptySpan = document.createElement('span');
  datesContainer.appendChild(emptySpan);
}

for(let i = 1; i <= daysInMonth; i++) {
  const dateSpan = document.createElement('span');
  dateSpan.textContent = i;
  datesContainer.appendChild(dateSpan);
}