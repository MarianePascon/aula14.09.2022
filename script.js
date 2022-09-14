function tabuada() {
    let saida = document.getElementById('saida')
    let n = Number(document.getElementById('fnum').value)

    saida.innerHTML = `<h2 style="color: #909090;">Tabuada ${n} </h2>`
    let c = 1 
    while (c <= 10) {
        saida.innerHTML += `${n} x ${c} = <strong style="color: #ff69b4;"> ${n * c}</strong><br>`
        c++
    }
}