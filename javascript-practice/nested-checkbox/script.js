const parentCheckboxes = document.querySelector('.parent');
const childCheckboxes = document.querySelectorAll('.child');

parentCheckboxes.addEventListener('click', () => {
  for(let child of childCheckboxes) {
    child.checked = parentCheckboxes.checked;
  }
});

for(let child of childCheckboxes) {
  child.addEventListener('click' , () => {
    if(Array.from(childCheckboxes).every(child => child.checked)) {
      parentCheckboxes.checked = true;
    } else if(Array.from(childCheckboxes).some(child  => !child.checked)) {
      parentCheckboxes.checked = false
    }
  })
  
}