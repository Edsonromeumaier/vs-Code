
    function carregar(){
        var msg = window.document.getElementById('msg')
        var img = window.document.getElementById('imagem')
        var data = new Date()
        var hora = data.getHours()
        var munito = data.getMinutes()
        
        msg.innerHTML = `agora sao ${hora}:${minuto} horas.`  
        if(hora >= 0 && hora < 12) {
            //Manhã / bom dia / schimmimney
             img.src = "imagens/manhã.png"
        } else if(hora >= 12 && hora <18){
            //Boa tarde// Astalátardinha
            img.src = "imagens/tarde.png"
            document.body.style.background = '#e2cd9f'
        } else{ 
            //Boa Noite/aha ha haahhahhh
            img.src = "imagens/niute.png"
            document.body.style.background = '#515154'
                    }
        
        }