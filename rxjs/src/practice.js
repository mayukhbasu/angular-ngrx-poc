// const { Subject } = require("rxjs");
// const subject = new Subject();
// subject.subscribe(data => {
//     console.log(data);
// });

const { Observable } = require("rxjs");


// subject.subscribe(data => {
//     console.log(data);
// });
// subject.next(1);
// subject.next(2);
// subject.next(3);
// --------behaviorSubject---------

// const { BehaviorSubject } = require("rxjs");
// const subject = new BehaviorSubject(0);
// subject.subscribe(data => {
//     console.log(data);
// });
// subject.next(1);
// subject.next(2);
// subject.next(3);


// subject.next(4);
// subject.next(5);
// subject.subscribe(data => {
//     console.log(data);
// });
// subject.subscribe(data => {
//     console.log(data);
// });
// -------ReplaySubject--------
// const { ReplaySubject, BehaviorSubject, Subject } = require("rxjs");
// const subject = new Subject();
// subject.subscribe(data => {
//     console.log(data);
// });
// subject.next(4);
// subject.next(5);
// subject.subscribe(data => {
//     console.log(data);
// });
// subject.next(6);
// subject.next(7);
// subject.subscribe(data => {
//     console.log(data);
// });

// ----Multicast-------
// import { from, Subject } from 'rxjs';
// import { multicast } from 'rxjs/operators';
 
// const source = from([1, 2, 3]);
// const subject = new Subject();
// const multicasted = source.pipe(multicast(subject));
 
// // These are, under the hood, `subject.subscribe({...})`:
// multicasted.subscribe({
//   next: (v) => console.log(`observerA: ${v}`)
// });
// multicasted.subscribe({
//   next: (v) => console.log(`observerB: ${v}`)
// });
 
// // This is, under the hood, `source.subscribe(subject)`:
// multicasted.connect();

// -------Hot and cold observables-------
// import * as Rx from "rxjs";

// const random = Math.random();
// const observable = Rx.Observable.create((observer) => {
//     observer.next(random);
// });

// // subscription 1
// observable.subscribe((data) => {
//   console.log(data); 
// });

// // subscription 2
// observable.subscribe((data) => {
//    console.log(data); 
// });
let num = Math.random();
const observable = new Observable((observer) => {
    observer.next(num);
})

observable.subscribe(data => {
    console.log(data);
})

observable.subscribe(data => {
    console.log(data);
})


