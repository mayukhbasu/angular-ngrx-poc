const postsContainer = document.getElementById('post-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');
let limit = 5;
let page = 1;

async function getPosts(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    const data = await res.json();
    return data;
}

async function showPosts(){
    const posts = await getPosts();
    posts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.classList.add('post');
        postEl.innerHTML = `
        
        <div class="number">${post.id}</div>
        <div class="post-info">
            <h2 class="post-title">${post.title}</h2>
            <div class="post-body">
                ${post.body}
            </div>
        </div>
    
        `
        postsContainer.appendChild(postEl);
    })
}

showPosts();
window.addEventListener('scroll', () => {
    
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    console.log(clientHeight);
    if(scrollTop + clientHeight >= scrollHeight - 5){
        showLoading();
        setTimeout(() => {
            loading.classList.remove('show');
            setTimeout(() => {
                page ++;
                showPosts();
            }, 300)
        }, 1000)
    }
})

function showLoading(){
    
    loading.classList.add('show');
}