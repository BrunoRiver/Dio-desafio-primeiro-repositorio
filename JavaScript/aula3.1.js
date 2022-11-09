function escreveNome(nome){
    return ('Meu nome é '+ nome);
}

function verificarIdade(idade){
    if(idade>=18){
        console.log(escreveNome('Bruno ') +'Sou maior de Idade')
    } else{
        console.log(escreveNome('Bruno ') +'Sou menor de idade')
    }
};
verificarIdade(17);