// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
var numberOfChildren = 10
	, partnerName = "Bill"
	, place = "Toronto"
	, jobTitle = "Grifter";

function fortuneTeller() {
	return "You will be a " + jobTitle + " in " + place + ", and married to "
	 +  partnerName + " with " + numberOfChildren +  " kids.";
}

fortuneTeller()

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
var currentYear = 2013
	, birthYear = 1982;

var possibleAge1 = (currentYear - birthYear)
	, possibleAge2 = (currentYear - birthYear - 1);

function ageCalculator() {
	return "The person in question is either " + possibleAge1
	 + " or " + possibleAge2 + " years old.";
}

ageCalculator()


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 31
	,   maxAge = 81
	, beersPerDay = 2;

var lifetimeSupplyOfBeer = ( maxAge - currentAge ) * 365 * beersPerDay;

// CURIOUSLY, I WANTED TO KNOW HOW MANY CALORIES THAT WOULD ADD TO MY WAIST, SO
// 218 kcal per 500ml according to fatsecret.ca
var beerCalories = 218;

lifetimeSupplyOfBeer;
lifetimeSupplyOfBeer * beerCalories


// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".
var r = 15
var pi = 3.14
var d = r*2
var c = pi*d
var a = pi*(Math.pow(r,2));

function geometrizer() {
	return "The circumference is " + c +"m, and the area is " + a + "m square.";
}

geometrizer()


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius = 34;
var farenheit = 89;
var celsiusConverted = celsius * (9/5) + 32;
var farenheitConverted = (farenheit - 32) * (5/9);

function celsiusConverter() {
	return  celsius + "°C is " + celsiusConverted + "°F";
}

function farenheitConverter() {
	return  farenheit + "°F is " + farenheitConverted + "°C";
}

celsiusConverter();
farenheitConverter();





