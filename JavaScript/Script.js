//Pop up boxes
console.log("Hello Can you see me");
console.log("Hellooooooo");
/*There're 3 types pf pop box:alert, confirm, prombt
1. alert box: I use it when I want to display or deliver a massage for a user
*/
alert("hello to my page");

/*2. confirm box: I use to make the user varify
*/
var userAnswer = confirm("Do you love javascript?");
console.log(userAnswer);
/*3.prompt box: make the user able to write an actual answer
help get a text input from user
*/
var userName = prompt("What is your name?");
console.log("User name is: " + userName);

//conditions:
/*Compare operators: ==, ===, !=, !==, >=,<=
logic operators: &&, ||, !
true && false = false
true || false = true
*/
/* v1 =5     v2 =5
v1 == v2   true
v1 === v2  true

v1 = 5      v2 ="5"
v1 == v2   true,   compare the values
v1 === v2  fasle   compare the values and the datatypes, it's the best practice
same for != and !==
*/
if(userAnswer){
    console.log("We love javascript too");
}else{
    console.log("Too bad, you lost");
}
 //we usually tru to have less brackets
 //ternary if
 (userAnswer)?console.log("yess"):console.log("Nooo")

 /*arrays: It's anon- primitive datatype, or it's a data structur. It can hold more than one variable,
  and I usually use it when I want to list values. Array in JS is an object*/
 var daysArray=["Sunday", "Monday"];
 console.log(typeof daysArray);//show me the data type
 console.log(daysArray[0])
 daysArray[2]= "Tuesday"
 //push(), unshift(), pop(), shift()

 for (var i = 0; i < daysArray.length; i++) {
    console.log(i, daysArray[i])
    if(daysArray[i] === "Friday"){
        console.log("We found friday")
        //to break out from the loop
        i = daysArray.length //or break
    }   
 }
 /*functions: It's a block of code, lines of code I group them together
to perform or to do a specific thing*/
/*1.declare the function
2. call the function
*/
function welcome(){
console.log("Hello")
}
welcome()

function welcomeName(name){ //parameter it's not a variable, parameters are just input to my function I can use them later 
    console.log("Hello " + name)
}
welcomeName(userName);

function multiplay(num1 , num2){
    return num1*num2
}
var result = multiplay(2,3)
console.log(result)
