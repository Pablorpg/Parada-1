const dobro = (numero) => numero * 2
const triplo = (numero) => numero * 3

function dobroETriploDoNumero(fun1, fun2, num){
    return console.log(`O dobro do ${num} é ${fun1(num)} e o triplo ${fun2(num)}`)
}

dobroETriploDoNumero(dobro, triplo, 5)
