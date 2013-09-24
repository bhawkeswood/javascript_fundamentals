// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").


function greaterNum(num1, num2) {
	if (num1 > num2){
		console.log("The greater number of " + num1 + " and " + num2 + 
			" is " + num1 + ".");
	}else{
		console.log("The greater number of " + num1 + " and " + num2 + 
			" is " + num2 + ".");
	}
}

greaterNum(10,25);
greaterNum(33,2);
// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(lang){
	if (lang == "jp"){
		console.log("こんにちは世界！");
	}else if (lang == "de"){
		console.log("Hallo Welt");
	}else if (lang == "fr"){
		console.log("Bonjour, tout le monde!");
	}else{
		console.log("Hello, World!");
	}
}

helloWorld("jp");
helloWorld("de");
helloWorld("fr");
helloWorld();

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(numScore){
	if (numScore >= 90){
		console.log("You got an A!  Congratulations!");
	}else if (90 > numScore && numScore >= 80){
		console.log("You got a B.  Not bad.");
	}else if (80 > numScore && numScore >= 70){
		console.log("Okay, you got a C.  Welcome to mediocrity.");
	}else if (70 > numScore && numScore >= 60){
		console.log("You got a D.  Time to hit the books, eh?");
	}else {
		console.log("You got an F. F means fail, dummy.");
	}
}

assignGrade(94);
assignGrade(82);
assignGrade(76);
assignGrade(61);
assignGrade(22);
// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(animal, number){
	if (number == 1){
		console.log(number + " " + animal);
	}else{
		console.log(number + " " + animal + "s");
	}
}

pluralize("parrot", 4);
pluralize("monkey", 1);

