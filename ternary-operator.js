const car = {
    marca: "Tesla",
    model: "CyberTruck"
}

/*
let model;

//ES5
if(car.model) {
    model = car.model
} else {
    model = "V";
}
*/

//ES6
let model = car.model ? car.model : 'V';
console.log(model);

// Example React

function ListTask({}){
    return (
        <React.Fragment>
            {tasks.length ? (
                <ul>
                    {tasks.map}
                </ul>
            ) : (
                <div>Not found taks</div>
            )}
        </React.Fragment>
    )
}