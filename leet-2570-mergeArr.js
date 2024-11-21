var mergeArrays = function(nums1, nums2) {
    let outArr = [];

    // Fillling the outArr with ind and its value from 1st arr
    for(let i = 0; i < nums1.length; i++){
        let ind = nums1[i][0] - 1
        let value = nums1[i][1]
        outArr[ind] = [ind + 1, value]
    }

    // Fillling the outArr with ind and its value from 1st arr
     for(let i = 0; i < nums2.length; i++){
        let ind = nums2[i][0] - 1
        let val2 = (outArr[ind]?.[1] || 0 ) + nums2[i][1]
        outArr[ind] = [ind + 1, val2]
    }


    // we trim the array by removing mid undefined values
    return outArr.filter(el => el !== undefined)
};
