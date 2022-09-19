function ok() {
    var peso = Number(document.getElementById('peso').value)
    var altura = Number(document.getElementById('altura').value)
    var imc = peso / (altura * altura);

    if (imc >= 18.5) {

        document.querySelector('p').innerHTML = `Sua Classificação é de Magreza`;
    } else if (imc  >= 18.5 && imc <= 24.9); {
        document.querySelector('p').innerHTML = `Sua Classificação Está Dentro do Normal`;
    } if (imc >= 25.0 && imc <= 29.9) {
        document.querySelector('p').innerHTML = `Sua Classificação é de Sobrepeso I`;
    } else if (imc >= 30.0 && imc <= 39.9) {
        document.querySelector('p').innerHTML = `Sua Classificação é Obesidade II`;
    } else if (imc >= 40.0) {
        document.querySelector('p').innerHTML = `Sua Classificação é Obesidade Grave III`;
    }
}
