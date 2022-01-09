const data = [{
    id: 1,
    title: 'Iron Man',
    year: 2008,
    id: 2,
    title: 'Sipderman: Homecoming',
    year: 2017,
    id: 3,
    title: 'Avengers: Endgame',
    year: 2019
}];
//const data = [];
const getData = () => {
    return new Promise((resolve, reject) => {
        if (data.length === 0 ){
            reject(new Error("Not found data"));
        }
        setTimeout(() => {
            resolve(data);
        }, 1500);
    });
}
//getData().then((data) => console.log(data));

async function fetchingData() {
    try {
        const dataFetch = await getData();
        console.log(dataFetch);
    } catch (err){
        console.log(err.message);
    }

}
fetchingData();
