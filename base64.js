function base64(){
        var mensagem = document.querySelector("#mensagem").value 
        
        if(document.querySelector("#cod1").checked){
            event.preventDefault
            var resposta = btoa(mensagem)
            document.querySelector("#resultado").innerText  = resposta
        }else if(document.querySelector("#cod2").checked) {
            event.preventDefault
            var resposta = atob(mensagem)
            document.querySelector("#resultado").innerText  = resposta
        }
    } 