// Exercises: for loops

// EXERCISE: The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
var count;
	console.log("Starting Loop" + "<br/>");
for(count = 0; count <= 20; count++){
	if(count % 2 != 0){
		console.log(count + " is odd." + "<br/>");
	}else{
		console.log(count + " is even." + "<br/>");
	}
}
// EXERCISE: Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

var number;
	for(number = 0; number <= 10; number++){
		console.log(number + " * 9 = " + (number * 9));
	}

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

// EXERCISE: The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

var grade;
	for (grade = 50; grade <= 100; grade ++){
		if (grade >= 90){
			console.log("For " + grade + ", you got an A!  Score!");
		}else if (90 > grade && grade >= 80){
			console.log("For " + grade + ", you got a B.  Try a bit harder!");
		}else if (80 > grade && grade >= 70){
			console.log("For " + grade + ", you got a C.  Got what you paid for.");
		}else if (70 > grade && grade >= 60){
			console.log("For " + grade + ", you got a D.  You will be disowned");
		}else {
			console.log("This " + grade + ", means you fail.  F.");
		}
	}
