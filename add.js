let a = prompt ("Enter the first number: " );
let b = prompt ("Enter the second number: ");

if (a !== null && a !== "" && b !== null && b !==""){
    a=parseInt(a);
    b=parseInt(b);

    if (!isNaN(a) && !isNaN(b)){
        let sum = a+b;
        alert ("The sum is " + sum);
    }

    else{
        alert ("Please input numbers only!");
    }
}

else {
    alert ("Invalid values entered")
}