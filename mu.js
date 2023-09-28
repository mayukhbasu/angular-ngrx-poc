const delayedCall = (fn, args, duration) => {
  
}

const sayHello = (name) => {
  console.log(`Hello ${name}`);
}


const cancel = delayedCall(sayHello, ['Mayukh'], 1000);
//cancel();