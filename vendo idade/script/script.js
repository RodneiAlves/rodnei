function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano=document.getElementById('ano')
  var res = document.getElementById('res')
  if(fano.value.lenght ==0 || fano.value>ano){
  window.alert('[erro] Confira os dados digitados no campo')
  }else{
   
     var sex=document.getElementsByName('radsex')
     var anoatual=ano-Number(fano.value)
     var genero=""
     var img = document.createElement('img')
     img.setAttribute('id','foto')

     if(sex[0].checked){
      genero='homem'
      if(anoatual >=0 && anoatual < 10){
       img.setAttribute('src','criançamasculina.png')
      }else if(anoatual < 21) {
      img.setAttribute('src',' jovemmasculino.png')
      }else if(anoatual < 45){
    img.setAttribute('src','adulto.png')
      }else{
       
        img.setAttribute('src','velhohomem.png')
      }

     }
     
     else if(sex[1].checked){
      genero='mulher'
      if(anoatual >=0 && anoatual <= 10){
        //criança
        img.setAttribute('src','criançafeminina.png')
      }else if(anoatual< 21) {
      //jovem
      img.setAttribute('src','jovemfeminina.png')
      }else if(anoatual < 45){
      //adulto
      img.setAttribute('src','adultafeminina.png')
      }else{
        //velho
        img.setAttribute('src','velhamulher.png')
      }
     }
     res.style.textAlign='center'
     res.innerHTML=`Detectamos ${genero} com idade ${anoatual} anos`
     res.appendChild(img)
    }
}