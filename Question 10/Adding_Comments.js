/* Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.


Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
var nameOfStudent = "Muhammed Saad";
// Step 1 Store in Lower case:
var inLowerCase = nameOfStudent.toLowerCase();
// Step 2 Store in Upper case:
var inUpperCase = nameOfStudent.toUpperCase();
// Step 3 Store in Title case:
// First I create an array which is named splitName and I split the words of name in the array with split property like this:
var splitName = nameOfStudent.split(" ");
// [Muhammed, Saad]
var inTitleCase = "";
// Then I create a variable of empty string.
for (var i = 0; i < splitName.length; i++) {
    inTitleCase += splitName[i].charAt(0).toUpperCase() + splitName[i].slice(1).toLowerCase() + " ";
}
;
/* In above code I create a loop in which I declare a variable which value is zero and gave a condition that i add and add until i less than the length of splitName array length.

In the body of loop I type a variable name which had declared by me above which is "inTitlleCase" and add "splitName" array's index which is "i"
and using `charAt` property I define the index of string of array and take it in upper case and add "splitName" array's index which is "i"
and using `slice` property I define the index from which it start and end of string of array and take it in lower case and add space to give space between words.
*/
// Print All Cases: 
console.log(inLowerCase);
console.log(inUpperCase);
console.log(inTitleCase);
