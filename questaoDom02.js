/* Questão 2: 
A potência (P) consumida por determinado aparelho eletroeletrônico é definida
pela tensão (V) multiplicada pela corrente (A). Elabore um programa que, a partir
da tensão e corrente fornecidas pelo usuário, calcule e apresente a potência.
*/

function calcularPotencia() {
    let tensao = parseFloat(document.getElementById("tensao").value);
    let corrente = parseFloat(document.getElementById("corrente").value);

    if (isNaN(tensao) || isNaN(corrente)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Calcular a potência
    let potencia = tensao * corrente;

    // Exibir o resultado na página
    document.getElementById("resultado").innerText = "Tensão (V): " + tensao + "V\n" +
                                                     "Corrente (A): " + corrente + "A\n" +
                                                     "Potência consumida: " + potencia + " Watts";
}