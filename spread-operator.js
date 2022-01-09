const array = [1, 2, 3, 4, 5];
const otherArray = [6, 7, 8, 9, 10];

// ES5
/*
const newArray = array.concat(otherArray);
console.log(newArray);
*/

// ES6

const newArray = [...array, ...otherArray];
console.log(newArray);

const obj1 = {
    a: "a",
    b: "b",
    c: "c",
}
const obj2 = {
    d: "d",
    e: "e"
}

//ES5
/*
const newObject = Object.assign({}, obj1, obj2)
console.log(newObject);
*/

//ES6
const newObject = {...obj1, ...obj2}
console.log(newObject);

// Example React
/*
function Component ({id, name, username }) {
    return <NewComponent key={id} name={name} username={username} />
}
*/
function Component ({id, ...props}) {
    return <NewComponent key={id} {...props} />
}