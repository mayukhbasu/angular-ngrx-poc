	// Javascript program to count distinct strings with
	// even odd swapping allowed

	let MAX_CHAR = 26;

	function encodeString(str) {
		// hashEven stores the count of even indexed character
		// for each string hashOdd stores the count of odd
		// indexed characters for each string
		let hashEven = Array(MAX_CHAR).fill(0);
		let hashOdd = Array(MAX_CHAR).fill(0);

		// creating hash for each string
		for (let i = 0; i < str.length; i++) {
			let c = str[i];
			if ((i & 1) != 0) // If index of current character is odd
				hashOdd[c.charCodeAt() - 'a'.charCodeAt()]++;
			else
				hashEven[c.charCodeAt() - 'a'.charCodeAt()]++;

		}


		// For every character from 'a' to 'z', we store its
		// count at even position followed by a separator,
		// followed by count at odd position.
		let encoding = "";
		for (let i = 0; i < MAX_CHAR; i++) {
			encoding += (hashEven[i]);
			encoding += ('-');
			encoding += (hashOdd[i]);
			encoding += ('-');
		}
		return encoding;
	}

	// This function basically uses a hashing based set to
	// store strings which are distinct according
	// to criteria given in question.
	function countDistinct(input, n) {
		let countDist = 0; // Initialize result

		// Create an empty set and store all distinct
		// strings in it.
		let s = new Set();
		for (let i = 0; i < n; i++) {
			// If this encoding appears first time, increment
			// count of distinct encodings.
			if (!s.has(encodeString(input[i].split('')))) {
				s.add(encodeString(input[i].split('')));
				countDist++;
			}
		}

		return countDist;
	}

// Driver program

		let input = ["abcd", "acbd", "adcb", "cdba",
				"bcda", "badc"];
		let n = input.length;
        countDistinct(input, n)
		console.log(countDistinct(input, n));


