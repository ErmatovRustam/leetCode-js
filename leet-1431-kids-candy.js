var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies)
    return candies.map((el) => el + extraCandies >= max)
};

console.log(kidsWithCandies([4,2,1,1,2], 1))