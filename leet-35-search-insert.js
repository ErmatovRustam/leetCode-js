var searchInsert = function(nums, target) {
let output =  nums.indexOf(target);
if(output === -1){
    for(let i = 0; i< nums.length; i++){
        if(nums[i] >= target)return i;
    }
}
if(output === -1 ) output = nums.length;
return output
};

console.log(searchInsert([1,3,5,6], 7))