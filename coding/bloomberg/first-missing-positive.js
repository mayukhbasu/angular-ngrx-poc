const firstMissingPositive = (nums) => {
    const n = nums.length;
  
    // Step 1: Separate positive and non-positive numbers
    let posCount = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            [nums[i], nums[posCount]] = [nums[posCount], nums[i]];
            posCount++;
        }
    }
    
    // Step 2: Mark the numbers as visited using their indices
    for (let i = 0; i < posCount; i++) {
        let num = Math.abs(nums[i]);
        if (num <= posCount) {
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }
    
    // Step 3: Find the first index that isn't marked
    for (let i = 0; i < posCount; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }
    
    return posCount + 1;
}

// Test
const arr = [3, 4, -1, 1];
console.log(firstMissingPositive(arr)); // Output: 2
