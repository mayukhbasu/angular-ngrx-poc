// const stars = document.querySelectorAll('.star');
// stars.forEach(star => star.addEventListener('click', (event) => {
//   const rating = event.currentTarget.dataset.rating;
//   stars.forEach(starupdate => {
//     starupdate.classList.remove('active');
//     if(starupdate.dataset.rating <= rating) {
//       starupdate.classList.add('active');
//     }
//   })
// }))

const stars = document.querySelectorAll('.star');

stars.forEach(star => {
  star.addEventListener('click', (event) => {
    const rating = event.currentTarget.dataset.rating;
    stars.forEach(s => {
      s.classList.remove('active');
      if(s.dataset.rating <= rating) {
        s.classList.add('active');
      }
    })
  })
})