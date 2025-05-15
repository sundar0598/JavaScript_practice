function counter () {
    var count = 1;
    function increment(){
        count ++;
        console.log(count);
    }
    increment();
    //return increment;
}
counter();
/// When counter function is called, it gets executed and returns the value, in this case 2.

///By the below console statement, the JS engine will not be able to print the valuie of count as it is enclosed within the function counter or rather a closure is formed
/// which prevents the Global execution context will not be able to access the value of 'count' which promotes data encapsulation/data hiding.
//console.log(count);




///Below counter function when called, does not return anything back as it now currently hold only the code of 'increment' function.
/// To print the value of a, the outer as well as the inner function needs to be executed using the ... parenthesis ()()...., where each parenthesis
///denotes the execution of nested functions from outer to inner and fetches the value in it's lexical environment.
/// This is required when the inner most/ any level of function is returned as a value. Below example has nested functions in two levels - outer and inner.


//counter ()();

////Below console.log statement will not be able to print the value of a as it cannot access the reference of 'a' which is placed in the global scope
//console.log(a);