function PredictTheWinner(nums) {
    const n = nums.length;
    const dp = Array.from({ length: n }, () => new Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        dp[i][i] = nums[i];
    }
    console.log(dp)

    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
        }
    }

    return dp[0][n - 1] >= 0;
}

// Example usage:
const nums = [1, 5, 2, 4, 5];
console.log(PredictTheWinner(nums));  // Expected output: false

// Time complexity: O(n ^ 2)
// Space Complexity: O(n ^ 2)
