var botao = document.querySelector(".resultado")
var opcoes = document.querySelector("#opcoes").value
botao.addEventListener("click",function(event){
    event.preventDefault();
    if(opcoes=="base"){
        base64()
    }else{
        cesar(passo)
    }
})