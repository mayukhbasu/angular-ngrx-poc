// const { Subject } = require("rxjs");
// const subject = new Subject();
// subject.subscribe(data => {
//     console.log(data);
// });


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
const { ReplaySubject, BehaviorSubject, Subject } = require("rxjs");
const subject = new Subject();
subject.subscribe(data => {
    console.log(data);
});
subject.next(4);
subject.next(5);
subject.subscribe(data => {
    console.log(data);
});
// subject.next(6);
// subject.next(7);
// subject.subscribe(data => {
//     console.log(data);
// });