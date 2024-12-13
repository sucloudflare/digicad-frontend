const notas = [
    [8, 7, 9], // Notas do aluno 1
    [6, 5, 7], // Notas do aluno 2
    [10, 9, 8] // Notas do aluno 3
];

function media(matriz) {
    const medias = matriz.map(linha => {
        const soma = linha.reduce((acumulador, nota) => acumulador + nota, 0);
        return soma / linha.length; // Divide pela quantidade de provas
    });

    console.log(medias);
    return medias; // Retorna as médias se necessário
}

media(notas);
// Saída: [8, 6, 9]
