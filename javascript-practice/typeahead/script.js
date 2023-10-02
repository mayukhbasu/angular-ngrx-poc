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
  let filteredResult = data.filter(item => item.toLowerCase().startsWith(search.value.toLowerCase()));
  lists.innerHTML = '';
  if(search.value === '') {
    lists.style.display = 'none';
    return;
  }

  for(let result of filteredResult) {
    const div = document.createElement('div');
    div.textContent = result;
    div.addEventListener('click', () => {
      search.value = result;
      lists.style.display = 'none';
    });
    lists.appendChild(div);
  }
  lists.style.display = filteredResult.length > 0 ? 'block' : 'none';

}