var findDifference = function(nums1, nums2) {
    let firstArr = nums1.filter((el) => !nums2.includes(el))
    let secondArr = nums2.filter((el) => !nums1.includes(el))
    firstArr = firstArr.filter((el, ind) => ind === firstArr.indexOf(el))
    secondArr = secondArr.filter((el, ind) => ind === secondArr.indexOf(el))
    

    return [firstArr, secondArr]
};