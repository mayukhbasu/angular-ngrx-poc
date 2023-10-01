// function throttle(func, delay) {
//   let lastCalled = 0;
//   return function(...args) {
//     const now = Date.now();
//     if(now - lastCalled >= delay) {
//       func.apply(this, args);
//       lastCalled = now;
//     }
//   }
// }

// function handleScroll() {
//   console.log("Handle scroll");
// }

// const throttleScroll = throttle(handleScroll, 200);

// window.addEventListener('click', throttleScroll);

function handleClickThrottle(func, delay) {
  return (...args) => {
    let cancel = () => {
      clearImmediate
    }
  }
  // let lastCalledAt = 0;
  // return function(...args) {
  //   const now = Date.now();
  //   if(now - lastCalledAt >= delay) {
  //     func.apply(this, args);
  //     lastCalledAt = now;
  //   }
  // }
}

function clickThrottle() {
  console.log("Click event");
}

const clickEvent = handleClickThrottle(clickThrottle, 2000);
window.addEventListener('click', clickEvent);