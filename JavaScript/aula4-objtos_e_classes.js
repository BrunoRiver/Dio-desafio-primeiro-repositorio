// criando uma classe
class Pessoa{
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}



// criar objeto Bruno 
const Bruno ={
    nome: 'Bruno River',
    idade:27,
   
     descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
     }
};
//adicionar dado
Bruno.altura = 1.73;
Bruno.cor = 'Preto';
//remover dado
delete Bruno.cor;

// acessar dados do objeto

console.log(Bruno.nome);
console.log(Bruno.idade);
console.log(Bruno);
Bruno.descrever();

// acessando dados dinamicamente
// console.log(Bruno['nome']);