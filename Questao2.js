const palavras = ["sol", "livro", "lua", "cadeira", "mesa", "mar"]

const maiorQueTres = palavras.filter(function(maior) {
  return maior.length > 3
})

console.log(maiorQueTres)