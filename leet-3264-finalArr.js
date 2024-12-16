var getFinalState = function(nums, k, multiplier) {
    let counter = 0;
    while(counter < k){
        let min = Math.min(...nums);
        let indMin = nums.indexOf(min);
        nums[indMin] = min * multiplier;
        counter++;
    }
    return nums
};

console.log(getFinalState([2,1,3,5,6], 5, 2))