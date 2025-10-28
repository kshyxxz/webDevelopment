// const student = {
//     rajan : {
//         fullName : "Rahul Kumar",
//         age : 24,
//         gpa : 3.6,
//         passed : true
//     },
//     rohit : {
//         fullName : "Rohit Sharma",
//         age : 22,
//         gpa : 3.8,
//         passed : true
//     }
// };
// student.rajan.age ++;
// console.log(student.rohit.age);

// const product = {
//     title : "Ball Pen",
//     rating : 4.5,
//     offer : 5,
//     price : 270,
// };

// console.log(product);

// const profile = {
//     fullName : "Shradha Khapra",
//     userName : "shradhakhapra",
//     posts : 195,
//     followers : 569000,
//     following : 4,
//     threadsHandle : "shradhakhapra",
//     bio : "Apna College | Ex-Microsoft, DRDO",
//     isFollow : false,
// };

// console.log(profile);   

//    ******operators and conditional statements******

// let a = 5;
// let b = 2;

// console.log("a + b = ",a+b);
// console.log("a - b = ",a-b);
// console.log("a * b = ",a*b);
// console.log("a / b = ",a/b);
// console.log("a % b = ",a%b);
// console.log("a ^ b = ",a**b);
// console.log("a++ = ",a++);
// console.log("a-- = ",a--);
// if (a+b == 7){
//     console.log("Equal");
// }

// console.log("a = b",a==b);
// a = "5";
// b = 5;
// console.log("a = b" ,a===b);

// console.log(a==b && a>=b);
// console.log(a==b || a>=b);
// console.log(!(a==b));

// z = (a>b) ? b : a;
// console.log(z);


// // mdn docs

// x = prompt("Enter a number : ");
// if ( x % 5 == 0){
//     console.log(x," is a multiple of 5.");
// }
// else {
//     console.log(x, " is not a multiple of 5.");
// }

// marks = prompt("Enter your score : ");
// if (marks >= 80 && marks <= 100)
//     console.log("A");
// else if (marks >= 70 && marks < 80)
//     console.log("B");
// else if (marks >= 60 && marks < 70)
//     console.log("C");
// else if (marks >= 50 && marks < 60)
//     console.log("D");
// else if (marks < 50)
//     console.log("F");


// LOOPS and STRINGS 
// let i = 1;
// for(i=1;i<=5;i++){
//     console.log("for loop");
// }

// i = 1;
// while(i<=5){
//     console.log("while loop");
//     i++;
// }

// i = 1;
// do {
//     console.log("do while loop");
//     i++;
// }while(i<=5);

// for-of loop(strings and arrays) and for-in loop(objects keys)

// let str = "kshitiz";
// let size = 0;
// for(let i of str){
//     console.log(i);
//     size += 1;
// }
// console.log(size);

// let student = {
//     fname : "rahul",
//     age : 20,
//     cgpa : 8,
//     isPass : true
// };

// for (let key in student){
//     console.log(key," = ",student[key]);       /////// use dot . when you are talking about the keys literally like student.age is fine but you cannot generalize this to student.key///
// }

// let notGuess = true;
// while(notGuess){
//     num = prompt("Enter a random number : ");
//     if(num == 69){
//         notGuess = false;
//         console.log("Hurrayyy! You've guessed it!");
//     }
//     else {
//         console.log("Keep trying...!");
//     }
// }

// stringsss   in-built properties -> methods

// let str = "Kshitiz Shrestha";
// console.log(str.length);
// console.log(str[9]);

// template literalss or string interpolation,,,, just use back ticks i.e. `bla bla` and use ${expression/variables}

// let sentence = `this is a template literal...`;
// let obj = {
//     names : "pen",
//     price : 500,
//     model : 63
// };
// console.log("the cost of ",obj.names," is ",obj.price);  //without template literal
// console.log(`the cost of ${obj.names} is ${obj.price}`);  //with template literals

// let str = "      Kshitiz Shrestha      ";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// str.slice(starting,ending)  //ending value non-inclusive
// str1.concat(str2)
// str.replace(searchVal,newVal)
// str.charAt(idx) 

// fname = prompt("Enter your full name : ");
// let nameCombined = fname.replaceAll(" ","");
// let len = nameCombined.length;
// let nameLowerCase = nameCombined.toLowerCase();
// let atTheRate = "@" + nameLowerCase;
// let atTheRateNew = atTheRate + len;
// console.log(`Your username is : ${atTheRateNew}`);

// array

// let marks = [85,97,44,37,76,60];
// let count = 0;
// let sum = 0;
// for(let i=0;i<6;i++){
//     sum += marks[i];
//     count++;
// }
// avg = sum/count;
// console.log(`The average of given array is : ${avg}`);

// let prices = [250,645,300,900,50];
// let i = 0;
// while(prices[i] != null){
//     prices[i] = 0.9*prices[i];
//     i++
// }
// console.log(`${prices}`);

// let veggies = ["potato","tomato","radish","carrot"];
// veggies.push("garlic");
// console.log(veggies.pop());
// converted = veggies.toString(); 
// veggies.unshift("ginger");
// console.log(veggies.shift());
// veggies.splice(1,2,"turnip","brinjal"); // 1 index bata 2 ota item delete garne ani replace by
// console.log(veggies);

// companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// removeFirst = companies.shift();
// console.log(companies);
// removeOlaAddUber = companies.splice(1,1,"Ola");
// console.log(companies);
// addAmazon = companies.push("Amazon");
// console.log(companies);

// functions and methodss

// function myFunction (){
//     console.log("Hello World!");
// }

// //arrow functions

// // sum function
// function sum(a,b){
//     return a+b;
// }

// const sum = (a,b) => {
//     return a+b;
// }

// let a = prompt("Enter a string : ");
// let c = a.toLowerCase();
// let count = 0;
// function noOfVowels (x) {
//     for (let i of x){
//         if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u'){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(`The number of vowels in ${a} is ${noOfVowels(c)}.`);

// let count = 0;
// let a = prompt("Enter a string : ");
// let c = a.toLowerCase();
// const sumOfVowels = (x) => {
//     for(let i of x){
//         if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u'){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(`The count of vowels in ${a} is ${sumOfVowels(c)}.`);

// forEach loop in arrays

// let arr = [1,2,3,4,5];
// let sum = 0;
// arr.forEach(function printVal(val) {
//     sum += val;
// });
// console.log(sum);

// let names = ["Kshitiz Shrestha","Roman Reigns","Nancy Pelosi","Ivanka Trump"];
// names.forEach((val,idx,arr) => {
//     removed = val.replaceAll(" ","");
//     lower = removed.toLowerCase();
//     console.log(lower);
//     console.log(idx);
//     console.log(arr);
//     }
// );

// num = [1,2,3,4,5,6,7,8,9,10];
// num.forEach((val) => {
//     console.log(val*val);
// }
// );

// num = [5,4,8,6,3,4,2];
// let newNum = num.map((val)=>{
//     return val*val;
// });
// console.log(newNum);

// TODO:
// const workers = [
//     "Rahul Sharma",
//     "Aisha Banu Khan",
//     "David Lee Parker",
//     "Sanjay Kumar",
//     "Emma Rose Williams",
//     "Carlos Eduardo Ramirez",
//     "Neha Rani Thapa",
//     "Liam Alexander Hailey Smith",
//     "Priya Das Gupta",
//     "Olivia Grace Taylor"
// ];
// const object = workers.map((employee) => {
//     const splitz = employee.split();
//     const fname = splitz.shift();
//     return (fname);
// });

// console.log(object);

// FILTER method

// arr = [45,87,35,956,40,54,2,4,155];
// let newArr = arr.filter((val) => {
//     return val % 2 === 0;
// });
// console.log(newArr);

// REDUCE method

// const arr = [1,2,3,4,5,6];
// const sum = arr.reduce((acc,crr) => {
//     return acc+crr;
// });
// console.log(sum);

// const arr = [1,22,3,4,5,6];
// let max = 0;
// const sum = arr.reduce((acc,crr) => {
//     return   (acc >= crr)?acc:crr;
// });
// console.log(sum);

// const marks = [98,78,45,24,35,74,15,98,96];
// const newMarks = marks.filter((val) => {
//     return val>90;
// });
// console.log(newMarks);

// let arr = [];
// let n = prompt("Enter a number : ");
// for(let i=0;i<n;i++){
//     arr[i] = i+1;
// }
// const sumReduce = arr.reduce((prev,curr) => {
//     return (prev+curr);
// });
// console.log(`Sum is ${sumReduce}`);
// const prodReduce = arr.reduce((prev,curr) => {
//     return (prev*curr);
// });
// console.log(`Product is ${prodReduce}`);

// document.body.style.background = "green";

// x = document.getElementById("heading");
// console.log(x);
// y = document.getElementsByClassName("roman");
// console.log(y);
// z = document.getElementsByTagName("p");
// console.log(z);
// a = document.querySelector("h1");  //.myClass   #myId
// console.dir(a);

// let element = document.getElementById("demo");

// console.log("1️⃣ tagName:");
// console.log(element.tagName); 
//             // Output: DIV

// console.log("2️⃣ innerText:");
// console.log(element.innerText); 
//             // Output: Hello World 🌍 (only visible text)

// console.log("3️⃣ innerHTML:");
// console.log(element.innerHTML); 
//             // Output: <p>Hello <b style="display:none">hidden</b> World 🌍</p>

// console.log("4️⃣ textContent:");
// console.log(element.textContent); 
//             // Output: Hello hidden World 🌍 (includes hidden text)


// const variable = document.getElementById("heading");
// console.log(variable.innerHTML);
// console.log(variable.innerText);
// console.log(variable.tagName);

// const classVarx = document.getElementsByClassName("roman");
// console.log(classVarx[0].tagName);
// console.log(classVarx[0].innerHTML);

//dom tree task {parent, firstChild, lastChild, children}
// console.dir(document.body.firstChild);

// let header = document.querySelector("h1");
// header.innerHTML = `<b><i> ${header.innerText} </i></b>`;   // damnnnn this is crazyyyy

// let append = document.querySelector("h2");
// append.innerText = `${append.innerText} from Apna College students`;

// for(let i=0;i<3;i++){
//     let append = document.getElementsByClassName("box");  // can also use let append = document.querySelectorAll(".box");
//     if(i==0){
//         append[i].innerText = "too bold";
//     }
//     else if(i==1){
//         append[i].innerText = "too italic";
//     }
//     else{
//         append[i].innerText = "too underlined";
//     }
// }

// let division = document.querySelectorAll("div"); //crazyyy haii ferii yo method ta
// console.log(division);
// console.log(division[1].getAttribute("class"));

// let firstDiv = document.querySelectorAll("div");
// firstDiv[1].setAttribute("class","boxes");
// console.log(firstDiv[1].getAttribute("class"));

// let div = document.querySelectorAll("div");
// console.log(div[1]);
// console.log(div[1].style);
// div[1].style.backgroundColor = "black";
// div[1].style.color = "white";

// let btn1 = document.createElement("button");     //node.append(element);
// btn1.innerText = "append";
// let division = document.querySelectorAll("div");
// division[0].append(btn1);
// let btn2 = document.createElement("button");
// btn2.innerText = "prepend";
// division[0].prepend(btn2);
// let btn3 = document.createElement("button");
// btn3.innerText = "before";
// division[0].before(btn3);
// let btn4 = document.createElement("button"); 
// btn4.innerText = "after";
// division[0].after(btn4);

// node.remove();

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// newBtn.style.backgroundColor = "red";
// newBtn.color = "white";
// let location1 = document.querySelector("body");
// location1.prepend(newBtn);


// let para = document.querySelectorAll("p");
// para[2].classList.add("newQuestion");
        // console.log(para[2].innerText);

//eventsssss

//eventmiss1
//eventmiss2
//eventmiss3_1
//eventmiss3_2
//eventmiss4