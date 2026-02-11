// let arr = [1,2,3,4,5];

// arr.forEach(function(val){
//     val = val*2;
//     console.log(val);
// })

let age = parseInt(prompt("Enter your age: "));

if(age > 18 || age == 18){
    console.log("You are eligible to vote");
}
else if(age < 100 && age > 0 ){
    console.log("You are not eligible to vote");
}
else{
    console.log("Invalid age");
}