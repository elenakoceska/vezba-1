//objects

let song = {
    title: "I fought the Law",
    year: 1980,
    band: "The Clash"
};

console.log(song);

console.log(typeof song);

//single property i  undefined
console.log(song.genre);
console.log(song.year);


//vezba

let song1 = {
    title: "I fought the law",
    band: "The Clash",
    year: 1980
};

console.log(`My favorite song is "${song1.title}" from the band "${song1.band}", released in ${song.year}.`);




let movie = {};

movie.title = "F For Fake";
movie.year = 1973;
movie.runningTime = "1h:30m";
movie.director = "Orson Welles";

console.log(movie);
console.log(movie['title']);
console.log(movie.year);



let car = {
    brand: 'Lancia',
    model: 'Delta',
    year: 2010,
    diesel: true
};
console.log(car);
console.log(car.diesel);


//vezba

//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
//On separate lines (one console.log statement for each), log the recipe information so it looks like:
//Mole
//Serves: 2
//Ingredients:
//cinnamon
//cumin
//cocoa

let recipe = {
    title: "Mole",
    serving: 2,
    ingredients: "cinnamon,cumin,cocoa"

}

console.log(recipe.title);
console.log(`Serves: ${recipe.serving}`);
console.log(`Ingredients: ${recipe.ingredients}`);




let movie1 = {
    title: "Annie Hall",
    year: 1978,
    director: {
        name: "Woody Allen",
        dob: "18 November 1935"
    }
};

console.log(movie1);
console.log(movie1.director.name);

//_______________________________________

//Arrays

let colors = ["red", "green", "blue"];
console.log(colors);

console.log(colors[1]);
console.log(colors[3]);


let different_colors = ["cyan", "magenta", "yellow", "karbon"];


let all_colors = colors.concat(different_colors);
console.log(all_colors);

let movies_ = ["mad max", "rushmore", "pulp fiction"];
console.log(movies_);
console.log(movies_[movies_.length-1]); //posleden film


movies_.push("Express");


movies_.unshift("Memories");

console.log(movies_)


//if(true) {
 //   const varWithConst = "Some string";
//}
//console.log(varWithConst);


//-------------------------------

//const firstName = "Elena";

//firstName = "Kaja";

//console.log(firstName);



let fav_recipe = {
    title: "Mole",
    serving: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"]
}

console.log(fav_recipe.title);
console.log(`Serves: ${fav_recipe.serving}`);
console.log('Ingredients:');
console.log(fav_recipe.ingredients[0]);
console.log(fav_recipe.ingredients[1]);
console.log(fav_recipe.ingredients[2]);