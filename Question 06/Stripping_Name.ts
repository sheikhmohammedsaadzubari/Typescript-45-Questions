// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.


// Name with white spaces:
let nameWithWhiteSpaces : string = "\t Mohammed Saad \n";
console.log("Name with white spaces:" , nameWithWhiteSpaces);


// Name after stripping white spaces:
let nameAfterStripping : string = nameWithWhiteSpaces.trim();
console.log("Name after stripping:" , nameAfterStripping);