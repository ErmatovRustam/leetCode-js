var intToRoman = function(num) {
    let outMsg = "";
    let n1000 = Math.floor(num / 1000);
    let n900 = Math.floor((num % 1000) / 900);
    let n500 = Math.floor((num - n1000 * 1000 - n900 * 900) / 500);
    let n400 = Math.floor((num - n1000 * 1000 - n900 * 900 - n500 * 500) / 400);    
    let n100 = Math.floor((num - n1000 * 1000 - n900 * 900 - n500 * 500 - n400 * 400) / 100);
    let n90 = Math.floor((num - n1000 * 1000 - n900 * 900 - n500 * 500 - n400 * 400 - n100 * 100) / 90);
    let n50 = Math.floor((num - n1000 * 1000 - n900 * 900 - n500 * 500 - n400 * 400 - n100 * 100 - n90 * 90) / 50);
    let n40 = Math.floor((num - n1000 * 1000 - n900 * 900 - n500 * 500 - n400 * 400 - n100 * 100 - n90 * 90 - n50 * 50) / 40);
    let n10 = Math.floor((num - n1000 * 1000 - n900 * 900 - n500 * 500 - n400 * 400 - n100 * 100 - n90 * 90 - n50 * 50 - n40 * 40) / 10);
    let n9 = Math.floor((num - n1000 * 1000 - n900 * 900 - n500 * 500 - n400 * 400 - n100 * 100 - n90 * 90 - n50 * 50 - n40 * 40 - n10 * 10) / 9);
    let n5 = Math.floor((num - n1000 * 1000 - n900 * 900 - n500 * 500 - n400 * 400 - n100 * 100 - n90 * 90 - n50 * 50 - n40 * 40 - n10 * 10 - n9 * 9) / 5);
    let n4 = Math.floor((num - n1000 * 1000 - n900 * 900 - n500 * 500 - n400 * 400 - n100 * 100 - n90 * 90 - n50 * 50 - n40 * 40 - n10 * 10 - n9 * 9 - n5 * 5) / 4);
    let n1 = Math.floor((num - n1000 * 1000 - n900 * 900 - n500 * 500 - n400 * 400 - n100 * 100 - n90 * 90 - n50 * 50 - n40 * 40 - n10 * 10 - n9 * 9 - n5 * 5 - n4 * 4));

    let r1 = "I";
    let r4 = "IV"
    let r5 = "V";
    let r9 = "IX"
    let r10 = "X";
    let r40 = "XL";
    let r50 = "L";
    let r90 = "XC"
    let r100 = "C";
    let r400 = "CD"
    let r500 = "D";
    let r900 = "CM"
    let r1000 = "M";
    
    

    console.log("$1000: " + n1000)
    console.log("$900: " + n900)
    console.log("$500: " + n500)
    console.log("$400: " + n400)
    console.log("$100: " + n100)
    console.log("$90: " + n90)
    console.log("$50: " + n50)
    console.log("$40: " + n40)
    console.log("$10: " + n10)
    console.log("$9: " + n9)
    console.log("$5: " + n5)
    console.log("$4: " + n4)
    console.log("$1: " + n1)

    outMsg += r1000.repeat(n1000) + r900.repeat(n900) + r500.repeat(n500) + r400.repeat(n400) + r100.repeat(n100) + r90.repeat(n90) + r50.repeat(n50) + r40.repeat(n40) + r10.repeat(n10) + r9.repeat(n9) + r5.repeat(n5) + r4.repeat(n4) + r1.repeat(n1);
    console.log(outMsg)
};
intToRoman(3749)
//MMMDCCXLIX