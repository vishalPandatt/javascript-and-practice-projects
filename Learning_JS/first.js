// let num = prompt("Enter any Number = ");
// if(num % 2 == 0){
//     console.log(num, "Number is even")
// }
// else{
//     console.log(num, "Number is odd")
// }
// console.log(numm);

// let mode =prompt("Enter mode dark or light = ");
// let color;
// if(mode == "dark"){
//     color = "black";
// }else if(mode == "light"){
//     color="white";
// }else{
//     color= "Enter valid color";
// }
// console.log(color);

// let age = prompt("enter age = ");
// let result = age >18 ? "adult" : "not adult";
// console.log(result);

// let num=prompt("enter any num = ");
// if(num /5 === 0){
//     console.log(num ,"is divided by 5 ") 
// }else{
//     console.log(num,"is not divided by 5 ")
// }

// let score = prompt("Enter number of student = ");
// if(score >=90 && score <= 100 ){
//     console.log("Grade A");
// }else if(score >=70 && score <= 89){
//     console.log("Grade B");
// }else if(score >=60 && score <= 69){
//     console.log("Grade C");
// }else if (score >=50 && score <= 59){
//     console.log("Grade D");
// }else if(score >=0 && score <= 49){
//     console.log("Grade F");
// }else{
//     console.log("Enter valid number");
// }

// for (let i =1; i<=5; i++){
//     console.log(i);
// }

// let sum = 0; 
// let  n= prompt("Enter what you want to add : ");
// for(let i=1; i<=n; i++){
//     sum = sum+i;
// }
// console.log(sum);

// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let i = prompt("Enter any num = ");
// i=parseInt(i);
// for (let j=i; j<=i*10; j=j+i){
//     console.log(j);
// }                                                                //nasted for loop

// for(let i=1; i<=3; i++){
//     console.log("Hello World \n",i);
//     for(let j=1; j<=3; j++){
//         console.log("Hello India ",j);}
// }

// const a = 5;
// const b = 10;
// console.log(`Fifteen is ${a + b} and
// not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."                                                   // while loop

// let i = 1;
// while(i<=5){
//     console.log("Hello World",i);
//     i++;
// }                                                         //password matching game with while loop

// let password = "vishal@123";
// let userInput = prompt("Enter your password: ");
// while(userInput != password){
//     userInput = prompt("Wrong Password! Enter again: ");
// }
// if(userInput == password){
//     console.log("Password is Match");
// }                                                        Arry with for of loop

// let arr = [1,2,3,4,5];
// for(let i=0; i<arr.length; i++){
//     console.log(i," = ", arr[i]);
// }


//                                                           //do while loop

// let i = 1;
// do{
//     console.log("Hello World",i);
//     i++;
// }while(i<=5);


// let str = "vishal";
// for(let i of str){
//     console.log("i = ",i);
// }

// let student ={
//     name: "Vishal",
//     age: 20,
//     cgpa: 8.2,
// };8
// for(let i in student){
//     console.log(i, " = ", student[i]);
// }

// let a=0;
// for(let i =1; i<=100; i++){
//     if(i%2 !=0){
//         console.log(i);    
//     }else{
//     // console.log(i);
//     }
// }


// let a =prompt("enter any num");
// let gameNum = 15;
// while(a!=gameNum){
//     a=prompt("Wrong Num! Enter again");    
// }
// console.log("Number is Match");

// let str = {
//     name: "vishal vasishth",
//     age: 20,
// };
// const message = `Hello, ${str.name}!`; // Correct
// const output = `age, ${str.age}`;
// console.log(message,output);
                                                    //string methods
// let str = "     hello  vishal vashishth          ";
// console.log(str.toUpperCase());
// console.log(str.trim());
// str1 = "74568946510";
// console.log(str1.slice(0,5));
// console.log(str.concat(str1));
// console.log(str.replace("vashishth", "Pandit"));
// console.log(str.charAt("15"));
// console.log(str.indexOf("Vashishth"))


// let name = prompt("enter your name");
// userName ="@" + name + name.length;
// console.log(userName);
// console.log("@", + name , name.length());

                                                            //if else Statement
// let size = prompt("Enter Your size between XL, M, S, L: ");
// if(size == "XL"){
//     console.log("For Xl charge will be 250Rs. ");
// }else if(size == "L"){
//      console.log("For L charge will be 200Rs. ");
// }else if(size == "M"){
//      console.log("For M charge will be 150Rs. ");
// }else if(size == "S"){
//      console.log("For S charge will be 100Rs. ");
// }else{
//      console.log("enter Valid value!");
// }
                                                    ///switch Statement
// let color = prompt("Emter light Color");
// switch(color){
//     case "red":
//          console.log("Stop");
//          break;
//     case "yellow":
//         console.log("Start for Go");
//         break;
//     case "Green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Broken Light");
//         break;
// }

// alert("Hello welcome");
// console.error("Something is wrong!")

// let num = prompt("Enter any num");
// if(num %10 ==0){
//     console.log("Good");
// }else{
//     console.log("Bad");
// }

// let name = prompt("ENter your name:");
// let age = prompt("Enter your Age : ");
// console.warn("Name is :", name, "your Age is =", age );

// let student = [
//     "vishal","prashant","prachi"
// ];                                                                   // array
// student[0] = 'R';
// student.push("Vashishth");
// student.pop();
// student.unshift("Sharma ji");
// student.shift();

// let months = ["janurary", "feburary", "april","may"];
// let months1 = ["june", "July", "August"];
// months.shift();
// months.shift();
// months.unshift("march");
// months.unshift("feburary");
// months.indexOf("may");
// let allmonths = months.concat(months1);
// allmonths.reverse();
// allmonths.slice(1,4);
// allmonths.splice(0); 

// let months =[
    // "january", "faburary","March","April"
// ];
// months.splice(0,2,"Vishal")
// let allmonths= months;
// allmonths.push("July");
// console.log(allmonths);
// console.log(months);                                         //Splice method in array

// let company =[
//     "Google","Meta","Amazon","Apple","Microsoft","Netflix"
// ];
// console.log(company);
// company.shift();
// console.log(company);
// console.log(company.splice(2,1,"TCS"));
// company.push("Wipro");



// let arr = [[1,2],[2,3]];
// arr[0][0];
// let game = [["X",null,"O"],[null,"X",null],["O",null,"X"]];
// game[2][2] = "O";

// let arr=[1,2,3,4,5]
// let n = 3;
// let ans = arr.slice(arr.length-n);                             // array loop practice

// let items = [250,645,300,900,50];
// for(let itom of items){ 
//     let discount = itom/10;
//     console.log(itom);
//     console.log("Discount = ",discount);
// }

                                                                    // to do list
// let todo = [];
// let req = prompt("Enter what you want to request in todo list: ");
// while(true){
//     if(req == "quit"){
//         console.log("You are out of the list");
//         break;
//     }
//     if(req == "list"){
//         console.log("**********");
//         for(let i=0; i<todo.length; i++){
//             console.log(`${i}: ${todo[i]}`);
//         }
//         console.log("**********");
//     }else if (req == "add"){
//         let task = prompt("Enter new task: ");
//         todo.push(task);
//         console.log(`${task} is added in the list`);
//     }else if (req == "delete"){
//         let index = prompt("Enter index of task to delete: ");
//         todo.splice(index,1);
//         console.log("Task is deleted");
//     }else{
//         console.log("Please enter a valid command");
//     }

//     req = prompt("Enter what you want to add in todo list: ");
// }
                                                                     //loop practice
// let num= prompt("Enter any num = ");
// for(let i=0; i<num.length; i++){
//     console.log(i.length);
// }

                                                                        ///fuction

// function myfuction(){
//     console.log("Hell0 Vishal");
// }
// myfuction();
// function sum(a,b){
//     console.log(a*b);
//     console.log("Sum = ",a+b);
// }
// sum(10,12);

// let arrowsum = (a,b) =>{
//     return(a+b);
// }
// arrowsum(4,46);                                                      //fuction practice

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if(char === "a"| char ==="e"|char === "i"|char==="o"|char ==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// let randomNum = Math.floor(Math.random()*6)+1;
// console.log(randomNum);
// function getSum(n){
//     let sum = 0;
//     for(let i=1; i<=n; i++){
//         sum = sum + i;
//     }
//     return sum;
// }

// console.log(getSum(5));
// let greet = "Hello Vishal";         // global scope
// function newGreet(){
//     let greet = "Hello Vashishth";          // function scope
//     console.log(greet);
//     function geens(){
//         console.log(greet);
//     }
// };
// console.log(greet);
// newGreet();

// let name = function getName(){                  // fuction expression
//     console.log("Hello Vishal");
// }
// console.log(name());

// function multiGreet(fuct, num){                 //  higher order fuction
//     for(let i=0; i<num; i++){
//         fuct();
//     }
// };
// let greet = function(){
//     console.log("Hello Vishal");
// };
// multiGreet(greet,30);

// function oddeven(request){          // higher order fuction
//     if(request == "odd"){
//         let odd =function(n){
//             console.log(!n%2 == 0);
//         }
//         return odd;
//     }else if(request == "even"){
//         let even = function(n){
//             console.log(n%2 == 0);
//         }
//         return even;
//     }else {
//         console.log("Enter valid request");
//     }
// }
// request = "odd";
                                                    // methods in array  (fuction inside object is called method)
// const calculate = {
//     Sum: function(a,b){
//         return a+b;
//     },
//     mul: function(a,b){
//         return a*b;
//     },
//     sub: function(a,b){
//         return a-b;
//     }
// }
// calculate.Sum(10,20);
// calculate.mul(10,20);
// calculate.sub(10,20);
                                            // sortcut method in array
// const calculate = {
//     Sum(a,b){
//         return a+b;
//     },
//     mul(a,b){
//         return a*b;
//     },
//     sub(a,b){
//         return a-b;
//     }
// }
// calculate.Sum(10,20);
// calculate.mul(10,20);
// calculate.sub(10,20);

// arr = [8,9,10,1,2,3,4,5,6,7];                   // loop to get element greater than num (practice)
// let num = 5;

// function getElements(arr, num) {
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] > num) {
//             console.log(arr[i]);
//         }
//     }
// }

// getElements(arr, num);

// const student = {                               // this 
//     name: "Vishal",
//     age: 23,
//     math:98,
//     eng:87,
//     phy:95,
//     getAvg(){
//         let avg =(this.eng+this.math+this.phy)/3;
//     }
// }

// console.log("hello world");             // Try and Catch
// try{
//     console.log(a);
// } catch(error){
//     console.log(error);
// }

// const pow = (a, b) => {             // arrow fuction implicit return
//     return Math.pow(a, b);
// };


// console.log("vishal vashishth");            // set Timeout Fuction

// setTimeout(() => {
//     console.log("Hey everyone!");
// },4000);
// console.log("Welcome");

// console.log("Hey there!");          // Set Interval Function

// let id = setInterval(() =>{
//     console.log("Welcome Guys!");
// },2000);

// console.log(id);

// clearInterval(id);                 //stop setInterval 


// let squre =(n) => n*n;           // practice
// console.log(squre(5));

// let id = setInterval(()=>{
//          console.log("hello world");
// },2000);

// setTimeout(() => {
//     setInterval(id);
//     console.log("loop stop!")
// }, 10000);

                                                              // for each loop

// let arr = ["vishal","vashishth"];
// arr.forEach(function printvalue(value,idx,arr) {
//     console.log(value,idx,arr);
// })

// let arr = [1,2,3,4,5,6,7,8,9];
// arr.forEach(function (element){
//     console.log(element);
// });

// let num =[1,2,5,78,25,15];
// num.forEach(function(val){
//     console.log(val*val);
// });                                                 // map method

// let arr = [1,2,3,4,5];
// let arr1 = arr.map(function(val,idx){
//     console.log(val,idx);
//     return val;
// });
//console.log(arr);
// console.log(arr1);                                // filter method    

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let arr1 = arr.filter(function(val){
//     return val %2 ==0;
// });
// console.log(arr1);

// let arr=[2,4,6,8];                                 // every Method
// arr.every((el) =>{
//     console.log(el%2 == 0);       //true
// })
// let arr1 = [2,3,4,5,6,4]
// arr1.every((ell) =>{
//     console.log(ell % 2 !== 0)       //false
// })

// let num = [1,2,3,4,5];                                //reduce Method
// let result= num.reduce((res,el)=>{
//     console.log(res);
//          return  el+res;
//  });
// console.log(result);

// let arr = [1,2,4,6,7,8,4,12,3];                  // finding Maximum num by reduce method
// let max = arr.reduce((max,el)=>{
//     if(max<el){
//         return el;
//     }else{
//         return max;
//     }
// })
// console.log(max);

// function sum(a,b=5){                // defalt paremeters
//     console.log(a+b);
// }
// let arr= [1,2,2,5,8,6,97,45];
// console.log(arr);
// console.log(...arr);                        // spread
// console.log(Math.min(arr));     //Nan
// console.log(Math.min(...arr));    //1
// console.log(..."Vishalvashishth");
// let char =[..."Hello sir"];
// console.log(char);
// const newArr={...arr,id:123};
// console.log(newArr);

// function sum(...arg){                        //Rest
//     for(let i=0; i<arg.length; i++){
//         console.log(arg[i]);
//     }
// };
// console.log(sum(1,2,5,8,9,20,10));


// function a(){
//     console.log(arguments);   //argument is prebuild fuction but we can't use in any method on it.
// }
// a(1,4,5,56);

// function a(...arg){                          //Rest practicex
//     return arg.reduce((sum,el)=> sum+el);
// }

// let names = ["vishal","prachi","prshant","neha","madhav","Gaurav"]
// // let [winner] = names[0];     //structured
// let [winner, runnerUp,secondRunnerUp,...others] = names;                    //destructuring for array

// let student= {
//     name:"vishal",
//     age: 19,
//     cgpa:8.6,
//     username:"vishal112vp"
// }
// let {name,age,...others} = student;                                     // Destructuring of Object

                                                      // object litrals and array
// let student = {
//     name: "Vishal",
//     age: 20,
//     cgpa: 8.2,
//     isPassed: true,
// };
// let student1 = [
//     "Vishal", 20, 8.2, true
// ];
// console.log(student);
// console.log(student1);
// student.name = "Vashishth";

// let twitter = {
//     userName: "vishal_VP",
//     content: "Hello World",
//     like: 100,
//     retweet: 20,
//     reply: 50,
// };
// console.log(twitter);
// twitter.reply = 55;                        // update value in object
// twitter["like"] = 150;
// console.log(twitter);
// twitter.content;                        // access value in object
// twitter["userName"];
// delete twitter.retweet;                 // delete value in object

// let classInfo = {                                   // object inside object
//     Vishal:{
//         name: "Vishal Vashishth",
//         age: 20,
//         cgpa: 8.2,
//     }
//     ,Prashant:{
//         name: "Prashant Sharma",
//         age: 21,
//         cgpa: 7.5,
//     }
//     ,Prachi:{
//         name: "Prachi Sharma",
//         age: 19,
//         cgpa: 8.0,
//     }
// };
// console.log(classInfo);
// console.log(classInfo.Vishal);                      // access object inside object
// console.log(classInfo["Prashant"]);                 
// console.log(classInfo.Prachi.cgpa);             // access object inside object value
// classInfo.Prachi.cgpa = 8.2;                    // update object inside object value
// console.log(classInfo.Prachi);

// let carStore = {
//     carName: "Thar",
//     model: 2023,
//     price: 1500000,
// }
// console.log(carStore.carName);

// Math.random(15);                        // math object
// Math.floor(4.7);
// Math.ceil(4.2);
// Math.round(4.5);
// Math.max(1,2,3,4,5);
// Math.min(1,2,3,4,5);
// console.log(Math.pow(2,3));
                                     // random number genrate between 1 to 10 with math object
// let randomNum = Math.floor(Math.random()*10)+1; 
// console.log(randomNum); 

                                // number guessing game with random number 
// let userNum = prompt("Enter any random number = ");
// let randomNum = Math.floor(Math.random()*userNum)+1;
// let guess = prompt("Enter your guess number = ");
// while(true){
//     if(guess == "quit"){
//         console.log("You are out of the game");
//         break;
//     }if(guess == randomNum){
//             console.log("You Win");
//             break;
//      }else if(guess > randomNum){
//         guess = prompt("Too High! Enter again = ");
//     }else{
//         guess = prompt("Too Low! Enter again = ");
//     }
// // }
// window.alert("Hello welcome to my website");                           // window method 
// window.confirm("Are you sure you want to delete this item?");
// let userInput = window.prompt("Please enter your name:");
// console.log("User Name:", userInput);
// console.log(window);
// window.location.href = "https://www.example.com";
// window.location.reload();-
// window.history.back();
// console.dir(window.document);

// document.body.style.backgroundColor = "lightblue";               // DOM (Document Object Model)

// let h1s = document.querySelectorAll("h1");                    // select h1 tag using querySelectorAll, document
// h1s.forEach(h1 => h1.style.backgroundColor = "orange");        
// document.body.childNodes[1].style.background ="red";           // select body using childNodes

// const content = document.querySelector('h1');
// console.dir(content);
// content.getAttribute('id');                                     // select element by id and changeing value
// content.setAttribute('id','firstline')                                  

                                    // DOM menipulation

// document.getElementById("heading").style.color = "red";              // select by id * if multiple id same name then we get only first id to select all we use getElementsByTagName 
// document.getElementsByClassName("myClass")[0].style.color = "green";       // select by class name
// document.getElementsByTagName("h3")[0].style.color = "blue";          // select by tag name

//  let links = document.querySelector('.box div');
// for(i=0; i<links.length;i++){
//     links[i].style.color = "red";
// };

// let a =document.querySelector('h4');
// a.classList;
// a.classList.add("green");       //add class
// a.classList.remove("green");        //remove class
// a.classList.contains("green")       // check value exist or not

                            //Child Property and its operations

// let b4 = document.querySelector("h4");
// b4.parentElement;                     // find out parent element
// b4.childNodes;                            // find out child element
// b4.childElementCount;                      // find out how many child exist
// b4.previousElementSibling;                  // find out the previous sibling
// b4.nextElementSibling;                       //find out the next sibling
// b4.nextElementSibling.style.color = "green";      //changing css use of sibling
// let b6 = document.createElement("button");          // creating new element
// b6.innerHTML = "Click me!";                       // adding value into element
// b4.appendChild(b6);                                    // Append to html file 
// b4.append("JavaScript");                          // Appending any value with the help of append
// b6.prepend("Hey! ");                               // Adding element in first 
// b4.insertAdjacentElement("beforebegin",b6)            //Insert element anyplace (afterbegin),(afterend),(beforeend)
// b6.remove();                                      // remove any element (removeChild)

                                        // practice 

// let el = document.createElement("p");
// el.innerText = "Hey! I am Red";
// el.style.color = 'red';
// document.querySelector("body").append(el);

// let el1 = document.createElement("h3");
// el1.innerText = "Hey! I am H3";
// document.querySelector("body").append(el1);

                                           // DOM properties
// heading.tagName;        // get tag name
// myId.innerText;         // get text
// let div = document.querySelector("div");             // get all properties of div
// document.dir(div);
// document.textContent;        // get all text content of document

// let h2 = document.querySelector("h2");          // practice create element and append
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "This is my first JS code";

                                                // 4 piller of DOM
// let a = document.querySelector("h2");           //1. Selecting an element
// a.innerHTML = "Hello JS!";                      //2. changing HTML content
// a.style.color = "red";                           //3. changing CSS
// a.addEventListener("click", function(){        //4. Event listener
//     a.style.color = "blue"; 
// });


                           // Event Listeners practice
// let btns = document.querySelectorAll("button");         //Event when click (onclick)
// for(btn of btns){
//     btn.onclick = aleartt;
//     btn.onmouseenter = function(){                          //Event when mouse Enter (on mouse enter)
//         console.log("You pointer on button");
//     }
//     console.dir(btn);
//     btn.addEventListener("click",aleartt);              // Event when clicked (add Event Listener)
// }
// function aleartt(){
//     console.log("Clicked");
//     alert("clicked");
// }
                                                        // practice (light on off) with click event listener
// let on = document.querySelector("#bulb");
// let ttn = document.querySelector("#btn");
// let flag = 0;
// ttn.addEventListener("click", function(){
//     if(flag == 0){
//         on.style.backgroundColor = "yellow";
//         flag = 1;
//         ttn.innerText = "OFF";
//     }else{
//         on.style.backgroundColor = "transparent";
//         flag = 0;
//         ttn.innerText = "ON";
//     }
// });


// let btn = document.querySelector("button");
// btn.addEventListener("click",function(e){            //defalt parameter (e). it's have many propties. like (key,code).
//     console.log(e);                             //defalt parameter known as event
//     console.log(this);                              // this (here the use of this is to print info abt btn)
//     console.log(this.innerText)
// })
// btn.addEventListener("keydown", function(e){
//     console.log("keyboard button presed");                  // keyBorad Event Listner
//     console.log(e.key);                             // Key used to triger the action like what click on keyboard
// }) 

// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){          // submit event listener
//     event.preventDefalt();
//     alert("Form Submitted! ");
//     let inp = document.querySelector("input");
//     console.log(inp);
// })

// let foorm = document.querySelector("form");
// foorm.addEventListener("submit", function(event){
//     event.preventDefault();                                    // help to stop defalt actions
//     let input = document.querySelector("input");
//     console.log(input.value);                                   // value of the input which is entered into input box by user
// })

    // foorm.addEventListener("submit", function(event){
    //     event.preventDefault();
    //     console.dir(foorm);
    //     let user = foorm.elements[0];                       // elements help to access the child element
    //     console.log(user.value);                                // it print same value as 791 line code print the value
    // })

    // let foorm = document.querySelector("form");
    // foorm.addEventListener("submit",function(event){
    //     event.preventDefault();
    //     console.log("form submitted")
    // });
    // let user = document.querySelector("#user");
    // user.addEventListener("change",function(){                  // change given value after we write all input and press somewhere 
    //     console.log(this.value)
    //     console.log(`change value = ${this.value}`);
    // });

    // user.addEventListener("input",function(){                   // input given value every charactor which is input by user
    //     console.log(`Input value = ${this.value}`);
    // });

                                                    // practice (input event listener) Text Editor

    // let inp = document.querySelector("#input");
    // let out = document.querySelector("p");
    // inp.addEventListener("input", function(){
    //     out.innerText = inp.value;
    // });

    // let inp = document.querySelector("#input");
    // let h3 = document.querySelector("h3");
    
    // h3.addEventListener("mouseout",function(){                  // Mouse Out event
    //     console.log("mouse Out");
    // });

    // inp.addEventListener("keypress",function(){                 // Keypress event
    //     console.log("key Preshed!");
    //     console.log(inp.value);
    // })

    // inp.addEventListener("scroll",function(){
    //     console.log("scroll!")
    // })
    

    // let lis = document.querySelectorAll("li");
    // let ul = document.querySelector("ul");
    // ul.addEventListener("click",function(){
    //     console.log("ul clicked!");
    // });

    // for(let li of lis){
    //     li.addEventListener("click",function(event){
    //         event.stopPropagation();                    // top propagation use to stop event bubblinh     
    //         console.log("li clicked !");
    //      })
    //     };

                                                  //TODO List

let button = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

button.addEventListener("click",function(event){

    let item = document.createElement("li");
    item.innerHTML = inp.value;
    ul.appendChild(item);

    let delBtn = document.createElement("button");
    delBtn.innerText = " Delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    inp.value = "";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){                       // taget show that which item has been trigered
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted!");
    }
});

// let delBtns = document.querySelectorAll(".delete");              // this is not use because of event bubbling
//     for(delBtn of delBtns){
//         delBtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }
