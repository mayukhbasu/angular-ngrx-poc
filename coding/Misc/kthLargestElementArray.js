function findKthlargest(nums, k){
    if(nums.length === 1)return nums[0];
    let lo = 0;
    let hi = nums.length - 1;
    let targetIndex = nums.length - k;
    while( lo <= hi) {
        
    }
}

function partition(nums, lo, hi){
    let pivot = nums[hi];
    let index = lo;
    for(let i = lo; i < hi; i++){
        if(nums[i] < pivot){
            
        }
    }
}