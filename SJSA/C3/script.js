if (true) {
    console.log('The if statment returns to be true');
}

if (5>9) {
    console.log("I will execute");
} else {
    console.log('Number 5 is smaller than 9');
}

var today = "Friday";

if(today == 'Monday') {
    console.log('Today is Monday');

} else if(today=='Tuesday') {
    console.log('Today is Tuesday');

} else if(today == 'Wednesday') {
    console.log('Today is Wednesday');

} else if(today == 'Thursday') {
    console.log('Today is Thursday');

}  else if(today == 'Friday') {
    console.log('Today is Friday');

} else if(today == 'Saturday') {
    console.log('Saturday');

} else {
    console,log('Today is Sunday');
}
    
    
//vezba

var height = 1.67;
var height_limit = 1.60;

if (1.70 >= 1.60) {
    console.log('You are tall enough to ride the rollercoster')
} else {
    console.log('You are not tall enough to ride the rollercoster');
}


var hotel_name = "Grand Budapest";
var has_vacancy = true;

if(hotel_name == "Grand Budapest" && has_vacancy == true) {
    console.log('Yes, the Grand Budapest Hotel has rooms available');
}

if(hotel_name == "Grand Budapes" || has_vacancy == true) {
    console.log('Yes, the Grand Budapest Hotel has rooms available');
}



//switch

var today = "Friday";


switch(today) {
    case "Monday":
        console.log("Today is Monday");
    break;
    case "Tuesday":
        console.log("Today is Tuesday");
    break;
    case "Wednesday":
        console.log("Today is Wednesday");
    break;
    case "Thursday":
        console.log("Today is Thursday");
    break;
    case "Friday":
        console.log("Today is Friday");
    break;
    case "Saturday":
        console.log("Today is Saturday");
    break;
    case "Sunday":
        console.log("Today is Sunday");
    break;
}



//vezba

var lang = "de";

if (lang == "en") {
console.log("Hello World");
} else if (lang == "es") {
console.log("Hola Mundo");
} else { 
console.log("Hallo Welt");
}

    
//vezba

var num1 = 20;
var num2 = 20;

if(num1 < num2) {
    console.log(`The greater number of ${num1} and ${num2} is 20`);

} else if (num1 > num2) {
    console.log(`The smallest number of ${num1} and ${num2} is 20`);
} else {
    console.log("the numbers are equal");
}

if (true) {

var createdVAR = 'Elena';
}
console.log(createdVAR)

//var firstName = 'Darija';
//console.log(firstName)

if(true) {
    let createdLET = 'Darija';
    console.log(createdLET)
}

let somename = "Kaja"
console.log(somename)

//var somename = "Elena" -ke se vidi greskata od prethodniot kod


//vezba

//let percentage = 100;
let percentage = prompt("enter percentage")

if (percentage <= 20) {
    console.log('nedovolen 1');

} else if (percentage >= 21 && percentage <= 40) {
    console.log('dovolen 2');
} else if(percentage >= 41 && percentage <= 60) {
    console.log('dobar 3');

} else if (percentage >= 61 && percentage <= 80) {
    console.log('mnogu dobar 4');

} else {
    console.log('odlicen 5');
}


