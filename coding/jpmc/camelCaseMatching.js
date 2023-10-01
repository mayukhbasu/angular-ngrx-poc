function camelMatch(queries, pattern) {
    const result = [];

    for (let query of queries) {
        result.push(isMatch(query, pattern));
    }

    return result;
}

function isMatch(query, pattern) {
    let i = 0;

    for (let char of query) {
        // If the current character matches the pattern's character, move the pointer in pattern
        if (i < pattern.length && char === pattern[i]) {
            i++;
        } else if (char < 'a' || char > 'z') {
            // If it's an uppercase and it doesn't match the pattern, return false
            return false;
        }
    }

    return i === pattern.length;
}

// Test
const queries = ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"];
const pattern = "FB";
console.log(camelMatch(queries, pattern));  // Expected: [true, false, true, true, false]
