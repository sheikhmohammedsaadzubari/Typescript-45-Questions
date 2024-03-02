/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/
var guestsList = [
    'Umer',
    'Ali',
    'Usman',
    'Abdul Rehman',
    'Saad',
    'Saleem'
];
//Step 01 : • Add a print statement to the end of your program informing people that you found a bigger dinner table. 
for (var _i = 0, guestsList_1 = guestsList; _i < guestsList_1.length; _i++) {
    var guest = guestsList_1[_i];
    console.log("Hello ".concat(guest, "!  \n  I found a bigger dinner table.\n\n"));
}
//Step 02 : • Add one new guest to the beginning of your array.
var addGuestInBeginning = "Ahmad jalalludin";
guestsList.unshift(addGuestInBeginning);
//Step 03 : • Add one new guest to the middle of your array.
var addGuestInMiddle = "Ahmed Noori";
var index = Math.round(guestsList.length / 2);
guestsList.splice(index, 0, addGuestInMiddle);
//Step 04 : • Use append() to add one new guest to the end of your list.
var addGuestInEnd = "Eshraf Eziz";
guestsList.push(addGuestInEnd);
//Final Step: • Print a new set of invitation messages, one for each person in your list.
console.log("New set of Invitation message:");
//for each loop for print each person's invittation:
guestsList.forEach(function (guest) {
    console.log("\n\n Dear ".concat(guest, "! \n I wanted that you join us in dinner."));
});
