document.getElementById('pollForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const radios = document.querySelectorAll('input[name="framework"]');
    let selectedFramework = '';
    radios.forEach((radio) => {
        if (radio.checked) {
            selectedFramework = radio.value;
        }
    });

    if (selectedFramework) {
        document.getElementById('pollResult').textContent = `You selected: ${selectedFramework}`;
    } else {
        document.getElementById('pollResult').textContent = 'Please select an option.';
    }
});
