///////////////////////////////////////////////////
/* -------- NEW ARRAY METHODS PRACTICE -------- */

const people = ['Hemi', 'Tuji', 'Keki'];

// the with method
/*
const newPeople = people.with(2, 'Edu'); // <-- returns an array
const peopleCopy = [...people];
peopleCopy[2] = 'New';

console.log('Original', people);
console.log('New', newPeople);
console.log('Copy', peopleCopy);
*/

// the toSorted method
/*
people.sort();
const sortedPeople = [...people].sort();
const toSortedPeople = people.toSorted();

console.log('Sorted', toSortedPeople);
console.log('Original', people);
*/

// the toReversed method
/*
const reversedPeople = people.toReversed();

console.log('Reversed', reversedPeople);
console.log('Original', people);
*/

// the toSpliced method
/*
people.splice(0, 1, 'Kaly'); // do NOT return new array instead it mutates the Original one

const copy = people.toSpliced(0, 2, 'New');

console.log('Original', people);
console.log('Copy', copy);
*/
