function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.ariaValueMax.length == 0|| Number(fano.value)> ano){
        window.alert('[ERRO] Verificar os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idae = ano
    }
    }
}