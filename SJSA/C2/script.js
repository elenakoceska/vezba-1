// VAriables//

var name = 'Elena';

var e_mail = 'elenakoceska@yahoo.com';

var firstName = 'Elena';

var LastName = 'Koceska';

var __eMail; 
__eMail //ova e kako primer ako ne vneseme nisto, a ja zacuvame za idnina da dobie nekoja vrednost//

name = 'Kaja';

console.log(name);

var num = 42;
console.log(typeof num);
console.log(typeof 42);

var num_a = 10;
var num_b = 5;

var result = num_a + num_b;

console.log(result);

//vezba

var ask_name = prompt ("enter your name");

var ask_mail = prompt ("enter your e-mail");

var ask_lang = prompt ("enter the language you are currently learning");

var ask_academy = prompt ("enter the academy where you are learning");


console.log('Your name is ' + ask_name + ' and your email is ' + ask_mail + '. You are styding ' +  ask_lang + ' at the ' + ask_academy);

//console.log(`Your name is ${ask_name}. Your e-mail is ${ask_mail}.`)



//Boolean


console.log (10 > 5);
console.log( 10 == 5);

//var number1 = 10;
//var number2 = 20;

//number1=number2//

if (10 > 5) {
    console.log("Number 10 is larger than number 5")
}

var number1= 10;
var number2= 20;

if (number1 < number2) {
    console.log(`Number ${number1} is smaller then ${number2}`);
}