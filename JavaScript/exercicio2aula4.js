class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc(){
       return this.peso / (this.altura * this.altura);
    }
    classificarImc(){
        const imc = this.calcularImc();
        if(imc< 18.5){
            return(' Abaixo do peso');
        } else if(imc >= 18.5 && imc<25){
            return(' Peso Normal');
        }else if(imc >= 25 && imc <30){
            return(' acima do Peso');
        }else if(imc >= 30 && imc < 40){
            return(' obeso');
        }else{
            return(' obesidade grave');
        }
    }
}

const Bruno = new Pessoa('Bruno',63,1.73);
const Malu = new Pessoa('maria',76,1.54);

console.log(Bruno.calcularImc().toFixed(2) + Bruno.classificarImc());
console.log(Malu.calcularImc().toFixed(2) + Malu.classificarImc());