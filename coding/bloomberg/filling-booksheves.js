function minHeightShelves(books, shelfW) {
  const n = books.length;
  const dp = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    let minWidth = books[i - 1][0];
    let maxHeight = books[i - 1][1];
    dp[i] = dp[i - 1] + maxHeight;

    for (let j = i - 1; j > 0 && minWidth <= shelfW; j--) {
      minWidth += books[j - 1][0];
      maxHeight = Math.max(maxHeight, books[j - 1][1]);
      dp[i] = Math.min(dp[i], dp[j - 1] + maxHeight);
    }
  }

  return dp[n];
}

const books = [[1, 3], [2, 4], [3, 2]];
const shelf_width = 6;
console.log(minHeightShelves(books, shelf_width)); // Output: 6
