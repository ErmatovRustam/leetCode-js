var missingNumber = function(nums) {
    let max = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > max) max  = nums[i]
    }

    console.log("max: " + max)
    for(let j = 0; j < max; j++){
        if(!nums.includes(j)) return j
    }

    return max + 1;
};
