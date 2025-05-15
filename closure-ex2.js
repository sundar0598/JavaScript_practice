function counter(){
    var count =0;
    return function increment(){
        count ++;
        console.log(count);
    }

}
var count1 = counter();

count1();
count1();

