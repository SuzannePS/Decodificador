function validaRotacao(){
    var passo = document.querySelector("#passo").value;
     passo%= 26;
    var radioDecodificar = document.querySelector("#cod2");
    if (radioDecodificar.checked) {
        passo *= (-1);
    }
    cesar(passo);
}

function cesar(passo) {

    var mensagemInicial = document.querySelector("#mensagem").value;
    var resultadoCript = document.querySelector("#resultado");
    var troca = "";
    resultadoCript.innerHTML = "";

    for (var i = 0; i < mensagemInicial.length; i++) {
        troca = mensagemInicial.charCodeAt(i);

        // Letras Maiúsculas
        if (troca >= 65 && troca <= 90) {
            troca += passo;
            if (troca > 90) {
                troca -= 26;
            } else if (troca < 65) {
                troca += 26;
            }
        }

        // Letras Minúsculas
        if (troca >= 97 && troca <= 122) {
            troca += passo;
            if (troca > 122) {
                troca -= 26;
            } else if (troca < 97) {
                troca += 26;
            }
        }

        resultadoCript.innerHTML += String.fromCharCode(troca);
    }
}