function jump(nums) {
    if (nums.length <= 1) return 0;

    let currentJumpEnd = 0, farthest = 0, jumps = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);

        // When we reach the end of our current jump, we increase our jump count
        if (i === currentJumpEnd) {
            jumps++;
            currentJumpEnd = farthest;

            // If our farthest reach is beyond or equal to the last index, we have our answer
            if (farthest >= nums.length - 1) {
                break;
            }
        }
    }

    return currentJumpEnd >= nums.length - 1 ? jumps : -1; // If we can't reach the end, return -1
}

// Example:
const nums = [2, 3, 1, 1, 4];
console.log(jump(nums)); // Outputs: 2 (Jump from 2 to 3 and then from 3 to 4)
