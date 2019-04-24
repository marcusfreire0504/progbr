function media(nota1, nota2){
    var media = ((nota1 + nota2) /2)
    return media
}
//var resultado = media(6,7);
if(media(6,6) > 6){
    console.log("passou");
}else{
    console.log("não passou");
}
    

var atual = 5200.00;

//com R$
var f = atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

//sem R$
var f2 = atual.toLocaleString('pt-br', {minimumFractionDigits: 2});

console.log(f);
console.log(f2);