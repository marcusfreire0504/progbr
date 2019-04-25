//criando um objeto e colocando dentro de uma variavel
var objtVariael = {
    nome: "Nidio", sobrenome: "Dolfini" 
}

console.log(objtVariael.nome)

//criando um objeto com funcao precisa de new para criar o objeto
function objtFuncao(nome, nota1, nota2) {
    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;

    this.media = function(){
        return (this.nota1 + this.nota2) / 2;
    }
}
var aluno1 = new objtFuncao("Nidio", 8 ,7);

console.log(aluno1.nome + " - " + aluno1.media())

console.log(aluno1)