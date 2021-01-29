var removeElement = function(nums, val) {
    for(let i =0; i < nums.length; i++){
        if(nums[i] === val){
            nums.splice(i, 1);
            i -= 1;
        }
    }
    return nums.length
};

console.log(removeElement([1,2,3,1,1,10,2], 2))

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2]
// Explanation: Your function should return length = 2, with the first two elements of nums being 2.
// It doesn't matter what you leave beyond the returned length. ' +
// 'For example if you return 2 ' +
// 'with nums = [2,2,3,3] or nums = [2,2,0,0], your answer will be accepted.
