function submitVote() {
  const choices = document.getElementsByName('fruit');
  let selectedValue;
  
  for (const choice of choices) {
      if (choice.checked) {
          selectedValue = choice.value;
          break;
      }
  }

  if (selectedValue) {
      document.getElementById('pollForm').style.display = 'none';
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `Thank you for voting! You chose ${selectedValue}.`;
      resultDiv.classList.remove('hidden');
  } else {
      alert('Please select an option before voting.');
  }
}
