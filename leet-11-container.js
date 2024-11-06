var maxArea = function(height) {
    let maxVol = 0;
    let lSideInd = 0;
    let rSideInd = height.length - 1;
    // console.log('leftInd ' + lSideInd)
    // console.log('rightInd ' + rSideInd)
    
    while(lSideInd !== rSideInd){
        let width = rSideInd - lSideInd;
        let minHeight = Math.min(height[lSideInd], height[rSideInd]);
        let currVol = width * minHeight;
        if(maxVol < currVol ) maxVol = currVol;
        if(height[rSideInd] >= height[lSideInd]){
            lSideInd++;
        }else{
            rSideInd--;
        }

        // console.log("maxVol: " + maxVol)
        // console.log("currVol: " + currVol)
        // console.log("leftInd: " + lSideInd)
        // console.log("rightInd: " + rSideInd)
        // console.log("minHeight: " + minHeight)
    }
    return maxVol;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))