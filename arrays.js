
// FIND 
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//The find () method returns the value of the first element of the array
//that fulfills the supplied test function. 

const array = [ 1, 3, 4, 2 ];
const arrayB = [ "soccer", "basketball", "car", "dynamic" ];

// greater than 3
const major = x => x > 3;
console.log(array.find(major));


//SOME
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//The some () method checks if at least one element of the array meets 
//the condition implemented by the provided function.

// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));


//EVERY
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//Determines if all elements in the array satisfy a condition.

const isBelowTwenty = (currentValue) => currentValue < 20;
console.log(array.every(isBelowTwenty));


//Includes
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//The includes () method determines whether an array includes a certain element, returns true or false as appropriate.

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/every

console.log(array.includes(4));
console.log(arrayB.includes('z'));

//Map
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//The map () method creates a new array with the results of the call to the 
//indicated function applied to each of its elements.

const doubles = array.map((x) => x * 2 )
console.log(doubles);

//Filter
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//The filter () method creates a new array with all the elements that meet the condition
//implemented by the given function.

const newArray = arrayB.filter((word) => word.length>6);
console.log(newArray);


//Reduce
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//The reduce () method executes a reducer function on each element of an array, 
//returning a single value as a result.

const reducer = (previuosValue, currentvalue) => previuosValue + currentvalue;

console.log(array.reduce(reducer));