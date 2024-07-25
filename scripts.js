let numeroUm = prompt('Digite o primeiro número')
let numeroDois = prompt('Digite o primeiro número')

numeroUm = Number(numeroUm)
numeroDois = Number(numeroDois)


const soma = numeroUm + numeroDois
const subtração = numeroUm - numeroDois
const divisão = numeroUm * numeroDois
const multiplicação = numeroUm / numeroDois
const restodiv = numeroUm % numeroDois

alert('Soma: ' + soma)
alert('Subtração: ' + subtração)
alert('Multiplicação: ' + divisão)
alert('divisão: ' + multiplicação)
alert('Resto da divisão: ' + restodiv)

if(soma % 2 == 0){
  alert('Este número é par')
}else{
  alert("Este número é impar")
}


if(numeroUm === numeroDois){
  alert('numeros são iguais')
}else{
  alert('Numeros são diferentes')
}