function calculadora(num1, num2, operacao){
    let result;
    if(operacao === '+'){
      result = num1 + num2
    }else if(operacao === '-'){
      result = num1 - num2
    }else if(operacao === '*'){
      result = num1 * num2
    }else if(operacao === '/'){
      result = num1 / num2
    }
  
    return result
  }