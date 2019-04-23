var idade = 17;

if(idade){
    console.log("pode");
    console.log("qual seu pedido");
}
else{
    console.log("não pode");
}

var numero = 10;

for (var vez = 0; vez <= numero; vez++){
    console.log("volta no for " + vez);
}
console.log("acabou for");

var alunos = new Array("nidio", "joão", "herbert");

for(var aluno in alunos)
    console.log(aluno);
for(var aluno of alunos)
    console.log(aluno);

