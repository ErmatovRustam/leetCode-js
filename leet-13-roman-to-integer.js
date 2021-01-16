var romanToInt = function(s) {
    let romNums = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let nums = [1, 5, 10, 50, 100, 500, 1000];
    let total = nums[romNums.indexOf(s.charAt(s.length - 1))];;

    if(s.length === 1) return nums[romNums.indexOf(s)]

    for(let i = 0; i < s.length - 1; i++){
        if(nums[romNums.indexOf(s.charAt(i))] >= nums[romNums.indexOf(s.charAt(i + 1))]){
            total += (nums[romNums.indexOf(s.charAt(i))])
        }else{
            total += (-1 * nums[romNums.indexOf(s.charAt(i))])
        }
    }
    return total;
};