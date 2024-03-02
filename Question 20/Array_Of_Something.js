// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var listOfLanguages = [
    'Urdu',
    'English (UK)',
    'English (USA)',
    'Hindi',
    'Turkish',
    'Chinese',
    'Japanese',
    'French',
    'German',
    'Tamil',
    'Arabic (Saudia Arabia)',
    'Arabic (Kwait)',
    'Indonesian',
    'Spanish',
    'Persian'
];
console.log("List of some Languages:\n");
for (var _i = 0, listOfLanguages_1 = listOfLanguages; _i < listOfLanguages_1.length; _i++) {
    var language = listOfLanguages_1[_i];
    console.log("> ", language);
}
