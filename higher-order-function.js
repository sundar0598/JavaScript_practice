//Write a higher order function which calculates area, circumference and diameter of a circle, when radii are given as array of values

const radius = [1,2,3,4];

// All individual calculations are written as separate functions and called as higher order function into the main function

//Function to calculate area
const area = function (radius) {

    return Math.PI*radius*radius;

}

//Function to calculate circumference

const circumference = function (radius) {

    return 2*Math.PI+radius;
}

//Function to calculate diameter

const diameter = function (radius) {

    return radius + radius;
}


//Write a common function to calculate all using a single logic

const calculate = function (radius,logic) {

    const answer = [];

    for (let i = 0; i< radius.length; i++) {
        
        answer.push (logic (radius[i]));

    }
    return answer;
}


console.log (calculate(radius,area));
console.log (calculate(radius, circumference));
console.log (calculate(radius, diameter));