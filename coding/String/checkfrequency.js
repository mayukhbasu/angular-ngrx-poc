
function isValidString(str)
{
    let CHARS = 26;
	let freq = new Array(CHARS).fill(0);
	

		// freq[] : stores the frequency of each
		// character of a string
		for (let i = 0; i < str.length; i++) {
			freq[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
		}

		// Find first character with non-zero frequency
		let i, freq1 = 0, count_freq1 = 0;
		for (i = 0; i < CHARS; i++) {
			if (freq[i] != 0) {
				freq1 = freq[i];
				count_freq1 = 1;
				break;
			}
		}

		// Find a character with frequency different
		// from freq1.
		let j, freq2 = 0, count_freq2 = 0;
		for (j = i + 1; j < CHARS; j++) {
			if (freq[j] != 0) {
				if (freq[j] == freq1) {
					count_freq1++;
				} else {
					count_freq2 = 1;
					freq2 = freq[j];
					break;
				}
			}
		}

		// If we find a third non-zero frequency
		// or count of both frequencies become more
		// than 1, then return false
		for (let k = j + 1; k < CHARS; k++) {
			if (freq[k] != 0) {
				if (freq[k] == freq1) {
					count_freq1++;
				}
				if (freq[k] == freq2) {
					count_freq2++;
				} else // If we find a third non-zero freq
				{
					return false;
				}
			}

			// If counts of both frequencies is more than 1
			if (count_freq1 > 1 && count_freq2 > 1) {
				return false;
			}
		}

		// Return true if we reach here
		return true;
}

// Driver code
let str = "abcbc";
isValidString(str)
		if (isValidString(str)) {
			console.log("YES");
		} else {
			console.log("NO");
		}

// This code is contributed by ab2127

