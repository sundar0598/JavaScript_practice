function x () {
    var a=11;
    //value of a is not present in the local memory of function y and it is inherited from it's lexical parent memory ie., function x()
    function y () {
        console.log (a);
    }
    y();
}
x();