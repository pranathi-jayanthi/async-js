// const func = (resource) => {

//     return new Promise( (resolve, reject) => {

//          const req = new XMLHttpRequest();

//          req.addEventListener('readystatechange',() => {

//          if(req.readyState === 4 && req.status === 200){
//              const data = JSON.parse(req.responseText);
//              resolve(data);
//            }
       
//          else if(req.readyState === 4){
//              reject('error getting resource');
//            }
       
//          });
     
//          req.open('GET', resource);
//          req.send();

//     });

// };

// func('https://jsonplaceholder.typicode.com/todos/1').then(data => {
//     console.log('promise 1 resolved:', data);
//     return func('https://jsonplaceholder.typicode.com/todos/2');
// }).then(data => {
//     console.log('promise 2 resolved:', data);
//     return func('https://jsonplaceholder.typicode.com/todoss/3');
// }).then(data => {
//     console.log('promise 3 resolved:', data);
//     }).catch((err)=>{
//     console.log('promise rejected:', err);
// });

const func = async () => {
    const a = await fetch('https://jsonplaceholder.typicode.com/todos');

    if(a.status != 200){
        console.log('Error fetching data');
    }

    const b = await a.json();
    return b;
}

func()
    .then(data => console.log('resolved: ',data))
    .catch(err => console.log('rejected: ',err.message));


// fetch('https://jsonplaceholder.typicode.com/todos').then((data) => {
//     console.log("resolved... The data is: ",data);
//     return data.json();
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log("Rejected...", err);
// });