var shortestDistance = function(wordsDict, word1, word2) {
    let dis = wordsDict.length - 1;
    let upperDis = wordsDict.length - 1;
    let lowerDis = wordsDict.length - 1;

    for(let i = 0; i < wordsDict.length; i++){
        if(wordsDict[i] === word1){
            //upper loop
            for(let up = i + 1; up < wordsDict.length; up++){
                if(wordsDict[up] === word2){
                    upperDis = up - i
                    dis = Math.min(lowerDis, upperDis) < dis ? Math.min(lowerDis, upperDis) : dis
                }
            }

            //lower loop
            for(let low = i - 1; low >= 0; low--){
                if(wordsDict[low] === word2){
                    lowerDis = i - low
                    dis = Math.min(lowerDis, upperDis) < dis ? Math.min(lowerDis, upperDis) : dis
                }
            }

            
        }
    }

    return dis
};


console.log(shortestDistance(["a", "c", "a", "b"], 'b', 'a'))
