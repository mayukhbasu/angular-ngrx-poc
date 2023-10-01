document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.star');
  stars.forEach(star => star.addEventListener('click', setRating));
  function setRating(e) {
    let rating = e.currentTarget.dataset.rating;
    updateStars(rating);
  }
  function updateStars(rating) {
    stars.forEach(star => {
      star.classList.remove('active');
      if (star.dataset.rating <= rating) {
          star.classList.add('active');
      }
  });
  }
})