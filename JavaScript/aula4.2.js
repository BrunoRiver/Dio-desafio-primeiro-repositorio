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

function compararPessoas(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome} `);
    }else if (p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome} `);
    } else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}
const Bruno = new Pessoa('Bruno',27);
const Malu = new Pessoa ('Maria',28);

compararPessoas(Bruno,Malu);