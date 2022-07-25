const parentheticalPossibilities = (s = '') => {
    // todo
    const allPossibilities = [];
    if(s.length === 0) return [''];
      const {choices, remainder} =  getChoices(s);
      for(let choice of choices) {
        const remainderPossibilities = parentheticalPossibilities(remainder);
        for(let substring of remainderPossibilities){
            allPossibilities.push(choice + substring);
        }
      }
      return allPossibilities;
  };

  const getChoices = (s) => {
    if(s[0] === '(') {
       const end = s.indexOf(')');
       const choices = s.slice(1, end);
       const remainder = s.slice(end + 1);
       return {choices, remainder}
    } else {
        return {
            choices: s[0],
            remainder: s.slice(1)
        };
    }
  }

console.log(parentheticalPossibilities('x(mn)yz'));
parentheticalPossibilities('x(mn)yz');
