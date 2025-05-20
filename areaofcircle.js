//Given an array which has radius of 4 circles in an array, calculate the area of the circles and stack them into an array and display it.


//Radius of the circle is stored in an array radius
const radius = [2,4,6,8];

// Declare a variable area, attach a function to it to calculate the area of the circles, by iterating the radius values from the array


const area = function (radius){

    //Declare an empty array 'answer' to store the areas of each circle whose radius are given in the previous array.
    const answer = [];
 for (let i=0; i< radius.length; i++) {

    //Push the calculated areas into the 'answer' array and calculate the area using Math property available in Java Script
    answer.push(Math.PI * radius[i]* radius [i]);
 }

 return answer;

} 

// Call the function area with the radius array passed as a parameter
console.log (area(radius));