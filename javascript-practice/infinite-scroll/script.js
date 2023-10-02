const content = document.getElementById('content');
let loadMore = false;
const LoadMoreData = () => {
  if(loadMore) return;
  loadMore = true;
  setTimeout(() => {
    for(let i = 0; i < 10; i++) {
      const div = document.createElement('div');
      div.textContent = `Hello today is ${Date.now()} and i is ${i}`;
      content.appendChild(div);
    }
    loadMore = false
  }, 1000)
}

window.addEventListener('scroll', () => {
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {
    LoadMoreData();
  }
});

LoadMoreData();