// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var nameOfStudent = "Muhammed Saad";
// Step 1 Print in Lower case:
var inLowerCase = nameOfStudent.toLowerCase();
console.log(inLowerCase);
// Step 2 Print in Upper case:
var inUpperCase = nameOfStudent.toUpperCase();
console.log(inUpperCase);
// Step 3 Print in Title case:
var splitName = nameOfStudent.split(" ");
var inTitleCase = "";
for (var i = 0; i < splitName.length; i++) {
    inTitleCase += splitName[i].charAt(0).toUpperCase() + splitName[i].slice(1).toLowerCase() + " ";
}
;
console.log(inTitleCase);
