// forma de pagameto 1 Debito 10% desconto
                   //2 avista dinheiro ou pix 15% desconto
                   //3 em 2X preço normal sem juros  
                   //4 acima de 2X 10 % juros.

let valor = 100;
let formaDePagameto= 4;
let desconto =0;
let juros = 10;

function aplicaDesconto(valor,desconto){
return (valor -(valor * (desconto / 100)));// para desconto de 10%
}
function aplicajuros(valor,juros){
    return (valor +(valor * (juros/100)));
}

if (formaDePagameto ===1){
    console.log(aplicaDesconto(valor,desconto = 10));
}else if( formaDePagameto===2){
    console.log(aplicaDesconto(valor,desconto = 15));
} else if(formaDePagameto ===3){
    console.log(valor);
}
else{
    console.log(aplicajuros(valor,juros));
}
