const toggle = (header) => {
  const content = header.nextElementSibling;
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
  const accordions = document.getElementsByClassName('accordion-content');
  for(let acc of accordions) {
    if(acc !== content) {
      acc.style.display = 'none';
    }
  }
}