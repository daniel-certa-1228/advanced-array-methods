console.log( "main.js");

let colors = ['red', 'blue', 'yellow', 'orange', 'teal'];

colors.forEach( (item) => {
	let newColorString = "I like this color: " + item;
	// console.log( "newColorString", newColorString );
});

for (var i = 0; i < colors.length; i++) {
	let newColorString = "I like this color: " + colors[i];
	// console.log( "newColorString", newColorString );
};
////////////////////////////////////////////////////////

// console.log( "i", i );

// let revColors = colors.map( (color) => {
// 	return color.split("").reverse().join("");

// });

// console.log( "revColors", revColors );

//same as above
let revColors = [];
for (var i = 0; i < colors.length; i++) {
	let reversed = colors[i].split("").reverse().join("");
	revColors.push(reversed);
};

// console.log( "revColors", revColors );

////////////////////////////////////////////////////////

// FILTER

let fourLetters = colors.filter((color) => {
	return color.length === 4;
});

// console.log( "fourLetters", fourLetters );

////////////////////////////////////////////////////////

let numbers = [13,45,57,79,5]
console.log( "numbers", numbers );

let sum = numbers.reduce( (prev, curr) => {
	// console.log( "prev:", prev, "curr:", curr );
	return prev + curr
})

// console.log( "sum", sum );

////////////////////////////////////////////////////////

// *****************CHAINING METHODS EXERCISE*****************
/*instructions
Sort the numbers in DESCENDING order (10, 9, 8, 7, etc).
Remove any integers greater than 19.
Multiply each remaining number by 1.5 and then substract 1.
Then output (console) the sum of all the resulting numbers.
*/

let integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let chainResult = integers
	.sort( (a,b) => { return b - a } )
	.filter( (number) => { return number < 19 } )
	.map((number) => {return (number * 1.5) - 1})
	.reduce( (prev, curr)  => {return prev + curr});

	console.log( "chainResult", chainResult );



















