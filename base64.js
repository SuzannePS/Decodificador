function base64(){
    var mensagem = document.querySelector("#mensagem").value 
    var resultado =  document.querySelector("#resultado").valeu
    if(document.querySelector("#cod1").checked){
       
            var resposta = btoa(mensagem)
            resultado.value=resposta.value  
    }else if(document.querySelector("#cod2").checked) {
            var resposta = atob(mensagem)
            resultado.value=resposta.value 
    }
} 