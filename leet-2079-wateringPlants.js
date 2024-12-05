var wateringPlants = function(plants, capacity) {
    let steps = 0;
    let water = capacity;
    for(let i = 0; i < plants.length; i++){
        // watering
        if(water >= plants[i]){
            steps++;
            water -= plants[i]
            continue
        }else{
            // going back - refilling
            steps += i;
            water = capacity;
            // coming to continue watering
            steps += (i + 1);
            water -= plants[i]
        }
    }

    return steps
};

console.log(wateringPlants([7,7,7,7,7,7,7], 8))