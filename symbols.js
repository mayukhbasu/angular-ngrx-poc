// const sym1 = Symbol("cat");
// const sym2 = Symbol("cat");
// //console.log(sym1 === sym2);
// const idSym = Symbol('id');
// let user = {
//     id: 1,
//     name: "Mayukh",
//     [idSym]: "111"
// }

const { Content } = require("@angular/compiler/src/render3/r3_ast");



//console.log(Object.getOwnPropertySymbols(user));
// const sym1 = Symbol.for('cat');
// const sym2 = Symbol.for('cat');
// console.log(sym1 === sym2);
const RED = Symbol('red');
const BLUE = Symbol('blue');

function getLevel(color) {
    switch(color){
        case RED:
            return "Mayukh"
        case BLUE:
            return "Mayukh"
    }

}
console.log(getLevel(blue))

// 1. Change Detection
// 2. redux
// 3. View and Content
// 4. View Child/ContentChild
// 5. PWA/Microfrontend