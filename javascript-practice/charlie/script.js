const data = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Iced fruit",
  "Jackfruit"
];

const filterOptions = () => {
  const search = document.getElementById('search');
  const lists = document.getElementById('lists');
  const filteredResults = data.filter(fruit => fruit.toLowerCase().startsWith(search.value.toLowerCase()));
  lists.innerHTML = '';
  if(search.value.trim() === '') {
    lists.style.display = 'none';
    return;
  }
  for(let result of filteredResults) {
    const div = document.createElement('div');
    div.textContent = result;
    div.addEventListener('click', () => {
      search.value = result;
      lists.style.display = 'none';
    });
    lists.appendChild(div);
  }
  lists.style.display = filteredResults.length > 0 ? 'block': 'none'
}

