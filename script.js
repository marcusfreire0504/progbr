function aluno(nome, nota1, nota2) {
    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;

    this.media = function(){
        return (this.nota1 + this.nota2) / 2;
    }
}
var aluno1 = new aluno("Nidio", 8 ,7);

console.log(aluno1.nome + " - " + aluno1.media())