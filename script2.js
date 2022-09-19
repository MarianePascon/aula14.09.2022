function soma() {
    var n1 = Number(document.getElementById("n1").value)
    var n2 = Number(document.getElementById("n2").value)
    var resultado = n1 + n2

    document.querySelector('p').innerHTML = `A soma de ${n1} e ${n2} é igual a ${resultado}`
}

function subtrair() {
    var n1 = Number(document.getElementById("n1").value)
    var n2 = Number(document.getElementById("n2").value)
    var resultado = n1 - n2

    document.querySelector('p').innerHTML = `A subtração de ${n1} e ${n2} é igual a ${resultado}`
}

function multi() {
    var n1 = Number(document.getElementById("n1").value)
    var n2 = Number(document.getElementById("n2").value)
    var resultado = n1 * n2

    document.querySelector('p').innerHTML = `A multiplicação de ${n1} e ${n2} é igual a ${resultado}`
}

function div() {
    var n1 = Number(document.getElementById("n1").value)
    var n2 = Number(document.getElementById("n2").value)
    var resultado = n1 / n2

    document.querySelector('p').innerHTML = `A divisão de ${n1} e ${n2} é igual a ${resultado}`
}