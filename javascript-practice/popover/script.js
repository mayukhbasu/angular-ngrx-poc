document.getElementById('popoverButton').addEventListener('click', () => {
  const popup = document.getElementById('popover');
  popup.style.display = 'block';
});

// /closePopover
document.getElementById('closePopover').addEventListener('click', () => {
  const popup = document.getElementById('popover');
  popup.style.display = 'none';
});