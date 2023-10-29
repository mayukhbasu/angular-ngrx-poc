const delay = (fn, args, time) => {
  const timeoutId = setTimeout(() => {
    fn(...args);
  }, time);
  const cancelFn = () => {
    clearTimeout(timeoutId);
  }
  return cancelFn;
}

const sayHello = (name) => {
  console.log(name);
}

const delayedCall = delay(sayHello, ["Max"], 1000);
delayedCall();