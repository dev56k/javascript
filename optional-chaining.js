//The optional chaining operator (?.) enables you to read the value of a property
//located deep within a chain of connected objects without having to check that 
//each reference in the chain is valid.

const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Expert'
    }
};

//const exampleName = adventurer?.name;     // Output: Alice
//const exampleName = adventurer.cat?.name; // Output: Expert
const exampleName = adventurer.someNonExistentMethod?.name; // Output: Undefined
console.log(exampleName);