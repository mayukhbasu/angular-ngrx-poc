const intersection = (l1 = [], l2 = []) => {
  l1.sort((a, b) => a - b) 
  l2.sort((a, b) => a - b) 
  const intersections = []
  let l = 0, r = 0;
  while ((l2[l] && l1[r])) {
     const left = l1[r], right = l2[l];
      if (right === left) {
          intersections.push(right)
          while (left === l1[r]) r++;
          while (right === l2[l]) l++;
          continue;
      }
      if (right > left) while (left === l1[r]) r++;
       else while (right === l2[l]) l++;
      
  }
  return intersections;

}

const nums1 = [4,4,9,5]; 
const nums2 = [9,4,9,8,4];
console.log(intersection(nums1, nums2));