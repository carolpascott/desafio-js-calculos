let number1 = Number(prompt("Digite o primeiro número: "))
let number2 = Number(prompt("Digite o segundo número: ")) 

alert(`Os números escolhidos foram: ${number1} e ${number2}

A soma dos números é: ${number1 + number2}
A subtração dos números é: ${number1 - number2}
A multiplicação dos números é: ${number1 * number2}
A divisão dos números é: ${(number1 / number2).toFixed(2)}
O resto da divisão dos números é: ${number1 % number2}

A soma dos números é ${((number1 + number2) % 2) ? "ímpar" : "par"}
Os números inseridos são ${(number1 == number2) ? "iguais" : "diferentes"}
`)
