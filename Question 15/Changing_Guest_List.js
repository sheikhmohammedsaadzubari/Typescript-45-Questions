"use strict";
/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestsList = void 0;
// We store guests name in the array:
var guestsList = [
    'Umer',
    'Ali',
    'Usman',
    'Abdul Rehman',
    'Saad',
    'Haris'
];
exports.guestsList = guestsList;
// Step 1 : Print the name of guest who can't make it:
var guestWhoCantMakeIt = 'Haris';
console.log("".concat(guestWhoCantMakeIt, " can't make the dinner with us."));
// Step 2 : Replace the name of guest who can't make it:
var newGuest = 'Saleem';
var indexOfGuestWhoCantMakeIt = guestsList.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guestsList[indexOfGuestWhoCantMakeIt] = newGuest;
}
// Step 3 : Print a second set of invitation messages:
console.log('Print a second set of invitation messages:');
// Loop for each to print invitation:
guestsList.forEach(function (guest) {
    console.log("Dear ".concat(guest, "! \n I wanted that you join us in dinner.\n\n "));
});
