/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let outArr = [];
    let temp = [];
    let counter = 1;
    for(let i = 0; i < arr.length; i++){
        temp.push(arr[i])
        if((i + 1) % size === 0){
            outArr.push(temp);
            temp = [];
        }
    }

    if(arr.length % size !== 0){
        let tail = arr.slice(arr.length - (arr.length % size));
        outArr.push(tail)
    }

    return outArr
};
