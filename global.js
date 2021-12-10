function btn(){
    var botao = document.querySelector(".btnResultado")
    var opcoes = document.querySelector("#opcoes")

    botao.addEventListener("click", function(event){
        // event.preventDefault();
        if(opcoes.value=="base"){
            base64()
        }else {
            validaRotacao()
        }
    })
}