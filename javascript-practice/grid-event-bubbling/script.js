const searchInput = document.getElementById('search');
const gridContainer = document.getElementById('gridcontainer');
const gridItems = Array.from(gridContainer.children);

searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.toLowerCase();
  gridItems.forEach(item => {
    const itemText = item.innerText.toLowerCase();
    if(itemText.includes(searchText)) {
      item.style.display = ""
    } else {
      item.style.display = "none";
    }
  })
});

gridContainer.addEventListener('click', () => {
  if(event.target.classList.contains('grid-item')) {
    gridItems.forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
  }
})