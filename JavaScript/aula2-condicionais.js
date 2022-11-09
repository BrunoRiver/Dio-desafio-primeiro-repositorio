let valorEtanol = 3.50;
let valorGasolina = 4.89;
let consumoKmL = 10;
let distancia = 1780;
let tipoDeCombustivel= 'etanol';

const litrosConsumidos = distancia /consumoKmL;
console.log(litrosConsumidos);
if(tipoDeCombustivel === 'Gasolina'){
    const valorGasto = litrosConsumidos * valorGasolina;
    console.log(valorGasto.toFixed(2))
}
 else {
    const valorGasto = litrosConsumidos * valorEtanol
    console.log(valorGasto.toFixed(2))
}



