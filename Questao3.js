const numeros = [1, 2, 3, 4, 5]

function somarNumeros(arr) {
  return arr.reduce((soma, num) => soma + num, 0)
}

console.log(somarNumeros(numeros))
