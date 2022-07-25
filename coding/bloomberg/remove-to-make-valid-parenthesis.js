var minRemoveToMakeValid = function (s = '') {
    const stack = s.split('');
    let count = 0;
    for(let i = 0; i < stack.length ; i++) {
       if(stack[i] === '(') {
            count++;
       } else if(stack[i] === ')') {
            if(count < 1) {
                stack.splice(i, 1);
                i--;
            } else {
                count--;
            }
       }
    }
    while(count > 0){
        let index = stack.lastIndexOf('(');
        stack.splice(index , 1);
        count--;
    }
    return stack.join('')
//     const sArr = s.split('')
//    let stack=0
//    for(let i=0;i<sArr.length;i++) {
//        if (sArr[i]=='(') {
//            stack++
//        }else if (sArr[i]==')') {
//            if (stack<1) {
//                sArr.splice(i, 1)
//                i--
//            }else{
//                stack--
//            }
//        }
//    }
//    while(stack>0) {
//        let i = sArr.lastIndexOf('(')
//        sArr.splice(i,1)
//        stack--
//    }
//    return sArr.join('')
};

const s = "a)b(c))(d";
console.log(minRemoveToMakeValid(s));