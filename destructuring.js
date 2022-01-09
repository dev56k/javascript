const square = {
    x: 10,
    y: 10,
}

// ES5
function calculateArea(square) {
    return square.x * square.y
}

// ES6
function calculateArea(square) { //Sample 1
    const {x, y } = square
    return x * y
}

function calculateArea({x, y}) { //Sample 2
    return x * y
}

console.log(calculateArea(square));

/* Example REACT 

function Avatar({ username, url}) {
    return <imr src={url} alt={username} />
}
*/