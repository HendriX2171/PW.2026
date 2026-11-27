
function calcularIMC() {

    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    if (peso == "" || altura == "" || peso <= 0 || altura <= 0) {

        document.getElementById("resultado").innerHTML =
        "Digite valores válidos!";

    } else {

        var imc = peso / (altura * altura);

        var classificacao = "";

        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        }
        else if (imc < 25) {
            classificacao = "Peso normal";
        }
        else if (imc < 30) {
            classificacao = "Sobrepeso";
        }
        else {
            classificacao = "Obesidade";
        }

        document.getElementById("resultado").innerHTML =
        "Seu IMC é: " + imc.toFixed(2) +
        "<br>Classificação: " + classificacao;

    }

}
