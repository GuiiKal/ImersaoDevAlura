 //lógica para converter as temperaturas - inicio
function converterTemp() {
    var resultadoTemp = document.getElementById('resultadoTemp');
    var tempCelsius = document.getElementById('tempC').value;
    var temConversao = (tempCelsius * 1.8) + 32;
    resultadoTemp.innerHTML = "Temperatura em Fahrenheit é " + temConversao + "°F";
} //fim converte temperatura


 //lógica para fazer a média das notas - inicio
function calcMedia() {
    
    var resultado = document.getElementById('resultadoFinal');
    var nota1 = parseFloat(document.getElementById('nota1').value); //pegando os valores digitados nos inputs
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);;
    var nota4 = parseFloat(document.getElementById('nota4').value);;

    var media = (nota1 + nota2 + nota3 + nota4) / 4;
    var notaFinal = media.toFixed(1); //deixando a média com uma casa após a virgula

    //verificando se o aluno atingiu os pontos necessários para média
    if (notaFinal >= 5) {
        resultado.innerHTML = "Parabéns! Você está aprovado";
    }
    else {
        resultado.innerHTML = "Estude mais um pouco, você foi reprovado dessa vez!"
    }
    return alert("Média do aluno: " + notaFinal);
}    //fim média das notas