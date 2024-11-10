var differenceOfSum = function(nums) {
    let sum1 = 0;
    let sum2 = 0;

    for(let i = 0; i < nums.length; i++ ){
        sum1 += nums[i];
    }

    sum2 = nums.join("").split("").reduce((acc, el) => acc += Number(el), 0);

    return Math.abs(sum1 - sum2)
};