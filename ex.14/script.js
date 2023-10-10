
function carregar(){

var imagem =document.getElementById('msg')
var foto = document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 7

imagem.innerHTML =`agora são ${hora} horas`
if(hora >=0 && hora < 12){
    foto.src ='manhão.png'

}else if(hora >= 12 && hora <=18){
    foto.src='tarde.png'

}else{
foto.src ='noite.png'
}

}