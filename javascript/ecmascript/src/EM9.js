//Spread Operator
const obj = {
    name: 'oscar',
    age: 32,
    ciudad: 'PE'
}
let { name, ...all } = obj;
console.log(name, all);

//Porpagation Properties

const person = {
    name: 'Oscar',
    age: 32
};

const personInformation = {
    ...person,
    country: 'MX'
};
console.log(`personInformation: `, personInformation);


//Promise Finally
const helloWorld = () => {
    return new Promise((resolve, reject) => {
      true
        ? setTimeout(() => {
            resolve('Hello World!');
          }, 3000)
        : reject(new Error('Test Error'));
    });
  };
  
helloWorld()
    .then(result => console.log('result -> ', result))
    .catch(err => console.log('err -> ', err))
    .finally(() => console.log('finalizó'));

//regex Data 
const regex = /([0-9]{4})-([09]{2}-([0-9]{2}))/
const match = regex.exec('2018-04-00');
const year = match[1];
const mounth = match[2];
const day = match[3];
