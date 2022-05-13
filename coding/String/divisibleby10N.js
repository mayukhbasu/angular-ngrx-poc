function digitsNum(N)
{
 
  // If N = 0 the string will be 0
  if (N == 0) console.log("0\n");

  // If n is not perfectly divisible
  // by 9 output the remainder
  if (N % 9 != 0) console.log(N % 9);

  // Print 9 N/9 times
  for (var i = 1; i <= N / 9; ++i) console.log("9");

  // Append N zero's to the number so
  // as to make it divisible by 10^N
  for (var i = 1; i <= N; ++i) console.log("0");

  console.log("\n");
}

// Driver Code

var N = 5;
console.log("The number is : ");
digitsNum(N);