const content = document.getElementById('content');
let isLoading = false;

// Function to load more content
function loadMore() {
    if (isLoading) return;

    isLoading = true;

    // Simulate an API call with setTimeout
    setTimeout(() => {
        for (let i = 0; i < 10; i++) {
            const div = document.createElement('div');
            div.textContent = `New content ${Date.now()} ${i}`;
            content.appendChild(div);
        }
        isLoading = false;
    }, 1000); // simulate 1 second network delay
}

// Event listener for scroll
window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
        loadMore();
    }
});

// Load initial content
loadMore();
