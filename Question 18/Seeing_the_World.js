// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//Step 01 • Store the locations in a array. Make sure the array is not in al phabetical order.
var visitingDestinatons = [
    'Mecca',
    'Medina',
    'Bait-ul-Muqaddas',
    'Tokyo',
    'Osaka',
    'Kashmir',
];
//Step 02 • Print your array in its original order.
console.log('In original order:');
console.log(visitingDestinatons);
//Step 03 • Print your array in alphabetical order without modifying the actual list.
console.log('\nIn alphabetical order with out modifying actual list:');
console.log(__spreadArray([], visitingDestinatons, true).sort());
//Step 04 • Show that your array is still in its original order by printing it.
console.log('\nArray is still in its original order:');
console.log(visitingDestinatons);
//Step 05 • Print your array in reverse alphabetical order without changing the order of the original list.
console.log('\nIn reverse alphabetical order with out modifying actual list:');
console.log(__spreadArray([], visitingDestinatons, true).sort().reverse());
//Step 06 • Show that your array is still in its original order by printing it again.
console.log('\nArray is still in its original order again:');
console.log(visitingDestinatons);
//Step 07 • Reverse the order of your list. Print the array to show that its order has changed.
console.log('\nIn reverse order:');
visitingDestinatons.reverse();
console.log(visitingDestinatons);
//Step 08 • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('\nBack to Original order:');
visitingDestinatons.reverse();
console.log(visitingDestinatons);
//Step 09 • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('\nIn Alphabetical order:');
visitingDestinatons.sort();
console.log(visitingDestinatons);
//Step 10 • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('\nIn Reverse Alphabetical order:');
visitingDestinatons.sort().reverse();
console.log(visitingDestinatons);
