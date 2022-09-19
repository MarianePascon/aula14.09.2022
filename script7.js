function ok() {
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var n3 = Number(document.getElementById('n3').value)
    var n4 = Number(document.getElementById('n4').value)
    var n5 = Number(document.getElementById('n5').value)

    var qn1 = Math.pow(n1,2)
    var qn2 = Math.pow(n2,2)
    var qn3 = Math.pow(n3,2)
    var qn4 = Math.pow(n4,2)
    var qn5 = Math.pow(n5,2)

    document.querySelector('p').innerHTML = `<h4>O quadrado de ${n1} é ${qn1}<br>
    O quadrado de ${n2} é ${qn2}<br>
    O quadrado de ${n3} é ${qn3}<br>
    O quadrado de ${n4} é ${qn4}<br>
    O quadrado de ${n5} é ${qn5}<br>
    </h4>`
}