// #################### 1 ####################

/*
function helloWorld() {
    alert("Olá Mundo!")
}

helloWorld()
helloWorld()
helloWorld();
*/


// #################### 2.a ####################
/*
const name = "John"

helloUser();
calcArea(3,4);

function helloUser() {
    alert(`Hello ${name}!`)
}
*/
// #################### 2.b ####################
/*
function calcArea(a,b) {
let result = alert(a*b)
}
*/

// #################### 2.c ####################
/*
const firstValue = +prompt("Insira o 1º valor");
const secondValue = +prompt("Insira o 2º valor");
const operator = prompt("Insira o operador desejado");
calculator();

function calculator(){
    switch (operator) {
        case '+':
        alert(firstValue + secondValue);           
            break;
        case '-':
        alert(firstValue - secondValue); 
         case '*':
        alert(firstValue * secondValue);   
        case '/':
        if (secondValue === 0){
            alert("Não pode dividir por 0")          
        }
        else {
            alert(firstValue / secondValue); 
        }    
        default:
        alert("Insira um valor numérico por favor")        
            break;
    }
}
*/

// #################### 2.d ####################
/*
const userWeight = +prompt("Insert your weight in KG");
const userHeight = +prompt("Insert your height in M");
imc();

function imc() {

let result = userWeight / (userHeight*userHeight)
if (result < 18.5) {    
alert("Underweight")    
}
else if (result >= 18.5 && result < 24.9) {
alert("Normal weight")
}
else if (result >= 24.9 && result < 29.9) {
alert("Overweight")
}
else if (result >= 29.9 && result < 34.9) {
alert("Obesity I")
}
else if (result >= 34.9 && result < 39.9) {
alert("Obesity I")
}
else if (result >= 40) {
alert("Obesity I")
}
}
*/


// #################### 2.e ####################
/*
echo();

function echo(s,n) {
     s = "Hello";
    for(n=0;n<3;n++) {
    alert(s)
    }
}
*/


// #################### 2.f ####################
/*
const userValue1 = +prompt("Insert your first value");
const userValue2 = +prompt("Insert your second value");

numbers();
function numbers(){
    let result = "";
    for(i=userValue1;i<userValue2;i++) {
        let result =+ alert(i)  ;
}
}

*/

// #################### 2.h ####################

/*
const userNumber = +prompt("Insert your first value");
table();
function table() {
    let result = "";
    for (i=0; i<=10;i++) {
        result += `${userNumber} * ${i} = ${userNumber*i}\n`;
    }
    alert(result);    
}
*/
// #################### 3 - return ####################
/*
let a = 3;
let b = 5;
min(a,b)
function min(a,b) {
    if(a<b) {
        return a;
    }
    else {
        return b;
    }
}
alert(min(2,5));
*/

