



interface IUser {
    name : string;
    age : number | string;
}

let me : IUser = {name : 'coren', age : 31}
let you : IUser = {name : 'leap day william', age: 'seven'}

console.log(`Hi my name is ${me.name} and I am ${me.age} years old.`)
console.log(`Hi my name is ${you.name} and I am ${you.age} years old.`)
