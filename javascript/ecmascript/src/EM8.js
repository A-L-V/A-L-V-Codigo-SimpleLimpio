import hello from "./modulo";
import hello from "./modulo";

//transformar a matriz
const data= {
    fronted: 'oscar',
    backend: 'isable',
    design: 'ana',
}

const entreis = Object.entries(data);

//transformar valores de un objeto a arreglo
const data= {
    fronted: 'oscar',
    backend: 'isable',
    design: 'ana',
}

const values = Object.values(data);

//padding, agregar elementos a se string
const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,'hi'));

//async-await 
const hello = () => {
    return new Promise((resolve,reject) =>{
        (true)
            ? setTimeout(()=> resolve('helloword'),3000)
            : reject(new Error('teseerroee'));
    });
}

const helloAsync = async() =>{ 
    const hello = await hello();
}

const another = async () => {
    try{
        const hello = await hello();
    }catch{
        console.log(error);
    }
}
