//  Checking out the use of branching in git 
/*The differences between the (==) and (===) operators in JavaScript are as follows:
(==) it compares the values only while (===) copares the values and the data type .
var age = 45
if( age >= 65){
console.log("You get your income from your pension")
}
else if(age <65 && age >= 18){
    console.log("Each month you get a salary")
}

else if(age < 18){
    console.log("You get an allowance")
}
else{
    console.log("The value of the age variable is not numerical")
}   


set count 
codition 
action


for (var i = 5; i > 0; i--) {
    console.log(i);
};
console.log('Countdown finished!');


function myName(a,b){
  

    var c = a + b 
    console.log(c)
}
myName(4,5)



var food = {
    beans : 10,
    kelewele : 20,
    rice :20
}
console.log(food)


food.banku = "I am banku";      is all about add property to the js file 


console.log(food)

// This is the math method 
var num =Math.random();
console.log(num*10)



var name = Math.random()* 10;

var rounded = Math.ceil();

console.log(name)
var numberOne = 20;
var numberTwo = 30;

function exchangeRate(amount, rate){
    return amount * rate 
}

 

console.log(exchangeRate(numberOne,numberTwo))


let counter =  3;
function example(){
    console.log(counter);
    counter = counter -1;
    if(counter === 10) return;
    example()
}  

example();
learning about scope: Using var,let , const 
let  rice = 30

var amount= 40

function total(){
   var let = 300
    return rice * amount
}
console.log(total())


VAR can be declared befor accessing it while LET cannot be declared
before accessing it 

*/


// OOP in js 

var purchase1 = {
    shoe : 200,
    tax : 3,
    total_price :  function() {
        var calculate =  this.shoe * this.tax;
        console.log("The total purchace is : ", calculate)
    }
}

purchase1.total_price();



