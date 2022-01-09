//The nullish coalescing operator (??) is a logical operator that returns 
//its right-hand side operand when its left-hand side operand is null or 
//undefined, and otherwise returns its left-hand side operand. 

const nullValue= null;
const emptyTest = "";
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyTest ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA);
console.log(valB);
console.log(valC);

// EXAMPLE REACT

function Avatar({ user }) {
    return <img src={user.imageUrl ?? 'https://placeholder.example'} />
}