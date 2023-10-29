// function debounce(func, wait) {
//   let timeout;
//   return (...args) => {
//     const later = () => {
//       clearTimeout(timeout);
//       func(...args);
//     }
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//   }
// }

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    }
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
}

// Usage example:
const handleResize = () => {
  console.log('Window resized!');
};

const debouncedResize = debounce(handleResize, 300);

window.addEventListener('click', debouncedResize);
