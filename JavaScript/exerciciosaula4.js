class Carro{
    marca;
    cor;
    consumoMedioPorKm;
    constructor(marca, cor,consumoMedioPorKm){
this.marca = marca;
this.cor = cor;
this.consumoMedioPorKm = consumoMedioPorKm;
    }
    gastopercurso(distanciaKm,valorCombustivel){
      return  distanciaKm * this.consumoMedioPorKm* valorCombustivel;
    }

}

const voyage = new Carro('volkswagen','vermelho',1/7.5);

console.log(voyage.gastopercurso(8,4.89));