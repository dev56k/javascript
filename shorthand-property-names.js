// Shorthand property names

const firstname = "Dev";
const lastname = "56K";
const twitter = "https://twitter.com/dev56k";

// ES5
/*
const person = {
    firstname: firstname,
    lastname: lastname,
    twitter: twitter,
}
*/

// ES6
const person = {
    firstname,
    lastname,
    twitter,
}

console.log(person);


/* Example React

function Component({initialState, totalCount}) {
    const [state, setState] = useState({initialState, totalCount});
}

*/