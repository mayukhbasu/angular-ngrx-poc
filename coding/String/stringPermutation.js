function permute(s , answer)
{ 
    if(s.length === 0) console.log(answer);
    for(let i = 0; i < s.length; i++){
        let ch = s[i];
        let left = s.slice(0,i);
        let right = s.slice(i+ 1);
        let total = left + right;
        permute(total, answer + ch);
    }
}
 
    // Driver Cod"e
    let s= "abc";
    let answer="";
      
    console.log("Enter the string  : ");
      
    console.log("\nAll possible string are : ");
    permute(s, answer);