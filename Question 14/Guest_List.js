"use strict";
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
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
// Loop for each to print invitation:
guestsList.forEach(function (guestName) {
    console.log("Dear ".concat(guestName, "! \n I wanted that you join us in dinner. \n \n "));
});
