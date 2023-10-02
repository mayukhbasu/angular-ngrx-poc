const datesContainer = document.getElementById("dates");
const startDay = new Date(2023, 9, 1).getDay();  // 0 for Sunday, 1 for Monday, etc.
const daysInMonth = 31;  // October has 31 days

// Add leading empty cells for days before the 1st of the month
for (let i = 0; i < startDay; i++) {
    const emptySpan = document.createElement("span");
    datesContainer.appendChild(emptySpan);
}

// Populate the actual dates
for (let i = 1; i <= daysInMonth; i++) {
    const dateSpan = document.createElement("span");
    dateSpan.innerText = i;
    datesContainer.appendChild(dateSpan);
}
