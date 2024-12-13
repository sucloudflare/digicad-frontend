function calculadora(x, y, op) {
    let resultado;

    if (op === "+") {
        resultado = x + y;
    } else if (op === "-") {
        resultado = x - y;
    } else if (op === "*") {
        resultado = x * y;
    } else if (op === "/") {
        if (y === 0) {
            console.log("Erro: Divisão por zero não é permitida.");
            return;
        }
        resultado = x / y;
    } else {
        console.log("Erro: Operação inválida. Use '+', '-', '*', ou '/'.");
        return;
    }

    console.log(`O resultado da operação "${op}" é: ${resultado}`);
    return resultado;
}

// Testes
calculadora(10, 10, "+"); // Soma: 20
calculadora(10, 10, "-"); // Subtração: 0
calculadora(10, 10, "*"); // Multiplicação: 100
calculadora(10, 10, "/"); // Divisão: 1
calculadora(10, 0, "/");  // Erro de divisão por zero
calculadora(10, 10, "^"); // Erro de operação inválida
