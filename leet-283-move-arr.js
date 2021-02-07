var moveZeroes = function(nums) {
    let ind = 0;
    for(let i = 0; i< nums.length; i++){
        let num = nums[i];
        if(num !== 0){
            nums[ind] = num;
            ind++;
        }
    }
    for(let j = ind; j < nums.length; j++){
        nums[j]= 0;
    }
    return nums
};

console.log(moveZeroes([0, 0, 1]))
//
//
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]