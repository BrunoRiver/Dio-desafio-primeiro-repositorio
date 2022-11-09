class Pessoa{
    nome;
    idade;
//constructor usador para construir dados obrigatorios de uma instacia
    constructor (nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.aoDeNascimento = 2022 - idade;
    }

    descrever(){
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);

    }
}

const Bruno = new Pessoa('Bruno River', 28);

const Malu = new Pessoa('Maria Luzia',28);

const joao = new Pessoa('Joao River',2);


Bruno.descrever();
Malu.descrever();
joao.descrever();

console.log(Bruno);
console.log(Malu);
console.log(joao);