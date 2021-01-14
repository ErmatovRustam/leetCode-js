var countPrimes = function(n) {
    let sumPrimes = 1;
    let sumNotPrimes = 0;
    if(n <= 2) return 0;
    for(let i = 3; i < n; i+= 2){
        for(let j = 3; j <= Math.sqrt(n); j+= 2){
            if(i % j === 0){
                sumNotPrimes++;
                continue;
            }
        }
        if(sumNotPrimes===0) sumPrimes++;
        sumNotPrimes = 0;
    }
    return sumPrimes
};

countPrimes(25)