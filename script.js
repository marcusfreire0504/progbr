function calcmedia(){
    return (this.notas[0], this.notas[1]) /2
}

var aluno = {
    nome: "Nidio",
    notas: [7.5, 5.0 ],

    media: calcmedia,
}

console.log(aluno.nome);
console.log(aluno.media());
