function a() {
    var z=1;
    //the timeout function will display the vaule of z after 5000 ms
    setTimeout(function (){
        console.log(z);
    }, 5000);
    //Below string gets printed first as it is not within the timeout function, and function a() gets called first
    console.log("Hey there")
}
a();