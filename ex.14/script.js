
class carregar{
constructor(){
let imagem =document.querySelector('.imsg')

let foto = document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
let segundos =data.getMinutes();
console.log(segundos)


imagem.innerHTML =`agora são ${hora}:${segundos} minutos`
if(hora >=0 && hora < 12){
    foto.src ='manhão.png'

}else if(hora >= 12 && hora <=18){
    foto.src='tarde.png'

}else{
foto.src ='noite.png'
}
}
}
let p1 =new carregar();
p1()