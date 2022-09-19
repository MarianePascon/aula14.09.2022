function abastecer() {
    var etanol = Number(document.getElementById("etanol").value)
    var gasolina = Number(document.getElementById("gasolina").value)

    var valor = etanol / gasolina

    if (valor < 0.7 )
        document.querySelector('p').innerHTML = `<h4> Abastecer com <strong>etanol</strong></h4>`
    else if (valor > 0.7 ){
        document.querySelector('p').innerHTML = `<h4>Abastecer com <strong>gasolina</strong></h4>`
    }
}