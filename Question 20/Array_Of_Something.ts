// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let listOfLanguages: Array<String> = [
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
]

console.log("List of some Languages:\n")

for(let language of listOfLanguages){
    console.log("> " , language)
}