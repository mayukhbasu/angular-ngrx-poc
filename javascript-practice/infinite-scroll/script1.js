const content = document.getElementById('content');
let loadMore = false;
const LoadMoreData = () => {
  if(loadMore) return;
  loadMore = true;
  setTimeout(() => {
    for(let i = 0; i < 10; i++) {
      const div = document.createElement('div');
      div.textContent = `This is ${Date.name} and i is ${i}`;
      content.appendChild(div);
    }
  }, 1000);
  loadMore = false
}

window.addEventListener('scroll', () => {
  if(document.documentElement.clientHeight + window.scrollY >= document.body.offsetHeight - 20) {
    LoadMoreData();
  }
})

LoadMoreData();