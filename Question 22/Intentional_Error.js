// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
//Function to describe laptop configuration:
function laptops(company, generation, storage) {
    return { company: company, generation: generation, storage: storage
    };
}
//Create an array of laptops:
var accessLaptop = [
    laptops('Linex', '13th Gen', '16GB'),
    laptops('Mac', '13th Gen', '64GB'),
    laptops('Dell', '12th Gen', '32GB'),
    laptops('HP', '11th', '8GB')
];
//Access an invalid index:
var invalidIndex = 10;
//Trying to access an invalid index:
console.log("Laptop at index ".concat(invalidIndex, ":"), accessLaptop[invalidIndex]);
//Accessing a valid index:
accessLaptop.forEach(function (laptop) {
    console.log("\nCompany: ".concat(laptop.company, ", \nGeneration: ").concat(laptop.generation, ", \nStorage: ").concat(laptop.storage));
});
