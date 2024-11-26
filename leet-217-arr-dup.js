var containsDuplicate = function(nums) {
    
    // solution 1
    // return nums.filter((el, ind) => nums.indexOf(el) !== ind).length > 0

    
    // solution 2
    // let arr = [];
    // for(el of nums){
    //     arr[el] = (arr[el] || 0) + 1;
    //     if(arr[el] === 2) return true
    // }
    // return false

    // solution 3
    // nums.sort((a,b) => a-b)
    // for(let i =0; i < nums.length - 1; i++){
    //     if(nums[i] === nums[i+1]) return true
    // }

    // return false


    
    // solution 4
    let obj = {};
    for(let i = 0; i < nums.length; i++){
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
        if(obj[nums[i]] === 2) return true
    }
    return false

    
};
