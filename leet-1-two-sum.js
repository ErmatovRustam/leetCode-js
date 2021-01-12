var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j= 1; j< nums.length; j++){
            if(nums[i] + nums[j] === target && i !== j){
                return  [i, j];
            }
        }
    }
};

console.log(twoSum([1,2,3,4], 7))

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}


 * Example 1:
 Input: nums = [2,7,11,15], target = 9
 Output: [0,1]
 Output: Because nums[0] + nums[1] == 9, we return [0, 1].

 * Example 2:
 Input: nums = [3,2,4], target = 6
 Output: [1,2]
 Example 3:
 Input: nums = [3,3], target = 6
 Output: [0,1]

 * Constraints:
 2 <= nums.length <= 103
 -109 <= nums[i] <= 109
 -109 <= target <= 109

 */