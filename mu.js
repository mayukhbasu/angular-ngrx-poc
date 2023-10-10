const once = (fn) => {
  let called = false;
  let result;
  return (...args) => {
    if(!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  }
}
const logOnce = once((message) => {
  console.log(message);
  return message;
})

logOnce("hello");
logOnce("world");