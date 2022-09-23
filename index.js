let dolares = 1700;
let comision1 = x => x * 0.005;
let comision2 = x => x * 0.01;
const division = (a, b)=> a / b;


const coins = [
{nombre: 'bitcoin', precio: 22000},
{nombre: 'link', precio: 5},
{nombre: 'solana', precio: 3},
{nombre: 'ether', precio: 1370},
]

const resultado1 = coins.filter((el) => el.precio > 1300 );
const resultado2 = coins.filter((el) => el.precio < 1300);

console.log(resultado1);
console.log(resultado2);

let coinAmountUno = division(resultado1 /(coins.precio * 0.005));
console.log(coinAmountUno);

let coinAmountDos = division(resultado2 /(coins.precio * 0.01));
console.log(coinAmountDos);