/* let variavel = 10 / 10 ;
//let  pode ser alterado o valor 
const pi = 3.14;
//const o valor nao pode ser alterado


console.log(variavel);
// para imprimir no console */

let consumoMed = 12;
let distanciaPerc = 1780;
let valorComb = 4.80;

const calculoLitros = distanciaPerc/consumoMed;
const valorGasto=calculoLitros*valorComb;

console.log("litros de combustivel = "+ calculoLitros.toFixed(2));
console.log("valor total gasto = " +valorGasto.toFixed(2));