
function generator(str)
{
	let ans = "";

	let tempCount = new Map(); // It is used to count integer sequence

	for ( i = 0; i < str.length + 1; i++)
	{
	
		// when current char is different from prev one we
		// clear the map and update the ans
		if (tempCount.has(str[i]) == false && i > 0) {
			let prev = tempCount.get(str[i - 1]);
			ans += prev.toString() + str[i - 1];
			tempCount.clear();
		}
		
		// when current char is same as prev one we increase
		// it's count value
		if(tempCount.has(str[i]) == false)
		tempCount.set(str[i],1);
		else
		tempCount.set(str[i],tempCount.get(str[i])+1);

	}

	return ans;
}

function countnndSay(n)
{
	let res = "1"; // res variable keep tracks of string
					// from 1 to n-1

	// For loop iterates for n-1 time and generate strings
	// in sequence "1" -> "11" -> "21" -> "1211"
	for (let i = 1; i < n; i++) {
		res = generator(res);
	}
    console.log(res);
	return res;
}

// driver code
let N = 5;
console.log(countnndSay(N));

