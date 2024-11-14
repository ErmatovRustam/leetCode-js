var checkTwoChessboards = function(coordinate1, coordinate2) {
    let box1coorX = coordinate1.charCodeAt(0) - 96;
    let box1coorY = Number(coordinate1.charAt(1));
    let sumBox1 = box1coorX + box1coorY; 
    let box2coorX = coordinate2.charCodeAt(0) - 96;
    let box2coorY = Number(coordinate2.charAt(1));
    let sumBox2 = box2coorX + box2coorY;

    return ((sumBox1 % 2 === 0) === (sumBox2 % 2 === 0))
};
