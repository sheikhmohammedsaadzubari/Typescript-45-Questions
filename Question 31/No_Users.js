// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
//Write conditions in functions:
//Non-Empty List:
var userNames = [
    'Admin',
    'Saad',
    'Shariq',
    'Shahrukh',
    'Saleem',
    'Salman',
    'Subhan',
    'Sikander',
    'Saqib',
    'Sajid'
];
console.log('Non empty username list:\n');
greetUsers(userNames);
//Create conditions in function:
function greetUsers(userNames) {
    if (userNames.length === 0) {
        console.log('We need to find some users!');
    }
    return;
}
for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
    var userName = userNames_1[_i];
    if (userName.toLowerCase() === 'admin') {
        console.log("Hello ".concat(userName, ", would you like to see a status report,\n"));
    }
    else {
        console.log("Hello ".concat(userName, ", thank you for logging in again.\n"));
    }
}
//Empty List:
//Assigning an empty array:
userNames = [];
console.log('\n\nEmpty username list:\n');
greetUsers(userNames);
