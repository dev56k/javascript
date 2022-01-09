// ES5
function sum(a, b) {
    if(a === undefined || b === undefined) {
        console.log('you must enter 2 numerical values');
        return;
    }
    return a + b;
}
sum(3,2);

// ES6
function sum(a = 0, b = 0) {
    return a + b;
}

console.log(sum(3,2));