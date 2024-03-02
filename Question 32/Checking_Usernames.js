// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
//Step 01 >> • Make a list of five or more usernames called current_users.
var current_users = [
    'Ziaullah Khan',
    'Zeeshan Hanif',
    'Qasim',
    'Adil Altaf',
    'Imran Ali'
];
//Step 02 >> • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_users = [
    'Daniyal Nagori',
    'Hira Khan',
    'Qasim',
    'Tayyaba Ali',
    'Imran Ali'
];
//Step 03 >> • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.>> • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
function checkUserName(current_users, new_users) {
    var lowerCaseCurrentUsers = current_users.map(function (curVal) { return curVal.toLowerCase(); });
    for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
        var newUser = new_users_1[_i];
        var lowerCaseNewUsers = newUser.toLowerCase();
        if (lowerCaseCurrentUsers.includes(lowerCaseNewUsers)) {
            console.log("Dear ".concat(newUser, ", You will need to enter a new username! \n"));
        }
        else {
            console.log("The username \"".concat(newUser, "\", is available! \n"));
        }
    }
}
checkUserName(current_users, new_users);
