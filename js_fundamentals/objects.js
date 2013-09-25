// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa


var linguineAmalfitana = {
	title: "Linguine Amalfitana",
	servings: 2,
	ingredients: ["butter", "flour", "table cream", "linguine", "shrimp", "baby clams", "garlic"]
};

var pastaTitle = linguineAmalfitana.title;
var pastaServings = linguineAmalfitana.servings;


function pastaIngredients(ingredients){
	for (var i = 0; i < linguineAmalfitana.ingredients.length; i++) {
		console.log(linguineAmalfitana.ingredients[i]);
	}
}

console.log("Name:" + pastaTitle);
console.log("Serves: " + pastaServings);
console.log("Ingredients:"); 
pastaIngredients();


// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var readingList = [
	{name: "Q&A", author: "Vikas Swarup", read: "yes"},
	{name: "Haroun and the Sea of Stories", author: "Salman Rushdie", read: "yes"},
	{name: "The Hobbit", author: "J.R.R. Tolkien", read: "no"},
	{name: "The Da Vinci Code", author: "Dan Brown", read: "no"},
	{name: "A Tale of Two Cities", author: "Charles Dickens", read: "no"}
	];

for (var i = 0; i < readingList.length; i++) {
		var namesAuthors = readingList[i];
		console.log(namesAuthors.name + " by " + namesAuthors.author);
			if (namesAuthors.read == "yes"){
				console.log(namesAuthors.name + " is a book you have read.");
			}else{
				console.log(namesAuthors.name + " is something you haven't read yet.");
			}	
	}



// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var myMovie = {
	title: "Reservoir Dogs",
	duration: 99,
	stars: ["Harvey Keitel", "Michael Madsen", "Steve Buschemi", "Tim Roth",
		"Sean Penn", "Quentin Tarantino"]
};

function movieInfo(stars){
	console.log("The movie " + myMovie.title + " lasts " + myMovie.duration + 
		" minutes and stars : ");
	for (var i = 0; i < myMovie.stars.length; i++) {
	 console.log(myMovie.stars[i]);
	}
}
movieInfo();







